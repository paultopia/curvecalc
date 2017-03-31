(ns curvecalc.upload.validate
  (:require [curvecalc.calc :as c]
            [curvecalc.stringstuff :refer [range-stringer dig1]]))

(defn choose-distro [numgrades]
  (if (>= numgrades 30)
    :complex
    :simple))

(defn sorted-gradelist [column]
  (into [] (sort (map #(js/parseFloat %) (remove #(js/isNaN (js/parseFloat %)) column)))))

;; finding medians

(defn find-median
"sorted numeric list -> vector of length 1 or 2 w median(s). nil for length below 2. needs testing for 2, 3."
  [sgl]
  (let [c (count sgl)]
    (if (< c 2)
      nil
      (if (even? c)
        [(nth sgl (- (/ c 2) 1)) (nth sgl (/ c 2))]
        [(nth sgl (quot c 2))]))))

;; I should really be using multimethods for this sort of nonsense.
(defn median-valid? [median c distro-key]
  (if (= distro-key :simple)
    (cond
      (= c 1) (>= 3.4 (first median) 3.2)
      (= c 2) (>= 3.4 (first median) (second median) 3.2))
    (cond
      (= c 1) (= (first median) 3.3)
      (= c 2) (and
               (>= (first median) 3.2)
               (>= 3.4 (second median))))))

;; Complex assumes a valid range is one that contains 3.3, i.e., it's ok to have 3.2-3.4, 3.3-3.4, 3.2-3.3 or 3.3-3.3

(defn report-median
"in: grade list, sorted, non-grades stripped.
  out: string that reports whether the median is compliant or not. "
  [sgl]
  (let [median (find-median sgl)
        c (count median)
        distro-key (choose-distro (count sgl))
        isvalid (median-valid? median c distro-key)]
    {:valid isvalid
     :details
     (cond
       (= c 1) (str "Median: " (first median))
       (= c 2) (str "Median: " (first median) "-" (second median))
       :else nil)}))


;; test against max and min

(defn find-bucket [grade]
  (cond
    (>= 4.3 grade 4.2) :A+
    (>= 4.1 grade 3.9) :A
    (>= 3.8 grade 3.6) :A-
    (>= 3.5 grade 3.3) :B+
    (>= 3.2 grade 3.0) :B
    (>= 2.9 grade 2.7) :B-
    (>= 2.6 grade 2.4) :C+
    (>= 2.3 grade) :C-F))
;; I need to figure out how to construct this from distros.  lots of ugly repetition here.
;; also has no error-handling for out-of-range grades.

(defn bucketizer [column]
    (frequencies (mapv find-bucket column)))

(defn combine-buckets [numgrades buckets]
  (if (>= numgrades 30)
    buckets
    {:A+_to_A- (+ (:A+ buckets) (:A buckets) (:A- buckets))
     :B+ (:B+ buckets)
     :B (:B buckets)
     :B-_to_F (+ (:B- buckets) (:C+ buckets) (:C-F buckets))
     }))


(defn validate-one-grade [distro buckets grade-key]
  (let [subdistro (grade-key distro)
        numingrade (grade-key buckets)
        minimum (dig1 (:min subdistro))
        maximum (dig1 (:max subdistro))
        label (str (name grade-key) ": " (range-stringer subdistro))]
    (cond
      (>= maximum numingrade minimum)
      {grade-key {:evaluation :valid :fault nil :label label
                  :maximum maximum :minimum minimum :numingrade numingrade}}
      (> numingrade maximum)
      {grade-key {:evaluation :invalid :fault :high :label label
                  :maximum maximum :minimum minimum :numingrade numingrade}}
      :else
      {grade-key {:evaluation :invalid :fault :low :label label
                  :minimum minimum :maximum maximum :numingrade numingrade}})))

;; names are inconsistent here --- numgrades in this ns, num-students elsewhere. fix this.
(defn validate-grades [column numgrades distro-key keyorder]
  (let [distro (c/permissible-distributions numgrades distro-key)
        buckets (combine-buckets numgrades (bucketizer column))
        validator (partial validate-one-grade distro buckets)]
    (apply merge (map #(validator %) keyorder))))


;; all I need to do now is integrate report in ui (and make tests...prob using devcards.)
;; oh, also and sort out rounding of non-ints with an option for people to choose.

(defn buckets-valid? [keyorder validation]
  (let [bools (mapv #(:evaluation (% validation)) keyorder)]
    (every? #(= % :valid) bools)))

(defn report-builder [validation grade-key]
  (let [subscore (grade-key validation)
        {:keys [label evaluation fault maximum minimum numingrade]} subscore]
    (cond
      (= evaluation :valid)
      [:p (str label ": Valid! Max: " maximum " Min: " minimum " Number: " numingrade)]
      :else [:p (str label ": INVALID! :-( Max: " maximum " Min: " minimum " Number: " numingrade)]
      )))

(defn report-validation [sgl]
  (let [numgrades (count sgl)
        distro-key (choose-distro numgrades)
        keyorder (c/order-of-keys distro-key)
        validation (validate-grades sgl numgrades distro-key keyorder)
        reporter (partial report-builder validation)
        isvalid (buckets-valid? keyorder validation)]
    {:valid isvalid :details (mapv reporter keyorder)}))

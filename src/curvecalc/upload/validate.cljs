(ns curvecalc.upload.validate
  (:require [curvecalc.calc :as c]
            [curvecalc.stringstuff :refer [range-stringer dig1]]))



(defn sorted-gradelist [column]
  (into [] (sort (map #(js/parseFloat %) (remove #(js/isNaN (js/parseFloat %)) column)))))

;; finding medians

(defn find-median
"sorted numeric list -> string. undefined for length below 2. needs testing for 2, 3."
  [sgl]
  (let [c (count sgl)]
    (if (< c 2)
      nil
      (if (even? c)
        [(nth sgl (- (/ c 2) 1)) (nth sgl (/ c 2))]
        [(nth sgl (quot c 2))]))))

(defn report-median [sgl]
  (let [median (find-median sgl)
        c (count median)]
    (cond
      (= c 1) (str "Median: " (first median))
      (= c 2) (str "Median: " (first median) "-" (second median))
      :else nil)))


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

(defn choose-distro [numgrades]
  (if (>= numgrades 30)
    :complex
    :simple))

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


(defn report-builder [validation grade-key]
  (let [subscore (grade-key validation)
        {:keys [label evaluation fault maximum minimum numingrade]} subscore]
    (cond
      (= evaluation :valid)
      (str label ": Valid! Max: " maximum " Min: " minimum " Number: " numingrade)
      :else (str label ": INVALID! :-( Max: " maximum " Min: " minimum " Number: " numingrade)
      )))

(defn report-validation [sgl]
  (let [numgrades (count sgl)
        distro-key (choose-distro numgrades)
        keyorder (c/order-of-keys distro-key)
        validation (validate-grades sgl numgrades distro-key keyorder)
        reporter (partial report-builder validation)]
    (mapv reporter keyorder)))

(defn print-validation [sgl]
  (apply str (interpose "\n" (report-validation sgl))))

;; micro-test.  need a test suite here.
(.log js/console (print-validation [3.1 3.4 3.3 3.0 4.3 2.9 4.1 2.3 2.1 3.0 1.0 4.0 3.8]))


(defn report-buckets [column]
  (str (combine-buckets 30 (bucketizer column))))

;; process

;; (defn process-gradelist0 [column]
;;   (do
;;     (.log js/console (report-buckets column))
;;     (-> column sorted-gradelist report-median)))

(defn process-gradelist [column]
  (let [sgl (sorted-gradelist column)]
    (str (report-median sgl)
         "/n"
         (print-validation sgl))))

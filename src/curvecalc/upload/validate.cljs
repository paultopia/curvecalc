(ns curvecalc.upload.validate
  (:require [curvecalc.calc :as c]))



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
        minimum (:min subdistro)
        maximum (:max subdistro)]
    (cond
      (>= maximum numingrade minimum)
      {grade-key {:evaluation :valid :info nil}}
      (> numingrade maximum)
      {grade-key {:evaluation :invalid :info {:fault :high :max maximum :numingrade numingrade}}}
      :else
      {grade-key {:evaluation :invalid :info {:fault :low :min minimum :numingrade numingrade}}})))

;; names are inconsistent here --- numgrades in this ns, num-students elsewhere. fix this.
(defn validate-grades [column]
  (let [numgrades (count column) ; MUST BE done AFTER stripping non-grade entries, like header
        distro-key (choose-distro numgrades)
        distro (c/permissible-distributions numgrades distro-key)
        keyorder (c/order-of-keys distro-key)
        buckets (combine-buckets numgrades (bucketizer column))
        validator (partial validate-one-grade distro buckets)]
    (apply merge (map #(validator %) keyorder))))

;; micro-test.  need a test suite here.
(.log js/console (str (validate-grades [3.1 3.4 3.3 3.0 4.3 2.9 4.1 2.3 2.1 3.0 1.0 4.0 3.8])))

;; all I need to do now is report (and make tests...prob using devcards.)

(defn report-buckets [column]
  (str (combine-buckets 30 (bucketizer column))))

;; process

(defn process-gradelist [column]
  (do
    (.log js/console (report-buckets column))
    (-> column sorted-gradelist report-median)))

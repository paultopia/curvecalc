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

;; now I have a map of grades to counts.  this is great.  Next steps:
;; 1.  Figure out if we're in >=30 or <30, and combine map elements if latter
;; 2.  Generate distro based on number of grades.
;; 3.  Map over the order-of-keys vector and, for each key, test if number is
;;     (>= max number min) of (:range :key distro). Or just report the difference
;; 4.  Take generated vector and report.

(defn report-buckets [column]
  (str (bucketizer column)))

;; process

(defn process-gradelist [column]
  (do
    (.log js/console (report-buckets column))
    (-> column sorted-gradelist report-median)))

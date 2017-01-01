(ns curvecalc.upload.validate)

(defn sorted-gradelist [column]
  (into [] (sort (map #(js/parseFloat %) (remove #(js/isNaN (js/parseFloat %)) column)))))

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


(defn process-gradelist [column]
  (-> column sorted-gradelist report-median))

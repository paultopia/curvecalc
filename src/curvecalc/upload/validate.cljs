(ns curvecalc.upload.validate)

(defn sorted-gradelist [column]
  (into [] (sort (map #(js/parseFloat %) (remove #(js/isNaN (js/parseFloat %)) column)))))

(defn find-median
"sorted numeric list -> string"
  [sgl]
  (let [c (count sgl)]
  (if (even? c)
    (str "median: " (nth sgl (- (/ c 2) 1)) "-" (nth sgl (/ c 2)))
    (str "median: " (nth sgl (quot c 2)))
    )))

(ns curvecalc.upload.validate)

(defn sorted-gradelist [column]
  (into [] (sort (map #(js/parseFloat %) (remove #(js/isNaN (js/parseFloat %)) column)))))

(defn find-median
"sorted numeric list -> string"
  [sgl]
  (let [c (count sgl)]
    (if (< c 2)
"insufficient grades to determine median"
     (if (even? c)
    (str "median: " (nth sgl (- (/ c 2) 1)) "-" (nth sgl (/ c 2)))
    (str "median: " (nth sgl (quot c 2)))
    )
   )
  ))

(defn process-gradelist [column]
  (-> column sorted-gradelist find-median))

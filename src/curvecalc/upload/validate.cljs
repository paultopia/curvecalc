(ns curvecalc.upload.validate)

(defn sorted-gradelist [column]
  (into [] (sort (map #(js/parseFloat %) (remove #(js/isNaN (js/parseFloat %)) column)))))

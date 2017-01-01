(ns curvecalc.upload.display
  "reagent component to request validation input and display results."
  (:require [curvecalc.upload.validate :as v]
            [curvecalc.stringstuff :as s]))

(defn median-component [sgl]
  (let [{:keys [valid details]} (v/report-median sgl)]
    (if (< 1 (count sgl))
      [:p (str (if valid "Median is compliant. " "Median is NOT compliant. ") details)]
      [:p " "])
    ))

(defn buckets-component [sgl]
  [:p "bar"])

(defn validation-component [raw-column]
  (let [sgl (v/sorted-gradelist raw-column)]
    [:div
     [median-component sgl]]))


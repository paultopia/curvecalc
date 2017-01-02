(ns curvecalc.upload.display
  "components for validation side."
  (:require [curvecalc.upload.validate :as v]
            [curvecalc.stringstuff :as s]))

(defn median-component [sgl]
  (let [{:keys [valid details]} (v/report-median sgl)]
    (if (< 1 (count sgl))
      [:p (str (if valid "Median is compliant. " "Median is NOT compliant. ") details)]
      [:p " "])
    ))

(defn buckets-component [sgl]
  (let [{:keys [valid details]} (v/report-validation sgl)]
(if (< 1 (count sgl))
    [:div
     [:p (str (if valid "Grade distribution in buckets is compliant. Details: " "Grade distribution in buckets is NOT compliant. Details: "))]
     (into [] (concat [:div] details))]
    nil)))

(defn validation-component [raw-column]
  (let [sgl (v/sorted-gradelist raw-column)]
    [:div
     [median-component sgl]]))

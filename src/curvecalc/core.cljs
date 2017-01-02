(ns curvecalc.core
  (:require [reagent.core :refer [render]]
            [curvecalc.calcview :refer [calculation-page]]
            [curvecalc.upload.core :refer [validation-page]]))



(defn home-page []
  [:div.container
   [:div.row
    [:div.twelve.columns
     [:h3 "Iowa Law Grade Curve Calculator"]
     [:p "Do you want to calculate the number of students in each grade bucket for a given class size, or do you want to check an existing distribution of grades against the mandatory curve?"]
     ]]
   [:div.row
    [:div.one.column " "]
    [:div.four.columns
     [:p
      [:button.button-primary
       {:on-click #(render [calculation-page] (.getElementById js/document "app"))}
       "calculate curve"
       ]]]
    [:div.four.columns
     [:p
      [:button.button-primary
       {:on-click #(render [validation-page] (.getElementById js/document "app"))}
       "validate grades"
       ]]]
    [:div.three.columns " "]
    ]])

;; -------------------------
;; Initialization boilerplate

(defn mount-root []
  (render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

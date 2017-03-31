(ns curvecalc.footer
  "just a footer that appears twice")

(defn footer-component [func label]
  [:div.row
   ;; [:div.twelve.columns
   ;;  [:hr]]
   [:div.row {:style {:border-top "thin solid #000000" :padding-top "7px"}}
    [:div.three.columns
     [:button.button-primary {:on-click #(func)} label]]
    [:div.nine.columns
     [:p "In case you're really curious, you can see "
      [:a {:href "https://github.com/paultopia/curvecalc"} "the source code for this stuff."] [:br] " Source for requirements: " [:a {:href "https://law.uiowa.edu/sites/law.uiowa.edu/files/wysiwyg_uploads/student_handbook-16-17.pdf"} "2016-7 Student handbook."]]]
    ]])

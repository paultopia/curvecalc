(ns curvecalc.core
  (:require [reagent.core :refer [render]]
            [curvecalc.state :refer [numstuds distribution]]
            [cljs.pprint :refer [cl-format]]
            [curvecalc.upload.core :refer [file-upload-component]]
            [curvecalc.calc :refer [order-of-keys simple-distributions complex-distributions distroset permissible-distributions]]))


(defn input-field [val-atom]
  [:input {:type "text"
           :value @val-atom
           :on-change #(reset! val-atom (-> % .-target .-value))}])

(defn dig2 [somenum]
  (cl-format nil "~,2f" somenum))

(defn dig1 [somenum]
  (cl-format nil "~,1f" somenum))

(defn range-stringer [grade]
  (let [r (:range grade)
        l (dig1 (:low r))
        h (dig1 (:high r))]
    (str l " - " h)))

(defn row-component [grange distros distro-key]
  (let [this-grade (grange distros)]
      [:tr {:key (random-uuid)}
       [:td (str (name grange))]
       [:td (range-stringer this-grade)]
       (if (= distro-key :complex) [:td (dig2 (:norm this-grade))] nil)
       [:td (dig2 (:min this-grade))]
       [:td (dig2 (:max this-grade))]]))

(defn body-component [num-students distro-key]
  (let [distros (permissible-distributions num-students distro-key)
        rows (for [x (order-of-keys distro-key)] (row-component x distros distro-key))]
    [:tbody rows]))

(defn table-component [num-students distro-key]
  [:table.u-full-width
   [:thead
    [:tr
     [:th "Grade"]
     [:th "Score Range"]
     (if (= distro-key :complex ) [:th "Norm"] nil)
     [:th "Min"]
     [:th "Max"]]]
   [body-component num-students distro-key]])


(defn explainer-component [distro-key]
  (if (= distro-key :complex)
    [:p "This table displays the curve that applies to classes of 30 students or more, per Student Handbook II.B.2. If you want to display the curve that applies to classes under 30 students (Handbook II.B.3), click the button below."]
    [:p "This table displays the curve that applies to classes under 30 students, per Student Handbook II.B.3. If you want to display the curve that applies to classes of 30 students or greater (Handbook II.B.2), click the button below."]
    ))

;; -------------------------
;; Views

(defn home-page []
  [:div.container [:h3 "Iowa Law Grade Curve Calculator"]
   [:p "Enter the number of students: " [input-field numstuds]]
   [:div [table-component @numstuds @distribution]]
[explainer-component @distribution]
   [:p [:button {:on-click #(swap! distribution distroset @distribution)} "Swap distributions."] ]
   [:hr]
   [:h4 "Experimental Stuff"]
   [file-upload-component]
   [:hr]
   [:p "In case you're really curious, you can see "
    [:a {:href "https://github.com/paultopia/curvecalc"} "the source code for this stuff."] " Source for requirements: " [:a {:href "https://law.uiowa.edu/sites/law.uiowa.edu/files/wysiwyg_uploads/student_handbook-16-17.pdf"} "2016-7 Student handbook."]]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

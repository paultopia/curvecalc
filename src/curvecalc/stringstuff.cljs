(ns curvecalc.stringstuff
  (:require [cljs.pprint :refer [cl-format]]))

(defn dig2 [somenum]
  (cl-format nil "~,2f" somenum))

(defn dig1 [somenum]
  (cl-format nil "~,1f" somenum))


(defn range-stringer [grade]
  (let [r (:range grade)
        l (dig1 (:low r))
        h (dig1 (:high r))]
    (str l " - " h)))


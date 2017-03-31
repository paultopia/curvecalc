(ns curvecalc.autocurve.manipulations
  (:require [clojure.math.combinatorics :refer [subsets]]))

;; functionality to get ordered partitions. See https://groups.google.com/forum/m/#!topic/clojure/DoEMT45VpAo

(defn breaks->partition 
  ([v brks]
   (breaks->partition 0 [] v brks))
  ([start pars v brks]
   (if (empty? brks)
     (conj pars (subvec v start (count v)))
     (let [this-part (subvec v start (first brks))]
       (recur (first brks) (conj pars this-part) v (rest brks))))))
(defn min-parts [min splits]
  (>= (count splits) (- min 1)))

(defn max-parts [max splits]
  (<= (count splits) (- max 1)))

(defn ordered-partitions [v & {:keys [max min]}]
  (let 
      [s (subsets (range 1 (count v)))
       fs (cond
            (and max min) 
            (filter 
             (partial max-parts max) 
             (filter (partial min-parts min) s))
            max (filter (partial max-parts max) s)
            min (filter (partial min-parts min) s)
            :else s)]
    (map (partial breaks->partition v) fs)))

;; utility functions to get column into tidy order for validating partitions downward from a+

(defn descending-order [v]
  (sort #(compare %2 %1) v))

;; actual generation of partitions

(defn generate-partitions [column distro-key]
  (let [v (descending-order (distinct column))]
    (if (= distro-key :simple)
      (ordered-partitions v :min 4 :max 4)
      (ordered-partitions v :min 6 :max 8))))

;; tested up to this point: successfully generates partitions in descending order.

(def test-data [4.2, 4.0, 3.9, 3.9, 3.9, 3.8, 3.8, 3.7, 2.9, 2.9, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.6, 2.6, 3.4, 3.4, 3.4, 3.3, 3.3, 3.3, 3.3, 3.3, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2, 3.1, 3.1, 3.1, 3.0, 3.0, 3.0, 2.9, 2.9, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.6, 2.6, 2.4, 2.4, 2.3]) ; noncompliant.


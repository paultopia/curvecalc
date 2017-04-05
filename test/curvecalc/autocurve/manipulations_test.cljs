(ns curvecalc.autocurve.manipulations-test
  (:require [curvecalc.autocurve.manipulations :as m]
            [curvecalc.autocurve.filtering :as f]
            [cljs.test :as t :refer-macros [is testing]]
            [devcards.core :as dc :refer-macros [defcard deftest defcard-rg]]
            [reagent.core :as r]))

(defcard nb "This is going to have the test material for both the partitioning and the testing so I don't have to shove too much data around.")

(def test-data [4.2, 4.0, 3.9, 3.9, 3.9, 3.8, 3.8, 3.7, 2.9, 2.9, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.6, 2.6, 3.4, 3.4, 3.4, 3.3, 3.3, 3.3, 3.3, 3.3, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2, 3.1, 3.1, 3.1, 3.0, 3.0, 3.0, 2.9, 2.9, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.6, 2.6, 2.4, 2.4, 2.3]) ; noncompliant.

(def sample-partition (take 5 (shuffle (m/generate-partitions test-data :simple))))

(defcard simple-partition sample-partition)

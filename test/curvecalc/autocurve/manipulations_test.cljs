(ns curvecalc.autocurve.manipulations-test
  (:require [curvecalc.autocurve.manipulations :as m]
            [cljs.test :as t :refer-macros [is testing]]
            [devcards.core :as dc :refer-macros [defcard deftest defcard-rg]]
            [reagent.core :as r]))

(defcard simple-partition (first (m/generate-partitions m/test-data :simple)))

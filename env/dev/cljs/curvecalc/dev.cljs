(ns ^:figwheel-no-load curvecalc.dev
  (:require [curvecalc.core :as core]
            [curvecalc.core-test]
            [figwheel.client :as figwheel :include-macros true]))

(enable-console-print!)

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :jsload-callback core/mount-root)

(core/init!)

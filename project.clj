(defproject curvecalc "0.1.0-SNAPSHOT"
  :description "lazy as sin iowa law grade curve calculator"
  :url "https://github.com/paultopia/curvecalc"
  :license {:name "WTFPL"
            :url "http://www.wtfpl.net/txt/COPYING/"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.229" :scope "provided"]
                 [org.clojure/math.combinatorics "0.1.4"]
                 [reagent "0.6.0"]
                 [devcards "0.2.2"]
                 [frankiesardo/linked "1.2.9"]
                 [org.clojure/core.async "0.2.395"]]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.8"]]

  :min-lein-version "2.7.1"

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["public"]

  :figwheel {:http-server-root "public"
             :nrepl-port 7002
             :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
             :css-dirs ["public/css"]}

  :cljsbuild {:builds {:app
                       {:source-paths ["src" "env/dev/cljs"]
                        :compiler
                        {:main "curvecalc.dev"
                         :output-to "public/js/app.js"
                         :output-dir "public/js/out"
                         :asset-path   "js/out"
                         :source-map true
                         :optimizations :none
                         :pretty-print  true}}
                       :devcards
                       {:source-paths ["src" "env/dev/cljs" "test"]
                        :figwheel
                        {:devcards true}
                        :compiler
                        {:main       "curvecalc.dev"
                         :asset-path "js/devcards_out"
                         :output-to  "public/js/devcards.js"
                         :output-dir "public/js/devcards_out"
                         :optimizations :none
                         :source-map-timestamp true}}
                       :release
                       {:source-paths ["src" "env/prod/cljs"]
                        :compiler
                        {:output-to "public/js/app.js"
                         :output-dir "public/js/release"
                         :asset-path   "js/out"
                         :optimizations :advanced
                         :pretty-print false}}}}

  :aliases {"release" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.4-5"]
                                  [org.clojure/tools.nrepl "0.2.12"]
                                  [com.cemerick/piggieback "0.2.2-SNAPSHOT"]]}})

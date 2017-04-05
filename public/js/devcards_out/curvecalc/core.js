// Compiled by ClojureScript 1.9.229 {}
goog.provide('curvecalc.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('curvecalc.calcview');
goog.require('curvecalc.upload.core');
goog.require('curvecalc.autocurve.manipulations');
curvecalc.core.load_calculation = (function curvecalc$core$load_calculation(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.calcview.calculation_page], null),document.getElementById("app"));
});
curvecalc.core.load_validation = (function curvecalc$core$load_validation(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.upload.core.validation_page], null),document.getElementById("app"));
});
curvecalc.core.home_page = (function curvecalc$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twelve.columns","div.twelve.columns",2096822014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Iowa Law Grade Curve Calculator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Do you want to calculate the number of students in each grade bucket for a given class size, or do you want to check an existing distribution of grades against the mandatory curve?"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.one.column","div.one.column",988954922)," "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.four.columns","div.four.columns",-1179015237),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-primary","button.button-primary",-1646576108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),curvecalc.core.load_calculation], null),"calculate curve"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.four.columns","div.four.columns",-1179015237),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-primary","button.button-primary",-1646576108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),curvecalc.core.load_validation], null),"validate grades"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.three.columns","div.three.columns",617883120)," "], null)], null)], null);
});
curvecalc.core.mount_root = (function curvecalc$core$mount_root(){
var temp__4657__auto__ = document.getElementById("app");
if(cljs.core.truth_(temp__4657__auto__)){
var app = temp__4657__auto__;
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.core.home_page], null),app);
} else {
return null;
}
});
curvecalc.core.init_BANG_ = (function curvecalc$core$init_BANG_(){
return curvecalc.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1491430805209
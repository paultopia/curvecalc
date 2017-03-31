// Compiled by ClojureScript 1.9.229 {}
goog.provide('curvecalc.upload.display');
goog.require('cljs.core');
goog.require('curvecalc.upload.validate');
goog.require('curvecalc.stringstuff');
curvecalc.upload.display.median_component = (function curvecalc$upload$display$median_component(sgl){
var map__37752 = curvecalc.upload.validate.report_median.call(null,sgl);
var map__37752__$1 = ((((!((map__37752 == null)))?((((map__37752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37752):map__37752);
var valid = cljs.core.get.call(null,map__37752__$1,new cljs.core.Keyword(null,"valid","valid",155614240));
var details = cljs.core.get.call(null,map__37752__$1,new cljs.core.Keyword(null,"details","details",1956795411));
if(((1) < cljs.core.count.call(null,sgl))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str((cljs.core.truth_(valid)?"Median is compliant. ":"Median is NOT compliant. ")),cljs.core.str(details)].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)," "], null);
}
});
curvecalc.upload.display.buckets_component = (function curvecalc$upload$display$buckets_component(sgl){
var map__37756 = curvecalc.upload.validate.report_validation.call(null,sgl);
var map__37756__$1 = ((((!((map__37756 == null)))?((((map__37756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37756):map__37756);
var valid = cljs.core.get.call(null,map__37756__$1,new cljs.core.Keyword(null,"valid","valid",155614240));
var details = cljs.core.get.call(null,map__37756__$1,new cljs.core.Keyword(null,"details","details",1956795411));
if(((1) < cljs.core.count.call(null,sgl))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str((cljs.core.truth_(valid)?"Grade distribution in buckets is compliant. Details: ":"Grade distribution in buckets is NOT compliant. Details: "))].join('')], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),details))], null);
} else {
return null;
}
});
curvecalc.upload.display.validation_component = (function curvecalc$upload$display$validation_component(raw_column){
var sgl = curvecalc.upload.validate.sorted_gradelist.call(null,raw_column);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.upload.display.median_component,sgl], null)], null);
});

//# sourceMappingURL=display.js.map?rel=1490992388031
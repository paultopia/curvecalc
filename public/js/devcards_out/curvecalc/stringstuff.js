// Compiled by ClojureScript 1.9.229 {}
goog.provide('curvecalc.stringstuff');
goog.require('cljs.core');
goog.require('cljs.pprint');
curvecalc.stringstuff.dig2 = (function curvecalc$stringstuff$dig2(somenum){
return cljs.pprint.cl_format.call(null,null,"~,2f",somenum);
});
curvecalc.stringstuff.dig1 = (function curvecalc$stringstuff$dig1(somenum){
return cljs.pprint.cl_format.call(null,null,"~,1f",somenum);
});
curvecalc.stringstuff.range_stringer = (function curvecalc$stringstuff$range_stringer(grade){
var r = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(grade);
var l = curvecalc.stringstuff.dig1.call(null,new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(r));
var h = curvecalc.stringstuff.dig1.call(null,new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(r));
return [cljs.core.str(l),cljs.core.str(" - "),cljs.core.str(h)].join('');
});

//# sourceMappingURL=stringstuff.js.map?rel=1491429252427
// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26033__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26034__i = 0, G__26034__a = new Array(arguments.length -  0);
while (G__26034__i < G__26034__a.length) {G__26034__a[G__26034__i] = arguments[G__26034__i + 0]; ++G__26034__i;}
  args = new cljs.core.IndexedSeq(G__26034__a,0);
} 
return G__26033__delegate.call(this,args);};
G__26033.cljs$lang$maxFixedArity = 0;
G__26033.cljs$lang$applyTo = (function (arglist__26035){
var args = cljs.core.seq(arglist__26035);
return G__26033__delegate(args);
});
G__26033.cljs$core$IFn$_invoke$arity$variadic = G__26033__delegate;
return G__26033;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26036__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26037__i = 0, G__26037__a = new Array(arguments.length -  0);
while (G__26037__i < G__26037__a.length) {G__26037__a[G__26037__i] = arguments[G__26037__i + 0]; ++G__26037__i;}
  args = new cljs.core.IndexedSeq(G__26037__a,0);
} 
return G__26036__delegate.call(this,args);};
G__26036.cljs$lang$maxFixedArity = 0;
G__26036.cljs$lang$applyTo = (function (arglist__26038){
var args = cljs.core.seq(arglist__26038);
return G__26036__delegate(args);
});
G__26036.cljs$core$IFn$_invoke$arity$variadic = G__26036__delegate;
return G__26036;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1491429237747
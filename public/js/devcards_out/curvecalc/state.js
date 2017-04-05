// Compiled by ClojureScript 1.9.229 {}
goog.provide('curvecalc.state');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof curvecalc.state.numstuds !== 'undefined'){
} else {
curvecalc.state.numstuds = reagent.core.atom.call(null,(0));
}
if(typeof curvecalc.state.distribution !== 'undefined'){
} else {
curvecalc.state.distribution = reagent.core.atom.call(null,new cljs.core.Keyword(null,"complex","complex",1415610825));
}
if(typeof curvecalc.state.rounding !== 'undefined'){
} else {
curvecalc.state.rounding = reagent.core.atom.call(null,new cljs.core.Keyword(null,"none","none",1333468478));
}
if(typeof curvecalc.state.file_data !== 'undefined'){
} else {
curvecalc.state.file_data = reagent.core.atom.call(null," ");
}

//# sourceMappingURL=state.js.map?rel=1491429254341
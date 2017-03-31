// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__25787__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31572_31574 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31573_31575 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31572_31574,_STAR_print_fn_STAR_31573_31575,sb__25787__auto__){
return (function (x__25788__auto__){
return sb__25787__auto__.append(x__25788__auto__);
});})(_STAR_print_newline_STAR_31572_31574,_STAR_print_fn_STAR_31573_31575,sb__25787__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31573_31575;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31572_31574;
}
return [cljs.core.str(sb__25787__auto__)].join('');
}catch (e31570){if((e31570 instanceof Error)){
var e1 = e31570;
try{return obj.toString();
}catch (e31571){if((e31571 instanceof Error)){
var e2 = e31571;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e31571;

}
}} else {
throw e31570;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_31577 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_31577;
}});

//# sourceMappingURL=utils.js.map?rel=1490992382468
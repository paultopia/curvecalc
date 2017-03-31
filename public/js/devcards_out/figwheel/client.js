// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36887 = [];
var len__25876__auto___36890 = arguments.length;
var i__25877__auto___36891 = (0);
while(true){
if((i__25877__auto___36891 < len__25876__auto___36890)){
args36887.push((arguments[i__25877__auto___36891]));

var G__36892 = (i__25877__auto___36891 + (1));
i__25877__auto___36891 = G__36892;
continue;
} else {
}
break;
}

var G__36889 = args36887.length;
switch (G__36889) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36887.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25883__auto__ = [];
var len__25876__auto___36895 = arguments.length;
var i__25877__auto___36896 = (0);
while(true){
if((i__25877__auto___36896 < len__25876__auto___36895)){
args__25883__auto__.push((arguments[i__25877__auto___36896]));

var G__36897 = (i__25877__auto___36896 + (1));
i__25877__auto___36896 = G__36897;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36894){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36894));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25883__auto__ = [];
var len__25876__auto___36899 = arguments.length;
var i__25877__auto___36900 = (0);
while(true){
if((i__25877__auto___36900 < len__25876__auto___36899)){
args__25883__auto__.push((arguments[i__25877__auto___36900]));

var G__36901 = (i__25877__auto___36900 + (1));
i__25877__auto___36900 = G__36901;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36898){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36898));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36902 = cljs.core._EQ_;
var expr__36903 = (function (){var or__24801__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e36906){if((e36906 instanceof Error)){
var e = e36906;
return false;
} else {
throw e36906;

}
}})();
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36902.call(null,"true",expr__36903))){
return true;
} else {
if(cljs.core.truth_(pred__36902.call(null,"false",expr__36903))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36903)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e36908){if((e36908 instanceof Error)){
var e = e36908;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36908;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36909){
var map__36912 = p__36909;
var map__36912__$1 = ((((!((map__36912 == null)))?((((map__36912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36912):map__36912);
var message = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24801__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24789__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24789__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24789__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26973__auto___37074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___37074,ch){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___37074,ch){
return (function (state_37043){
var state_val_37044 = (state_37043[(1)]);
if((state_val_37044 === (7))){
var inst_37039 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37045_37075 = state_37043__$1;
(statearr_37045_37075[(2)] = inst_37039);

(statearr_37045_37075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (1))){
var state_37043__$1 = state_37043;
var statearr_37046_37076 = state_37043__$1;
(statearr_37046_37076[(2)] = null);

(statearr_37046_37076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (4))){
var inst_36996 = (state_37043[(7)]);
var inst_36996__$1 = (state_37043[(2)]);
var state_37043__$1 = (function (){var statearr_37047 = state_37043;
(statearr_37047[(7)] = inst_36996__$1);

return statearr_37047;
})();
if(cljs.core.truth_(inst_36996__$1)){
var statearr_37048_37077 = state_37043__$1;
(statearr_37048_37077[(1)] = (5));

} else {
var statearr_37049_37078 = state_37043__$1;
(statearr_37049_37078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (15))){
var inst_37003 = (state_37043[(8)]);
var inst_37018 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37003);
var inst_37019 = cljs.core.first.call(null,inst_37018);
var inst_37020 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37019);
var inst_37021 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37020)].join('');
var inst_37022 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37021);
var state_37043__$1 = state_37043;
var statearr_37050_37079 = state_37043__$1;
(statearr_37050_37079[(2)] = inst_37022);

(statearr_37050_37079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (13))){
var inst_37027 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37051_37080 = state_37043__$1;
(statearr_37051_37080[(2)] = inst_37027);

(statearr_37051_37080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (6))){
var state_37043__$1 = state_37043;
var statearr_37052_37081 = state_37043__$1;
(statearr_37052_37081[(2)] = null);

(statearr_37052_37081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (17))){
var inst_37025 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37053_37082 = state_37043__$1;
(statearr_37053_37082[(2)] = inst_37025);

(statearr_37053_37082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (3))){
var inst_37041 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37043__$1,inst_37041);
} else {
if((state_val_37044 === (12))){
var inst_37002 = (state_37043[(9)]);
var inst_37016 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37002,opts);
var state_37043__$1 = state_37043;
if(cljs.core.truth_(inst_37016)){
var statearr_37054_37083 = state_37043__$1;
(statearr_37054_37083[(1)] = (15));

} else {
var statearr_37055_37084 = state_37043__$1;
(statearr_37055_37084[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (2))){
var state_37043__$1 = state_37043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37043__$1,(4),ch);
} else {
if((state_val_37044 === (11))){
var inst_37003 = (state_37043[(8)]);
var inst_37008 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37009 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37003);
var inst_37010 = cljs.core.async.timeout.call(null,(1000));
var inst_37011 = [inst_37009,inst_37010];
var inst_37012 = (new cljs.core.PersistentVector(null,2,(5),inst_37008,inst_37011,null));
var state_37043__$1 = state_37043;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37043__$1,(14),inst_37012);
} else {
if((state_val_37044 === (9))){
var inst_37003 = (state_37043[(8)]);
var inst_37029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37030 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37003);
var inst_37031 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37030);
var inst_37032 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37031)].join('');
var inst_37033 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37032);
var state_37043__$1 = (function (){var statearr_37056 = state_37043;
(statearr_37056[(10)] = inst_37029);

return statearr_37056;
})();
var statearr_37057_37085 = state_37043__$1;
(statearr_37057_37085[(2)] = inst_37033);

(statearr_37057_37085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (5))){
var inst_36996 = (state_37043[(7)]);
var inst_36998 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36999 = (new cljs.core.PersistentArrayMap(null,2,inst_36998,null));
var inst_37000 = (new cljs.core.PersistentHashSet(null,inst_36999,null));
var inst_37001 = figwheel.client.focus_msgs.call(null,inst_37000,inst_36996);
var inst_37002 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37001);
var inst_37003 = cljs.core.first.call(null,inst_37001);
var inst_37004 = figwheel.client.autoload_QMARK_.call(null);
var state_37043__$1 = (function (){var statearr_37058 = state_37043;
(statearr_37058[(9)] = inst_37002);

(statearr_37058[(8)] = inst_37003);

return statearr_37058;
})();
if(cljs.core.truth_(inst_37004)){
var statearr_37059_37086 = state_37043__$1;
(statearr_37059_37086[(1)] = (8));

} else {
var statearr_37060_37087 = state_37043__$1;
(statearr_37060_37087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (14))){
var inst_37014 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37061_37088 = state_37043__$1;
(statearr_37061_37088[(2)] = inst_37014);

(statearr_37061_37088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (16))){
var state_37043__$1 = state_37043;
var statearr_37062_37089 = state_37043__$1;
(statearr_37062_37089[(2)] = null);

(statearr_37062_37089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (10))){
var inst_37035 = (state_37043[(2)]);
var state_37043__$1 = (function (){var statearr_37063 = state_37043;
(statearr_37063[(11)] = inst_37035);

return statearr_37063;
})();
var statearr_37064_37090 = state_37043__$1;
(statearr_37064_37090[(2)] = null);

(statearr_37064_37090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (8))){
var inst_37002 = (state_37043[(9)]);
var inst_37006 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37002,opts);
var state_37043__$1 = state_37043;
if(cljs.core.truth_(inst_37006)){
var statearr_37065_37091 = state_37043__$1;
(statearr_37065_37091[(1)] = (11));

} else {
var statearr_37066_37092 = state_37043__$1;
(statearr_37066_37092[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26973__auto___37074,ch))
;
return ((function (switch__26861__auto__,c__26973__auto___37074,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____0 = (function (){
var statearr_37070 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37070[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__);

(statearr_37070[(1)] = (1));

return statearr_37070;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____1 = (function (state_37043){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_37043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e37071){if((e37071 instanceof Object)){
var ex__26865__auto__ = e37071;
var statearr_37072_37093 = state_37043;
(statearr_37072_37093[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37094 = state_37043;
state_37043 = G__37094;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__ = function(state_37043){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____1.call(this,state_37043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___37074,ch))
})();
var state__26975__auto__ = (function (){var statearr_37073 = f__26974__auto__.call(null);
(statearr_37073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___37074);

return statearr_37073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___37074,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37095_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37095_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37098 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37098){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37097){if((e37097 instanceof Error)){
var e = e37097;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37098], null));
} else {
var e = e37097;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37098))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37099){
var map__37108 = p__37099;
var map__37108__$1 = ((((!((map__37108 == null)))?((((map__37108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37108):map__37108);
var opts = map__37108__$1;
var build_id = cljs.core.get.call(null,map__37108__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37108,map__37108__$1,opts,build_id){
return (function (p__37110){
var vec__37111 = p__37110;
var seq__37112 = cljs.core.seq.call(null,vec__37111);
var first__37113 = cljs.core.first.call(null,seq__37112);
var seq__37112__$1 = cljs.core.next.call(null,seq__37112);
var map__37114 = first__37113;
var map__37114__$1 = ((((!((map__37114 == null)))?((((map__37114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37114):map__37114);
var msg = map__37114__$1;
var msg_name = cljs.core.get.call(null,map__37114__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37112__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37111,seq__37112,first__37113,seq__37112__$1,map__37114,map__37114__$1,msg,msg_name,_,map__37108,map__37108__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37111,seq__37112,first__37113,seq__37112__$1,map__37114,map__37114__$1,msg,msg_name,_,map__37108,map__37108__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37108,map__37108__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37122){
var vec__37123 = p__37122;
var seq__37124 = cljs.core.seq.call(null,vec__37123);
var first__37125 = cljs.core.first.call(null,seq__37124);
var seq__37124__$1 = cljs.core.next.call(null,seq__37124);
var map__37126 = first__37125;
var map__37126__$1 = ((((!((map__37126 == null)))?((((map__37126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37126):map__37126);
var msg = map__37126__$1;
var msg_name = cljs.core.get.call(null,map__37126__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37124__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37128){
var map__37140 = p__37128;
var map__37140__$1 = ((((!((map__37140 == null)))?((((map__37140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37140):map__37140);
var on_compile_warning = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37140,map__37140__$1,on_compile_warning,on_compile_fail){
return (function (p__37142){
var vec__37143 = p__37142;
var seq__37144 = cljs.core.seq.call(null,vec__37143);
var first__37145 = cljs.core.first.call(null,seq__37144);
var seq__37144__$1 = cljs.core.next.call(null,seq__37144);
var map__37146 = first__37145;
var map__37146__$1 = ((((!((map__37146 == null)))?((((map__37146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37146):map__37146);
var msg = map__37146__$1;
var msg_name = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37144__$1;
var pred__37148 = cljs.core._EQ_;
var expr__37149 = msg_name;
if(cljs.core.truth_(pred__37148.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37149))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37148.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37149))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37140,map__37140__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__,msg_hist,msg_names,msg){
return (function (state_37377){
var state_val_37378 = (state_37377[(1)]);
if((state_val_37378 === (7))){
var inst_37297 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
if(cljs.core.truth_(inst_37297)){
var statearr_37379_37429 = state_37377__$1;
(statearr_37379_37429[(1)] = (8));

} else {
var statearr_37380_37430 = state_37377__$1;
(statearr_37380_37430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (20))){
var inst_37371 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
var statearr_37381_37431 = state_37377__$1;
(statearr_37381_37431[(2)] = inst_37371);

(statearr_37381_37431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (27))){
var inst_37367 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
var statearr_37382_37432 = state_37377__$1;
(statearr_37382_37432[(2)] = inst_37367);

(statearr_37382_37432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (1))){
var inst_37290 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37377__$1 = state_37377;
if(cljs.core.truth_(inst_37290)){
var statearr_37383_37433 = state_37377__$1;
(statearr_37383_37433[(1)] = (2));

} else {
var statearr_37384_37434 = state_37377__$1;
(statearr_37384_37434[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (24))){
var inst_37369 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
var statearr_37385_37435 = state_37377__$1;
(statearr_37385_37435[(2)] = inst_37369);

(statearr_37385_37435[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (4))){
var inst_37375 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37377__$1,inst_37375);
} else {
if((state_val_37378 === (15))){
var inst_37373 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
var statearr_37386_37436 = state_37377__$1;
(statearr_37386_37436[(2)] = inst_37373);

(statearr_37386_37436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (21))){
var inst_37326 = (state_37377[(2)]);
var inst_37327 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37328 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37327);
var state_37377__$1 = (function (){var statearr_37387 = state_37377;
(statearr_37387[(7)] = inst_37326);

return statearr_37387;
})();
var statearr_37388_37437 = state_37377__$1;
(statearr_37388_37437[(2)] = inst_37328);

(statearr_37388_37437[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (31))){
var inst_37356 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37377__$1 = state_37377;
if(cljs.core.truth_(inst_37356)){
var statearr_37389_37438 = state_37377__$1;
(statearr_37389_37438[(1)] = (34));

} else {
var statearr_37390_37439 = state_37377__$1;
(statearr_37390_37439[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (32))){
var inst_37365 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
var statearr_37391_37440 = state_37377__$1;
(statearr_37391_37440[(2)] = inst_37365);

(statearr_37391_37440[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (33))){
var inst_37352 = (state_37377[(2)]);
var inst_37353 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37354 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37353);
var state_37377__$1 = (function (){var statearr_37392 = state_37377;
(statearr_37392[(8)] = inst_37352);

return statearr_37392;
})();
var statearr_37393_37441 = state_37377__$1;
(statearr_37393_37441[(2)] = inst_37354);

(statearr_37393_37441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (13))){
var inst_37311 = figwheel.client.heads_up.clear.call(null);
var state_37377__$1 = state_37377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37377__$1,(16),inst_37311);
} else {
if((state_val_37378 === (22))){
var inst_37332 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37333 = figwheel.client.heads_up.append_warning_message.call(null,inst_37332);
var state_37377__$1 = state_37377;
var statearr_37394_37442 = state_37377__$1;
(statearr_37394_37442[(2)] = inst_37333);

(statearr_37394_37442[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (36))){
var inst_37363 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
var statearr_37395_37443 = state_37377__$1;
(statearr_37395_37443[(2)] = inst_37363);

(statearr_37395_37443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (29))){
var inst_37343 = (state_37377[(2)]);
var inst_37344 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37345 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37344);
var state_37377__$1 = (function (){var statearr_37396 = state_37377;
(statearr_37396[(9)] = inst_37343);

return statearr_37396;
})();
var statearr_37397_37444 = state_37377__$1;
(statearr_37397_37444[(2)] = inst_37345);

(statearr_37397_37444[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (6))){
var inst_37292 = (state_37377[(10)]);
var state_37377__$1 = state_37377;
var statearr_37398_37445 = state_37377__$1;
(statearr_37398_37445[(2)] = inst_37292);

(statearr_37398_37445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (28))){
var inst_37339 = (state_37377[(2)]);
var inst_37340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37341 = figwheel.client.heads_up.display_warning.call(null,inst_37340);
var state_37377__$1 = (function (){var statearr_37399 = state_37377;
(statearr_37399[(11)] = inst_37339);

return statearr_37399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37377__$1,(29),inst_37341);
} else {
if((state_val_37378 === (25))){
var inst_37337 = figwheel.client.heads_up.clear.call(null);
var state_37377__$1 = state_37377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37377__$1,(28),inst_37337);
} else {
if((state_val_37378 === (34))){
var inst_37358 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37377__$1 = state_37377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37377__$1,(37),inst_37358);
} else {
if((state_val_37378 === (17))){
var inst_37317 = (state_37377[(2)]);
var inst_37318 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37319 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37318);
var state_37377__$1 = (function (){var statearr_37400 = state_37377;
(statearr_37400[(12)] = inst_37317);

return statearr_37400;
})();
var statearr_37401_37446 = state_37377__$1;
(statearr_37401_37446[(2)] = inst_37319);

(statearr_37401_37446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (3))){
var inst_37309 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37377__$1 = state_37377;
if(cljs.core.truth_(inst_37309)){
var statearr_37402_37447 = state_37377__$1;
(statearr_37402_37447[(1)] = (13));

} else {
var statearr_37403_37448 = state_37377__$1;
(statearr_37403_37448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (12))){
var inst_37305 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
var statearr_37404_37449 = state_37377__$1;
(statearr_37404_37449[(2)] = inst_37305);

(statearr_37404_37449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (2))){
var inst_37292 = (state_37377[(10)]);
var inst_37292__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37377__$1 = (function (){var statearr_37405 = state_37377;
(statearr_37405[(10)] = inst_37292__$1);

return statearr_37405;
})();
if(cljs.core.truth_(inst_37292__$1)){
var statearr_37406_37450 = state_37377__$1;
(statearr_37406_37450[(1)] = (5));

} else {
var statearr_37407_37451 = state_37377__$1;
(statearr_37407_37451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (23))){
var inst_37335 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37377__$1 = state_37377;
if(cljs.core.truth_(inst_37335)){
var statearr_37408_37452 = state_37377__$1;
(statearr_37408_37452[(1)] = (25));

} else {
var statearr_37409_37453 = state_37377__$1;
(statearr_37409_37453[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (35))){
var state_37377__$1 = state_37377;
var statearr_37410_37454 = state_37377__$1;
(statearr_37410_37454[(2)] = null);

(statearr_37410_37454[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (19))){
var inst_37330 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37377__$1 = state_37377;
if(cljs.core.truth_(inst_37330)){
var statearr_37411_37455 = state_37377__$1;
(statearr_37411_37455[(1)] = (22));

} else {
var statearr_37412_37456 = state_37377__$1;
(statearr_37412_37456[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (11))){
var inst_37301 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
var statearr_37413_37457 = state_37377__$1;
(statearr_37413_37457[(2)] = inst_37301);

(statearr_37413_37457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (9))){
var inst_37303 = figwheel.client.heads_up.clear.call(null);
var state_37377__$1 = state_37377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37377__$1,(12),inst_37303);
} else {
if((state_val_37378 === (5))){
var inst_37294 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37377__$1 = state_37377;
var statearr_37414_37458 = state_37377__$1;
(statearr_37414_37458[(2)] = inst_37294);

(statearr_37414_37458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (14))){
var inst_37321 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37377__$1 = state_37377;
if(cljs.core.truth_(inst_37321)){
var statearr_37415_37459 = state_37377__$1;
(statearr_37415_37459[(1)] = (18));

} else {
var statearr_37416_37460 = state_37377__$1;
(statearr_37416_37460[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (26))){
var inst_37347 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37377__$1 = state_37377;
if(cljs.core.truth_(inst_37347)){
var statearr_37417_37461 = state_37377__$1;
(statearr_37417_37461[(1)] = (30));

} else {
var statearr_37418_37462 = state_37377__$1;
(statearr_37418_37462[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (16))){
var inst_37313 = (state_37377[(2)]);
var inst_37314 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37315 = figwheel.client.heads_up.display_exception.call(null,inst_37314);
var state_37377__$1 = (function (){var statearr_37419 = state_37377;
(statearr_37419[(13)] = inst_37313);

return statearr_37419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37377__$1,(17),inst_37315);
} else {
if((state_val_37378 === (30))){
var inst_37349 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37350 = figwheel.client.heads_up.display_warning.call(null,inst_37349);
var state_37377__$1 = state_37377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37377__$1,(33),inst_37350);
} else {
if((state_val_37378 === (10))){
var inst_37307 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
var statearr_37420_37463 = state_37377__$1;
(statearr_37420_37463[(2)] = inst_37307);

(statearr_37420_37463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (18))){
var inst_37323 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37324 = figwheel.client.heads_up.display_exception.call(null,inst_37323);
var state_37377__$1 = state_37377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37377__$1,(21),inst_37324);
} else {
if((state_val_37378 === (37))){
var inst_37360 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
var statearr_37421_37464 = state_37377__$1;
(statearr_37421_37464[(2)] = inst_37360);

(statearr_37421_37464[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (8))){
var inst_37299 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37377__$1 = state_37377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37377__$1,(11),inst_37299);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26973__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26861__auto__,c__26973__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____0 = (function (){
var statearr_37425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37425[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__);

(statearr_37425[(1)] = (1));

return statearr_37425;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____1 = (function (state_37377){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_37377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e37426){if((e37426 instanceof Object)){
var ex__26865__auto__ = e37426;
var statearr_37427_37465 = state_37377;
(statearr_37427_37465[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37466 = state_37377;
state_37377 = G__37466;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__ = function(state_37377){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____1.call(this,state_37377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__,msg_hist,msg_names,msg))
})();
var state__26975__auto__ = (function (){var statearr_37428 = f__26974__auto__.call(null);
(statearr_37428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_37428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__,msg_hist,msg_names,msg))
);

return c__26973__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26973__auto___37529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___37529,ch){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___37529,ch){
return (function (state_37512){
var state_val_37513 = (state_37512[(1)]);
if((state_val_37513 === (1))){
var state_37512__$1 = state_37512;
var statearr_37514_37530 = state_37512__$1;
(statearr_37514_37530[(2)] = null);

(statearr_37514_37530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37513 === (2))){
var state_37512__$1 = state_37512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37512__$1,(4),ch);
} else {
if((state_val_37513 === (3))){
var inst_37510 = (state_37512[(2)]);
var state_37512__$1 = state_37512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37512__$1,inst_37510);
} else {
if((state_val_37513 === (4))){
var inst_37500 = (state_37512[(7)]);
var inst_37500__$1 = (state_37512[(2)]);
var state_37512__$1 = (function (){var statearr_37515 = state_37512;
(statearr_37515[(7)] = inst_37500__$1);

return statearr_37515;
})();
if(cljs.core.truth_(inst_37500__$1)){
var statearr_37516_37531 = state_37512__$1;
(statearr_37516_37531[(1)] = (5));

} else {
var statearr_37517_37532 = state_37512__$1;
(statearr_37517_37532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37513 === (5))){
var inst_37500 = (state_37512[(7)]);
var inst_37502 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37500);
var state_37512__$1 = state_37512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37512__$1,(8),inst_37502);
} else {
if((state_val_37513 === (6))){
var state_37512__$1 = state_37512;
var statearr_37518_37533 = state_37512__$1;
(statearr_37518_37533[(2)] = null);

(statearr_37518_37533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37513 === (7))){
var inst_37508 = (state_37512[(2)]);
var state_37512__$1 = state_37512;
var statearr_37519_37534 = state_37512__$1;
(statearr_37519_37534[(2)] = inst_37508);

(statearr_37519_37534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37513 === (8))){
var inst_37504 = (state_37512[(2)]);
var state_37512__$1 = (function (){var statearr_37520 = state_37512;
(statearr_37520[(8)] = inst_37504);

return statearr_37520;
})();
var statearr_37521_37535 = state_37512__$1;
(statearr_37521_37535[(2)] = null);

(statearr_37521_37535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26973__auto___37529,ch))
;
return ((function (switch__26861__auto__,c__26973__auto___37529,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26862__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26862__auto____0 = (function (){
var statearr_37525 = [null,null,null,null,null,null,null,null,null];
(statearr_37525[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26862__auto__);

(statearr_37525[(1)] = (1));

return statearr_37525;
});
var figwheel$client$heads_up_plugin_$_state_machine__26862__auto____1 = (function (state_37512){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_37512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e37526){if((e37526 instanceof Object)){
var ex__26865__auto__ = e37526;
var statearr_37527_37536 = state_37512;
(statearr_37527_37536[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37537 = state_37512;
state_37512 = G__37537;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26862__auto__ = function(state_37512){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26862__auto____1.call(this,state_37512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26862__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26862__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___37529,ch))
})();
var state__26975__auto__ = (function (){var statearr_37528 = f__26974__auto__.call(null);
(statearr_37528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___37529);

return statearr_37528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___37529,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__){
return (function (state_37558){
var state_val_37559 = (state_37558[(1)]);
if((state_val_37559 === (1))){
var inst_37553 = cljs.core.async.timeout.call(null,(3000));
var state_37558__$1 = state_37558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37558__$1,(2),inst_37553);
} else {
if((state_val_37559 === (2))){
var inst_37555 = (state_37558[(2)]);
var inst_37556 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37558__$1 = (function (){var statearr_37560 = state_37558;
(statearr_37560[(7)] = inst_37555);

return statearr_37560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37558__$1,inst_37556);
} else {
return null;
}
}
});})(c__26973__auto__))
;
return ((function (switch__26861__auto__,c__26973__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____0 = (function (){
var statearr_37564 = [null,null,null,null,null,null,null,null];
(statearr_37564[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__);

(statearr_37564[(1)] = (1));

return statearr_37564;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____1 = (function (state_37558){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_37558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e37565){if((e37565 instanceof Object)){
var ex__26865__auto__ = e37565;
var statearr_37566_37568 = state_37558;
(statearr_37566_37568[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37569 = state_37558;
state_37558 = G__37569;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__ = function(state_37558){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____1.call(this,state_37558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__))
})();
var state__26975__auto__ = (function (){var statearr_37567 = f__26974__auto__.call(null);
(statearr_37567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_37567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__))
);

return c__26973__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37592){
var state_val_37593 = (state_37592[(1)]);
if((state_val_37593 === (1))){
var inst_37586 = cljs.core.async.timeout.call(null,(2000));
var state_37592__$1 = state_37592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37592__$1,(2),inst_37586);
} else {
if((state_val_37593 === (2))){
var inst_37588 = (state_37592[(2)]);
var inst_37589 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37590 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37589);
var state_37592__$1 = (function (){var statearr_37594 = state_37592;
(statearr_37594[(7)] = inst_37588);

return statearr_37594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37592__$1,inst_37590);
} else {
return null;
}
}
});})(c__26973__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26861__auto__,c__26973__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____0 = (function (){
var statearr_37598 = [null,null,null,null,null,null,null,null];
(statearr_37598[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__);

(statearr_37598[(1)] = (1));

return statearr_37598;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____1 = (function (state_37592){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_37592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e37599){if((e37599 instanceof Object)){
var ex__26865__auto__ = e37599;
var statearr_37600_37602 = state_37592;
(statearr_37600_37602[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37603 = state_37592;
state_37592 = G__37603;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__ = function(state_37592){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____1.call(this,state_37592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26975__auto__ = (function (){var statearr_37601 = f__26974__auto__.call(null);
(statearr_37601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_37601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__,figwheel_version,temp__4657__auto__))
);

return c__26973__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37604){
var map__37608 = p__37604;
var map__37608__$1 = ((((!((map__37608 == null)))?((((map__37608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37608):map__37608);
var file = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37610 = "";
var G__37610__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37610),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37610);
var G__37610__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37610__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37610__$1);
if(cljs.core.truth_((function (){var and__24789__auto__ = line;
if(cljs.core.truth_(and__24789__auto__)){
return column;
} else {
return and__24789__auto__;
}
})())){
return [cljs.core.str(G__37610__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37610__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37611){
var map__37618 = p__37611;
var map__37618__$1 = ((((!((map__37618 == null)))?((((map__37618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37618):map__37618);
var ed = map__37618__$1;
var formatted_exception = cljs.core.get.call(null,map__37618__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37618__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37618__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37620_37624 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37621_37625 = null;
var count__37622_37626 = (0);
var i__37623_37627 = (0);
while(true){
if((i__37623_37627 < count__37622_37626)){
var msg_37628 = cljs.core._nth.call(null,chunk__37621_37625,i__37623_37627);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37628);

var G__37629 = seq__37620_37624;
var G__37630 = chunk__37621_37625;
var G__37631 = count__37622_37626;
var G__37632 = (i__37623_37627 + (1));
seq__37620_37624 = G__37629;
chunk__37621_37625 = G__37630;
count__37622_37626 = G__37631;
i__37623_37627 = G__37632;
continue;
} else {
var temp__4657__auto___37633 = cljs.core.seq.call(null,seq__37620_37624);
if(temp__4657__auto___37633){
var seq__37620_37634__$1 = temp__4657__auto___37633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37620_37634__$1)){
var c__25612__auto___37635 = cljs.core.chunk_first.call(null,seq__37620_37634__$1);
var G__37636 = cljs.core.chunk_rest.call(null,seq__37620_37634__$1);
var G__37637 = c__25612__auto___37635;
var G__37638 = cljs.core.count.call(null,c__25612__auto___37635);
var G__37639 = (0);
seq__37620_37624 = G__37636;
chunk__37621_37625 = G__37637;
count__37622_37626 = G__37638;
i__37623_37627 = G__37639;
continue;
} else {
var msg_37640 = cljs.core.first.call(null,seq__37620_37634__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37640);

var G__37641 = cljs.core.next.call(null,seq__37620_37634__$1);
var G__37642 = null;
var G__37643 = (0);
var G__37644 = (0);
seq__37620_37624 = G__37641;
chunk__37621_37625 = G__37642;
count__37622_37626 = G__37643;
i__37623_37627 = G__37644;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37645){
var map__37648 = p__37645;
var map__37648__$1 = ((((!((map__37648 == null)))?((((map__37648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37648):map__37648);
var w = map__37648__$1;
var message = cljs.core.get.call(null,map__37648__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/devcards_out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/devcards_out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24789__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24789__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24789__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37660 = cljs.core.seq.call(null,plugins);
var chunk__37661 = null;
var count__37662 = (0);
var i__37663 = (0);
while(true){
if((i__37663 < count__37662)){
var vec__37664 = cljs.core._nth.call(null,chunk__37661,i__37663);
var k = cljs.core.nth.call(null,vec__37664,(0),null);
var plugin = cljs.core.nth.call(null,vec__37664,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37670 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37660,chunk__37661,count__37662,i__37663,pl_37670,vec__37664,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37670.call(null,msg_hist);
});})(seq__37660,chunk__37661,count__37662,i__37663,pl_37670,vec__37664,k,plugin))
);
} else {
}

var G__37671 = seq__37660;
var G__37672 = chunk__37661;
var G__37673 = count__37662;
var G__37674 = (i__37663 + (1));
seq__37660 = G__37671;
chunk__37661 = G__37672;
count__37662 = G__37673;
i__37663 = G__37674;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37660);
if(temp__4657__auto__){
var seq__37660__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37660__$1)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,seq__37660__$1);
var G__37675 = cljs.core.chunk_rest.call(null,seq__37660__$1);
var G__37676 = c__25612__auto__;
var G__37677 = cljs.core.count.call(null,c__25612__auto__);
var G__37678 = (0);
seq__37660 = G__37675;
chunk__37661 = G__37676;
count__37662 = G__37677;
i__37663 = G__37678;
continue;
} else {
var vec__37667 = cljs.core.first.call(null,seq__37660__$1);
var k = cljs.core.nth.call(null,vec__37667,(0),null);
var plugin = cljs.core.nth.call(null,vec__37667,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37679 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37660,chunk__37661,count__37662,i__37663,pl_37679,vec__37667,k,plugin,seq__37660__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37679.call(null,msg_hist);
});})(seq__37660,chunk__37661,count__37662,i__37663,pl_37679,vec__37667,k,plugin,seq__37660__$1,temp__4657__auto__))
);
} else {
}

var G__37680 = cljs.core.next.call(null,seq__37660__$1);
var G__37681 = null;
var G__37682 = (0);
var G__37683 = (0);
seq__37660 = G__37680;
chunk__37661 = G__37681;
count__37662 = G__37682;
i__37663 = G__37683;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37684 = [];
var len__25876__auto___37691 = arguments.length;
var i__25877__auto___37692 = (0);
while(true){
if((i__25877__auto___37692 < len__25876__auto___37691)){
args37684.push((arguments[i__25877__auto___37692]));

var G__37693 = (i__25877__auto___37692 + (1));
i__25877__auto___37692 = G__37693;
continue;
} else {
}
break;
}

var G__37686 = args37684.length;
switch (G__37686) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37684.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37687_37695 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37688_37696 = null;
var count__37689_37697 = (0);
var i__37690_37698 = (0);
while(true){
if((i__37690_37698 < count__37689_37697)){
var msg_37699 = cljs.core._nth.call(null,chunk__37688_37696,i__37690_37698);
figwheel.client.socket.handle_incoming_message.call(null,msg_37699);

var G__37700 = seq__37687_37695;
var G__37701 = chunk__37688_37696;
var G__37702 = count__37689_37697;
var G__37703 = (i__37690_37698 + (1));
seq__37687_37695 = G__37700;
chunk__37688_37696 = G__37701;
count__37689_37697 = G__37702;
i__37690_37698 = G__37703;
continue;
} else {
var temp__4657__auto___37704 = cljs.core.seq.call(null,seq__37687_37695);
if(temp__4657__auto___37704){
var seq__37687_37705__$1 = temp__4657__auto___37704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37687_37705__$1)){
var c__25612__auto___37706 = cljs.core.chunk_first.call(null,seq__37687_37705__$1);
var G__37707 = cljs.core.chunk_rest.call(null,seq__37687_37705__$1);
var G__37708 = c__25612__auto___37706;
var G__37709 = cljs.core.count.call(null,c__25612__auto___37706);
var G__37710 = (0);
seq__37687_37695 = G__37707;
chunk__37688_37696 = G__37708;
count__37689_37697 = G__37709;
i__37690_37698 = G__37710;
continue;
} else {
var msg_37711 = cljs.core.first.call(null,seq__37687_37705__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37711);

var G__37712 = cljs.core.next.call(null,seq__37687_37705__$1);
var G__37713 = null;
var G__37714 = (0);
var G__37715 = (0);
seq__37687_37695 = G__37712;
chunk__37688_37696 = G__37713;
count__37689_37697 = G__37714;
i__37690_37698 = G__37715;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25883__auto__ = [];
var len__25876__auto___37720 = arguments.length;
var i__25877__auto___37721 = (0);
while(true){
if((i__25877__auto___37721 < len__25876__auto___37720)){
args__25883__auto__.push((arguments[i__25877__auto___37721]));

var G__37722 = (i__25877__auto___37721 + (1));
i__25877__auto___37721 = G__37722;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37717){
var map__37718 = p__37717;
var map__37718__$1 = ((((!((map__37718 == null)))?((((map__37718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37718):map__37718);
var opts = map__37718__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37716){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37716));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37724){if((e37724 instanceof Error)){
var e = e37724;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37724;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37728){
var map__37729 = p__37728;
var map__37729__$1 = ((((!((map__37729 == null)))?((((map__37729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37729):map__37729);
var msg_name = cljs.core.get.call(null,map__37729__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1490992387823
// Compiled by ClojureScript 1.9.229 {}
goog.provide('curvecalc.upload.core');
goog.require('cljs.core');
goog.require('curvecalc.state');
goog.require('cljs.core.async');
goog.require('goog.labs.format.csv');
goog.require('curvecalc.upload.display');
goog.require('curvecalc.footer');
curvecalc.upload.core.calculate = (function curvecalc$upload$core$calculate(){
return curvecalc.core.load_calculation.call(null);
});
curvecalc.upload.core.first_file = cljs.core.map.call(null,(function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
return file;
}));
curvecalc.upload.core.transpose = (function curvecalc$upload$core$transpose(m){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,m);
});
curvecalc.upload.core.extract_result = cljs.core.map.call(null,(function (p1__38175_SHARP_){
return cljs.core.second.call(null,curvecalc.upload.core.transpose.call(null,cljs.core.js__GT_clj.call(null,goog.labs.format.csv.parse(p1__38175_SHARP_.target.result))));
}));
curvecalc.upload.core.upload_reqs = cljs.core.async.chan.call(null,(1),curvecalc.upload.core.first_file);
curvecalc.upload.core.file_reads = cljs.core.async.chan.call(null,(1),curvecalc.upload.core.extract_result);
curvecalc.upload.core.put_upload = (function curvecalc$upload$core$put_upload(e){
return cljs.core.async.put_BANG_.call(null,curvecalc.upload.core.upload_reqs,e);
});
var c__28756__auto___38201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___38201){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___38201){
return (function (state_38188){
var state_val_38189 = (state_38188[(1)]);
if((state_val_38189 === (1))){
var state_38188__$1 = state_38188;
var statearr_38190_38202 = state_38188__$1;
(statearr_38190_38202[(2)] = null);

(statearr_38190_38202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38189 === (2))){
var inst_38178 = (new FileReader());
var state_38188__$1 = (function (){var statearr_38191 = state_38188;
(statearr_38191[(7)] = inst_38178);

return statearr_38191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38188__$1,(4),curvecalc.upload.core.upload_reqs);
} else {
if((state_val_38189 === (3))){
var inst_38186 = (state_38188[(2)]);
var state_38188__$1 = state_38188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38188__$1,inst_38186);
} else {
if((state_val_38189 === (4))){
var inst_38178 = (state_38188[(7)]);
var inst_38180 = (state_38188[(2)]);
var inst_38181 = (function (){var reader = inst_38178;
var file = inst_38180;
return ((function (reader,file,inst_38178,inst_38180,state_val_38189,c__28756__auto___38201){
return (function (p1__38176_SHARP_){
return cljs.core.async.put_BANG_.call(null,curvecalc.upload.core.file_reads,p1__38176_SHARP_);
});
;})(reader,file,inst_38178,inst_38180,state_val_38189,c__28756__auto___38201))
})();
var inst_38182 = inst_38178.onload = inst_38181;
var inst_38183 = inst_38178.readAsText(inst_38180);
var state_38188__$1 = (function (){var statearr_38192 = state_38188;
(statearr_38192[(8)] = inst_38183);

(statearr_38192[(9)] = inst_38182);

return statearr_38192;
})();
var statearr_38193_38203 = state_38188__$1;
(statearr_38193_38203[(2)] = null);

(statearr_38193_38203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__28756__auto___38201))
;
return ((function (switch__28644__auto__,c__28756__auto___38201){
return (function() {
var curvecalc$upload$core$state_machine__28645__auto__ = null;
var curvecalc$upload$core$state_machine__28645__auto____0 = (function (){
var statearr_38197 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38197[(0)] = curvecalc$upload$core$state_machine__28645__auto__);

(statearr_38197[(1)] = (1));

return statearr_38197;
});
var curvecalc$upload$core$state_machine__28645__auto____1 = (function (state_38188){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_38188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e38198){if((e38198 instanceof Object)){
var ex__28648__auto__ = e38198;
var statearr_38199_38204 = state_38188;
(statearr_38199_38204[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38205 = state_38188;
state_38188 = G__38205;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
curvecalc$upload$core$state_machine__28645__auto__ = function(state_38188){
switch(arguments.length){
case 0:
return curvecalc$upload$core$state_machine__28645__auto____0.call(this);
case 1:
return curvecalc$upload$core$state_machine__28645__auto____1.call(this,state_38188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
curvecalc$upload$core$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = curvecalc$upload$core$state_machine__28645__auto____0;
curvecalc$upload$core$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = curvecalc$upload$core$state_machine__28645__auto____1;
return curvecalc$upload$core$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___38201))
})();
var state__28758__auto__ = (function (){var statearr_38200 = f__28757__auto__.call(null);
(statearr_38200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___38201);

return statearr_38200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___38201))
);

var c__28756__auto___38226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___38226){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___38226){
return (function (state_38214){
var state_val_38215 = (state_38214[(1)]);
if((state_val_38215 === (1))){
var state_38214__$1 = state_38214;
var statearr_38216_38227 = state_38214__$1;
(statearr_38216_38227[(2)] = null);

(statearr_38216_38227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (2))){
var state_38214__$1 = state_38214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38214__$1,(4),curvecalc.upload.core.file_reads);
} else {
if((state_val_38215 === (3))){
var inst_38212 = (state_38214[(2)]);
var state_38214__$1 = state_38214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38214__$1,inst_38212);
} else {
if((state_val_38215 === (4))){
var inst_38208 = (state_38214[(2)]);
var inst_38209 = cljs.core.reset_BANG_.call(null,curvecalc.state.file_data,inst_38208);
var state_38214__$1 = (function (){var statearr_38217 = state_38214;
(statearr_38217[(7)] = inst_38209);

return statearr_38217;
})();
var statearr_38218_38228 = state_38214__$1;
(statearr_38218_38228[(2)] = null);

(statearr_38218_38228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__28756__auto___38226))
;
return ((function (switch__28644__auto__,c__28756__auto___38226){
return (function() {
var curvecalc$upload$core$state_machine__28645__auto__ = null;
var curvecalc$upload$core$state_machine__28645__auto____0 = (function (){
var statearr_38222 = [null,null,null,null,null,null,null,null];
(statearr_38222[(0)] = curvecalc$upload$core$state_machine__28645__auto__);

(statearr_38222[(1)] = (1));

return statearr_38222;
});
var curvecalc$upload$core$state_machine__28645__auto____1 = (function (state_38214){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_38214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e38223){if((e38223 instanceof Object)){
var ex__28648__auto__ = e38223;
var statearr_38224_38229 = state_38214;
(statearr_38224_38229[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38230 = state_38214;
state_38214 = G__38230;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
curvecalc$upload$core$state_machine__28645__auto__ = function(state_38214){
switch(arguments.length){
case 0:
return curvecalc$upload$core$state_machine__28645__auto____0.call(this);
case 1:
return curvecalc$upload$core$state_machine__28645__auto____1.call(this,state_38214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
curvecalc$upload$core$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = curvecalc$upload$core$state_machine__28645__auto____0;
curvecalc$upload$core$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = curvecalc$upload$core$state_machine__28645__auto____1;
return curvecalc$upload$core$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___38226))
})();
var state__28758__auto__ = (function (){var statearr_38225 = f__28757__auto__.call(null);
(statearr_38225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___38226);

return statearr_38225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___38226))
);

curvecalc.upload.core.input_component = (function curvecalc$upload$core$input_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"file",new cljs.core.Keyword(null,"title","title",636505583),"upload",new cljs.core.Keyword(null,"accept","accept",1874130431),".csv",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),curvecalc.upload.core.put_upload], null)], null);
});
curvecalc.upload.core.explanation_component = (function curvecalc$upload$core$explanation_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Experimental functionality to validate existing grade lists.  Right now, you can select a csv file (Excel will export a worksheet as csv) with the grades in the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"second column"], null)," (mandatory) and the program will compare the grade distribution to the rules and tell you if it matches, or, if it doesn't match, what went wrong."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Supply your file below. Note that this file doesn't actually send it to any server---it just analyzes the file within your browser, so student privacy is preserved."], null)], null);
});
curvecalc.upload.core.disclaimer_component = (function curvecalc$upload$core$disclaimer_component(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Notes and disclaimers"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This functionality is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"experimental"], null),": I have tested it against a couple known-correct distributions, but have not done so exhaustively. For now, you should make your own count."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For the median in the case of even-numbered grade counts, this currently gives the two central numbers rather than averaging them. Also, when there are at least 30 students, in addition to accepting 3.3-3.3 and 3.2-3.4, the validator accepts 3.2-3.3 and 3.3-3.4 (medians 3.25 and 3.35, respectively)."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Currently, fractional numbers of students within a grade bucket are not rounded, which for validation is the functional equivalent of rounding down."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Future Enhancements:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"More testing and confidence about the correctness of the validation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"An option to choose how to handle medians in even-numbered grade lists"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"An option to round fractional numbers of students up, down, or to nearest whole number."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Suggested curved grades from a csv of raw grades (eventually, maybe, if I can figure out a good heuristic)."], null)], null)], null);
});
curvecalc.upload.core.file_upload_component = (function curvecalc$upload$core$file_upload_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.upload.core.explanation_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.upload.core.input_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.upload.display.validation_component,cljs.core.deref.call(null,curvecalc.state.file_data)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.upload.display.buckets_component,cljs.core.deref.call(null,curvecalc.state.file_data)], null)], null);
});
curvecalc.upload.core.validation_page = (function curvecalc$upload$core$validation_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Iowa Law Grade Curve Validator (Experimental)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.upload.core.file_upload_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.upload.core.disclaimer_component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.footer.footer_component,curvecalc.upload.core.calculate,"calculate a curve"], null)], null);
});

//# sourceMappingURL=core.js.map?rel=1491429254427
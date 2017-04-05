// Compiled by ClojureScript 1.9.229 {}
goog.provide('curvecalc.upload.validate');
goog.require('cljs.core');
goog.require('curvecalc.calc');
goog.require('curvecalc.stringstuff');
curvecalc.upload.validate.choose_distro = (function curvecalc$upload$validate$choose_distro(numgrades){
if((numgrades >= (30))){
return new cljs.core.Keyword(null,"complex","complex",1415610825);
} else {
return new cljs.core.Keyword(null,"simple","simple",-581868663);
}
});
curvecalc.upload.validate.sorted_gradelist = (function curvecalc$upload$validate$sorted_gradelist(column){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__37739_SHARP_){
return parseFloat(p1__37739_SHARP_);
}),cljs.core.remove.call(null,(function (p1__37740_SHARP_){
return isNaN(parseFloat(p1__37740_SHARP_));
}),column))));
});
/**
 * sorted numeric list -> vector of length 1 or 2 w median(s). nil for length below 2. needs testing for 2, 3.
 */
curvecalc.upload.validate.find_median = (function curvecalc$upload$validate$find_median(sgl){
var c = cljs.core.count.call(null,sgl);
if((c < (2))){
return null;
} else {
if(cljs.core.even_QMARK_.call(null,c)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,sgl,((c / (2)) - (1))),cljs.core.nth.call(null,sgl,(c / (2)))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,sgl,cljs.core.quot.call(null,c,(2)))], null);
}
}
});
curvecalc.upload.validate.median_valid_QMARK_ = (function curvecalc$upload$validate$median_valid_QMARK_(median,c,distro_key){
if(cljs.core._EQ_.call(null,distro_key,new cljs.core.Keyword(null,"simple","simple",-581868663))){
if(cljs.core._EQ_.call(null,c,(1))){
return ((3.4 >= cljs.core.first.call(null,median))) && ((cljs.core.first.call(null,median) >= 3.2));
} else {
if(cljs.core._EQ_.call(null,c,(2))){
return ((3.4 >= cljs.core.first.call(null,median))) && (((cljs.core.first.call(null,median) >= cljs.core.second.call(null,median))) && ((cljs.core.second.call(null,median) >= 3.2)));
} else {
return null;
}
}
} else {
if(cljs.core._EQ_.call(null,c,(1))){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,median),3.3);
} else {
if(cljs.core._EQ_.call(null,c,(2))){
return ((cljs.core.first.call(null,median) >= 3.2)) && ((3.4 >= cljs.core.second.call(null,median)));
} else {
return null;
}
}
}
});
/**
 * in: grade list, sorted, non-grades stripped.
 *   out: string that reports whether the median is compliant or not. 
 */
curvecalc.upload.validate.report_median = (function curvecalc$upload$validate$report_median(sgl){
var median = curvecalc.upload.validate.find_median.call(null,sgl);
var c = cljs.core.count.call(null,median);
var distro_key = curvecalc.upload.validate.choose_distro.call(null,cljs.core.count.call(null,sgl));
var isvalid = curvecalc.upload.validate.median_valid_QMARK_.call(null,median,c,distro_key);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid","valid",155614240),isvalid,new cljs.core.Keyword(null,"details","details",1956795411),((cljs.core._EQ_.call(null,c,(1)))?[cljs.core.str("Median: "),cljs.core.str(cljs.core.first.call(null,median))].join(''):((cljs.core._EQ_.call(null,c,(2)))?[cljs.core.str("Median: "),cljs.core.str(cljs.core.first.call(null,median)),cljs.core.str("-"),cljs.core.str(cljs.core.second.call(null,median))].join(''):null
))], null);
});
curvecalc.upload.validate.find_bucket = (function curvecalc$upload$validate$find_bucket(grade){
if(((4.3 >= grade)) && ((grade >= 4.2))){
return new cljs.core.Keyword(null,"A+","A+",-506615591);
} else {
if(((4.1 >= grade)) && ((grade >= 3.9))){
return new cljs.core.Keyword(null,"A","A",-1688942394);
} else {
if(((3.8 >= grade)) && ((grade >= 3.6))){
return new cljs.core.Keyword(null,"A-","A-",-392643379);
} else {
if(((3.5 >= grade)) && ((grade >= 3.3))){
return new cljs.core.Keyword(null,"B+","B+",1469862310);
} else {
if(((3.2 >= grade)) && ((grade >= 3.0))){
return new cljs.core.Keyword(null,"B","B",-1422503380);
} else {
if(((2.9 >= grade)) && ((grade >= 2.7))){
return new cljs.core.Keyword(null,"B-","B-",278777862);
} else {
if(((2.6 >= grade)) && ((grade >= 2.4))){
return new cljs.core.Keyword(null,"C+","C+",1401644091);
} else {
if((2.3 >= grade)){
return new cljs.core.Keyword(null,"C-F","C-F",1359693352);
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
});
curvecalc.upload.validate.bucketizer = (function curvecalc$upload$validate$bucketizer(column){
return cljs.core.frequencies.call(null,cljs.core.mapv.call(null,curvecalc.upload.validate.find_bucket,column));
});
curvecalc.upload.validate.combine_buckets = (function curvecalc$upload$validate$combine_buckets(numgrades,buckets){
if((numgrades >= (30))){
return buckets;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"A+_to_A-","A+_to_A-",-1684637623),((new cljs.core.Keyword(null,"A+","A+",-506615591).cljs$core$IFn$_invoke$arity$1(buckets) + new cljs.core.Keyword(null,"A","A",-1688942394).cljs$core$IFn$_invoke$arity$1(buckets)) + new cljs.core.Keyword(null,"A-","A-",-392643379).cljs$core$IFn$_invoke$arity$1(buckets)),new cljs.core.Keyword(null,"B+","B+",1469862310),new cljs.core.Keyword(null,"B+","B+",1469862310).cljs$core$IFn$_invoke$arity$1(buckets),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"B","B",-1422503380).cljs$core$IFn$_invoke$arity$1(buckets),new cljs.core.Keyword(null,"B-_to_F","B-_to_F",2107740606),((new cljs.core.Keyword(null,"B-","B-",278777862).cljs$core$IFn$_invoke$arity$1(buckets) + new cljs.core.Keyword(null,"C+","C+",1401644091).cljs$core$IFn$_invoke$arity$1(buckets)) + new cljs.core.Keyword(null,"C-F","C-F",1359693352).cljs$core$IFn$_invoke$arity$1(buckets))], null);
}
});
curvecalc.upload.validate.validate_one_grade = (function curvecalc$upload$validate$validate_one_grade(distro,buckets,grade_key){
var subdistro = grade_key.call(null,distro);
var numingrade = grade_key.call(null,buckets);
var minimum = curvecalc.stringstuff.dig1.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(subdistro));
var maximum = curvecalc.stringstuff.dig1.call(null,new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(subdistro));
var label = [cljs.core.str(cljs.core.name.call(null,grade_key)),cljs.core.str(": "),cljs.core.str(curvecalc.stringstuff.range_stringer.call(null,subdistro))].join('');
if(((maximum >= numingrade)) && ((numingrade >= minimum))){
return cljs.core.PersistentArrayMap.fromArray([grade_key,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"evaluation","evaluation",639392018),new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"fault","fault",-1838508432),null,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"maximum","maximum",573880714),maximum,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),minimum,new cljs.core.Keyword(null,"numingrade","numingrade",-1130779983),numingrade], null)], true, false);
} else {
if((numingrade > maximum)){
return cljs.core.PersistentArrayMap.fromArray([grade_key,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"evaluation","evaluation",639392018),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"fault","fault",-1838508432),new cljs.core.Keyword(null,"high","high",2027297808),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"maximum","maximum",573880714),maximum,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),minimum,new cljs.core.Keyword(null,"numingrade","numingrade",-1130779983),numingrade], null)], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([grade_key,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"evaluation","evaluation",639392018),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"fault","fault",-1838508432),new cljs.core.Keyword(null,"low","low",-1601362409),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),minimum,new cljs.core.Keyword(null,"maximum","maximum",573880714),maximum,new cljs.core.Keyword(null,"numingrade","numingrade",-1130779983),numingrade], null)], true, false);

}
}
});
curvecalc.upload.validate.validate_grades = (function curvecalc$upload$validate$validate_grades(column,numgrades,distro_key,keyorder){
var distro = curvecalc.calc.permissible_distributions.call(null,numgrades,distro_key);
var buckets = curvecalc.upload.validate.combine_buckets.call(null,numgrades,curvecalc.upload.validate.bucketizer.call(null,column));
var validator = cljs.core.partial.call(null,curvecalc.upload.validate.validate_one_grade,distro,buckets);
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (distro,buckets,validator){
return (function (p1__37741_SHARP_){
return validator.call(null,p1__37741_SHARP_);
});})(distro,buckets,validator))
,keyorder));
});
curvecalc.upload.validate.buckets_valid_QMARK_ = (function curvecalc$upload$validate$buckets_valid_QMARK_(keyorder,validation){
var bools = cljs.core.mapv.call(null,(function (p1__37742_SHARP_){
return new cljs.core.Keyword(null,"evaluation","evaluation",639392018).cljs$core$IFn$_invoke$arity$1(p1__37742_SHARP_.call(null,validation));
}),keyorder);
return cljs.core.every_QMARK_.call(null,((function (bools){
return (function (p1__37743_SHARP_){
return cljs.core._EQ_.call(null,p1__37743_SHARP_,new cljs.core.Keyword(null,"valid","valid",155614240));
});})(bools))
,bools);
});
curvecalc.upload.validate.report_builder = (function curvecalc$upload$validate$report_builder(validation,grade_key){
var subscore = grade_key.call(null,validation);
var map__37746 = subscore;
var map__37746__$1 = ((((!((map__37746 == null)))?((((map__37746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37746):map__37746);
var label = cljs.core.get.call(null,map__37746__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var evaluation = cljs.core.get.call(null,map__37746__$1,new cljs.core.Keyword(null,"evaluation","evaluation",639392018));
var fault = cljs.core.get.call(null,map__37746__$1,new cljs.core.Keyword(null,"fault","fault",-1838508432));
var maximum = cljs.core.get.call(null,map__37746__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var minimum = cljs.core.get.call(null,map__37746__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var numingrade = cljs.core.get.call(null,map__37746__$1,new cljs.core.Keyword(null,"numingrade","numingrade",-1130779983));
if(cljs.core._EQ_.call(null,evaluation,new cljs.core.Keyword(null,"valid","valid",155614240))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(label),cljs.core.str(": Valid! Max: "),cljs.core.str(maximum),cljs.core.str(" Min: "),cljs.core.str(minimum),cljs.core.str(" Number: "),cljs.core.str(numingrade)].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(label),cljs.core.str(": INVALID! :-( Max: "),cljs.core.str(maximum),cljs.core.str(" Min: "),cljs.core.str(minimum),cljs.core.str(" Number: "),cljs.core.str(numingrade)].join('')], null);

}
});
curvecalc.upload.validate.report_validation = (function curvecalc$upload$validate$report_validation(sgl){
var numgrades = cljs.core.count.call(null,sgl);
var distro_key = curvecalc.upload.validate.choose_distro.call(null,numgrades);
var keyorder = curvecalc.calc.order_of_keys.call(null,distro_key);
var validation = curvecalc.upload.validate.validate_grades.call(null,sgl,numgrades,distro_key,keyorder);
var reporter = cljs.core.partial.call(null,curvecalc.upload.validate.report_builder,validation);
var isvalid = curvecalc.upload.validate.buckets_valid_QMARK_.call(null,keyorder,validation);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid","valid",155614240),isvalid,new cljs.core.Keyword(null,"details","details",1956795411),cljs.core.mapv.call(null,reporter,keyorder)], null);
});

//# sourceMappingURL=validate.js.map?rel=1491429252757
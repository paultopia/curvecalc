// Compiled by ClojureScript 1.9.229 {}
goog.provide('curvecalc.calcview');
goog.require('cljs.core');
goog.require('curvecalc.state');
goog.require('reagent.core');
goog.require('curvecalc.footer');
goog.require('curvecalc.calc');
goog.require('curvecalc.stringstuff');
curvecalc.calcview.validate = (function curvecalc$calcview$validate(){
return curvecalc.core.load_validation.call(null);
});
curvecalc.calcview.input_field = (function curvecalc$calcview$input_field(val_atom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val_atom),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38903_SHARP_){
return cljs.core.reset_BANG_.call(null,val_atom,p1__38903_SHARP_.target.value);
})], null)], null);
});
curvecalc.calcview.row_component = (function curvecalc$calcview$row_component(grange,distros,distro_key){
var this_grade = grange.call(null,distros);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(cljs.core.name.call(null,grange))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),curvecalc.stringstuff.range_stringer.call(null,this_grade)], null),((cljs.core._EQ_.call(null,distro_key,new cljs.core.Keyword(null,"complex","complex",1415610825)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),curvecalc.stringstuff.dig2.call(null,new cljs.core.Keyword(null,"norm","norm",-1440124407).cljs$core$IFn$_invoke$arity$1(this_grade))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),curvecalc.stringstuff.dig2.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this_grade))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),curvecalc.stringstuff.dig2.call(null,new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this_grade))], null)], null);
});
curvecalc.calcview.body_component = (function curvecalc$calcview$body_component(num_students,distro_key){
var distros = curvecalc.calc.permissible_distributions.call(null,num_students,distro_key);
var rows = (function (){var iter__25581__auto__ = ((function (distros){
return (function curvecalc$calcview$body_component_$_iter__38908(s__38909){
return (new cljs.core.LazySeq(null,((function (distros){
return (function (){
var s__38909__$1 = s__38909;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38909__$1);
if(temp__4657__auto__){
var s__38909__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38909__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38909__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38911 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38910 = (0);
while(true){
if((i__38910 < size__25580__auto__)){
var x = cljs.core._nth.call(null,c__25579__auto__,i__38910);
cljs.core.chunk_append.call(null,b__38911,curvecalc.calcview.row_component.call(null,x,distros,distro_key));

var G__38912 = (i__38910 + (1));
i__38910 = G__38912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38911),curvecalc$calcview$body_component_$_iter__38908.call(null,cljs.core.chunk_rest.call(null,s__38909__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38911),null);
}
} else {
var x = cljs.core.first.call(null,s__38909__$2);
return cljs.core.cons.call(null,curvecalc.calcview.row_component.call(null,x,distros,distro_key),curvecalc$calcview$body_component_$_iter__38908.call(null,cljs.core.rest.call(null,s__38909__$2)));
}
} else {
return null;
}
break;
}
});})(distros))
,null,null));
});})(distros))
;
return iter__25581__auto__.call(null,curvecalc.calc.order_of_keys.call(null,distro_key));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),rows], null);
});
curvecalc.calcview.table_component = (function curvecalc$calcview$table_component(num_students,distro_key){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.u-full-width","table.u-full-width",1728531887),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Grade"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Score Range"], null),((cljs.core._EQ_.call(null,distro_key,new cljs.core.Keyword(null,"complex","complex",1415610825)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Norm"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Min"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Max"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.calcview.body_component,num_students,distro_key], null)], null);
});
curvecalc.calcview.explainer_component = (function curvecalc$calcview$explainer_component(distro_key){
if(cljs.core._EQ_.call(null,distro_key,new cljs.core.Keyword(null,"complex","complex",1415610825))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This table displays the curve that applies to classes of 30 students or more, per Student Handbook II.B.2. If you want to display the curve that applies to classes under 30 students (Handbook II.B.3), click the button below."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This table displays the curve that applies to classes under 30 students, per Student Handbook II.B.3. If you want to display the curve that applies to classes of 30 students or greater (Handbook II.B.2), click the button below."], null);
}
});
curvecalc.calcview.calculation_page = (function curvecalc$calcview$calculation_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Iowa Law Grade Curve Calculator"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Enter the number of students: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.calcview.input_field,curvecalc.state.numstuds], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.calcview.table_component,cljs.core.deref.call(null,curvecalc.state.numstuds),cljs.core.deref.call(null,curvecalc.state.distribution)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.calcview.explainer_component,cljs.core.deref.call(null,curvecalc.state.distribution)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,curvecalc.state.distribution,curvecalc.calc.distroset,cljs.core.deref.call(null,curvecalc.state.distribution));
})], null),"Swap distributions."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curvecalc.footer.footer_component,curvecalc.calcview.validate,"validate your grades"], null)], null);
});

//# sourceMappingURL=calcview.js.map?rel=1490992390009
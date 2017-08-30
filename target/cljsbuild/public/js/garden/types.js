// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('garden.types');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k19003,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__19007 = k19003;
var G__19007__$1 = (((G__19007 instanceof cljs.core.Keyword))?G__19007.fqn:null);
switch (G__19007__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19003,else__8355__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#garden.types.CSSUnit{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unit,self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$magnitude,self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19002){
var self__ = this;
var G__19002__$1 = this;
return (new cljs.core.RecordIter((0),G__19002__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unit,cljs.core.cst$kw$magnitude], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__19008 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__19008(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19004,other19005){
var self__ = this;
var this19004__$1 = this;
return (!((other19005 == null))) && ((this19004__$1.constructor === other19005.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19004__$1.unit,other19005.unit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19004__$1.magnitude,other19005.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19004__$1.__extmap,other19005.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$unit,null,cljs.core.cst$kw$magnitude,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__19002){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__19009 = cljs.core.keyword_identical_QMARK_;
var expr__19010 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__19012 = cljs.core.cst$kw$unit;
var G__19013 = expr__19010;
return (pred__19009.cljs$core$IFn$_invoke$arity$2 ? pred__19009.cljs$core$IFn$_invoke$arity$2(G__19012,G__19013) : pred__19009.call(null,G__19012,G__19013));
})())){
return (new garden.types.CSSUnit(G__19002,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19014 = cljs.core.cst$kw$magnitude;
var G__19015 = expr__19010;
return (pred__19009.cljs$core$IFn$_invoke$arity$2 ? pred__19009.cljs$core$IFn$_invoke$arity$2(G__19014,G__19015) : pred__19009.call(null,G__19014,G__19015));
})())){
return (new garden.types.CSSUnit(self__.unit,G__19002,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__19002),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unit,self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$magnitude,self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__19002){
var self__ = this;
var this__8351__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__19002,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$unit,cljs.core.cst$sym$magnitude], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__19006){
return (new garden.types.CSSUnit(cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(G__19006),cljs.core.cst$kw$magnitude.cljs$core$IFn$_invoke$arity$1(G__19006),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19006,cljs.core.cst$kw$unit,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$magnitude], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k19018,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__19022 = k19018;
var G__19022__$1 = (((G__19022 instanceof cljs.core.Keyword))?G__19022.fqn:null);
switch (G__19022__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19018,else__8355__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#garden.types.CSSFunction{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$function,self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19017){
var self__ = this;
var G__19017__$1 = this;
return (new cljs.core.RecordIter((0),G__19017__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$function,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__19023 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__19023(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19019,other19020){
var self__ = this;
var this19019__$1 = this;
return (!((other19020 == null))) && ((this19019__$1.constructor === other19020.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19019__$1.function,other19020.function)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19019__$1.args,other19020.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19019__$1.__extmap,other19020.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$function,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__19017){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__19024 = cljs.core.keyword_identical_QMARK_;
var expr__19025 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__19027 = cljs.core.cst$kw$function;
var G__19028 = expr__19025;
return (pred__19024.cljs$core$IFn$_invoke$arity$2 ? pred__19024.cljs$core$IFn$_invoke$arity$2(G__19027,G__19028) : pred__19024.call(null,G__19027,G__19028));
})())){
return (new garden.types.CSSFunction(G__19017,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19029 = cljs.core.cst$kw$args;
var G__19030 = expr__19025;
return (pred__19024.cljs$core$IFn$_invoke$arity$2 ? pred__19024.cljs$core$IFn$_invoke$arity$2(G__19029,G__19030) : pred__19024.call(null,G__19029,G__19030));
})())){
return (new garden.types.CSSFunction(self__.function$,G__19017,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__19017),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$function,self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__19017){
var self__ = this;
var this__8351__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__19017,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$function,cljs.core.cst$sym$args], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__19021){
return (new garden.types.CSSFunction(cljs.core.cst$kw$function.cljs$core$IFn$_invoke$arity$1(G__19021),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__19021),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19021,cljs.core.cst$kw$function,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k19033,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__19037 = k19033;
var G__19037__$1 = (((G__19037 instanceof cljs.core.Keyword))?G__19037.fqn:null);
switch (G__19037__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19033,else__8355__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#garden.types.CSSAtRule{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$identifier,self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19032){
var self__ = this;
var G__19032__$1 = this;
return (new cljs.core.RecordIter((0),G__19032__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$identifier,cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__19038 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__19038(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19034,other19035){
var self__ = this;
var this19034__$1 = this;
return (!((other19035 == null))) && ((this19034__$1.constructor === other19035.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19034__$1.identifier,other19035.identifier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19034__$1.value,other19035.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19034__$1.__extmap,other19035.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$identifier,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__19032){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__19039 = cljs.core.keyword_identical_QMARK_;
var expr__19040 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__19042 = cljs.core.cst$kw$identifier;
var G__19043 = expr__19040;
return (pred__19039.cljs$core$IFn$_invoke$arity$2 ? pred__19039.cljs$core$IFn$_invoke$arity$2(G__19042,G__19043) : pred__19039.call(null,G__19042,G__19043));
})())){
return (new garden.types.CSSAtRule(G__19032,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19044 = cljs.core.cst$kw$value;
var G__19045 = expr__19040;
return (pred__19039.cljs$core$IFn$_invoke$arity$2 ? pred__19039.cljs$core$IFn$_invoke$arity$2(G__19044,G__19045) : pred__19039.call(null,G__19044,G__19045));
})())){
return (new garden.types.CSSAtRule(self__.identifier,G__19032,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__19032),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$identifier,self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__19032){
var self__ = this;
var this__8351__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__19032,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$identifier,cljs.core.cst$sym$value], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__19036){
return (new garden.types.CSSAtRule(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(G__19036),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__19036),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19036,cljs.core.cst$kw$identifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value], 0))),null));
});


// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.fast_zip');
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
andel.fast_zip.ZipperOps = (function (branch_QMARK_,children,make_node,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs,__meta,__extmap,__hash){
this.branch_QMARK_ = branch_QMARK_;
this.children = children;
this.make_node = make_node;
this.reducing_fn = reducing_fn;
this.metrics_fn = metrics_fn;
this.leaf_overflown_QMARK_ = leaf_overflown_QMARK_;
this.split_thresh = split_thresh;
this.split_leaf = split_leaf;
this.leaf_underflown_QMARK_ = leaf_underflown_QMARK_;
this.merge_leafs = merge_leafs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.fast_zip.ZipperOps.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

andel.fast_zip.ZipperOps.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k14424,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__14428 = k14424;
var G__14428__$1 = (((G__14428 instanceof cljs.core.Keyword))?G__14428.fqn:null);
switch (G__14428__$1) {
case "branch?":
return self__.branch_QMARK_;

break;
case "children":
return self__.children;

break;
case "make-node":
return self__.make_node;

break;
case "reducing-fn":
return self__.reducing_fn;

break;
case "metrics-fn":
return self__.metrics_fn;

break;
case "leaf-overflown?":
return self__.leaf_overflown_QMARK_;

break;
case "split-thresh":
return self__.split_thresh;

break;
case "split-leaf":
return self__.split_leaf;

break;
case "leaf-underflown?":
return self__.leaf_underflown_QMARK_;

break;
case "merge-leafs":
return self__.merge_leafs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14424,else__8355__auto__);

}
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#andel.fast-zip.ZipperOps{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$branch_QMARK_,self__.branch_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$children,self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$make_DASH_node,self__.make_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reducing_DASH_fn,self__.reducing_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$metrics_DASH_fn,self__.metrics_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$leaf_DASH_overflown_QMARK_,self__.leaf_overflown_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$split_DASH_thresh,self__.split_thresh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$split_DASH_leaf,self__.split_leaf],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$leaf_DASH_underflown_QMARK_,self__.leaf_underflown_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$merge_DASH_leafs,self__.merge_leafs],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14423){
var self__ = this;
var G__14423__$1 = this;
return (new cljs.core.RecordIter((0),G__14423__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$branch_QMARK_,cljs.core.cst$kw$children,cljs.core.cst$kw$make_DASH_node,cljs.core.cst$kw$reducing_DASH_fn,cljs.core.cst$kw$metrics_DASH_fn,cljs.core.cst$kw$leaf_DASH_overflown_QMARK_,cljs.core.cst$kw$split_DASH_thresh,cljs.core.cst$kw$split_DASH_leaf,cljs.core.cst$kw$leaf_DASH_underflown_QMARK_,cljs.core.cst$kw$merge_DASH_leafs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

andel.fast_zip.ZipperOps.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__14429 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (-1153757937 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__14429(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14425,other14426){
var self__ = this;
var this14425__$1 = this;
return (!((other14426 == null))) && ((this14425__$1.constructor === other14426.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14425__$1.branch_QMARK_,other14426.branch_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14425__$1.children,other14426.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14425__$1.make_node,other14426.make_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14425__$1.reducing_fn,other14426.reducing_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14425__$1.metrics_fn,other14426.metrics_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14425__$1.leaf_overflown_QMARK_,other14426.leaf_overflown_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14425__$1.split_thresh,other14426.split_thresh)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14425__$1.split_leaf,other14426.split_leaf)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14425__$1.leaf_underflown_QMARK_,other14426.leaf_underflown_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14425__$1.merge_leafs,other14426.merge_leafs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14425__$1.__extmap,other14426.__extmap));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$branch_QMARK_,null,cljs.core.cst$kw$children,null,cljs.core.cst$kw$make_DASH_node,null,cljs.core.cst$kw$leaf_DASH_underflown_QMARK_,null,cljs.core.cst$kw$split_DASH_thresh,null,cljs.core.cst$kw$merge_DASH_leafs,null,cljs.core.cst$kw$split_DASH_leaf,null,cljs.core.cst$kw$leaf_DASH_overflown_QMARK_,null,cljs.core.cst$kw$metrics_DASH_fn,null,cljs.core.cst$kw$reducing_DASH_fn,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__14423){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__14430 = cljs.core.keyword_identical_QMARK_;
var expr__14431 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__14433 = cljs.core.cst$kw$branch_QMARK_;
var G__14434 = expr__14431;
return (pred__14430.cljs$core$IFn$_invoke$arity$2 ? pred__14430.cljs$core$IFn$_invoke$arity$2(G__14433,G__14434) : pred__14430.call(null,G__14433,G__14434));
})())){
return (new andel.fast_zip.ZipperOps(G__14423,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14435 = cljs.core.cst$kw$children;
var G__14436 = expr__14431;
return (pred__14430.cljs$core$IFn$_invoke$arity$2 ? pred__14430.cljs$core$IFn$_invoke$arity$2(G__14435,G__14436) : pred__14430.call(null,G__14435,G__14436));
})())){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,G__14423,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14437 = cljs.core.cst$kw$make_DASH_node;
var G__14438 = expr__14431;
return (pred__14430.cljs$core$IFn$_invoke$arity$2 ? pred__14430.cljs$core$IFn$_invoke$arity$2(G__14437,G__14438) : pred__14430.call(null,G__14437,G__14438));
})())){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,G__14423,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14439 = cljs.core.cst$kw$reducing_DASH_fn;
var G__14440 = expr__14431;
return (pred__14430.cljs$core$IFn$_invoke$arity$2 ? pred__14430.cljs$core$IFn$_invoke$arity$2(G__14439,G__14440) : pred__14430.call(null,G__14439,G__14440));
})())){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,G__14423,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14441 = cljs.core.cst$kw$metrics_DASH_fn;
var G__14442 = expr__14431;
return (pred__14430.cljs$core$IFn$_invoke$arity$2 ? pred__14430.cljs$core$IFn$_invoke$arity$2(G__14441,G__14442) : pred__14430.call(null,G__14441,G__14442));
})())){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,G__14423,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14443 = cljs.core.cst$kw$leaf_DASH_overflown_QMARK_;
var G__14444 = expr__14431;
return (pred__14430.cljs$core$IFn$_invoke$arity$2 ? pred__14430.cljs$core$IFn$_invoke$arity$2(G__14443,G__14444) : pred__14430.call(null,G__14443,G__14444));
})())){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,G__14423,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14445 = cljs.core.cst$kw$split_DASH_thresh;
var G__14446 = expr__14431;
return (pred__14430.cljs$core$IFn$_invoke$arity$2 ? pred__14430.cljs$core$IFn$_invoke$arity$2(G__14445,G__14446) : pred__14430.call(null,G__14445,G__14446));
})())){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,G__14423,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14447 = cljs.core.cst$kw$split_DASH_leaf;
var G__14448 = expr__14431;
return (pred__14430.cljs$core$IFn$_invoke$arity$2 ? pred__14430.cljs$core$IFn$_invoke$arity$2(G__14447,G__14448) : pred__14430.call(null,G__14447,G__14448));
})())){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,G__14423,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14449 = cljs.core.cst$kw$leaf_DASH_underflown_QMARK_;
var G__14450 = expr__14431;
return (pred__14430.cljs$core$IFn$_invoke$arity$2 ? pred__14430.cljs$core$IFn$_invoke$arity$2(G__14449,G__14450) : pred__14430.call(null,G__14449,G__14450));
})())){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,G__14423,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14451 = cljs.core.cst$kw$merge_DASH_leafs;
var G__14452 = expr__14431;
return (pred__14430.cljs$core$IFn$_invoke$arity$2 ? pred__14430.cljs$core$IFn$_invoke$arity$2(G__14451,G__14452) : pred__14430.call(null,G__14451,G__14452));
})())){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,G__14423,self__.__meta,self__.__extmap,null));
} else {
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__14423),null));
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
});

andel.fast_zip.ZipperOps.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$branch_QMARK_,self__.branch_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$children,self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$make_DASH_node,self__.make_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reducing_DASH_fn,self__.reducing_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$metrics_DASH_fn,self__.metrics_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$leaf_DASH_overflown_QMARK_,self__.leaf_overflown_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$split_DASH_thresh,self__.split_thresh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$split_DASH_leaf,self__.split_leaf],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$leaf_DASH_underflown_QMARK_,self__.leaf_underflown_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$merge_DASH_leafs,self__.merge_leafs],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__14423){
var self__ = this;
var this__8351__auto____$1 = this;
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,G__14423,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

andel.fast_zip.ZipperOps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$branch_QMARK_,cljs.core.cst$sym$children,cljs.core.cst$sym$make_DASH_node,cljs.core.cst$sym$reducing_DASH_fn,cljs.core.cst$sym$metrics_DASH_fn,cljs.core.cst$sym$leaf_DASH_overflown_QMARK_,cljs.core.cst$sym$split_DASH_thresh,cljs.core.cst$sym$split_DASH_leaf,cljs.core.cst$sym$leaf_DASH_underflown_QMARK_,cljs.core.cst$sym$merge_DASH_leafs], null);
});

andel.fast_zip.ZipperOps.cljs$lang$type = true;

andel.fast_zip.ZipperOps.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"andel.fast-zip/ZipperOps");
});

andel.fast_zip.ZipperOps.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"andel.fast-zip/ZipperOps");
});

andel.fast_zip.__GT_ZipperOps = (function andel$fast_zip$__GT_ZipperOps(branch_QMARK_,children,make_node,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs){
return (new andel.fast_zip.ZipperOps(branch_QMARK_,children,make_node,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs,null,null,null));
});

andel.fast_zip.map__GT_ZipperOps = (function andel$fast_zip$map__GT_ZipperOps(G__14427){
return (new andel.fast_zip.ZipperOps(cljs.core.cst$kw$branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14427),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__14427),cljs.core.cst$kw$make_DASH_node.cljs$core$IFn$_invoke$arity$1(G__14427),cljs.core.cst$kw$reducing_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__14427),cljs.core.cst$kw$metrics_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__14427),cljs.core.cst$kw$leaf_DASH_overflown_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14427),cljs.core.cst$kw$split_DASH_thresh.cljs$core$IFn$_invoke$arity$1(G__14427),cljs.core.cst$kw$split_DASH_leaf.cljs$core$IFn$_invoke$arity$1(G__14427),cljs.core.cst$kw$leaf_DASH_underflown_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14427),cljs.core.cst$kw$merge_DASH_leafs.cljs$core$IFn$_invoke$arity$1(G__14427),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14427,cljs.core.cst$kw$branch_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$children,cljs.core.cst$kw$make_DASH_node,cljs.core.cst$kw$reducing_DASH_fn,cljs.core.cst$kw$metrics_DASH_fn,cljs.core.cst$kw$leaf_DASH_overflown_QMARK_,cljs.core.cst$kw$split_DASH_thresh,cljs.core.cst$kw$split_DASH_leaf,cljs.core.cst$kw$leaf_DASH_underflown_QMARK_,cljs.core.cst$kw$merge_DASH_leafs], 0))),null));
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
andel.fast_zip.ZipperPath = (function (l,r,ppath,pnodes,changed_QMARK_,acc,o_acc,__meta,__extmap,__hash){
this.l = l;
this.r = r;
this.ppath = ppath;
this.pnodes = pnodes;
this.changed_QMARK_ = changed_QMARK_;
this.acc = acc;
this.o_acc = o_acc;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.fast_zip.ZipperPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

andel.fast_zip.ZipperPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k14455,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__14459 = k14455;
var G__14459__$1 = (((G__14459 instanceof cljs.core.Keyword))?G__14459.fqn:null);
switch (G__14459__$1) {
case "l":
return self__.l;

break;
case "r":
return self__.r;

break;
case "ppath":
return self__.ppath;

break;
case "pnodes":
return self__.pnodes;

break;
case "changed?":
return self__.changed_QMARK_;

break;
case "acc":
return self__.acc;

break;
case "o-acc":
return self__.o_acc;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14455,else__8355__auto__);

}
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#andel.fast-zip.ZipperPath{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$l,self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$r,self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ppath,self__.ppath],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pnodes,self__.pnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$changed_QMARK_,self__.changed_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$acc,self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$o_DASH_acc,self__.o_acc],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14454){
var self__ = this;
var G__14454__$1 = this;
return (new cljs.core.RecordIter((0),G__14454__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l,cljs.core.cst$kw$r,cljs.core.cst$kw$ppath,cljs.core.cst$kw$pnodes,cljs.core.cst$kw$changed_QMARK_,cljs.core.cst$kw$acc,cljs.core.cst$kw$o_DASH_acc], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

andel.fast_zip.ZipperPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__14460 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (-723150065 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__14460(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14456,other14457){
var self__ = this;
var this14456__$1 = this;
return (!((other14457 == null))) && ((this14456__$1.constructor === other14457.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14456__$1.l,other14457.l)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14456__$1.r,other14457.r)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14456__$1.ppath,other14457.ppath)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14456__$1.pnodes,other14457.pnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14456__$1.changed_QMARK_,other14457.changed_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14456__$1.acc,other14457.acc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14456__$1.o_acc,other14457.o_acc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14456__$1.__extmap,other14457.__extmap));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$ppath,null,cljs.core.cst$kw$r,null,cljs.core.cst$kw$acc,null,cljs.core.cst$kw$o_DASH_acc,null,cljs.core.cst$kw$l,null,cljs.core.cst$kw$pnodes,null,cljs.core.cst$kw$changed_QMARK_,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__14454){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__14461 = cljs.core.keyword_identical_QMARK_;
var expr__14462 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__14464 = cljs.core.cst$kw$l;
var G__14465 = expr__14462;
return (pred__14461.cljs$core$IFn$_invoke$arity$2 ? pred__14461.cljs$core$IFn$_invoke$arity$2(G__14464,G__14465) : pred__14461.call(null,G__14464,G__14465));
})())){
return (new andel.fast_zip.ZipperPath(G__14454,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14466 = cljs.core.cst$kw$r;
var G__14467 = expr__14462;
return (pred__14461.cljs$core$IFn$_invoke$arity$2 ? pred__14461.cljs$core$IFn$_invoke$arity$2(G__14466,G__14467) : pred__14461.call(null,G__14466,G__14467));
})())){
return (new andel.fast_zip.ZipperPath(self__.l,G__14454,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14468 = cljs.core.cst$kw$ppath;
var G__14469 = expr__14462;
return (pred__14461.cljs$core$IFn$_invoke$arity$2 ? pred__14461.cljs$core$IFn$_invoke$arity$2(G__14468,G__14469) : pred__14461.call(null,G__14468,G__14469));
})())){
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,G__14454,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14470 = cljs.core.cst$kw$pnodes;
var G__14471 = expr__14462;
return (pred__14461.cljs$core$IFn$_invoke$arity$2 ? pred__14461.cljs$core$IFn$_invoke$arity$2(G__14470,G__14471) : pred__14461.call(null,G__14470,G__14471));
})())){
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,G__14454,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14472 = cljs.core.cst$kw$changed_QMARK_;
var G__14473 = expr__14462;
return (pred__14461.cljs$core$IFn$_invoke$arity$2 ? pred__14461.cljs$core$IFn$_invoke$arity$2(G__14472,G__14473) : pred__14461.call(null,G__14472,G__14473));
})())){
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,G__14454,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14474 = cljs.core.cst$kw$acc;
var G__14475 = expr__14462;
return (pred__14461.cljs$core$IFn$_invoke$arity$2 ? pred__14461.cljs$core$IFn$_invoke$arity$2(G__14474,G__14475) : pred__14461.call(null,G__14474,G__14475));
})())){
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,G__14454,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14476 = cljs.core.cst$kw$o_DASH_acc;
var G__14477 = expr__14462;
return (pred__14461.cljs$core$IFn$_invoke$arity$2 ? pred__14461.cljs$core$IFn$_invoke$arity$2(G__14476,G__14477) : pred__14461.call(null,G__14476,G__14477));
})())){
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,G__14454,self__.__meta,self__.__extmap,null));
} else {
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__14454),null));
}
}
}
}
}
}
}
});

andel.fast_zip.ZipperPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$l,self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$r,self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ppath,self__.ppath],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pnodes,self__.pnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$changed_QMARK_,self__.changed_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$acc,self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$o_DASH_acc,self__.o_acc],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__14454){
var self__ = this;
var this__8351__auto____$1 = this;
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,G__14454,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

andel.fast_zip.ZipperPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$l,cljs.core.cst$sym$r,cljs.core.cst$sym$ppath,cljs.core.cst$sym$pnodes,cljs.core.cst$sym$changed_QMARK_,cljs.core.cst$sym$acc,cljs.core.cst$sym$o_DASH_acc], null);
});

andel.fast_zip.ZipperPath.cljs$lang$type = true;

andel.fast_zip.ZipperPath.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"andel.fast-zip/ZipperPath");
});

andel.fast_zip.ZipperPath.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"andel.fast-zip/ZipperPath");
});

andel.fast_zip.__GT_ZipperPath = (function andel$fast_zip$__GT_ZipperPath(l,r,ppath,pnodes,changed_QMARK_,acc,o_acc){
return (new andel.fast_zip.ZipperPath(l,r,ppath,pnodes,changed_QMARK_,acc,o_acc,null,null,null));
});

andel.fast_zip.map__GT_ZipperPath = (function andel$fast_zip$map__GT_ZipperPath(G__14458){
return (new andel.fast_zip.ZipperPath(cljs.core.cst$kw$l.cljs$core$IFn$_invoke$arity$1(G__14458),cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(G__14458),cljs.core.cst$kw$ppath.cljs$core$IFn$_invoke$arity$1(G__14458),cljs.core.cst$kw$pnodes.cljs$core$IFn$_invoke$arity$1(G__14458),cljs.core.cst$kw$changed_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14458),cljs.core.cst$kw$acc.cljs$core$IFn$_invoke$arity$1(G__14458),cljs.core.cst$kw$o_DASH_acc.cljs$core$IFn$_invoke$arity$1(G__14458),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14458,cljs.core.cst$kw$l,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,cljs.core.cst$kw$ppath,cljs.core.cst$kw$pnodes,cljs.core.cst$kw$changed_QMARK_,cljs.core.cst$kw$acc,cljs.core.cst$kw$o_DASH_acc], 0))),null));
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
andel.fast_zip.ZipperLocation = (function (ops,node,path,__meta,__extmap,__hash){
this.ops = ops;
this.node = node;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.fast_zip.ZipperLocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k14480,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__14484 = k14480;
var G__14484__$1 = (((G__14484 instanceof cljs.core.Keyword))?G__14484.fqn:null);
switch (G__14484__$1) {
case "ops":
return self__.ops;

break;
case "node":
return self__.node;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14480,else__8355__auto__);

}
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#andel.fast-zip.ZipperLocation{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ops,self__.ops],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$node,self__.node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14479){
var self__ = this;
var G__14479__$1 = this;
return (new cljs.core.RecordIter((0),G__14479__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ops,cljs.core.cst$kw$node,cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new andel.fast_zip.ZipperLocation(self__.ops,self__.node,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__14485 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (228746666 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__14485(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14481,other14482){
var self__ = this;
var this14481__$1 = this;
return (!((other14482 == null))) && ((this14481__$1.constructor === other14482.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14481__$1.ops,other14482.ops)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14481__$1.node,other14482.node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14481__$1.path,other14482.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14481__$1.__extmap,other14482.__extmap));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$node,null,cljs.core.cst$kw$ops,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new andel.fast_zip.ZipperLocation(self__.ops,self__.node,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__14479){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__14486 = cljs.core.keyword_identical_QMARK_;
var expr__14487 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__14489 = cljs.core.cst$kw$ops;
var G__14490 = expr__14487;
return (pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(G__14489,G__14490) : pred__14486.call(null,G__14489,G__14490));
})())){
return (new andel.fast_zip.ZipperLocation(G__14479,self__.node,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14491 = cljs.core.cst$kw$node;
var G__14492 = expr__14487;
return (pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(G__14491,G__14492) : pred__14486.call(null,G__14491,G__14492));
})())){
return (new andel.fast_zip.ZipperLocation(self__.ops,G__14479,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14493 = cljs.core.cst$kw$path;
var G__14494 = expr__14487;
return (pred__14486.cljs$core$IFn$_invoke$arity$2 ? pred__14486.cljs$core$IFn$_invoke$arity$2(G__14493,G__14494) : pred__14486.call(null,G__14493,G__14494));
})())){
return (new andel.fast_zip.ZipperLocation(self__.ops,self__.node,G__14479,self__.__meta,self__.__extmap,null));
} else {
return (new andel.fast_zip.ZipperLocation(self__.ops,self__.node,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__14479),null));
}
}
}
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ops,self__.ops],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$node,self__.node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__14479){
var self__ = this;
var this__8351__auto____$1 = this;
return (new andel.fast_zip.ZipperLocation(self__.ops,self__.node,self__.path,G__14479,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

andel.fast_zip.ZipperLocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$ops,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$ZipperOps], null)),cljs.core.cst$sym$node,cljs.core.with_meta(cljs.core.cst$sym$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$ZipperPath], null))], null);
});

andel.fast_zip.ZipperLocation.cljs$lang$type = true;

andel.fast_zip.ZipperLocation.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"andel.fast-zip/ZipperLocation");
});

andel.fast_zip.ZipperLocation.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"andel.fast-zip/ZipperLocation");
});

andel.fast_zip.__GT_ZipperLocation = (function andel$fast_zip$__GT_ZipperLocation(ops,node,path){
return (new andel.fast_zip.ZipperLocation(ops,node,path,null,null,null));
});

andel.fast_zip.map__GT_ZipperLocation = (function andel$fast_zip$map__GT_ZipperLocation(G__14483){
return (new andel.fast_zip.ZipperLocation(cljs.core.cst$kw$ops.cljs$core$IFn$_invoke$arity$1(G__14483),cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(G__14483),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__14483),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14483,cljs.core.cst$kw$ops,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$node,cljs.core.cst$kw$path], 0))),null));
});

andel.fast_zip.update_path = (function andel$fast_zip$update_path(loc,f){
return (new andel.fast_zip.ZipperLocation(loc.ops,loc.node,(function (){var G__14496 = loc.path;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14496) : f.call(null,G__14496));
})(),null,null,null));
});
andel.fast_zip.assoc_acc = (function andel$fast_zip$assoc_acc(path,acc){
return (new andel.fast_zip.ZipperPath(path.l,path.r,path.ppath,path.pnodes,path.changed_QMARK_,acc,path.o_acc,null,null,null));
});
andel.fast_zip.assoc_o_acc = (function andel$fast_zip$assoc_o_acc(path,o_acc){
return (new andel.fast_zip.ZipperPath(path.l,path.r,path.ppath,path.pnodes,path.changed_QMARK_,path.acc,o_acc,null,null,null));
});
/**
 * Returns the node at loc
 */
andel.fast_zip.node = (function andel$fast_zip$node(loc){
return loc.node;
});
/**
 * Returns the acc at loc
 */
andel.fast_zip.acc = (function andel$fast_zip$acc(loc){
return loc.path.acc;
});
/**
 * Returns true if the node at loc is a branch
 */
andel.fast_zip.branch_QMARK_ = (function andel$fast_zip$branch_QMARK_(loc){
var G__14498 = loc.node;
var fexpr__14497 = loc.ops.branch_QMARK_;
return (fexpr__14497.cljs$core$IFn$_invoke$arity$1 ? fexpr__14497.cljs$core$IFn$_invoke$arity$1(G__14498) : fexpr__14497.call(null,G__14498));
});
/**
 * Returns a seq of the children of node at loc, which must be a branch
 */
andel.fast_zip.children = (function andel$fast_zip$children(loc){
var G__14500 = loc.node;
var fexpr__14499 = loc.ops.children;
return (fexpr__14499.cljs$core$IFn$_invoke$arity$1 ? fexpr__14499.cljs$core$IFn$_invoke$arity$1(G__14500) : fexpr__14499.call(null,G__14500));
});
/**
 * Returns a new branch node, given an existing node and new children.
 *   The loc is only used to supply the constructor.
 */
andel.fast_zip.make_node = (function andel$fast_zip$make_node(loc,node,children){
var fexpr__14501 = loc.ops.make_node;
return (fexpr__14501.cljs$core$IFn$_invoke$arity$2 ? fexpr__14501.cljs$core$IFn$_invoke$arity$2(node,children) : fexpr__14501.call(null,node,children));
});
/**
 * Returns a seq of nodes leading to this loc
 */
andel.fast_zip.path = (function andel$fast_zip$path(loc){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var p = temp__5276__auto__;
return p.pnodes;
} else {
return null;
}
});
/**
 * Returns a seq of the left siblings of this loc
 */
andel.fast_zip.lefts = (function andel$fast_zip$lefts(loc){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var p = temp__5276__auto__;
return cljs.core.seq(cljs.core.reverse(p.l));
} else {
return null;
}
});
/**
 * Returns a seq of the right siblings of this loc
 */
andel.fast_zip.rights = (function andel$fast_zip$rights(loc){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var p = temp__5276__auto__;
return p.r;
} else {
return null;
}
});
/**
 * Returns the loc of the leftmost child of the node at this loc,
 *   or nil if no children
 */
andel.fast_zip.down = (function andel$fast_zip$down(loc){
if(cljs.core.truth_(andel.fast_zip.branch_QMARK_(loc))){
var temp__5278__auto__ = andel.fast_zip.children(loc);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__14502 = temp__5278__auto__;
var seq__14503 = cljs.core.seq(vec__14502);
var first__14504 = cljs.core.first(seq__14503);
var seq__14503__$1 = cljs.core.next(seq__14503);
var c = first__14504;
var cs = seq__14503__$1;
var node = loc.node;
var path = loc.path;
return (new andel.fast_zip.ZipperLocation(loc.ops,c,(new andel.fast_zip.ZipperPath(cljs.core.PersistentVector.EMPTY,cs,path,(cljs.core.truth_(path)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path.pnodes,node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),null,(function (){var G__14505 = loc;
var G__14505__$1 = (((G__14505 == null))?null:G__14505.path);
if((G__14505__$1 == null)){
return null;
} else {
return G__14505__$1.acc;
}
})(),null,null,null,null)),null,null,null));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns the loc of the parent of the node at this loc, or nil if at the top
 */
andel.fast_zip.up = (function andel$fast_zip$up(loc){
var path = loc.path;
var temp__5278__auto__ = (function (){var and__7666__auto__ = path;
if(cljs.core.truth_(and__7666__auto__)){
return path.pnodes;
} else {
return and__7666__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var pnodes = temp__5278__auto__;
var pnode = cljs.core.peek(pnodes);
if(cljs.core.truth_(cljs.core.cst$kw$changed_QMARK_.cljs$core$IFn$_invoke$arity$1(path))){
return (new andel.fast_zip.ZipperLocation(loc.ops,andel.fast_zip.make_node(loc,pnode,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(path.l,cljs.core.cons(loc.node,path.r))),(function (){var temp__5276__auto__ = path.ppath;
if(cljs.core.truth_(temp__5276__auto__)){
var ppath = temp__5276__auto__;
return (new andel.fast_zip.ZipperPath(ppath.l,ppath.r,ppath.ppath,ppath.pnodes,true,ppath.acc,ppath.o_acc,null,null,null));
} else {
return null;
}
})(),null,null,null));
} else {
return (new andel.fast_zip.ZipperLocation(loc.ops,pnode,path.ppath,null,null,null));
}
} else {
return null;
}
});
/**
 * zips all the way up and returns the root node, reflecting any changes.
 */
andel.fast_zip.root = (function andel$fast_zip$root(loc){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,loc.path)){
return loc.node;
} else {
var p = andel.fast_zip.up(loc);
if(cljs.core.truth_(p)){
var G__14506 = p;
loc = G__14506;
continue;
} else {
return loc.node;
}
}
break;
}
});
/**
 * Returns the loc of the right sibling of the node at this loc, or nil
 */
andel.fast_zip.right = (function andel$fast_zip$right(loc){
var path = loc.path;
var temp__5278__auto__ = (function (){var and__7666__auto__ = path;
if(cljs.core.truth_(and__7666__auto__)){
return path.r;
} else {
return and__7666__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var r = temp__5278__auto__;
return (new andel.fast_zip.ZipperLocation(loc.ops,cljs.core.first(r),(new andel.fast_zip.ZipperPath(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path.l,loc.node),cljs.core.next(r),path.ppath,path.pnodes,cljs.core.cst$kw$changed_QMARK_.cljs$core$IFn$_invoke$arity$1(path),(function (){var G__14507 = loc;
var G__14507__$1 = (((G__14507 == null))?null:G__14507.path);
if((G__14507__$1 == null)){
return null;
} else {
return G__14507__$1.acc;
}
})(),null,null,null,null)),null,null,null));
} else {
return null;
}
});
/**
 * Returns the loc of the rightmost sibling of the node at this loc, or self
 */
andel.fast_zip.rightmost = (function andel$fast_zip$rightmost(loc){
var path = loc.path;
var temp__5276__auto__ = (function (){var and__7666__auto__ = path;
if(cljs.core.truth_(and__7666__auto__)){
return path.r;
} else {
return and__7666__auto__;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var r = temp__5276__auto__;
return (new andel.fast_zip.ZipperLocation(loc.ops,cljs.core.last(r),(new andel.fast_zip.ZipperPath(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,path.l,loc.node,cljs.core.butlast(r)),null,path.ppath,path.pnodes,cljs.core.cst$kw$changed_QMARK_.cljs$core$IFn$_invoke$arity$1(path),(function (){var G__14508 = loc;
var G__14508__$1 = (((G__14508 == null))?null:G__14508.path);
if((G__14508__$1 == null)){
return null;
} else {
return G__14508__$1.acc;
}
})(),null,null,null,null)),null,null,null));
} else {
return loc;
}
});
/**
 * Inserts the item as the left sibling of the node at this loc, without moving
 */
andel.fast_zip.insert_left = (function andel$fast_zip$insert_left(loc,item){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var path = temp__5276__auto__;
return (new andel.fast_zip.ZipperLocation(loc.ops,loc.node,(new andel.fast_zip.ZipperPath(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path.l,item),path.r,path.ppath,path.pnodes,true,path.acc,null,null,null,null)),null,null,null));
} else {
throw (new Error("Insert at top"));
}
});
/**
 * Inserts the item as the right sibling of the node at this loc, without moving
 */
andel.fast_zip.insert_right = (function andel$fast_zip$insert_right(loc,item){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var path = temp__5276__auto__;
return (new andel.fast_zip.ZipperLocation(loc.ops,loc.node,(new andel.fast_zip.ZipperPath(path.l,cljs.core.cons(item,path.r),path.ppath,path.pnodes,true,path.acc,null,null,null,null)),null,null,null));
} else {
throw (new Error("Insert at top"));
}
});
/**
 * Replaces the node at this loc, without moving
 */
andel.fast_zip.replace = (function andel$fast_zip$replace(loc,node){
return (new andel.fast_zip.ZipperLocation(loc.ops,node,(function (){var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var path = temp__5276__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path,cljs.core.cst$kw$changed_QMARK_,true);
} else {
return null;
}
})(),null,null,null));
});
/**
 * Inserts the item as the leftmost child of the node at this loc, without moving
 */
andel.fast_zip.insert_child = (function andel$fast_zip$insert_child(loc,item){
return andel.fast_zip.replace(loc,andel.fast_zip.make_node(loc,loc.node,cljs.core.cons(item,andel.fast_zip.children(loc))));
});
/**
 * Inserts the item as the rightmost child of the node at this loc, without moving
 */
andel.fast_zip.append_child = (function andel$fast_zip$append_child(loc,item){
return andel.fast_zip.replace(loc,andel.fast_zip.make_node(loc,loc.node,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(andel.fast_zip.children(loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
 * Returns true if loc represents the end of a depth-first walk
 */
andel.fast_zip.end_QMARK_ = (function andel$fast_zip$end_QMARK_(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,loc.path);
});
/**
 * Removes the node at loc, returning the loc that would have preceded it in a depth-first walk.
 */
andel.fast_zip.remove = (function andel$fast_zip$remove(loc){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var path = temp__5276__auto__;
if((cljs.core.count(path.l) > (0))){
var loc__$1 = (new andel.fast_zip.ZipperLocation(loc.ops,cljs.core.peek(path.l),(new andel.fast_zip.ZipperPath(cljs.core.pop(path.l),path.r,path.ppath,path.pnodes,true,path.acc,path.o_acc,null,null,null)),null,null,null));
while(true){
var temp__5276__auto____$1 = (function (){var and__7666__auto__ = andel.fast_zip.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__7666__auto__)){
return andel.fast_zip.down(loc__$1);
} else {
return and__7666__auto__;
}
})();
if(cljs.core.truth_(temp__5276__auto____$1)){
var child = temp__5276__auto____$1;
var G__14509 = andel.fast_zip.rightmost(child);
loc__$1 = G__14509;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return (new andel.fast_zip.ZipperLocation(loc.ops,andel.fast_zip.make_node(loc,cljs.core.peek(path.pnodes),path.r),(function (){var temp__5276__auto____$1 = path.ppath;
if(cljs.core.truth_(temp__5276__auto____$1)){
var ppath = temp__5276__auto____$1;
if(cljs.core.truth_(ppath)){
return (new andel.fast_zip.ZipperPath(ppath.l,ppath.r,ppath.ppath,ppath.pnodes,true,path.acc,path.o_acc,null,null,null));
} else {
return null;
}
} else {
return null;
}
})(),null,null,null));
}
} else {
throw (new Error("Remove at top"));
}
});
/**
 * Replaces the node at this loc with the value of (f node args)
 */
andel.fast_zip.edit = (function andel$fast_zip$edit(var_args){
var args__8918__auto__ = [];
var len__8911__auto___14513 = arguments.length;
var i__8912__auto___14514 = (0);
while(true){
if((i__8912__auto___14514 < len__8911__auto___14513)){
args__8918__auto__.push((arguments[i__8912__auto___14514]));

var G__14515 = (i__8912__auto___14514 + (1));
i__8912__auto___14514 = G__14515;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((2) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((2)),(0),null)):null);
return andel.fast_zip.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8919__auto__);
});

andel.fast_zip.edit.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
return andel.fast_zip.replace(loc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,loc.node,args));
});

andel.fast_zip.edit.cljs$lang$maxFixedArity = (2);

andel.fast_zip.edit.cljs$lang$applyTo = (function (seq14510){
var G__14511 = cljs.core.first(seq14510);
var seq14510__$1 = cljs.core.next(seq14510);
var G__14512 = cljs.core.first(seq14510__$1);
var seq14510__$2 = cljs.core.next(seq14510__$1);
return andel.fast_zip.edit.cljs$core$IFn$_invoke$arity$variadic(G__14511,G__14512,seq14510__$2);
});


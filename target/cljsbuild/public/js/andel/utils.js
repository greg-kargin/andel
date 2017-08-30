// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('andel.text');
goog.require('andel.tree');
andel.utils.line_height = (function andel$utils$line_height(p__18810){
var map__18811 = p__18810;
var map__18811__$1 = ((((!((map__18811 == null)))?((((map__18811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18811):map__18811);
var metrics = map__18811__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18811__$1,cljs.core.cst$kw$height);
var spacing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18811__$1,cljs.core.cst$kw$spacing);
return (height + spacing);
});
/**
 * transforms relative position in pixels into absolute [line col] value
 * CAUTION! col might be bigger, than length of line.
 */
andel.utils.pixels__GT_grid_position = (function andel$utils$pixels__GT_grid_position(p__18813,start_line,shift,p__18814){
var vec__18815 = p__18813;
var pix_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18815,(0),null);
var pix_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18815,(1),null);
var map__18818 = p__18814;
var map__18818__$1 = ((((!((map__18818 == null)))?((((map__18818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18818):map__18818);
var metrics = map__18818__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18818__$1,cljs.core.cst$kw$width);
var line_height = andel.utils.line_height(metrics);
var x = pix_x;
var y = ((pix_y - shift) - (line_height / (2)));
var rel_line = (function (){var G__18820 = (y / line_height);
return Math.round(G__18820);
})();
var abs_line = (start_line + rel_line);
var abs_col = (function (){var G__18821 = (x / width);
return Math.round(G__18821);
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,abs_line,cljs.core.cst$kw$col,abs_col], null);
});
/**
 * transforms [line col] value into absolute offset value
 */
andel.utils.line_col__GT_offset = (function andel$utils$line_col__GT_offset(p__18822,text){
var map__18823 = p__18822;
var map__18823__$1 = ((((!((map__18823 == null)))?((((map__18823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18823):map__18823);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18823__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18823__$1,cljs.core.cst$kw$col);
var line_loc = andel.text.scan_to_line(andel.text.zipper(text),line);
var line_len = andel.text.line_length(line_loc);
var line_offset = andel.text.offset(line_loc);
var text_length = andel.text.text_length(text);
var offset = (function (){var x__8023__auto__ = (text_length - (1));
var y__8024__auto__ = (function (){var x__8016__auto__ = (0);
var y__8017__auto__ = (line_offset + (function (){var x__8023__auto____$1 = line_len;
var y__8024__auto__ = col;
return ((x__8023__auto____$1 < y__8024__auto__) ? x__8023__auto____$1 : y__8024__auto__);
})());
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})();
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})();
return offset;
});
/**
 * transforms line value into absolute offset value
 */
andel.utils.line__GT_offset = (function andel$utils$line__GT_offset(line,text){
return andel.utils.line_col__GT_offset(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,(0)], null),text);
});
/**
 * transforms relative position in pixels into absolute offset value
 */
andel.utils.pixels__GT_offset = (function andel$utils$pixels__GT_offset(p__18825,start_line,shift,metrics,text){
var vec__18826 = p__18825;
var pix_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18826,(0),null);
var pix_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18826,(1),null);
return andel.utils.line_col__GT_offset(andel.utils.pixels__GT_grid_position(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pix_x,pix_y], null),start_line,shift,metrics),text);
});
/**
 * transforms absolute offset into absolute line value ignoring col
 */
andel.utils.offset__GT_line = (function andel$utils$offset__GT_line(offset,text){
return andel.text.line(andel.text.scan_to_offset(andel.text.zipper(text),offset));
});
andel.utils.line__GT_length = (function andel$utils$line__GT_length(line,text){
return andel.text.line_length(andel.text.scan_to_line(andel.text.zipper(text),line));
});
/**
 * transforms absolute offset into absolute [line col] value
 */
andel.utils.offset__GT_line_col = (function andel$utils$offset__GT_line_col(offset,text){
var line = andel.utils.offset__GT_line(offset,text);
var line_offset = andel.utils.line_col__GT_offset(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,(0)], null),text);
var col = (offset - line_offset);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col], null);
});
/**
 * transforms absolute [line col] value into relative poisition in pixels
 */
andel.utils.line_col__GT_pixels = (function andel$utils$line_col__GT_pixels(p__18829,start_line,shift,p__18830){
var map__18831 = p__18829;
var map__18831__$1 = ((((!((map__18831 == null)))?((((map__18831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18831):map__18831);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18831__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18831__$1,cljs.core.cst$kw$col);
var map__18832 = p__18830;
var map__18832__$1 = ((((!((map__18832 == null)))?((((map__18832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18832):map__18832);
var metrics = map__18832__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18832__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18832__$1,cljs.core.cst$kw$width);
var rel_line = (line - start_line);
var pix_x = (col * width);
var pix_y = ((shift + (height / (2))) + (line * height));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pix_x,pix_y], null);
});
/**
 * transforms absolute offset value into relative poisition in pixels
 */
andel.utils.offset__GT_pixels = (function andel$utils$offset__GT_pixels(offset,start_line,shift,metrics,text){
return andel.utils.line_col__GT_pixels(andel.utils.offset__GT_line_col(offset,text),start_line,shift,metrics);
});
/**
 * transforms absolute offset into zipper pointer
 */
andel.utils.offset__GT_loc = (function andel$utils$offset__GT_loc(offset,text){
return andel.text.scan_to_offset(andel.text.zipper(text),offset);
});
/**
 * transforms zipper pointer into offset
 */
andel.utils.loc__GT_offset = (function andel$utils$loc__GT_offset(loc){
return andel.text.offset(loc);
});
/**
 * transforms zipper pointer into line
 */
andel.utils.loc__GT_line = (function andel$utils$loc__GT_line(loc){
return andel.text.line(loc);
});
/**
 * transforms absolute line into zipper pointer
 */
andel.utils.line__GT_loc = (function andel$utils$line__GT_loc(line,text){
return andel.text.scan_to_line(andel.text.zipper(text),line);
});
/**
 * transforms absolute [line col] into zipper pointer
 */
andel.utils.line_col__GT_loc = (function andel$utils$line_col__GT_loc(p__18835,text){
var map__18836 = p__18835;
var map__18836__$1 = ((((!((map__18836 == null)))?((((map__18836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18836):map__18836);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18836__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18836__$1,cljs.core.cst$kw$col);
var line_loc = andel.utils.line__GT_loc(line,text);
var line_offset = andel.utils.loc__GT_offset(line_loc);
return andel.text.scan_to_offset(line_loc,(line_offset + col));
});
andel.utils.last_line_QMARK_ = (function andel$utils$last_line_QMARK_(line,text){
return andel.tree.end_QMARK_(andel.utils.line__GT_loc(line,text));
});
andel.utils.next_line_loc = (function andel$utils$next_line_loc(line,text){
if(cljs.core.truth_(andel.utils.last_line_QMARK_(line,text))){
return andel.utils.line__GT_loc(line,text);
} else {
var line_loc = andel.utils.line__GT_loc(line,text);
var offset = andel.utils.loc__GT_offset(line_loc);
var line_length = andel.text.line_length(line_loc);
var next_line_loc = andel.text.scan_to_offset(line_loc,((offset + line_length) + (1)));
return next_line_loc;
}
});
andel.utils.prev_line_loc = (function andel$utils$prev_line_loc(line,text){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line,(0))){
return (0);
} else {
var prev_line_end = (andel.utils.line__GT_offset(line,text) - (1));
var prev_line_loc = andel.utils.line__GT_loc(andel.utils.offset__GT_line(prev_line_end,text),text);
return prev_line_loc;
}
});

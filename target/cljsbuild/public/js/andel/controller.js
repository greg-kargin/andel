// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('andel.utils');
goog.require('andel.text');
goog.require('andel.intervals');
andel.controller.drop_virtual_position = (function andel$controller$drop_virtual_position(caret){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(caret,cljs.core.cst$kw$v_DASH_col,(0));
});
andel.controller.caret__GT_offset = (function andel$controller$caret__GT_offset(p__18873){
var map__18874 = p__18873;
var map__18874__$1 = ((((!((map__18874 == null)))?((((map__18874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18874):map__18874);
var caret = map__18874__$1;
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18874__$1,cljs.core.cst$kw$offset);
return offset;
});
andel.controller.set_caret_at_offset = (function andel$controller$set_caret_at_offset(caret,text,new_offset){
var text_length = (andel.text.text_length(text) - (1));
var offset_SINGLEQUOTE_ = (function (){var x__8023__auto__ = (function (){var x__8016__auto__ = new_offset;
var y__8017__auto__ = (0);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})();
var y__8024__auto__ = text_length;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})();
return andel.controller.drop_virtual_position(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(caret,cljs.core.cst$kw$offset,offset_SINGLEQUOTE_));
});
andel.controller.translate_caret = (function andel$controller$translate_caret(caret,text,delta_offset){
return andel.controller.set_caret_at_offset(caret,text,(andel.controller.caret__GT_offset(caret) + delta_offset));
});
andel.controller.translate_caret_verticaly = (function andel$controller$translate_caret_verticaly(p__18876,text,delta_line){
var map__18877 = p__18876;
var map__18877__$1 = ((((!((map__18877 == null)))?((((map__18877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18877):map__18877);
var caret = map__18877__$1;
var v_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18877__$1,cljs.core.cst$kw$v_DASH_col);
var carret_offset = andel.controller.caret__GT_offset(caret);
var map__18879 = andel.utils.offset__GT_line_col(carret_offset,text);
var map__18879__$1 = ((((!((map__18879 == null)))?((((map__18879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18879):map__18879);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18879__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18879__$1,cljs.core.cst$kw$col);
var to_line = (line + delta_line);
var prev_line_length = andel.utils.line__GT_length(to_line,text);
var new_v_col = (function (){var x__8016__auto__ = v_col;
var y__8017__auto__ = col;
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})();
var new_col = (function (){var x__8023__auto__ = prev_line_length;
var y__8024__auto__ = new_v_col;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,andel.utils.line_col__GT_offset(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,to_line,cljs.core.cst$kw$col,new_col], null),text),cljs.core.cst$kw$v_DASH_col,new_v_col], null);
});
andel.controller.update_selection = (function andel$controller$update_selection(p__18881,old_caret,new_caret,selection_QMARK_){
var vec__18882 = p__18881;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18882,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18882,(1),null);
var selection = vec__18882;
var caret_offset = andel.controller.caret__GT_offset(old_caret);
var caret_offset_SINGLEQUOTE_ = andel.controller.caret__GT_offset(new_caret);
if(cljs.core.not(selection_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [caret_offset_SINGLEQUOTE_,caret_offset_SINGLEQUOTE_], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caret_offset,from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__8023__auto__ = caret_offset_SINGLEQUOTE_;
var y__8024__auto__ = to;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})(),(function (){var x__8016__auto__ = caret_offset_SINGLEQUOTE_;
var y__8017__auto__ = to;
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caret_offset,to)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__8023__auto__ = from;
var y__8024__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})(),(function (){var x__8016__auto__ = from;
var y__8017__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__8023__auto__ = caret_offset;
var y__8024__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})(),(function (){var x__8016__auto__ = caret_offset_SINGLEQUOTE_;
var y__8017__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})()], null);

}
}
}
});
andel.controller.selection_length = (function andel$controller$selection_length(p__18885){
var vec__18886 = p__18885;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18886,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18886,(1),null);
var selection = vec__18886;
if((left <= right)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Wrong selection positioning: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(<= left right)")].join('')));
}

return (right - left);
});
andel.controller.drop_selection = (function andel$controller$drop_selection(p__18889){
var map__18890 = p__18889;
var map__18890__$1 = ((((!((map__18890 == null)))?((((map__18890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18890):map__18890);
var editor = map__18890__$1;
var map__18891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18890__$1,cljs.core.cst$kw$caret);
var map__18891__$1 = ((((!((map__18891 == null)))?((((map__18891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18891):map__18891);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18891__$1,cljs.core.cst$kw$offset);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(editor,cljs.core.cst$kw$selection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset,offset], null));
});
andel.controller.set_text = (function andel$controller$set_text(state,text){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$text], null),andel.text.make_text(text)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$first_DASH_invalid], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp], null),cljs.core.inc);
});
andel.controller.edit_at_offset = (function andel$controller$edit_at_offset(p__18894,offset,f){
var map__18895 = p__18894;
var map__18895__$1 = ((((!((map__18895 == null)))?((((map__18895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18895):map__18895);
var state = map__18895__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18895__$1,cljs.core.cst$kw$document);
var map__18897 = document;
var map__18897__$1 = ((((!((map__18897 == null)))?((((map__18897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18897):map__18897);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18897__$1,cljs.core.cst$kw$text);
var edit_point = andel.utils.offset__GT_loc(offset,text);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$text], null),(function (){var G__18899 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(edit_point) : f.call(null,edit_point));
return (andel.text.root.cljs$core$IFn$_invoke$arity$1 ? andel.text.root.cljs$core$IFn$_invoke$arity$1(G__18899) : andel.text.root.call(null,G__18899));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$first_DASH_invalid], null),cljs.core.min,andel.utils.loc__GT_line(edit_point));
});
andel.controller.edit_at_line_col = (function andel$controller$edit_at_line_col(p__18900,line_col,f){
var map__18901 = p__18900;
var map__18901__$1 = ((((!((map__18901 == null)))?((((map__18901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18901):map__18901);
var state = map__18901__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18901__$1,cljs.core.cst$kw$text);
var offset = andel.utils.line_col__GT_offset(line_col,text);
return andel.controller.edit_at_offset(state,offset,f);
});
andel.controller.edit_at_caret = (function andel$controller$edit_at_caret(state,fn){
var caret_offset = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret,cljs.core.cst$kw$offset], null));
return andel.controller.edit_at_offset(state,caret_offset,fn);
});
andel.controller.delete_under_selection = (function andel$controller$delete_under_selection(p__18904){
var map__18905 = p__18904;
var map__18905__$1 = ((((!((map__18905 == null)))?((((map__18905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18905):map__18905);
var state = map__18905__$1;
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18905__$1,cljs.core.cst$kw$editor);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18905__$1,cljs.core.cst$kw$document);
var map__18907 = editor;
var map__18907__$1 = ((((!((map__18907 == null)))?((((map__18907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18907):map__18907);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18907__$1,cljs.core.cst$kw$selection);
var vec__18908 = selection;
var sel_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908,(0),null);
var sel_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908,(1),null);
var sel_len = (sel_to - sel_from);
var st = state;
var st__$1 = andel.controller.edit_at_offset(st,sel_from,((function (st,map__18907,map__18907__$1,selection,vec__18908,sel_from,sel_to,sel_len,map__18905,map__18905__$1,state,editor,document){
return (function (p1__18903_SHARP_){
return andel.text.delete$(p1__18903_SHARP_,sel_len);
});})(st,map__18907,map__18907__$1,selection,vec__18908,sel_from,sel_to,sel_len,map__18905,map__18905__$1,state,editor,document))
);
var st__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),andel.controller.set_caret_at_offset,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(document),sel_from);
var st__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$markup], null),andel.intervals.delete_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(st__$2))),sel_len], null));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(st__$3,cljs.core.cst$kw$editor,andel.controller.drop_selection);
});
andel.controller.set_selection_under_caret = (function andel$controller$set_selection_under_caret(editor){
var caret_offset = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$caret,cljs.core.cst$kw$offset], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(editor,cljs.core.cst$kw$selection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [caret_offset,caret_offset], null));
});
andel.controller.type_in = (function andel$controller$type_in(p__18913,str){
var map__18914 = p__18913;
var map__18914__$1 = ((((!((map__18914 == null)))?((((map__18914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18914):map__18914);
var state = map__18914__$1;
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18914__$1,cljs.core.cst$kw$editor);
var str_len = cljs.core.count(str);
var st = state;
var st__$1 = andel.controller.delete_under_selection(st);
var st__$2 = andel.controller.edit_at_caret(st__$1,((function (st,st__$1,str_len,map__18914,map__18914__$1,state,editor){
return (function (p1__18912_SHARP_){
return andel.text.insert(p1__18912_SHARP_,str);
});})(st,st__$1,str_len,map__18914,map__18914__$1,state,editor))
);
var st__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$markup], null),andel.intervals.type_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(st__$2))),str_len], null));
var st__$4 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(st__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),andel.controller.translate_caret,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$document.cljs$core$IFn$_invoke$arity$1(st__$3)),str_len);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(st__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor], null),andel.controller.set_selection_under_caret);
});
andel.controller.get_caret_line = (function andel$controller$get_caret_line(caret,text){
var map__18916 = caret;
var map__18916__$1 = ((((!((map__18916 == null)))?((((map__18916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18916):map__18916);
var caret_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18916__$1,cljs.core.cst$kw$offset);
var line = andel.utils.offset__GT_line(caret_offset,text);
return line;
});
andel.controller.get_line_ident = (function andel$controller$get_line_ident(text,line){
var loc = andel.text.scan_to_line(andel.text.zipper(text),line);
var line_text = andel.text.text(loc,andel.text.line_length(loc));
var trimmed = clojure.string.triml(line_text);
var ident_size = (cljs.core.count(line_text) - cljs.core.count(trimmed));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line_text,(0),ident_size);
});
andel.controller.on_enter = (function andel$controller$on_enter(p__18918){
var map__18919 = p__18918;
var map__18919__$1 = ((((!((map__18919 == null)))?((((map__18919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18919):map__18919);
var state = map__18919__$1;
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18919__$1,cljs.core.cst$kw$editor);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18919__$1,cljs.core.cst$kw$document);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(document);
var line = andel.controller.get_caret_line(cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(editor),text);
var identation = andel.controller.get_line_ident(text,line);
return andel.controller.type_in(state,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(identation)].join(''));
});
andel.controller.set_caret_at_grid_pos = (function andel$controller$set_caret_at_grid_pos(p__18921,line_col,selection_QMARK_){
var map__18922 = p__18921;
var map__18922__$1 = ((((!((map__18922 == null)))?((((map__18922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18922):map__18922);
var state = map__18922__$1;
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18922__$1,cljs.core.cst$kw$editor);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18922__$1,cljs.core.cst$kw$document);
var map__18924 = editor;
var map__18924__$1 = ((((!((map__18924 == null)))?((((map__18924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18924):map__18924);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.cst$kw$caret);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.cst$kw$selection);
var map__18925 = document;
var map__18925__$1 = ((((!((map__18925 == null)))?((((map__18925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18925):map__18925);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18925__$1,cljs.core.cst$kw$text);
var caret_offset_SINGLEQUOTE_ = andel.utils.line_col__GT_offset(line_col,text);
var caret_SINGLEQUOTE_ = andel.controller.set_caret_at_offset(caret,text,caret_offset_SINGLEQUOTE_);
var selection_SINGLEQUOTE_ = andel.controller.update_selection(selection,caret,caret_SINGLEQUOTE_,selection_QMARK_);
var st = state;
var st__$1 = cljs.core.assoc_in(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),caret_SINGLEQUOTE_);
return cljs.core.assoc_in(st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$selection], null),selection_SINGLEQUOTE_);
});
andel.controller.set_caret_at_line_begining = (function andel$controller$set_caret_at_line_begining(state,line,selection_QMARK_){
return andel.controller.set_caret_at_grid_pos(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,(0)], null),selection_QMARK_);
});
andel.controller.set_caret_at_line_end = (function andel$controller$set_caret_at_line_end(state,line,selection_QMARK_){
return andel.controller.set_caret_at_grid_pos(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,Number.POSITIVE_INFINITY], null),selection_QMARK_);
});
andel.controller.backspace = (function andel$controller$backspace(p__18929){
var map__18930 = p__18929;
var map__18930__$1 = ((((!((map__18930 == null)))?((((map__18930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18930):map__18930);
var state = map__18930__$1;
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18930__$1,cljs.core.cst$kw$editor);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18930__$1,cljs.core.cst$kw$document);
var map__18932 = editor;
var map__18932__$1 = ((((!((map__18932 == null)))?((((map__18932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18932):map__18932);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18932__$1,cljs.core.cst$kw$caret);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18932__$1,cljs.core.cst$kw$selection);
var caret_offset = andel.controller.caret__GT_offset(caret);
if(((0) < andel.controller.selection_length(selection))){
return andel.controller.delete_under_selection(state);
} else {
if(((0) < caret_offset)){
var st = state;
var st__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$markup], null),andel.intervals.delete_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(st))) - (1)),(1)], null));
var st__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),andel.controller.translate_caret,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(document),(-1));
var st__$3 = andel.controller.edit_at_caret(st__$2,((function (st,st__$1,st__$2,map__18932,map__18932__$1,caret,selection,caret_offset,map__18930,map__18930__$1,state,editor,document){
return (function (p1__18928_SHARP_){
return andel.text.delete$(p1__18928_SHARP_,(1));
});})(st,st__$1,st__$2,map__18932,map__18932__$1,caret,selection,caret_offset,map__18930,map__18930__$1,state,editor,document))
);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(st__$3,cljs.core.cst$kw$editor,andel.controller.drop_selection);
} else {
return state;

}
}
});
andel.controller.delete$ = (function andel$controller$delete(p__18935){
var map__18936 = p__18935;
var map__18936__$1 = ((((!((map__18936 == null)))?((((map__18936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18936):map__18936);
var state = map__18936__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18936__$1,cljs.core.cst$kw$document);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18936__$1,cljs.core.cst$kw$editor);
var map__18938 = editor;
var map__18938__$1 = ((((!((map__18938 == null)))?((((map__18938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18938):map__18938);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18938__$1,cljs.core.cst$kw$caret);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18938__$1,cljs.core.cst$kw$selection);
var map__18939 = caret;
var map__18939__$1 = ((((!((map__18939 == null)))?((((map__18939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18939):map__18939);
var caret_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18939__$1,cljs.core.cst$kw$offset);
var map__18940 = document;
var map__18940__$1 = ((((!((map__18940 == null)))?((((map__18940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18940):map__18940);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18940__$1,cljs.core.cst$kw$text);
if(((0) < andel.controller.selection_length(selection))){
return andel.controller.delete_under_selection(state);
} else {
if((caret_offset < andel.text.text_length(text))){
var st = state;
var st__$1 = andel.controller.edit_at_caret(st,((function (st,map__18938,map__18938__$1,caret,selection,map__18939,map__18939__$1,caret_offset,map__18940,map__18940__$1,text,map__18936,map__18936__$1,state,document,editor){
return (function (p1__18934_SHARP_){
return andel.text.delete$(p1__18934_SHARP_,(1));
});})(st,map__18938,map__18938__$1,caret,selection,map__18939,map__18939__$1,caret_offset,map__18940,map__18940__$1,text,map__18936,map__18936__$1,state,document,editor))
);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$markup], null),andel.intervals.delete_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(st__$1))),(1)], null));
} else {
return state;

}
}
});
andel.controller.set_view_to_line = (function andel$controller$set_view_to_line(state,line,metrics){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewport,cljs.core.cst$kw$pos,(1)], null),(line * andel.utils.line_height(metrics)));
});
andel.controller.count_lines_in_view = (function andel$controller$count_lines_in_view(viewport,metrics){
var map__18944 = viewport;
var map__18944__$1 = ((((!((map__18944 == null)))?((((map__18944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18944):map__18944);
var view_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18944__$1,cljs.core.cst$kw$view_DASH_size);
var vec__18945 = view_size;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18945,(0),null);
var view_size__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18945,(1),null);
var G__18949 = (view_size__$1 / andel.utils.line_height(metrics));
return Math.round(G__18949);
});
andel.controller.get_view_in_lines = (function andel$controller$get_view_in_lines(viewport,metrics){
var map__18950 = viewport;
var map__18950__$1 = ((((!((map__18950 == null)))?((((map__18950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18950):map__18950);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18950__$1,cljs.core.cst$kw$pos);
var vec__18951 = pos;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(0),null);
var pos_px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(1),null);
var pos_in_lines = (function (){var G__18955 = (pos_px / andel.utils.line_height(metrics));
return Math.round(G__18955);
})();
var pos_in_lines_end = (pos_in_lines + andel.controller.count_lines_in_view(viewport,metrics));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_in_lines,pos_in_lines_end], null);
});
andel.controller.move_view_if_needed = (function andel$controller$move_view_if_needed(p__18956){
var map__18957 = p__18956;
var map__18957__$1 = ((((!((map__18957 == null)))?((((map__18957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18957):map__18957);
var state = map__18957__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18957__$1,cljs.core.cst$kw$document);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18957__$1,cljs.core.cst$kw$editor);
var viewport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18957__$1,cljs.core.cst$kw$viewport);
var map__18959 = document;
var map__18959__$1 = ((((!((map__18959 == null)))?((((map__18959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18959):map__18959);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18959__$1,cljs.core.cst$kw$text);
var map__18960 = editor;
var map__18960__$1 = ((((!((map__18960 == null)))?((((map__18960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18960):map__18960);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18960__$1,cljs.core.cst$kw$caret);
var map__18961 = viewport;
var map__18961__$1 = ((((!((map__18961 == null)))?((((map__18961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18961):map__18961);
var metrics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18961__$1,cljs.core.cst$kw$metrics);
var caret_l = andel.utils.offset__GT_line(andel.controller.caret__GT_offset(caret),text);
var vec__18962 = andel.controller.get_view_in_lines(viewport,metrics);
var from_l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18962,(0),null);
var to_l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18962,(1),null);
var view_in_lines = (to_l - from_l);
if(((caret_l < from_l)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_l,(0)))){
return andel.controller.set_view_to_line(state,caret_l,metrics);
} else {
if(((to_l - (1)) < caret_l)){
return andel.controller.set_view_to_line(state,(caret_l - (view_in_lines - (1))),metrics);
} else {
return state;

}
}
});
andel.controller.pg_move = (function andel$controller$pg_move(p__18968,dir,selection_QMARK_){
var map__18969 = p__18968;
var map__18969__$1 = ((((!((map__18969 == null)))?((((map__18969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18969):map__18969);
var state = map__18969__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18969__$1,cljs.core.cst$kw$document);
var viewport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18969__$1,cljs.core.cst$kw$viewport);
var map__18971 = document;
var map__18971__$1 = ((((!((map__18971 == null)))?((((map__18971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18971):map__18971);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18971__$1,cljs.core.cst$kw$text);
var map__18972 = viewport;
var map__18972__$1 = ((((!((map__18972 == null)))?((((map__18972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18972):map__18972);
var metrics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18972__$1,cljs.core.cst$kw$metrics);
var view_size_in_lines = andel.controller.count_lines_in_view(viewport,metrics);
var sign = (function (){var G__18975 = dir;
var G__18975__$1 = (((G__18975 instanceof cljs.core.Keyword))?G__18975.fqn:null);
switch (G__18975__$1) {
case "up":
return cljs.core._;

break;
case "down":
return cljs.core._PLUS_;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18975__$1)].join('')));

}
})();
return andel.controller.move_view_if_needed(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),andel.controller.translate_caret_verticaly,text,(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1(view_size_in_lines) : sign.call(null,view_size_in_lines))));
});
andel.controller.home = (function andel$controller$home(p__18977,selection_QMARK_){
var map__18978 = p__18977;
var map__18978__$1 = ((((!((map__18978 == null)))?((((map__18978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18978):map__18978);
var state = map__18978__$1;
var map__18979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18978__$1,cljs.core.cst$kw$editor);
var map__18979__$1 = ((((!((map__18979 == null)))?((((map__18979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18979):map__18979);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18979__$1,cljs.core.cst$kw$caret);
var map__18980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18978__$1,cljs.core.cst$kw$document);
var map__18980__$1 = ((((!((map__18980 == null)))?((((map__18980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18980):map__18980);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18980__$1,cljs.core.cst$kw$text);
var carret_line = andel.controller.get_caret_line(caret,text);
return andel.controller.set_caret_at_line_begining(state,andel.controller.get_caret_line(caret,text),selection_QMARK_);
});
andel.controller.end = (function andel$controller$end(p__18984,selection_QMARK_){
var map__18985 = p__18984;
var map__18985__$1 = ((((!((map__18985 == null)))?((((map__18985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18985):map__18985);
var state = map__18985__$1;
var map__18986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18985__$1,cljs.core.cst$kw$editor);
var map__18986__$1 = ((((!((map__18986 == null)))?((((map__18986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18986):map__18986);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18986__$1,cljs.core.cst$kw$caret);
var map__18987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18985__$1,cljs.core.cst$kw$document);
var map__18987__$1 = ((((!((map__18987 == null)))?((((map__18987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18987):map__18987);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18987__$1,cljs.core.cst$kw$text);
var carret_line = andel.controller.get_caret_line(caret,text);
return andel.controller.set_caret_at_line_end(state,andel.controller.get_caret_line(caret,text),selection_QMARK_);
});
andel.controller.move_caret = (function andel$controller$move_caret(p__18991,dir,selection_QMARK_){
var map__18992 = p__18991;
var map__18992__$1 = ((((!((map__18992 == null)))?((((map__18992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18992):map__18992);
var state = map__18992__$1;
var map__18993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,cljs.core.cst$kw$document);
var map__18993__$1 = ((((!((map__18993 == null)))?((((map__18993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18993):map__18993);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18993__$1,cljs.core.cst$kw$text);
var map__18994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,cljs.core.cst$kw$editor);
var map__18994__$1 = ((((!((map__18994 == null)))?((((map__18994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18994):map__18994);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18994__$1,cljs.core.cst$kw$caret);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18994__$1,cljs.core.cst$kw$selection);
var caret_SINGLEQUOTE_ = (function (){var G__18998 = dir;
var G__18998__$1 = (((G__18998 instanceof cljs.core.Keyword))?G__18998.fqn:null);
switch (G__18998__$1) {
case "left":
return andel.controller.translate_caret(caret,text,(-1));

break;
case "right":
return andel.controller.translate_caret(caret,text,(1));

break;
case "up":
return andel.controller.translate_caret_verticaly(caret,text,(-1));

break;
case "down":
return andel.controller.translate_caret_verticaly(caret,text,(1));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18998__$1)].join('')));

}
})();
var selection_SINGLEQUOTE_ = andel.controller.update_selection(selection,caret,caret_SINGLEQUOTE_,selection_QMARK_);
return andel.controller.move_view_if_needed(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),caret_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$selection], null),selection_SINGLEQUOTE_));
});
andel.controller.drop_selection_on_esc = (function andel$controller$drop_selection_on_esc(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$editor,andel.controller.drop_selection);
});

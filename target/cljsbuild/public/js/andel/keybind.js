// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.keybind');
goog.require('cljs.core');
goog.require('cljs.core.constants');
andel.keybind.MODS = cljs.core.PersistentHashMap.fromArrays(["option","super","win","shift","alt","control","cmd","meta","ctrl","defmod"],[cljs.core.cst$kw$alt,cljs.core.cst$kw$meta,cljs.core.cst$kw$meta,cljs.core.cst$kw$shift,cljs.core.cst$kw$alt,cljs.core.cst$kw$ctrl,cljs.core.cst$kw$meta,cljs.core.cst$kw$meta,cljs.core.cst$kw$ctrl,(((navigator.userAgent.indexOf("Mac OS X") < (0)))?cljs.core.cst$kw$ctrl:cljs.core.cst$kw$meta)]);
andel.keybind.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$shift,"shiftKey",cljs.core.cst$kw$ctrl,"ctrlKey",cljs.core.cst$kw$alt,"altKey",cljs.core.cst$kw$meta,"metaKey",cljs.core.cst$kw$code,"keyCode"], null);
andel.keybind.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$shift,false,cljs.core.cst$kw$ctrl,false,cljs.core.cst$kw$alt,false,cljs.core.cst$kw$meta,false], null);
andel.keybind.KEYS = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(38),(46),(20),(191),(107),(13),(109),(45),(8),(109),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(220),(13),(107),(35),(27),(37)]),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$iter__21091(s__21092){
return (new cljs.core.LazySeq(null,(function (){
var s__21092__$1 = s__21092;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21092__$1);
if(temp__5278__auto__){
var s__21092__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21092__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21092__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21094 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21093 = (0);
while(true){
if((i__21093 < size__8540__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21093);
cljs.core.chunk_append(b__21094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("num-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__21107 = (i__21093 + (1));
i__21093 = G__21107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21094),andel$keybind$iter__21091(cljs.core.chunk_rest(s__21092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21094),null);
}
} else {
var i = cljs.core.first(s__21092__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("num-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),andel$keybind$iter__21091(cljs.core.rest(s__21092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$iter__21095(s__21096){
return (new cljs.core.LazySeq(null,(function (){
var s__21096__$1 = s__21096;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21096__$1);
if(temp__5278__auto__){
var s__21096__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21096__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21096__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21098 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21097 = (0);
while(true){
if((i__21097 < size__8540__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21097);
cljs.core.chunk_append(b__21098,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null));

var G__21108 = (i__21097 + (1));
i__21097 = G__21108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21098),andel$keybind$iter__21095(cljs.core.chunk_rest(s__21096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21098),null);
}
} else {
var i = cljs.core.first(s__21096__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null),andel$keybind$iter__21095(cljs.core.rest(s__21096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$iter__21099(s__21100){
return (new cljs.core.LazySeq(null,(function (){
var s__21100__$1 = s__21100;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21100__$1);
if(temp__5278__auto__){
var s__21100__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21100__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21100__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21102 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21101 = (0);
while(true){
if((i__21101 < size__8540__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21101);
cljs.core.chunk_append(b__21102,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("f"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__21109 = (i__21101 + (1));
i__21101 = G__21109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21102),andel$keybind$iter__21099(cljs.core.chunk_rest(s__21100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21102),null);
}
} else {
var i = cljs.core.first(s__21100__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("f"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),andel$keybind$iter__21099(cljs.core.rest(s__21100__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(25)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$iter__21103(s__21104){
return (new cljs.core.LazySeq(null,(function (){
var s__21104__$1 = s__21104;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21104__$1);
if(temp__5278__auto__){
var s__21104__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21104__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21104__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21106 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21105 = (0);
while(true){
if((i__21105 < size__8540__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21105);
cljs.core.chunk_append(b__21106,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__21110 = (i__21105 + (1));
i__21105 = G__21110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21106),andel$keybind$iter__21103(cljs.core.chunk_rest(s__21104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21106),null);
}
} else {
var i = cljs.core.first(s__21104__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),andel$keybind$iter__21103(cljs.core.rest(s__21104__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((65),(91)));
})())], 0));
andel.keybind.KNOWN_KEYS = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$iter__21111(s__21112){
return (new cljs.core.LazySeq(null,(function (){
var s__21112__$1 = s__21112;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21112__$1);
if(temp__5278__auto__){
var s__21112__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21112__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21112__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21114 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21113 = (0);
while(true){
if((i__21113 < size__8540__auto__)){
var vec__21115 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21113);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21115,(1),null);
cljs.core.chunk_append(b__21114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__21121 = (i__21113 + (1));
i__21113 = G__21121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21114),andel$keybind$iter__21111(cljs.core.chunk_rest(s__21112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21114),null);
}
} else {
var vec__21118 = cljs.core.first(s__21112__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21118,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),andel$keybind$iter__21111(cljs.core.rest(s__21112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(andel.keybind.KEYS);
})());
if(typeof andel.keybind.BINDINGS !== 'undefined'){
} else {
andel.keybind.BINDINGS = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof andel.keybind.PRESSED !== 'undefined'){
} else {
andel.keybind.PRESSED = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
andel.keybind.parse_chord = (function andel$keybind$parse_chord(keystring){
var bits = keystring.split("-");
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bits,(cljs.core.count(bits) - (1)));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.KEYS,button);
if(cljs.core.truth_(code)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(andel.keybind.DEFCHORD,cljs.core.cst$kw$code,code),(function (){var iter__8541__auto__ = ((function (bits,button,code){
return (function andel$keybind$parse_chord_$_iter__21122(s__21123){
return (new cljs.core.LazySeq(null,((function (bits,button,code){
return (function (){
var s__21123__$1 = s__21123;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21123__$1);
if(temp__5278__auto__){
var s__21123__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21123__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21123__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21125 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21124 = (0);
while(true){
if((i__21124 < size__8540__auto__)){
var mod = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21124);
cljs.core.chunk_append(b__21125,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.MODS,mod))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.MODS,mod),true], null):null));

var G__21126 = (i__21124 + (1));
i__21124 = G__21126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21125),andel$keybind$parse_chord_$_iter__21122(cljs.core.chunk_rest(s__21123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21125),null);
}
} else {
var mod = cljs.core.first(s__21123__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.MODS,mod))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.MODS,mod),true], null):null),andel$keybind$parse_chord_$_iter__21122(cljs.core.rest(s__21123__$2)));
}
} else {
return null;
}
break;
}
});})(bits,button,code))
,null,null));
});})(bits,button,code))
;
return iter__8541__auto__(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(bits));
})());
} else {
return null;
}
});
andel.keybind.parse = (function andel$keybind$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(andel.keybind.parse_chord,bits);
});
andel.keybind.e__GT_chord = (function andel$keybind$e__GT_chord(e){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$e__GT_chord_$_iter__21127(s__21128){
return (new cljs.core.LazySeq(null,(function (){
var s__21128__$1 = s__21128;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21128__$1);
if(temp__5278__auto__){
var s__21128__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21128__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21128__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21130 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21129 = (0);
while(true){
if((i__21129 < size__8540__auto__)){
var vec__21131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21129);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21131,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21131,(1),null);
cljs.core.chunk_append(b__21130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__21137 = (i__21129 + (1));
i__21129 = G__21137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21130),andel$keybind$e__GT_chord_$_iter__21127(cljs.core.chunk_rest(s__21128__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21130),null);
}
} else {
var vec__21134 = cljs.core.first(s__21128__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21134,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21134,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),andel$keybind$e__GT_chord_$_iter__21127(cljs.core.rest(s__21128__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(andel.keybind.KEYATTRS);
})());
});
andel.keybind.reset_sequence_BANG_ = (function andel$keybind$reset_sequence_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(andel.keybind.PRESSED,cljs.core.empty);
});
andel.keybind.dispatch = (function andel$keybind$dispatch(e,bindings){
var chord = andel.keybind.e__GT_chord(e);
var sequence = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(andel.keybind.PRESSED),chord);
var inner = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bindings,sequence);
var handlers = cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core.not(inner)){
return andel.keybind.reset_sequence_BANG_();
} else {
if(cljs.core.truth_(handlers)){
var seq__21138_21148 = cljs.core.seq(cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(inner));
var chunk__21139_21149 = null;
var count__21140_21150 = (0);
var i__21141_21151 = (0);
while(true){
if((i__21141_21151 < count__21140_21150)){
var vec__21142_21152 = chunk__21139_21149.cljs$core$IIndexed$_nth$arity$2(null,i__21141_21151);
var __21153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21142_21152,(0),null);
var handler_21154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21142_21152,(1),null);
(handler_21154.cljs$core$IFn$_invoke$arity$2 ? handler_21154.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_21154.call(null,e,sequence));

var G__21155 = seq__21138_21148;
var G__21156 = chunk__21139_21149;
var G__21157 = count__21140_21150;
var G__21158 = (i__21141_21151 + (1));
seq__21138_21148 = G__21155;
chunk__21139_21149 = G__21156;
count__21140_21150 = G__21157;
i__21141_21151 = G__21158;
continue;
} else {
var temp__5278__auto___21159 = cljs.core.seq(seq__21138_21148);
if(temp__5278__auto___21159){
var seq__21138_21160__$1 = temp__5278__auto___21159;
if(cljs.core.chunked_seq_QMARK_(seq__21138_21160__$1)){
var c__8590__auto___21161 = cljs.core.chunk_first(seq__21138_21160__$1);
var G__21162 = cljs.core.chunk_rest(seq__21138_21160__$1);
var G__21163 = c__8590__auto___21161;
var G__21164 = cljs.core.count(c__8590__auto___21161);
var G__21165 = (0);
seq__21138_21148 = G__21162;
chunk__21139_21149 = G__21163;
count__21140_21150 = G__21164;
i__21141_21151 = G__21165;
continue;
} else {
var vec__21145_21166 = cljs.core.first(seq__21138_21160__$1);
var __21167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21145_21166,(0),null);
var handler_21168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21145_21166,(1),null);
(handler_21168.cljs$core$IFn$_invoke$arity$2 ? handler_21168.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_21168.call(null,e,sequence));

var G__21169 = cljs.core.next(seq__21138_21160__$1);
var G__21170 = null;
var G__21171 = (0);
var G__21172 = (0);
seq__21138_21148 = G__21169;
chunk__21139_21149 = G__21170;
count__21140_21150 = G__21171;
i__21141_21151 = G__21172;
continue;
}
} else {
}
}
break;
}

return andel.keybind.reset_sequence_BANG_();
} else {
return cljs.core.reset_BANG_(andel.keybind.PRESSED,sequence);

}
}
});
andel.keybind.bind = (function andel$keybind$bind(bindings,spec,key,cb){

var parsed = andel.keybind.parse(spec);
return cljs.core.assoc_in(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parsed,cljs.core.cst$kw$handlers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cb);
});
andel.keybind.unbind = (function andel$keybind$unbind(bindings,spec,key){

var parsed = andel.keybind.parse(spec);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parsed,cljs.core.cst$kw$handlers),cljs.core.dissoc,key);
});
andel.keybind.bind_BANG_ = (function andel$keybind$bind_BANG_(spec,key,cb){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(andel.keybind.BINDINGS,andel.keybind.bind,spec,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cb], 0));
});
andel.keybind.unbind_BANG_ = (function andel$keybind$unbind_BANG_(spec,key){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(andel.keybind.BINDINGS,andel.keybind.unbind,spec,key);
});
andel.keybind.unbind_all_BANG_ = (function andel$keybind$unbind_all_BANG_(){

andel.keybind.reset_sequence_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(andel.keybind.BINDINGS,cljs.core.empty);
});
andel.keybind.dispatcher = (function andel$keybind$dispatcher(){

return (function (e){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.KNOWN_KEYS,e.keyCode))){
return andel.keybind.dispatch(e,cljs.core.deref(andel.keybind.BINDINGS));
} else {
return null;
}
});
});

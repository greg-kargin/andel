// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.lexer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
andel.lexer.modespec__GT_mode = (function andel$lexer$modespec__GT_mode(modespec){
return (CodeMirror["getMode"])(({"indentUnit": (2)}),modespec);
});
andel.lexer.copy_state = (function andel$lexer$copy_state(mode,state){
var copy_value = (function andel$lexer$copy_state_$_copy_value(v){
if(cljs.core.array_QMARK_(v)){
return v.concat([]);
} else {
return v;
}
});
var default_copy_state = (function andel$lexer$copy_state_$_default_copy_state(state__$1){
var js_obj = ({});
var seq__18253_18258 = cljs.core.seq(cljs.core.js_keys(state__$1));
var chunk__18254_18259 = null;
var count__18255_18260 = (0);
var i__18256_18261 = (0);
while(true){
if((i__18256_18261 < count__18255_18260)){
var k_18262 = chunk__18254_18259.cljs$core$IIndexed$_nth$arity$2(null,i__18256_18261);
(js_obj[k_18262] = copy_value((state__$1[k_18262])));

var G__18263 = seq__18253_18258;
var G__18264 = chunk__18254_18259;
var G__18265 = count__18255_18260;
var G__18266 = (i__18256_18261 + (1));
seq__18253_18258 = G__18263;
chunk__18254_18259 = G__18264;
count__18255_18260 = G__18265;
i__18256_18261 = G__18266;
continue;
} else {
var temp__5278__auto___18267 = cljs.core.seq(seq__18253_18258);
if(temp__5278__auto___18267){
var seq__18253_18268__$1 = temp__5278__auto___18267;
if(cljs.core.chunked_seq_QMARK_(seq__18253_18268__$1)){
var c__8590__auto___18269 = cljs.core.chunk_first(seq__18253_18268__$1);
var G__18270 = cljs.core.chunk_rest(seq__18253_18268__$1);
var G__18271 = c__8590__auto___18269;
var G__18272 = cljs.core.count(c__8590__auto___18269);
var G__18273 = (0);
seq__18253_18258 = G__18270;
chunk__18254_18259 = G__18271;
count__18255_18260 = G__18272;
i__18256_18261 = G__18273;
continue;
} else {
var k_18274 = cljs.core.first(seq__18253_18268__$1);
(js_obj[k_18274] = copy_value((state__$1[k_18274])));

var G__18275 = cljs.core.next(seq__18253_18268__$1);
var G__18276 = null;
var G__18277 = (0);
var G__18278 = (0);
seq__18253_18258 = G__18275;
chunk__18254_18259 = G__18276;
count__18255_18260 = G__18277;
i__18256_18261 = G__18278;
continue;
}
} else {
}
}
break;
}

return js_obj;
});
if((state === true) || ((state == null))){
return state;
} else {
var fexpr__18257 = (function (){var or__7678__auto__ = mode.copyState;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return default_copy_state;
}
})();
return (fexpr__18257.cljs$core$IFn$_invoke$arity$1 ? fexpr__18257.cljs$core$IFn$_invoke$arity$1(state) : fexpr__18257.call(null,state));
}
});
andel.lexer.style__GT_keyword = (function andel$lexer$style__GT_keyword(style){
var G__18279 = style;
if((G__18279 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__18279);
}
});
andel.lexer.lex = (function andel$lexer$lex(modespec,text,initial_state){
var mode = andel.lexer.modespec__GT_mode(modespec);
var tokens = [];
var _STAR_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state);
(CodeMirror["runMode"])(text,modespec,((function (mode,tokens,_STAR_state){
return (function (text__$1,style,line_number,offset,state){
tokens.push(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1.length,andel.lexer.style__GT_keyword(style)], null));

return cljs.core.reset_BANG_(_STAR_state,state);
});})(mode,tokens,_STAR_state))
,({"state": andel.lexer.copy_state(mode,initial_state)}));

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tokens,cljs.core.vec(tokens),cljs.core.cst$kw$state,cljs.core.deref(_STAR_state)], null);
});
andel.lexer.submit_request_BANG_ = (function andel$lexer$submit_request_BANG_(p__18280,p__18281){
var map__18282 = p__18280;
var map__18282__$1 = ((((!((map__18282 == null)))?((((map__18282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18282):map__18282);
var worker = map__18282__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,cljs.core.cst$kw$input);
var map__18283 = p__18281;
var map__18283__$1 = ((((!((map__18283 == null)))?((((map__18283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18283):map__18283);
var req = map__18283__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18283__$1,cljs.core.cst$kw$index);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18283__$1,cljs.core.cst$kw$text);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(input,req);
});
andel.lexer.new_lexer_worker = (function andel$lexer$new_lexer_worker(modespec){
var input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var output = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var states = [null];
var c__16291__auto___18395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___18395,input,output,states){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___18395,input,output,states){
return (function (state_18355){
var state_val_18356 = (state_18355[(1)]);
if((state_val_18356 === (7))){
var inst_18351 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
var statearr_18357_18396 = state_18355__$1;
(statearr_18357_18396[(2)] = inst_18351);

(statearr_18357_18396[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (20))){
var state_18355__$1 = state_18355;
var statearr_18358_18397 = state_18355__$1;
(statearr_18358_18397[(2)] = true);

(statearr_18358_18397[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (1))){
var state_18355__$1 = state_18355;
var statearr_18359_18398 = state_18355__$1;
(statearr_18359_18398[(2)] = null);

(statearr_18359_18398[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (24))){
var inst_18316 = (state_18355[(7)]);
var state_18355__$1 = state_18355;
var statearr_18360_18399 = state_18355__$1;
(statearr_18360_18399[(2)] = inst_18316);

(statearr_18360_18399[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (4))){
var inst_18288 = (state_18355[(8)]);
var inst_18288__$1 = (state_18355[(2)]);
var state_18355__$1 = (function (){var statearr_18361 = state_18355;
(statearr_18361[(8)] = inst_18288__$1);

return statearr_18361;
})();
if(cljs.core.truth_(inst_18288__$1)){
var statearr_18362_18400 = state_18355__$1;
(statearr_18362_18400[(1)] = (5));

} else {
var statearr_18363_18401 = state_18355__$1;
(statearr_18363_18401[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (15))){
var inst_18288 = (state_18355[(8)]);
var state_18355__$1 = state_18355;
var statearr_18364_18402 = state_18355__$1;
(statearr_18364_18402[(2)] = inst_18288);

(statearr_18364_18402[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (21))){
var state_18355__$1 = state_18355;
var statearr_18365_18403 = state_18355__$1;
(statearr_18365_18403[(2)] = false);

(statearr_18365_18403[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (13))){
var inst_18303 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
var statearr_18366_18404 = state_18355__$1;
(statearr_18366_18404[(2)] = inst_18303);

(statearr_18366_18404[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (22))){
var inst_18329 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
var statearr_18367_18405 = state_18355__$1;
(statearr_18367_18405[(2)] = inst_18329);

(statearr_18367_18405[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (6))){
var state_18355__$1 = state_18355;
var statearr_18368_18406 = state_18355__$1;
(statearr_18368_18406[(2)] = null);

(statearr_18368_18406[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (25))){
var inst_18312 = (state_18355[(9)]);
var inst_18311 = (state_18355[(10)]);
var inst_18337 = (state_18355[(2)]);
var inst_18338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18337,cljs.core.cst$kw$tokens);
var inst_18339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18337,cljs.core.cst$kw$state);
var inst_18340 = (inst_18312 + (1));
var inst_18341 = states.length;
var inst_18342 = (inst_18341 - inst_18312);
var inst_18343 = states.splice(inst_18340,inst_18342);
var inst_18344 = states.push(inst_18339);
var inst_18345 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_18311,cljs.core.cst$kw$tokens,inst_18338);
var state_18355__$1 = (function (){var statearr_18369 = state_18355;
(statearr_18369[(11)] = inst_18343);

(statearr_18369[(12)] = inst_18344);

return statearr_18369;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18355__$1,(26),output,inst_18345);
} else {
if((state_val_18356 === (17))){
var inst_18316 = (state_18355[(7)]);
var inst_18321 = inst_18316.cljs$lang$protocol_mask$partition0$;
var inst_18322 = (inst_18321 & (64));
var inst_18323 = inst_18316.cljs$core$ISeq$;
var inst_18324 = (cljs.core.PROTOCOL_SENTINEL === inst_18323);
var inst_18325 = (inst_18322) || (inst_18324);
var state_18355__$1 = state_18355;
if(cljs.core.truth_(inst_18325)){
var statearr_18370_18407 = state_18355__$1;
(statearr_18370_18407[(1)] = (20));

} else {
var statearr_18371_18408 = state_18355__$1;
(statearr_18371_18408[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (3))){
var inst_18353 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18355__$1,inst_18353);
} else {
if((state_val_18356 === (12))){
var state_18355__$1 = state_18355;
var statearr_18372_18409 = state_18355__$1;
(statearr_18372_18409[(2)] = false);

(statearr_18372_18409[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (2))){
var state_18355__$1 = state_18355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18355__$1,(4),input);
} else {
if((state_val_18356 === (23))){
var inst_18316 = (state_18355[(7)]);
var inst_18334 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18316);
var state_18355__$1 = state_18355;
var statearr_18373_18410 = state_18355__$1;
(statearr_18373_18410[(2)] = inst_18334);

(statearr_18373_18410[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (19))){
var inst_18332 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
if(cljs.core.truth_(inst_18332)){
var statearr_18374_18411 = state_18355__$1;
(statearr_18374_18411[(1)] = (23));

} else {
var statearr_18375_18412 = state_18355__$1;
(statearr_18375_18412[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (11))){
var state_18355__$1 = state_18355;
var statearr_18376_18413 = state_18355__$1;
(statearr_18376_18413[(2)] = true);

(statearr_18376_18413[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (9))){
var state_18355__$1 = state_18355;
var statearr_18377_18414 = state_18355__$1;
(statearr_18377_18414[(2)] = false);

(statearr_18377_18414[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (5))){
var inst_18288 = (state_18355[(8)]);
var inst_18292 = (inst_18288 == null);
var inst_18293 = cljs.core.not(inst_18292);
var state_18355__$1 = state_18355;
if(inst_18293){
var statearr_18378_18415 = state_18355__$1;
(statearr_18378_18415[(1)] = (8));

} else {
var statearr_18379_18416 = state_18355__$1;
(statearr_18379_18416[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (14))){
var inst_18288 = (state_18355[(8)]);
var inst_18308 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18288);
var state_18355__$1 = state_18355;
var statearr_18380_18417 = state_18355__$1;
(statearr_18380_18417[(2)] = inst_18308);

(statearr_18380_18417[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (26))){
var inst_18347 = (state_18355[(2)]);
var state_18355__$1 = (function (){var statearr_18381 = state_18355;
(statearr_18381[(13)] = inst_18347);

return statearr_18381;
})();
var statearr_18382_18418 = state_18355__$1;
(statearr_18382_18418[(2)] = null);

(statearr_18382_18418[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (16))){
var inst_18312 = (state_18355[(9)]);
var inst_18311 = (state_18355[(10)]);
var inst_18316 = (state_18355[(7)]);
var inst_18311__$1 = (state_18355[(2)]);
var inst_18312__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18311__$1,cljs.core.cst$kw$index);
var inst_18313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18311__$1,cljs.core.cst$kw$text);
var inst_18315 = (states[inst_18312__$1]);
var inst_18316__$1 = andel.lexer.lex(modespec,inst_18313,inst_18315);
var inst_18318 = (inst_18316__$1 == null);
var inst_18319 = cljs.core.not(inst_18318);
var state_18355__$1 = (function (){var statearr_18383 = state_18355;
(statearr_18383[(9)] = inst_18312__$1);

(statearr_18383[(10)] = inst_18311__$1);

(statearr_18383[(7)] = inst_18316__$1);

return statearr_18383;
})();
if(inst_18319){
var statearr_18384_18419 = state_18355__$1;
(statearr_18384_18419[(1)] = (17));

} else {
var statearr_18385_18420 = state_18355__$1;
(statearr_18385_18420[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (10))){
var inst_18306 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
if(cljs.core.truth_(inst_18306)){
var statearr_18386_18421 = state_18355__$1;
(statearr_18386_18421[(1)] = (14));

} else {
var statearr_18387_18422 = state_18355__$1;
(statearr_18387_18422[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (18))){
var state_18355__$1 = state_18355;
var statearr_18388_18423 = state_18355__$1;
(statearr_18388_18423[(2)] = false);

(statearr_18388_18423[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18356 === (8))){
var inst_18288 = (state_18355[(8)]);
var inst_18295 = inst_18288.cljs$lang$protocol_mask$partition0$;
var inst_18296 = (inst_18295 & (64));
var inst_18297 = inst_18288.cljs$core$ISeq$;
var inst_18298 = (cljs.core.PROTOCOL_SENTINEL === inst_18297);
var inst_18299 = (inst_18296) || (inst_18298);
var state_18355__$1 = state_18355;
if(cljs.core.truth_(inst_18299)){
var statearr_18389_18424 = state_18355__$1;
(statearr_18389_18424[(1)] = (11));

} else {
var statearr_18390_18425 = state_18355__$1;
(statearr_18390_18425[(1)] = (12));

}

return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___18395,input,output,states))
;
return ((function (switch__16189__auto__,c__16291__auto___18395,input,output,states){
return (function() {
var andel$lexer$new_lexer_worker_$_state_machine__16190__auto__ = null;
var andel$lexer$new_lexer_worker_$_state_machine__16190__auto____0 = (function (){
var statearr_18391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18391[(0)] = andel$lexer$new_lexer_worker_$_state_machine__16190__auto__);

(statearr_18391[(1)] = (1));

return statearr_18391;
});
var andel$lexer$new_lexer_worker_$_state_machine__16190__auto____1 = (function (state_18355){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_18355);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e18392){if((e18392 instanceof Object)){
var ex__16193__auto__ = e18392;
var statearr_18393_18426 = state_18355;
(statearr_18393_18426[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18355);

return cljs.core.cst$kw$recur;
} else {
throw e18392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__18427 = state_18355;
state_18355 = G__18427;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
andel$lexer$new_lexer_worker_$_state_machine__16190__auto__ = function(state_18355){
switch(arguments.length){
case 0:
return andel$lexer$new_lexer_worker_$_state_machine__16190__auto____0.call(this);
case 1:
return andel$lexer$new_lexer_worker_$_state_machine__16190__auto____1.call(this,state_18355);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$lexer$new_lexer_worker_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = andel$lexer$new_lexer_worker_$_state_machine__16190__auto____0;
andel$lexer$new_lexer_worker_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = andel$lexer$new_lexer_worker_$_state_machine__16190__auto____1;
return andel$lexer$new_lexer_worker_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___18395,input,output,states))
})();
var state__16293__auto__ = (function (){var statearr_18394 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_18394[(6)] = c__16291__auto___18395);

return statearr_18394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___18395,input,output,states))
);


return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$input,input,cljs.core.cst$kw$output,output,cljs.core.cst$kw$modespec,modespec], null);
});

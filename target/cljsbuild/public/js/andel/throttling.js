// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.throttling');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
andel.throttling.get_time_BANG_ = (function andel$throttling$get_time_BANG_(){
return Date.now();
});
andel.throttling.throttle = (function andel$throttling$throttle(f,ms){

var _STAR_last_call_time = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(andel.throttling.get_time_BANG_());
return ((function (_STAR_last_call_time){
return (function() { 
var G__20221__delegate = function (args){
if(((andel.throttling.get_time_BANG_() - cljs.core.deref(_STAR_last_call_time)) >= ms)){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.reset_BANG_(_STAR_last_call_time,andel.throttling.get_time_BANG_());

return res;
} else {
return null;
}
};
var G__20221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20222__i = 0, G__20222__a = new Array(arguments.length -  0);
while (G__20222__i < G__20222__a.length) {G__20222__a[G__20222__i] = arguments[G__20222__i + 0]; ++G__20222__i;}
  args = new cljs.core.IndexedSeq(G__20222__a,0,null);
} 
return G__20221__delegate.call(this,args);};
G__20221.cljs$lang$maxFixedArity = 0;
G__20221.cljs$lang$applyTo = (function (arglist__20223){
var args = cljs.core.seq(arglist__20223);
return G__20221__delegate(args);
});
G__20221.cljs$core$IFn$_invoke$arity$variadic = G__20221__delegate;
return G__20221;
})()
;
;})(_STAR_last_call_time))
});
andel.throttling.debounce = (function andel$throttling$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__16291__auto___20301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___20301,out){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___20301,out){
return (function (state_20272){
var state_val_20273 = (state_20272[(1)]);
if((state_val_20273 === (7))){
var inst_20232 = (state_20272[(2)]);
var state_20272__$1 = state_20272;
var statearr_20274_20302 = state_20272__$1;
(statearr_20274_20302[(2)] = inst_20232);

(statearr_20274_20302[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (1))){
var inst_20224 = null;
var state_20272__$1 = (function (){var statearr_20275 = state_20272;
(statearr_20275[(7)] = inst_20224);

return statearr_20275;
})();
var statearr_20276_20303 = state_20272__$1;
(statearr_20276_20303[(2)] = null);

(statearr_20276_20303[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (4))){
var state_20272__$1 = state_20272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20272__$1,(7),in$);
} else {
if((state_val_20273 === (15))){
var inst_20266 = (state_20272[(2)]);
var state_20272__$1 = state_20272;
var statearr_20277_20304 = state_20272__$1;
(statearr_20277_20304[(2)] = inst_20266);

(statearr_20277_20304[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (13))){
var inst_20242 = (state_20272[(8)]);
var state_20272__$1 = state_20272;
if(cljs.core.truth_(inst_20242)){
var statearr_20278_20305 = state_20272__$1;
(statearr_20278_20305[(1)] = (16));

} else {
var statearr_20279_20306 = state_20272__$1;
(statearr_20279_20306[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (6))){
var inst_20236 = (state_20272[(9)]);
var inst_20235 = (state_20272[(2)]);
var inst_20236__$1 = cljs.core.async.timeout(ms);
var inst_20237 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20238 = [in$,inst_20236__$1];
var inst_20239 = (new cljs.core.PersistentVector(null,2,(5),inst_20237,inst_20238,null));
var state_20272__$1 = (function (){var statearr_20280 = state_20272;
(statearr_20280[(10)] = inst_20235);

(statearr_20280[(9)] = inst_20236__$1);

return statearr_20280;
})();
return cljs.core.async.ioc_alts_BANG_(state_20272__$1,(8),inst_20239);
} else {
if((state_val_20273 === (17))){
var inst_20258 = cljs.core.async.close_BANG_(out);
var state_20272__$1 = state_20272;
var statearr_20281_20307 = state_20272__$1;
(statearr_20281_20307[(2)] = inst_20258);

(statearr_20281_20307[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (3))){
var inst_20270 = (state_20272[(2)]);
var state_20272__$1 = state_20272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20272__$1,inst_20270);
} else {
if((state_val_20273 === (12))){
var inst_20250 = (state_20272[(2)]);
var inst_20224 = null;
var state_20272__$1 = (function (){var statearr_20282 = state_20272;
(statearr_20282[(7)] = inst_20224);

(statearr_20282[(11)] = inst_20250);

return statearr_20282;
})();
var statearr_20283_20308 = state_20272__$1;
(statearr_20283_20308[(2)] = null);

(statearr_20283_20308[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (2))){
var inst_20224 = (state_20272[(7)]);
var inst_20229 = (inst_20224 == null);
var state_20272__$1 = state_20272;
if(cljs.core.truth_(inst_20229)){
var statearr_20284_20309 = state_20272__$1;
(statearr_20284_20309[(1)] = (4));

} else {
var statearr_20285_20310 = state_20272__$1;
(statearr_20285_20310[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (11))){
var inst_20268 = (state_20272[(2)]);
var state_20272__$1 = state_20272;
var statearr_20286_20311 = state_20272__$1;
(statearr_20286_20311[(2)] = inst_20268);

(statearr_20286_20311[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (9))){
var inst_20235 = (state_20272[(10)]);
var state_20272__$1 = state_20272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20272__$1,(12),out,inst_20235);
} else {
if((state_val_20273 === (5))){
var inst_20224 = (state_20272[(7)]);
var state_20272__$1 = state_20272;
var statearr_20287_20312 = state_20272__$1;
(statearr_20287_20312[(2)] = inst_20224);

(statearr_20287_20312[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (14))){
var inst_20243 = (state_20272[(12)]);
var inst_20262 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20243)].join('');
var inst_20263 = (new Error(inst_20262));
var inst_20264 = (function(){throw inst_20263})();
var state_20272__$1 = state_20272;
var statearr_20288_20313 = state_20272__$1;
(statearr_20288_20313[(2)] = inst_20264);

(statearr_20288_20313[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (16))){
var inst_20242 = (state_20272[(8)]);
var inst_20224 = inst_20242;
var state_20272__$1 = (function (){var statearr_20289 = state_20272;
(statearr_20289[(7)] = inst_20224);

return statearr_20289;
})();
var statearr_20290_20314 = state_20272__$1;
(statearr_20290_20314[(2)] = null);

(statearr_20290_20314[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (10))){
var inst_20243 = (state_20272[(12)]);
var inst_20253 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$,inst_20243);
var state_20272__$1 = state_20272;
if(inst_20253){
var statearr_20291_20315 = state_20272__$1;
(statearr_20291_20315[(1)] = (13));

} else {
var statearr_20292_20316 = state_20272__$1;
(statearr_20292_20316[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (18))){
var inst_20260 = (state_20272[(2)]);
var state_20272__$1 = state_20272;
var statearr_20293_20317 = state_20272__$1;
(statearr_20293_20317[(2)] = inst_20260);

(statearr_20293_20317[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20273 === (8))){
var inst_20243 = (state_20272[(12)]);
var inst_20236 = (state_20272[(9)]);
var inst_20241 = (state_20272[(2)]);
var inst_20242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20241,(0),null);
var inst_20243__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20241,(1),null);
var inst_20247 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20236,inst_20243__$1);
var state_20272__$1 = (function (){var statearr_20294 = state_20272;
(statearr_20294[(8)] = inst_20242);

(statearr_20294[(12)] = inst_20243__$1);

return statearr_20294;
})();
if(inst_20247){
var statearr_20295_20318 = state_20272__$1;
(statearr_20295_20318[(1)] = (9));

} else {
var statearr_20296_20319 = state_20272__$1;
(statearr_20296_20319[(1)] = (10));

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
});})(c__16291__auto___20301,out))
;
return ((function (switch__16189__auto__,c__16291__auto___20301,out){
return (function() {
var andel$throttling$debounce_$_state_machine__16190__auto__ = null;
var andel$throttling$debounce_$_state_machine__16190__auto____0 = (function (){
var statearr_20297 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20297[(0)] = andel$throttling$debounce_$_state_machine__16190__auto__);

(statearr_20297[(1)] = (1));

return statearr_20297;
});
var andel$throttling$debounce_$_state_machine__16190__auto____1 = (function (state_20272){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_20272);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e20298){if((e20298 instanceof Object)){
var ex__16193__auto__ = e20298;
var statearr_20299_20320 = state_20272;
(statearr_20299_20320[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20272);

return cljs.core.cst$kw$recur;
} else {
throw e20298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__20321 = state_20272;
state_20272 = G__20321;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
andel$throttling$debounce_$_state_machine__16190__auto__ = function(state_20272){
switch(arguments.length){
case 0:
return andel$throttling$debounce_$_state_machine__16190__auto____0.call(this);
case 1:
return andel$throttling$debounce_$_state_machine__16190__auto____1.call(this,state_20272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$throttling$debounce_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = andel$throttling$debounce_$_state_machine__16190__auto____0;
andel$throttling$debounce_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = andel$throttling$debounce_$_state_machine__16190__auto____1;
return andel$throttling$debounce_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___20301,out))
})();
var state__16293__auto__ = (function (){var statearr_20300 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_20300[(6)] = c__16291__auto___20301);

return statearr_20300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___20301,out))
);


return out;
});
andel.throttling.debounce_wrapper = (function andel$throttling$debounce_wrapper(f,ms){

var in_args = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var out_args = andel.throttling.debounce(in_args,ms);
var c__16291__auto___20352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___20352,in_args,out_args){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___20352,in_args,out_args){
return (function (state_20337){
var state_val_20338 = (state_20337[(1)]);
if((state_val_20338 === (1))){
var state_20337__$1 = state_20337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20337__$1,(2),out_args);
} else {
if((state_val_20338 === (2))){
var inst_20323 = (state_20337[(2)]);
var inst_20324 = inst_20323;
var state_20337__$1 = (function (){var statearr_20339 = state_20337;
(statearr_20339[(7)] = inst_20324);

return statearr_20339;
})();
var statearr_20340_20353 = state_20337__$1;
(statearr_20340_20353[(2)] = null);

(statearr_20340_20353[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20338 === (3))){
var inst_20324 = (state_20337[(7)]);
var state_20337__$1 = state_20337;
if(cljs.core.truth_(inst_20324)){
var statearr_20341_20354 = state_20337__$1;
(statearr_20341_20354[(1)] = (5));

} else {
var statearr_20342_20355 = state_20337__$1;
(statearr_20342_20355[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20338 === (4))){
var inst_20335 = (state_20337[(2)]);
var state_20337__$1 = state_20337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20337__$1,inst_20335);
} else {
if((state_val_20338 === (5))){
var inst_20324 = (state_20337[(7)]);
var inst_20327 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20324);
var state_20337__$1 = (function (){var statearr_20343 = state_20337;
(statearr_20343[(8)] = inst_20327);

return statearr_20343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20337__$1,(8),out_args);
} else {
if((state_val_20338 === (6))){
var state_20337__$1 = state_20337;
var statearr_20344_20356 = state_20337__$1;
(statearr_20344_20356[(2)] = null);

(statearr_20344_20356[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20338 === (7))){
var inst_20333 = (state_20337[(2)]);
var state_20337__$1 = state_20337;
var statearr_20345_20357 = state_20337__$1;
(statearr_20345_20357[(2)] = inst_20333);

(statearr_20345_20357[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20338 === (8))){
var inst_20329 = (state_20337[(2)]);
var inst_20324 = inst_20329;
var state_20337__$1 = (function (){var statearr_20346 = state_20337;
(statearr_20346[(7)] = inst_20324);

return statearr_20346;
})();
var statearr_20347_20358 = state_20337__$1;
(statearr_20347_20358[(2)] = null);

(statearr_20347_20358[(1)] = (3));


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
});})(c__16291__auto___20352,in_args,out_args))
;
return ((function (switch__16189__auto__,c__16291__auto___20352,in_args,out_args){
return (function() {
var andel$throttling$debounce_wrapper_$_state_machine__16190__auto__ = null;
var andel$throttling$debounce_wrapper_$_state_machine__16190__auto____0 = (function (){
var statearr_20348 = [null,null,null,null,null,null,null,null,null];
(statearr_20348[(0)] = andel$throttling$debounce_wrapper_$_state_machine__16190__auto__);

(statearr_20348[(1)] = (1));

return statearr_20348;
});
var andel$throttling$debounce_wrapper_$_state_machine__16190__auto____1 = (function (state_20337){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_20337);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e20349){if((e20349 instanceof Object)){
var ex__16193__auto__ = e20349;
var statearr_20350_20359 = state_20337;
(statearr_20350_20359[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20337);

return cljs.core.cst$kw$recur;
} else {
throw e20349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__20360 = state_20337;
state_20337 = G__20360;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
andel$throttling$debounce_wrapper_$_state_machine__16190__auto__ = function(state_20337){
switch(arguments.length){
case 0:
return andel$throttling$debounce_wrapper_$_state_machine__16190__auto____0.call(this);
case 1:
return andel$throttling$debounce_wrapper_$_state_machine__16190__auto____1.call(this,state_20337);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$throttling$debounce_wrapper_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = andel$throttling$debounce_wrapper_$_state_machine__16190__auto____0;
andel$throttling$debounce_wrapper_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = andel$throttling$debounce_wrapper_$_state_machine__16190__auto____1;
return andel$throttling$debounce_wrapper_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___20352,in_args,out_args))
})();
var state__16293__auto__ = (function (){var statearr_20351 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_20351[(6)] = c__16291__auto___20352);

return statearr_20351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___20352,in_args,out_args))
);


return ((function (in_args,out_args){
return (function() { 
var G__20361__delegate = function (args){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(in_args,args);

return null;
};
var G__20361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20362__i = 0, G__20362__a = new Array(arguments.length -  0);
while (G__20362__i < G__20362__a.length) {G__20362__a[G__20362__i] = arguments[G__20362__i + 0]; ++G__20362__i;}
  args = new cljs.core.IndexedSeq(G__20362__a,0,null);
} 
return G__20361__delegate.call(this,args);};
G__20361.cljs$lang$maxFixedArity = 0;
G__20361.cljs$lang$applyTo = (function (arglist__20363){
var args = cljs.core.seq(arglist__20363);
return G__20361__delegate(args);
});
G__20361.cljs$core$IFn$_invoke$arity$variadic = G__20361__delegate;
return G__20361;
})()
;
;})(in_args,out_args))
});

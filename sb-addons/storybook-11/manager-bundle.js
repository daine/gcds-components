try{
(()=>{var K=__STORYBOOK_TYPES__,{Addon_TypesEnum:_}=__STORYBOOK_TYPES__;var V=__STORYBOOK_API__,{ActiveTabs:F,Consumer:z,ManagerContext:Q,Provider:q,addons:s,combineParameters:J,controlOrMetaKey:Z,controlOrMetaSymbol:ee,eventMatchesShortcut:te,eventToShortcut:re,isMacLike:oe,isShortcutTaken:ne,keyToSymbol:se,merge:ae,mockChannel:d,optionOrAltSymbol:ie,shortcutMatchesShortcut:ue,shortcutToHumanString:le,types:ce,useAddonState:he,useArgTypes:_e,useArgs:de,useChannel:Ee,useGlobalTypes:fe,useGlobals:Se,useParameter:Oe,useSharedState:Te,useStoryPrepared:Re,useStorybookApi:pe,useStorybookState:Ce}=__STORYBOOK_API__;var Pe=__STORYBOOK_CHANNELS__,{Channel:i,PostMessageTransport:be,WebsocketTransport:He,createBrowserChannel:xe}=__STORYBOOK_CHANNELS__;var n=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var Ke=__STORYBOOK_CLIENT_LOGGER__,{deprecate:We,logger:E,once:je,pretty:$e}=__STORYBOOK_CLIENT_LOGGER__;var Qe=__STORYBOOK_CORE_EVENTS__,{CHANNEL_CREATED:qe,CHANNEL_WS_DISCONNECT:Je,CONFIG_ERROR:Ze,CURRENT_STORY_WAS_SET:et,DOCS_PREPARED:tt,DOCS_RENDERED:rt,FORCE_REMOUNT:ot,FORCE_RE_RENDER:f,GLOBALS_UPDATED:nt,NAVIGATE_URL:st,PLAY_FUNCTION_THREW_EXCEPTION:at,PRELOAD_ENTRIES:it,PREVIEW_BUILDER_PROGRESS:ut,PREVIEW_KEYDOWN:lt,REGISTER_SUBSCRIPTION:ct,REQUEST_WHATS_NEW_DATA:ht,RESET_STORY_ARGS:S,RESULT_WHATS_NEW_DATA:_t,SELECT_STORY:dt,SET_CONFIG:Et,SET_CURRENT_STORY:ft,SET_GLOBALS:St,SET_INDEX:Ot,SET_STORIES:Tt,SET_WHATS_NEW_CACHE:Rt,SHARED_STATE_CHANGED:pt,SHARED_STATE_SET:Ct,STORIES_COLLAPSE_ALL:mt,STORIES_EXPAND_ALL:Nt,STORY_ARGS_UPDATED:gt,STORY_CHANGED:kt,STORY_ERRORED:vt,STORY_INDEX_INVALIDATED:At,STORY_MISSING:Dt,STORY_PREPARED:yt,STORY_RENDERED:O,STORY_RENDER_PHASE_CHANGED:Pt,STORY_SPECIFIED:bt,STORY_THREW_EXCEPTION:Ht,STORY_UNCHANGED:xt,TELEMETRY_ERROR:Lt,TOGGLE_WHATS_NEW_NOTIFICATIONS:wt,UNHANDLED_ERRORS_WHILE_PLAYING:It,UPDATE_GLOBALS:T,UPDATE_QUERY_PARAMS:Yt,UPDATE_STORY_ARGS:R}=__STORYBOOK_CORE_EVENTS__;function u(){let e={setHandler:()=>{},send:()=>{}};return new i({transport:e})}var l=class{constructor(){this.getChannel=()=>{if(!this.channel){let e=u();return this.setChannel(e),e}return this.channel},this.getServerChannel=()=>{if(!this.serverChannel)throw new Error("Accessing non-existent serverChannel");return this.serverChannel},this.ready=()=>this.promise,this.hasChannel=()=>!!this.channel,this.hasServerChannel=()=>!!this.serverChannel,this.setChannel=e=>{this.channel=e,this.resolve()},this.setServerChannel=e=>{this.serverChannel=e},this.promise=new Promise(e=>{this.resolve=()=>e(this.getChannel())})}},a="__STORYBOOK_ADDONS_PREVIEW";function p(){return n[a]||(n[a]=new l),n[a]}var C=p();var cr=__STORYBOOK_THEMING__,{CacheProvider:hr,ClassNames:_r,Global:dr,ThemeProvider:Er,background:fr,color:Sr,convert:Or,create:c,createCache:Tr,createGlobal:Rr,createReset:pr,css:Cr,darken:mr,ensure:Nr,ignoreSsrWarning:gr,isPropValid:kr,jsx:vr,keyframes:Ar,lighten:Dr,styled:yr,themes:Pr,typography:br,useTheme:Hr,withTheme:xr}=__STORYBOOK_THEMING__;var h=c({base:"light",brandTitle:"Government of Canada | Gouvernement du Canada",brandUrl:"",brandImage:"https://digital.canada.ca/img/cds/goc--header-logo.svg",brandTarget:"_self",fontBase:'"Noto Sans", sans-serif',fontCode:"monospace",appContentBg:"#fff",appBorderColor:"#7d828b",appBorderRadius:0,barTextColor:"#000",textColor:"#000",textInverseColor:"green",inputBorderRadius:"0.1875rem"});s.setConfig({theme:h});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
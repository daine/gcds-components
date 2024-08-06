/*! For license information please see components-gcds-top-nav-stories-properties-mdx.fe39614d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[8268,2895],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-top-nav/stories/gcds-top-nav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Center:()=>Center,Default:()=>Default,Home:()=>Home,Left:()=>Left,Playground:()=>Playground,Props:()=>Props,Right:()=>Right,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Top navigation",argTypes:{label:{name:"label",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},alignment:{control:{type:"select"},options:["right","left","center"],table:{type:{summary:"string"},defaultValue:{summary:"right"}}},...__webpack_require__("./src/utils/storybook/component-properties.js").q_,home:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.home?`<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> `:null}\n  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>\n\n  <gcds-nav-group  open-trigger="Features" menu-label="Features">\n    <gcds-nav-link href="#" current>Create reusable templates</gcds-nav-link>\n    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>\n    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>\n    <gcds-nav-link href="#">Send messages automatically</gcds-nav-link>\n  </gcds-nav-group>\n\n  <gcds-nav-link href="#">Contact us</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.home?`<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> `:null}\n  <GcdsNavLink href="#">Why GC Notify</GcdsNavLink>\n\n  <GcdsNavGroup  openTrigger="Features" menuLabel="Features">\n    <GcdsNavLink href="#" current>Create reusable templates</GcdsNavLink>\n    <GcdsNavLink href="#">Personalize messages</GcdsNavLink>\n    <GcdsNavLink href="#">Schedule messages</GcdsNavLink>\n    <GcdsNavLink href="#">Send messages automatically</GcdsNavLink>\n  </GcdsNavGroup>\n\n  <GcdsNavLink href="#">Contact us</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={label:"Top navigation",alignment:"right",home:"GC Notify",lang:"en"};const Home=Template.bind({});Home.args={label:"Top navigation",alignment:"right",home:"GC Notify",lang:"en"};const Right=Template.bind({});Right.args={label:"Top navigation",alignment:"right",home:"",lang:"en"};const Center=Template.bind({});Center.args={label:"Top navigation",alignment:"center",home:"",lang:"en"};const Left=Template.bind({});Left.args={label:"Top navigation",alignment:"left",home:"",lang:"en"};const Props=Template.bind({});Props.args={label:"Top navigation",alignment:"right",home:"GC Notify",lang:"en"};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.home?`<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> `:null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={label:"Top navigation",alignment:"right",home:"GC Notify",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>\n\n  <gcds-nav-group  open-trigger="Features" menu-label="Features">\n    <gcds-nav-link href="#" current>Create reusable templates</gcds-nav-link>\n    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>\n    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>\n    <gcds-nav-link href="#">Send messages automatically</gcds-nav-link>\n  </gcds-nav-group>\n\n  <gcds-nav-link href="#">Contact us</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Why GC Notify</GcdsNavLink>\n\n  <GcdsNavGroup  openTrigger="Features" menuLabel="Features">\n    <GcdsNavLink href="#" current>Create reusable templates</GcdsNavLink>\n    <GcdsNavLink href="#">Personalize messages</GcdsNavLink>\n    <GcdsNavLink href="#">Schedule messages</GcdsNavLink>\n    <GcdsNavLink href="#">Send messages automatically</GcdsNavLink>\n  </GcdsNavGroup>\n\n  <GcdsNavLink href="#">Contact us</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Home.parameters={...Home.parameters,docs:{...Home.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>\n\n  <gcds-nav-group  open-trigger="Features" menu-label="Features">\n    <gcds-nav-link href="#" current>Create reusable templates</gcds-nav-link>\n    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>\n    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>\n    <gcds-nav-link href="#">Send messages automatically</gcds-nav-link>\n  </gcds-nav-group>\n\n  <gcds-nav-link href="#">Contact us</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Why GC Notify</GcdsNavLink>\n\n  <GcdsNavGroup  openTrigger="Features" menuLabel="Features">\n    <GcdsNavLink href="#" current>Create reusable templates</GcdsNavLink>\n    <GcdsNavLink href="#">Personalize messages</GcdsNavLink>\n    <GcdsNavLink href="#">Schedule messages</GcdsNavLink>\n    <GcdsNavLink href="#">Send messages automatically</GcdsNavLink>\n  </GcdsNavGroup>\n\n  <GcdsNavLink href="#">Contact us</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Home.parameters?.docs?.source}}},Right.parameters={...Right.parameters,docs:{...Right.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>\n\n  <gcds-nav-group  open-trigger="Features" menu-label="Features">\n    <gcds-nav-link href="#" current>Create reusable templates</gcds-nav-link>\n    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>\n    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>\n    <gcds-nav-link href="#">Send messages automatically</gcds-nav-link>\n  </gcds-nav-group>\n\n  <gcds-nav-link href="#">Contact us</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Why GC Notify</GcdsNavLink>\n\n  <GcdsNavGroup  openTrigger="Features" menuLabel="Features">\n    <GcdsNavLink href="#" current>Create reusable templates</GcdsNavLink>\n    <GcdsNavLink href="#">Personalize messages</GcdsNavLink>\n    <GcdsNavLink href="#">Schedule messages</GcdsNavLink>\n    <GcdsNavLink href="#">Send messages automatically</GcdsNavLink>\n  </GcdsNavGroup>\n\n  <GcdsNavLink href="#">Contact us</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Right.parameters?.docs?.source}}},Center.parameters={...Center.parameters,docs:{...Center.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>\n\n  <gcds-nav-group  open-trigger="Features" menu-label="Features">\n    <gcds-nav-link href="#" current>Create reusable templates</gcds-nav-link>\n    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>\n    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>\n    <gcds-nav-link href="#">Send messages automatically</gcds-nav-link>\n  </gcds-nav-group>\n\n  <gcds-nav-link href="#">Contact us</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Why GC Notify</GcdsNavLink>\n\n  <GcdsNavGroup  openTrigger="Features" menuLabel="Features">\n    <GcdsNavLink href="#" current>Create reusable templates</GcdsNavLink>\n    <GcdsNavLink href="#">Personalize messages</GcdsNavLink>\n    <GcdsNavLink href="#">Schedule messages</GcdsNavLink>\n    <GcdsNavLink href="#">Send messages automatically</GcdsNavLink>\n  </GcdsNavGroup>\n\n  <GcdsNavLink href="#">Contact us</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Center.parameters?.docs?.source}}},Left.parameters={...Left.parameters,docs:{...Left.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>\n\n  <gcds-nav-group  open-trigger="Features" menu-label="Features">\n    <gcds-nav-link href="#" current>Create reusable templates</gcds-nav-link>\n    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>\n    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>\n    <gcds-nav-link href="#">Send messages automatically</gcds-nav-link>\n  </gcds-nav-group>\n\n  <gcds-nav-link href="#">Contact us</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Why GC Notify</GcdsNavLink>\n\n  <GcdsNavGroup  openTrigger="Features" menuLabel="Features">\n    <GcdsNavLink href="#" current>Create reusable templates</GcdsNavLink>\n    <GcdsNavLink href="#">Personalize messages</GcdsNavLink>\n    <GcdsNavLink href="#">Schedule messages</GcdsNavLink>\n    <GcdsNavLink href="#">Send messages automatically</GcdsNavLink>\n  </GcdsNavGroup>\n\n  <GcdsNavLink href="#">Contact us</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Left.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>\n\n  <gcds-nav-group  open-trigger="Features" menu-label="Features">\n    <gcds-nav-link href="#" current>Create reusable templates</gcds-nav-link>\n    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>\n    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>\n    <gcds-nav-link href="#">Send messages automatically</gcds-nav-link>\n  </gcds-nav-group>\n\n  <gcds-nav-link href="#">Contact us</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Why GC Notify</GcdsNavLink>\n\n  <GcdsNavGroup  openTrigger="Features" menuLabel="Features">\n    <GcdsNavLink href="#" current>Create reusable templates</GcdsNavLink>\n    <GcdsNavLink href="#">Personalize messages</GcdsNavLink>\n    <GcdsNavLink href="#">Schedule messages</GcdsNavLink>\n    <GcdsNavLink href="#">Send messages automatically</GcdsNavLink>\n  </GcdsNavGroup>\n\n  <GcdsNavLink href="#">Contact us</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Home","Right","Center","Left","Props","Playground"]},"./src/components/gcds-top-nav/stories/properties.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_gcds_top_nav_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-top-nav/stories/gcds-top-nav.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_top_nav_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Events & properties"}),"\n",!new URLSearchParams(window.location.search).get("demo")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{children:"Events & properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_top_nav_stories__WEBPACK_IMPORTED_MODULE_2__.Props,story:{inline:!0},sourceState:"shown",type:"dynamic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_gcds_top_nav_stories__WEBPACK_IMPORTED_MODULE_2__.Props,sort:"requiredFirst"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
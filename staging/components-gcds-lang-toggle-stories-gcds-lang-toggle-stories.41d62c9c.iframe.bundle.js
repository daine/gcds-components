(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[1452],{"./src/components/gcds-lang-toggle/stories/gcds-lang-toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,French:()=>French,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Language toggle",argTypes:{href:{name:"href",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.langProp}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-lang-toggle href="${args.href}" ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</gcds-lang-toggle>\n\n\x3c!-- React code --\x3e\n<GcdsLangToggle href="${args.href}" ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</GcdsLangToggle>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={href:"#",lang:"en"};const French=Template.bind({});French.args={href:"#",lang:"fr"};const Props=Template.bind({});Props.args={href:"#",lang:"en"};const Playground=(args=>`\n<gcds-lang-toggle\n  href="${args.href}"\n  lang="${args.lang}"\n>\n</gcds-lang-toggle>\n`).bind({});Playground.args={href:"#",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-lang-toggle href="${args.href}" ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n</gcds-lang-toggle>\n\n\x3c!-- React code --\x3e\n<GcdsLangToggle href="${args.href}" ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n</GcdsLangToggle>\n`.replace(/ null/g, \'\')',...Default.parameters?.docs?.source}}},French.parameters={...French.parameters,docs:{...French.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-lang-toggle href="${args.href}" ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n</gcds-lang-toggle>\n\n\x3c!-- React code --\x3e\n<GcdsLangToggle href="${args.href}" ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n</GcdsLangToggle>\n`.replace(/ null/g, \'\')',...French.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-lang-toggle href="${args.href}" ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n</gcds-lang-toggle>\n\n\x3c!-- React code --\x3e\n<GcdsLangToggle href="${args.href}" ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n</GcdsLangToggle>\n`.replace(/ null/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-lang-toggle\n  href="${args.href}"\n  lang="${args.lang}"\n>\n</gcds-lang-toggle>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","French","Props","Playground"]},"./src/utils/storybook/component-properties.js":module=>{module.exports={formProps:{disabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},validatorProps:{validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},langProp:{lang:{control:"radio",options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}}}}}]);
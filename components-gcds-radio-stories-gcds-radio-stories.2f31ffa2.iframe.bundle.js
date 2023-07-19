(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[7899],{"./src/components/gcds-radio/stories/gcds-radio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Radio",parameters:{actions:{argTypesRegex:"^gcds.*",handles:["RadioChange","focus","blur"]}},argTypes:{radioId:{name:"radio-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},name:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},checked:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.langProp,gcdsRadioChange:{action:"RadioChnage",table:{category:"Events | Événements"}},gcdsFocus:{action:"focus",table:{category:"Events | Événements"}},gcdsBlur:{action:"blur",table:{category:"Events | Événements"}}}},Default=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-radio\n  radio-id="${args.radioId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.checked?"checked":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-radio>\n\n\x3c!-- React code --\x3e\n<GcdsRadio\n  radioId="${args.radioId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.checked?"checked":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsRadio>\n`.replace(/\s\snull\n/g,"")).bind({});Default.args={radioId:"radio",label:"Radio label",name:"radio",hint:"",required:!1,disabled:!1,value:"",checked:!1,lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-radio\n  radio-id="${args.radioId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</gcds-radio>\n\n\x3c!-- React code --\x3e\n<GcdsRadio\n  radioId="${args.radioId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</GcdsRadio>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/utils/storybook/component-properties.js":module=>{module.exports={formProps:{disabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},validatorProps:{validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},langProp:{lang:{control:"radio",options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}}}}}]);
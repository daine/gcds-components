"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[5447],{"./src/components/gcds-input/stories/gcds-input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Email:()=>Email,Error:()=>Error,Number:()=>Number,Password:()=>Password,Playground:()=>Playground,Props:()=>Props,Required:()=>Required,Search:()=>Search,Text:()=>Text,Url:()=>Url,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Input",parameters:{actions:{argTypesRegex:"^on.*",handles:["change","focus","blur"]}},argTypes:{hideLabel:{name:"hide-label",control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},inputId:{name:"input-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},size:{control:"number",table:{type:{summary:"number"},defaultValue:{summary:"-"}}},type:{control:{type:"select"},options:["email","number","password","search","text","url"],table:{type:{summary:"string"},defaultValue:{summary:"text"}}},autocomplete:{control:{type:"select"},options:["on","off"],table:{type:{summary:"string"},defaultValue:{summary:"-"}}},disabled:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.h4,..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.q_,gcdsChange:{action:"change",table:{category:"Events | Événements"}},gcdsFocus:{action:"focus",table:{category:"Events | Événements"}},gcdsBlur:{action:"blur",table:{category:"Events | Événements"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${"text"!=args.type?`type="${args.type}"`:null}\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.size?`size="${args.size}"`:null}\n  ${"off"!=args.autocomplete?`autocomplete="${args.autocomplete}"`:null}\n  ${args.hideLabel?"hide-label":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${"text"!=args.type?`type="${args.type}"`:null}\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`errorMessage="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.size?`size="${args.size}"`:null}\n  ${"off"!=args.autocomplete?`autocomplete="${args.autocomplete}"`:null}\n  ${args.hideLabel?" hideLabel":null}\n  ${"blur"!=args.validateOn?`validateOn="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsInput>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={inputId:"input-default",type:"text",label:"Label",hint:"Hint / example message.",errorMessage:"",required:!1,disabled:!1,size:"",value:"",lang:"en",autocomplete:"off",hideLabel:!1,validateOn:"blur"};const Disabled=Template.bind({});Disabled.args={inputId:"input-disabled",type:"text",label:"Label",hint:"Hint / example message.",disabled:!0,lang:"en",autocomplete:"off",validateOn:"blur"};const Error=Template.bind({});Error.args={inputId:"input-error",type:"text",label:"Label",hint:"Hint / example message.",required:!0,errorMessage:"Error message or validation message.",lang:"en",autocomplete:"off",validateOn:"blur"};const Required=Template.bind({});Required.args={inputId:"input-required",type:"text",label:"Label",hint:"Hint / example message.",required:!0,lang:"en",autocomplete:"off",validateOn:"blur"};const Email=Template.bind({});Email.args={inputId:"input-email",type:"email",label:"Label",hint:"Hint / example message.",disabled:!1,lang:"en",autocomplete:"off",validateOn:"blur"};const Number=Template.bind({});Number.args={inputId:"input-number",type:"number",label:"Label",hint:"Hint / example message.",disabled:!1,lang:"en",autocomplete:"off",validateOn:"blur"};const Password=Template.bind({});Password.args={inputId:"input-password",type:"password",label:"Label",hint:"Hint / example message.",disabled:!1,lang:"en",autocomplete:"off",validateOn:"blur"};const Search=Template.bind({});Search.args={inputId:"input-search",type:"search",label:"Label",hint:"Hint / example message.",disabled:!1,lang:"en",autocomplete:"off",validateOn:"blur"};const Text=Template.bind({});Text.args={inputId:"input-text",type:"text",label:"Label",hint:"Hint / example message.",disabled:!1,lang:"en",autocomplete:"off",validateOn:"blur"};const Url=Template.bind({});Url.args={inputId:"input-url",type:"url",label:"Label",hint:"Hint / example message.",disabled:!1,lang:"en",autocomplete:"off",validateOn:"blur"};const Props=Template.bind({});Props.args={inputId:"input-props",type:"text",label:"Label",hint:"Hint / example message.",errorMessage:"",required:!1,disabled:!1,size:null,value:"",lang:"en",autocomplete:"off",hideLabel:!1,validateOn:"blur"};const Playground=(args=>`\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${"text"!=args.type?`type="${args.type}"`:null}\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.size?`size="${args.size}"`:null}\n  ${"off"!=args.autocomplete?`autocomplete="${args.autocomplete}"`:null}\n  ${args.hideLabel?"hide-label":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-input>\n`).bind({});Playground.args={inputId:"input-playground",type:"text",label:"Input label",hint:"",errorMessage:"",required:!1,disabled:!1,size:"",value:"",autocomplete:"off",hideLabel:!1,validateOn:"blur",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? ` hideLabel` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? ` hideLabel` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Disabled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? ` hideLabel` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Error.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? ` hideLabel` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Required.parameters?.docs?.source}}},Email.parameters={...Email.parameters,docs:{...Email.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? ` hideLabel` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Email.parameters?.docs?.source}}},Number.parameters={...Number.parameters,docs:{...Number.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? ` hideLabel` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Number.parameters?.docs?.source}}},Password.parameters={...Password.parameters,docs:{...Password.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? ` hideLabel` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Password.parameters?.docs?.source}}},Search.parameters={...Search.parameters,docs:{...Search.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? ` hideLabel` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Search.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? ` hideLabel` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Text.parameters?.docs?.source}}},Url.parameters={...Url.parameters,docs:{...Url.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? ` hideLabel` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Url.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n\n\x3c!-- React code --\x3e\n<GcdsInput\n  inputId="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? ` hideLabel` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsInput>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-input\n  input-id="${args.inputId}"\n  label="${args.label}"\n  ${args.type != \'text\' ? `type="${args.type}"` : null}\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.size ? `size="${args.size}"` : null}\n  ${args.autocomplete != \'off\' ? `autocomplete="${args.autocomplete}"` : null}\n  ${args.hideLabel ? `hide-label` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-input>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Error","Required","Email","Number","Password","Search","Text","Url","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}}}}]);
"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[7383],{"./src/components/gcds-radio-group/stories/gcds-radio-group.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Radio Group",parameters:{actions:{argTypesRegex:"^gcds.*",handles:["RadioChange","focus","blur"]}},argTypes:{name:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},options:{control:"text",table:{type:{summary:"\n        {\n          id: string;\n          label: string;\n          value: string;\n          hint?: string;\n          checked?: boolean;\n          required?: boolean;\n          disabled?: boolean;\n        }\n        string | object[]"},defaultValue:{summary:"-"}},type:{required:!0}},...__webpack_require__("./src/utils/storybook/component-properties.js").q_,gcdsRadioChange:{action:"RadioChange",table:{category:"Events | Événements"}},gcdsFocus:{action:"focus",table:{category:"Events | Événements"}},gcdsBlur:{action:"blur",table:{category:"Events | Événements"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-radio-group\n  name="${args.name}"\n  options='${args.options}'\n>\n</gcds-radio-group>\n\n\x3c!-- React code --\x3e\n<GcdsRadioGroup\n  name="${args.name}"\n  options='${args.options}'\n>\n</GcdsRadioGroup>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={name:"radioDefault",options:'[\n    { "label": "Label for radio 1", "id": "radio1", "value": "radio1", "hint": "Description or example to make the option clearer."},\n    { "label": "Label for radio 2", "id": "radio2", "value": "radio2", "hint": "Description or example to make the option clearer."}\n  ]',lang:"en"};const Disabled=Template.bind({});Disabled.args={name:"radio",options:'[{ "label": "Label", "id": "radio", "value": "radio1", "hint": "Description or example to make the option clearer.", "disabled": true}]',lang:"en"};const Checked=Template.bind({});Checked.args={name:"radio",options:'[{ "label": "Label", "id": "radio", "value": "radio1", "hint": "Description or example to make the option clearer.", "checked": true}]',lang:"en"};const Error=(args=>`\n<gcds-fieldset\n  legend="Fieldset legend"\n  fieldset-id="fieldset"\n  hint="Radio buttons only validate in fieldset"\n  required\n>\n  <gcds-radio-group\n    name="${args.name}"\n    options='${args.options}'\n  >\n  </gcds-radio-group>\n</gcds-fieldset>\n\n\x3c!-- Script to provide validated example --\x3e\n<script>document.querySelector('[fieldset-id=fieldset').validate();<\/script>\n`.replace(/\s\snull\n/g,"")).bind({});Error.args={name:"radioDefault",options:'[\n    { "label": "Label for radio 1", "id": "radio1", "value": "radio1", "hint": "Description or example to make the option clearer."},\n    { "label": "Label for radio 2", "id": "radio2", "value": "radio2", "hint": "Description or example to make the option clearer."}\n  ]',lang:"en"};const Props=Template.bind({});Props.args={name:"radioDefault",options:'[\n    { "label": "Label for radio 1", "id": "radio1", "value": "radio1", "hint": "Description or example to make the option clearer."},\n    { "label": "Label for radio 2", "id": "radio2", "value": "radio2", "hint": "Description or example to make the option clearer."}\n  ]',lang:"en"};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-radio-group\n  name="${args.name}"\n  options='${args.options}'\n>\n</gcds-radio-group>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={name:"radio",options:'[\n    { "label": "Label for radio 1", "id": "radio1", "value": "radio1", "hint": "Description or example to make the option clearer.", },\n    { "label": "Label for radio 2", "id": "radio2", "value": "radio2", "hint": "Description or example to make the option clearer.", }\n  ]',lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-radio-group\n  name=\"${args.name}\"\n  options='${args.options}'\n>\n</gcds-radio-group>\n\n\x3c!-- React code --\x3e\n<GcdsRadioGroup\n  name=\"${args.name}\"\n  options='${args.options}'\n>\n</GcdsRadioGroup>\n`.replace(/\\s\\snull\\n/g, '')",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-radio-group\n  name=\"${args.name}\"\n  options='${args.options}'\n>\n</gcds-radio-group>\n\n\x3c!-- React code --\x3e\n<GcdsRadioGroup\n  name=\"${args.name}\"\n  options='${args.options}'\n>\n</GcdsRadioGroup>\n`.replace(/\\s\\snull\\n/g, '')",...Disabled.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-radio-group\n  name=\"${args.name}\"\n  options='${args.options}'\n>\n</gcds-radio-group>\n\n\x3c!-- React code --\x3e\n<GcdsRadioGroup\n  name=\"${args.name}\"\n  options='${args.options}'\n>\n</GcdsRadioGroup>\n`.replace(/\\s\\snull\\n/g, '')",...Checked.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'args => `\n<gcds-fieldset\n  legend="Fieldset legend"\n  fieldset-id="fieldset"\n  hint="Radio buttons only validate in fieldset"\n  required\n>\n  <gcds-radio-group\n    name="${args.name}"\n    options=\'${args.options}\'\n  >\n  </gcds-radio-group>\n</gcds-fieldset>\n\n\x3c!-- Script to provide validated example --\x3e\n<script>document.querySelector(\'[fieldset-id=fieldset\').validate();<\/script>\n`.replace(/\\s\\snull\\n/g, \'\')',...Error.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-radio-group\n  name=\"${args.name}\"\n  options='${args.options}'\n>\n</gcds-radio-group>\n\n\x3c!-- React code --\x3e\n<GcdsRadioGroup\n  name=\"${args.name}\"\n  options='${args.options}'\n>\n</GcdsRadioGroup>\n`.replace(/\\s\\snull\\n/g, '')",...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-radio-group\n  name=\"${args.name}\"\n  options='${args.options}'\n>\n</gcds-radio-group>\n`.replace(/\\s\\snull\\n/g, '')",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Checked","Error","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}}}}]);
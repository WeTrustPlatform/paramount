(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/Checkbox/Checkbox.mdx":function(e,n,a){var t=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=t(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=t(a("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=t(a("./node_modules/@babel/runtime/helpers/createClass.js")),d=t(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=t(a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),r=t(a("./node_modules/@babel/runtime/helpers/inherits.js")),c=t(a("./node_modules/react/index.js")),u=a("./node_modules/@mdx-js/tag/dist/index.js"),p=a("./node_modules/docz/dist/index.m.js"),m=t(a("./src/components/Checkbox/index.ts")),b=function(e){function n(e){var a;return(0,o.default)(this,n),(a=(0,d.default)(this,(0,i.default)(n).call(this,e))).layout=null,a}return(0,r.default)(n,e),(0,s.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components,a=(0,l.default)(e,["components"]);return c.default.createElement(u.MDXTag,{name:"wrapper",components:n},c.default.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),c.default.createElement(u.MDXTag,{name:"h3",components:n,props:{id:"labeled-checkboxes"}},"Labeled Checkboxes"),c.default.createElement(p.Playground,{__position:0,__code:'<Checkbox label="Default" />\n<Checkbox label="Checked" isChecked />\n<Checkbox label="Disabled" isDisabled />\n<Checkbox label="Checked and disabled" isChecked isDisabled />',__scope:{props:this?this.props:a,Checkbox:m.default}},c.default.createElement(m.default,{label:"Default"}),c.default.createElement(m.default,{label:"Checked",isChecked:!0}),c.default.createElement(m.default,{label:"Disabled",isDisabled:!0}),c.default.createElement(m.default,{label:"Checked and disabled",isChecked:!0,isDisabled:!0})),c.default.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),c.default.createElement(p.PropsTable,{of:m.default}))}}]),n}(c.default.Component);n.default=b},"./src/components/Checkbox/Checkbox.tsx":function(e,n,a){var t=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.Checkbox=void 0;var l=t(a("./node_modules/react/index.js")),o=a("./node_modules/react-icons/fi/index.js"),s=a("./node_modules/react-native-web/dist/index.js"),d=(0,a("./src/theme/index.ts").withTheme)(function(e){var n=e.theme,a=e.isChecked,t=void 0!==a&&a,d=e.isDisabled,i=void 0!==d&&d,r=e.checkedIcon,c=void 0===r?l.createElement(o.FiCheck,{size:20,color:n.themeVariables.colors.text.plain}):r,u=e.testID,p=e.onChange,m=void 0===p?function(){return null}:p,b=n.getCheckboxStyles(t,i),h=b.checkboxStyle,f=b.checkboxFocusBackgroundColor;return l.createElement(s.TouchableHighlight,{style:h,underlayColor:f,onPress:m,testID:u,disabled:i},l.createElement(s.View,{style:{alignItems:"center",display:"flex",justifyContent:"center"}},t&&c))});n.Checkbox=d;var i=d;n.default=i;try{d.displayName="Checkbox",d.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:d.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(r){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Checkbox/Checkbox.tsx#__class"})}catch(r){}},"./src/components/Checkbox/LabeledCheckbox.tsx":function(e,n,a){var t=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),l=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.LabeledCheckbox=void 0;var o=l(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=t(a("./node_modules/react/index.js")),d=a("./src/theme/index.ts"),i=l(a("./src/components/Checkbox/Checkbox.tsx")),r=a("./src/components/Layout/index.ts"),c=a("./src/components/Typography/index.ts"),u=(0,d.withTheme)(function(e){var n=e.label,a=e.position,t=void 0===a?"right":a,l=e.color,d=e.size,u=(0,o.default)(e,["label","position","color","size"]);return n?s.createElement(r.Box,{flexDirection:"row",alignItems:"center"},"left"===t&&s.createElement(c.Text,{size:d,color:l},n),s.createElement(r.GridBox,{paddingX:1},s.createElement(i.default,u)),"right"===t&&s.createElement(c.Text,{size:d,color:l},n)):s.createElement(i.default,u)});n.LabeledCheckbox=u;var p=u;n.default=p;try{u.displayName="LabeledCheckbox",u.__docgenInfo={description:"",displayName:"LabeledCheckbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"left" | "right"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"dark" | "default" | "muted" | "plain" | "selected" | "primary" | "secondary" | "danger" | "info" | "success" | "warning"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/LabeledCheckbox.tsx#LabeledCheckbox"]={docgenInfo:u.__docgenInfo,name:"LabeledCheckbox",path:"src/components/Checkbox/LabeledCheckbox.tsx#LabeledCheckbox"})}catch(m){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"left" | "right"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"dark" | "default" | "muted" | "plain" | "selected" | "primary" | "secondary" | "danger" | "info" | "success" | "warning"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/LabeledCheckbox.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Checkbox/LabeledCheckbox.tsx#__class"})}catch(m){}},"./src/components/Checkbox/index.ts":function(e,n,a){var t=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(n,"Checkbox",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(n,"LabeledCheckbox",{enumerable:!0,get:function(){return l.default}});var l=t(a("./src/components/Checkbox/LabeledCheckbox.tsx"));try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"left" | "right"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"dark" | "default" | "muted" | "plain" | "selected" | "primary" | "secondary" | "danger" | "info" | "success" | "warning"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.ts#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Checkbox/index.ts#__class"})}catch(o){}}}]);
//# sourceMappingURL=13.6a69db5a30e754e09631.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/Checkbox/Checkbox.styles.ts":function(e,t,l){var s=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getCheckboxStyles=void 0;var i=s(l("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof CheckboxStylesProps&&CheckboxStylesProps&&CheckboxStylesProps===Object(CheckboxStylesProps)&&Object.isExtensible(CheckboxStylesProps)&&Object.defineProperty(CheckboxStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStylesProps",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof CheckboxStyles&&CheckboxStyles&&CheckboxStyles===Object(CheckboxStyles)&&Object.isExtensible(CheckboxStyles)&&Object.defineProperty(CheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof GetCheckboxStyles&&GetCheckboxStyles&&GetCheckboxStyles===Object(GetCheckboxStyles)&&Object.isExtensible(GetCheckboxStyles)&&Object.defineProperty(GetCheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}});var n=function(e,t){var l=e.isChecked,s=e.isDisabled,n=e.shape,o=e.size,a=t.controlHeights[o]-16;return{checkColor:t.colors.text.white,checkboxFocusBackgroundColor:l?t.colors.background.primaryDark:t.colors.background.greyLight,checkboxStyle:(0,i.default)({alignItems:"center",backgroundColor:t.colors.background.content,borderColor:t.colors.border.default,borderWidth:1,height:a,justifyContent:"center",width:a},l?{backgroundColor:t.colors.background.primaryDefault,borderColor:"transparent"}:{},s?{backgroundColor:t.colors.background.greyDark,borderColor:t.colors.border.default}:{},{circle:{borderRadius:999},square:{borderRadius:t.controlBorderRadius.small}}[n]),touchableStyle:{}}};t.getCheckboxStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}})},"./src/components/Checkbox/Checkbox.tsx":function(e,t,l){var s=l("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Checkbox=void 0;var n=i(l("./node_modules/@babel/runtime/helpers/extends.js")),o=i(l("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=s(l("./node_modules/react/index.js")),c=l("./node_modules/react-native-web/dist/index.js"),r=l("./src/theme/index.ts"),m=l("./src/utils/mergeStyles.ts"),u=l("./src/components/Icon/index.ts"),d=l("./src/components/Checkbox/Checkbox.styles.ts");"undefined"!==typeof CheckboxShape&&CheckboxShape&&CheckboxShape===Object(CheckboxShape)&&Object.isExtensible(CheckboxShape)&&Object.defineProperty(CheckboxShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxShape",filename:"src/components/Checkbox/Checkbox.tsx"}}),"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/Checkbox.tsx"}});var b=function(e){var t=e.isChecked,l=void 0!==t&&t,s=e.isDisabled,i=void 0!==s&&s,b=e.isInteractive,p=void 0===b||b,S=e.onChange,x=void 0===S?function(){return null}:S,L=e.shape,y=void 0===L?"square":L,f=e.size,I=void 0===f?"medium":f,h=e.getStyles,v=e.testID,g=(0,o.default)(e,["isChecked","isDisabled","isInteractive","onChange","shape","size","getStyles","testID"]),j=(0,r.useTheme)(),C=(0,m.mergeStyles)(d.getCheckboxStyles,h)({isChecked:l,isDisabled:i,shape:y,size:I},j),P=C.touchableStyle,_=C.checkboxStyle,k=C.checkColor,O=C.checkboxFocusBackgroundColor;return a.createElement(c.TouchableHighlight,(0,n.default)({accessible:p,style:P,underlayColor:O},p?{disabled:i,onPress:x}:{disabled:!0},{testID:v},g),a.createElement(c.View,{style:_},l?a.createElement(u.Icon,{name:"check",size:20,color:k}):null))};t.Checkbox=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/Checkbox.tsx"}})},"./src/components/Checkbox/index.ts":function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Checkbox",{enumerable:!0,get:function(){return s.Checkbox}}),Object.defineProperty(t,"CheckboxProps",{enumerable:!0,get:function(){return s.CheckboxProps}});var s=l("./src/components/Checkbox/Checkbox.tsx");"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/index.ts"}}),"undefined"!==typeof Checkbox&&Checkbox&&Checkbox===Object(Checkbox)&&Object.isExtensible(Checkbox)&&Object.defineProperty(Checkbox,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/index.ts"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,l){var s=l("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var i=s(l("./node_modules/react/index.js")),n=s(l("./node_modules/react-icons/fi/index.esm.js")),o=l("./src/theme/index.ts"),a=l("./src/components/Typography/Text.styles.ts");var c=function(e){var t=e.name,l=e.color,s=e.size,c=(0,o.useTheme)(),r=n["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return i.createElement(r,{color:l?(0,a.getTextColor)(c.colors.text)(l):l,size:s})};t.Icon=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0});var s=l("./src/components/Icon/Icon.web.tsx");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})})},"./src/components/ListItem/ListItem.styles.ts":function(e,t,l){var s=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getListItemStyles=t.getListItemVariables=void 0;var i=s(l("./node_modules/@babel/runtime/helpers/objectSpread.js")),n=s(l("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));"undefined"!==typeof SizeStyles&&SizeStyles&&SizeStyles===Object(SizeStyles)&&Object.isExtensible(SizeStyles)&&Object.defineProperty(SizeStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeStyles",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof ListItemSizes&&ListItemSizes&&ListItemSizes===Object(ListItemSizes)&&Object.isExtensible(ListItemSizes)&&Object.defineProperty(ListItemSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemSizes",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof ListItemSize&&ListItemSize&&ListItemSize===Object(ListItemSize)&&Object.isExtensible(ListItemSize)&&Object.defineProperty(ListItemSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemSize",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof ListItemVariables&&ListItemVariables&&ListItemVariables===Object(ListItemVariables)&&Object.isExtensible(ListItemVariables)&&Object.defineProperty(ListItemVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemVariables",filename:"src/components/ListItem/ListItem.styles.ts"}});var o=function(e){return{base:{backgroundColor:e.colors.background.content,borderBottomWidth:1,borderColor:e.colors.border.default,justifyContent:"center"},disabled:{backgroundColor:e.colors.background.greyDark},focusBackgroundColor:e.colors.background.greyLight,sizes:{small:{fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{fontSize:e.textSizes.large.fontSize||18,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}},wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}};t.getListItemVariables=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getListItemVariables",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof ListItemStyles&&ListItemStyles&&ListItemStyles===Object(ListItemStyles)&&Object.isExtensible(ListItemStyles)&&Object.defineProperty(ListItemStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemStyles",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof ListItemStylesProps&&ListItemStylesProps&&ListItemStylesProps===Object(ListItemStylesProps)&&Object.isExtensible(ListItemStylesProps)&&Object.defineProperty(ListItemStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemStylesProps",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof GetListItemStyles&&GetListItemStyles&&GetListItemStyles===Object(GetListItemStyles)&&Object.isExtensible(GetListItemStyles)&&Object.defineProperty(GetListItemStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetListItemStyles",filename:"src/components/ListItem/ListItem.styles.ts"}});var a=function(e,t){var l=e.size,s=e.isDisabled,a=o(t),c=a.base,r=a.disabled,m=a.focusBackgroundColor,u=a.sizes[l],d=(u.fontSize,(0,n.default)(u,["fontSize"]));return{containerStyle:(0,i.default)({},c,d,s?r:{}),focusBackgroundColor:m,imageWrapperStyle:{marginRight:8},leftWrapperStyle:{alignItems:"center",flexDirection:"row"},textStyle:t.textSizes[l],textWrapperStyle:{height:"100%"},wrapperStyle:a.wrapper}};t.getListItemStyles=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getListItemStyles",filename:"src/components/ListItem/ListItem.styles.ts"}})},"./src/components/ListItem/ListItem.tsx":function(e,t,l){var s=l("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ListItem=void 0;var n=i(l("./node_modules/@babel/runtime/helpers/extends.js")),o=i(l("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=s(l("./node_modules/react/index.js")),c=l("./node_modules/react-native-web/dist/index.js"),r=l("./src/theme/index.ts"),m=l("./src/utils/mergeStyles.ts"),u=l("./src/components/Typography/index.ts"),d=l("./src/components/ListItem/ListItem.styles.ts");"undefined"!==typeof ListItemProps&&ListItemProps&&ListItemProps===Object(ListItemProps)&&Object.isExtensible(ListItemProps)&&Object.defineProperty(ListItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemProps",filename:"src/components/ListItem/ListItem.tsx"}});var b=function(e){var t=e.getStyles,l=e.isDisabled,s=void 0!==l&&l,i=e.label,b=e.description,p=e.size,S=void 0===p?"medium":p,x=e.onPress,L=e.rightIcon,y=void 0===L?null:L,f=e.leftIcon,I=e.testID,h=(0,o.default)(e,["getStyles","isDisabled","label","description","size","onPress","rightIcon","leftIcon","testID"]),v=(0,r.useTheme)(),g=(0,m.mergeStyles)(d.getListItemStyles,t)({size:S,isDisabled:s},v),j=g.imageWrapperStyle,C=g.leftWrapperStyle,P=g.textWrapperStyle,_=g.containerStyle,k=g.textStyle,O=g.focusBackgroundColor,T=g.wrapperStyle;return a.createElement(c.TouchableHighlight,(0,n.default)({disabled:s,underlayColor:O,style:_,testID:I,onPress:x},h),a.createElement(c.View,{style:T},a.createElement(c.View,{style:C},a.createElement(c.View,{style:j},f),a.createElement(c.View,{style:P},a.createElement(u.Text,{getStyles:function(){return{textStyle:k}}},i),a.createElement(u.Text,{size:"small"},b))),y))};t.ListItem=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItem",filename:"src/components/ListItem/ListItem.tsx"}})},"./src/components/ListItem/index.ts":function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0});var s=l("./src/components/ListItem/ListItem.tsx");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})})},"./src/components/SelectList/SelectList.mdx":function(e,t,l){var s=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=x;var i=s(l("./node_modules/@babel/runtime/helpers/extends.js")),n=s(l("./node_modules/@babel/runtime/helpers/objectSpread.js")),o=s(l("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=(s(l("./node_modules/react/index.js")),l("./node_modules/@mdx-js/react/dist/index.es.js")),c=l("./node_modules/countries-list/dist/index.es5.min.js"),r=l("./node_modules/docz/dist/index.esm.js"),m=l("./src/components/Box/index.ts"),u=l("./src/components/SelectList/SelectList.tsx"),d=l("./src/components/SelectList/SelectListItem.tsx"),b=l("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),p={},S="wrapper";function x(e){var t=e.components,l=(0,o.default)(e,["components"]);return(0,a.mdx)(S,(0,i.default)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"selectlist"},"SelectList"),(0,a.mdx)("p",null,"SelectList that supports single value or multiple values selected at the same item. ",(0,a.mdx)("inlineCode",{parentName:"p"},"SelectList")," is a compound component, which means that its children can be any component, and it will implicitly inject props such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"isSelected")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"onSelect")," to them.\n",(0,a.mdx)("inlineCode",{parentName:"p"},"SelectListItem")," composes ",(0,a.mdx)("inlineCode",{parentName:"p"},"ListItem")),(0,a.mdx)("h3",{id:"usage"},"Usage"),(0,a.mdx)(r.Playground,{__position:0,__code:'<SelectList\n  isMulti={false}\n  selectedValue="c"\n  onValueChange={(newValue, itemIndex) => {\n    console.log(newValue, itemIndex)\n  }}\n>\n  <SelectListItem\n    label="Usage"\n    value="c"\n    // Props below are passed from `SelectList`, so it is not necessary to pass them here\n    // isSelected\n    // onSelect\n    // index\n  />\n</SelectList>',__scope:{props:this?this.props:l,countryList:c.countries,Playground:r.Playground,Props:r.Props,Box:m.Box,SelectList:u.SelectList,SelectListItem:d.SelectListItem,State:b.State},mdxType:"Playground"},(0,a.mdx)(u.SelectList,{isMulti:!1,selectedValue:"c",onValueChange:function(e,t){console.log(e,t)},mdxType:"SelectList"},(0,a.mdx)(d.SelectListItem,{label:"Usage",value:"c",mdxType:"SelectListItem"}))),(0,a.mdx)("h3",{id:"multi-select"},"Multi select"),(0,a.mdx)(r.Playground,{__position:1,__code:'<State initial={{ selectedValue: [\'js\', \'go\'] }}>\n  {({ state, setState }) => (\n    <SelectList\n      isMulti\n      selectedValue={state.selectedValue}\n      onValueChange={(newValue, itemIndex) => {\n        setState({ selectedValue: newValue })\n      }}\n    >\n      <SelectListItem label="C" value="c" />\n      <SelectListItem label="C#" value="c#" />\n      <SelectListItem label="C++" value="c++" />\n      <SelectListItem label="CSS" value="css" />\n      <SelectListItem label="Elixir" value="elixir" />\n      <SelectListItem label="Elm" value="elm" />\n      <SelectListItem label="Erlang" value="erlang" />\n      <SelectListItem label="Go" value="go" />\n      <SelectListItem label="Haskell" value="haskell" />\n      <SelectListItem label="HTML" value="html" />\n      <SelectListItem label="Java" value="java" />\n      <SelectListItem label="JavaScript" value="js" />\n      <SelectListItem label="Lua" value="lua" />\n      <SelectListItem label="Python" value="python" />\n      <SelectListItem label="R" value="r" />\n      <SelectListItem label="Ruby" value="ruby" />\n      <SelectListItem label="Rust" value="rust" />\n      <SelectListItem label="Switft" value="swift" />\n      <SelectListItem label="Typescript" value="typescript" />\n    </SelectList>\n  )}\n</State>',__scope:{props:this?this.props:l,countryList:c.countries,Playground:r.Playground,Props:r.Props,Box:m.Box,SelectList:u.SelectList,SelectListItem:d.SelectListItem,State:b.State},mdxType:"Playground"},(0,a.mdx)(b.State,{initial:{selectedValue:["js","go"]},mdxType:"State"},function(e){var t=e.state,l=e.setState;return(0,a.mdx)(u.SelectList,{isMulti:!0,selectedValue:t.selectedValue,onValueChange:function(e,t){l({selectedValue:e})},mdxType:"SelectList"},(0,a.mdx)(d.SelectListItem,{label:"C",value:"c",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"C#",value:"c#",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"C++",value:"c++",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"CSS",value:"css",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Elixir",value:"elixir",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Elm",value:"elm",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Erlang",value:"erlang",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Go",value:"go",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Haskell",value:"haskell",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"HTML",value:"html",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Java",value:"java",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"JavaScript",value:"js",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Lua",value:"lua",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Python",value:"python",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"R",value:"r",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Ruby",value:"ruby",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Rust",value:"rust",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Switft",value:"swift",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Typescript",value:"typescript",mdxType:"SelectListItem"}))})),(0,a.mdx)("h3",{id:"large-selectlist"},"Large SelectList"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"SelectList")," composes ",(0,a.mdx)("inlineCode",{parentName:"p"},"FlatList")," from ",(0,a.mdx)("inlineCode",{parentName:"p"},"react-native")),(0,a.mdx)(r.Playground,{__position:2,__code:"<State initial={{ selectedValue: ['js', 'go'] }}>\n  {({ state, setState }) => (\n    <Box height={400}>\n      <SelectList\n        isMulti\n        selectedValue={state.selectedValue}\n        onValueChange={(newValue, itemIndex) => {\n          setState({ selectedValue: newValue })\n        }}\n      >\n        {Object.keys(countryList)\n          .map(countryCode => ({\n            countryCode,\n            value: countryCode,\n            label: countryList[countryCode].name,\n            ...countryList[countryCode],\n          }))\n          .map(data => (\n            <SelectListItem\n              key={data.value}\n              label={data.label}\n              value={data.label}\n            />\n          ))}\n      </SelectList>\n    </Box>\n  )}\n</State>",__scope:{props:this?this.props:l,countryList:c.countries,Playground:r.Playground,Props:r.Props,Box:m.Box,SelectList:u.SelectList,SelectListItem:d.SelectListItem,State:b.State},mdxType:"Playground"},(0,a.mdx)(b.State,{initial:{selectedValue:["js","go"]},mdxType:"State"},function(e){var t=e.state,l=e.setState;return(0,a.mdx)(m.Box,{height:400,mdxType:"Box"},(0,a.mdx)(u.SelectList,{isMulti:!0,selectedValue:t.selectedValue,onValueChange:function(e,t){l({selectedValue:e})},mdxType:"SelectList"},Object.keys(c.countries).map(function(e){return(0,n.default)({countryCode:e,value:e,label:c.countries[e].name},c.countries[e])}).map(function(e){return(0,a.mdx)(d.SelectListItem,{key:e.value,label:e.label,value:e.label,mdxType:"SelectListItem"})})))})),(0,a.mdx)("h3",{id:"single-select"},"Single select"),(0,a.mdx)(r.Playground,{__position:3,__code:'<State initial={{ selectedValue: \'go\' }}>\n  {({ state, setState }) => (\n    <SelectList\n      selectedValue={state.selectedValue}\n      onValueChange={(newValue, itemIndex) => {\n        setState({ selectedValue: newValue })\n      }}\n    >\n      <SelectListItem label="C" value="c" />\n      <SelectListItem label="C#" value="c#" />\n      <SelectListItem label="C++" value="c++" />\n      <SelectListItem label="CSS" value="css" />\n      <SelectListItem label="Elixir" value="elixir" />\n      <SelectListItem label="Elm" value="elm" />\n      <SelectListItem label="Erlang" value="erlang" />\n      <SelectListItem label="Go" value="go" />\n      <SelectListItem label="Haskell" value="haskell" />\n      <SelectListItem label="HTML" value="html" />\n      <SelectListItem label="Java" value="java" />\n      <SelectListItem label="JavaScript" value="js" />\n      <SelectListItem label="Lua" value="lua" />\n      <SelectListItem label="Python" value="python" />\n      <SelectListItem label="R" value="r" />\n      <SelectListItem label="Ruby" value="ruby" />\n      <SelectListItem label="Rust" value="rust" />\n      <SelectListItem label="Switft" value="swift" />\n      <SelectListItem label="Typescript" value="typescript" />\n    </SelectList>\n  )}\n</State>',__scope:{props:this?this.props:l,countryList:c.countries,Playground:r.Playground,Props:r.Props,Box:m.Box,SelectList:u.SelectList,SelectListItem:d.SelectListItem,State:b.State},mdxType:"Playground"},(0,a.mdx)(b.State,{initial:{selectedValue:"go"},mdxType:"State"},function(e){var t=e.state,l=e.setState;return(0,a.mdx)(u.SelectList,{selectedValue:t.selectedValue,onValueChange:function(e,t){l({selectedValue:e})},mdxType:"SelectList"},(0,a.mdx)(d.SelectListItem,{label:"C",value:"c",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"C#",value:"c#",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"C++",value:"c++",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"CSS",value:"css",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Elixir",value:"elixir",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Elm",value:"elm",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Erlang",value:"erlang",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Go",value:"go",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Haskell",value:"haskell",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"HTML",value:"html",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Java",value:"java",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"JavaScript",value:"js",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Lua",value:"lua",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Python",value:"python",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"R",value:"r",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Ruby",value:"ruby",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Rust",value:"rust",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Switft",value:"swift",mdxType:"SelectListItem"}),(0,a.mdx)(d.SelectListItem,{label:"Typescript",value:"typescript",mdxType:"SelectListItem"}))})),(0,a.mdx)("h3",{id:"props"},"Props"),(0,a.mdx)("h3",{id:"select-list"},"Select List"),(0,a.mdx)(r.Props,{of:u.SelectList,mdxType:"Props"}))}x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/SelectList/SelectList.mdx"}}),x.isMDXComponent=!0},"./src/components/SelectList/SelectList.tsx":function(e,t,l){var s=l("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.SelectList=void 0;var n=i(l("./node_modules/@babel/runtime/helpers/extends.js")),o=i(l("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=s(l("./node_modules/react/index.js")),c=l("./node_modules/react-native-web/dist/index.js"),r=l("./src/theme/index.ts");"undefined"!==typeof SelectListProps&&SelectListProps&&SelectListProps===Object(SelectListProps)&&Object.isExtensible(SelectListProps)&&Object.defineProperty(SelectListProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SelectListProps",filename:"src/components/SelectList/SelectList.tsx"}});var m=function(e){var t=e.selectedValue,l=e.onValueChange,s=e.isMulti,i=e.children,m=e.innerRef,u=(0,o.default)(e,["selectedValue","onValueChange","isMulti","children","innerRef"]),d=(0,r.useTheme)(),b=function(e,i,n){s&&Array.isArray(t)?l(n?t.filter(function(t){return t!==e}):t.concat(e),i):l(e,i)},p=a.Children.toArray(i),S=p.map(function(e){return e.props});return a.createElement(c.FlatList,(0,n.default)({ref:m,keyExtractor:function(e){return e.value},getItemLayout:function(e,t){return{index:t,length:d.controlHeights.medium,offset:d.controlHeights.medium*t}},data:S,renderItem:function(e){var l=e.item,i=e.index,n=p[i],o=s&&Array.isArray(t)?t.some(function(e){return e===l.value}):t===l.value;return a.cloneElement(n,{index:i,isSelected:o,onSelect:b})}},u))},u=a.forwardRef(function(e,t){return a.createElement(m,(0,n.default)({},e,{innerRef:t}))});t.SelectList=u,"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SelectList",filename:"src/components/SelectList/SelectList.tsx"}})},"./src/components/SelectList/SelectListItem.tsx":function(e,t,l){var s=l("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.SelectListItem=void 0;var n=i(l("./node_modules/@babel/runtime/helpers/extends.js")),o=i(l("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=s(l("./node_modules/react/index.js")),c=l("./src/components/Checkbox/index.ts"),r=l("./src/components/ListItem/index.ts");"undefined"!==typeof SelectListItemBaseProps&&SelectListItemBaseProps&&SelectListItemBaseProps===Object(SelectListItemBaseProps)&&Object.isExtensible(SelectListItemBaseProps)&&Object.defineProperty(SelectListItemBaseProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SelectListItemBaseProps",filename:"src/components/SelectList/SelectListItem.tsx"}}),"undefined"!==typeof SelectListItemProps&&SelectListItemProps&&SelectListItemProps===Object(SelectListItemProps)&&Object.isExtensible(SelectListItemProps)&&Object.defineProperty(SelectListItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SelectListItemProps",filename:"src/components/SelectList/SelectListItem.tsx"}});var m=a.memo(function(e){var t=e.index,l=void 0===t?0:t,s=(e.isDisabled,e.isSelected),i=void 0!==s&&s,m=e.label,u=e.onSelect,d=void 0===u?function(){return null}:u,b=(e.size,e.value),p=(0,o.default)(e,["index","isDisabled","isSelected","label","onSelect","size","value"]);return a.createElement(r.ListItem,(0,n.default)({onPress:function(e){e.preventDefault(),d(b,l,i)},label:m,rightIcon:a.createElement(c.Checkbox,{isInteractive:!1,shape:"circle",isChecked:i})},p))});t.SelectListItem=m,"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SelectListItem",filename:"src/components/SelectList/SelectListItem.tsx"}})}}]);
//# sourceMappingURL=14.f91fe9e5e005a95c4af7.js.map
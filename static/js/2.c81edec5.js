(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/Box/Box.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Box=t.shapeMapping=t.BASE_BORDER_RADII=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=n(r("./node_modules/react/index.js")),i=r("./node_modules/react-native-web/dist/index.js"),l=r("./src/theme/index.ts");t.BASE_BORDER_RADII=4,4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var u={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};t.shapeMapping=u,"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Box/Box.tsx"}});var p={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return u[e]})},c=function(e){var t=e.children,r=e.style,n=e.testID,s=(0,a.default)(e,["children","style","testID"]),u=(0,l.useTheme)(),c=[],d={};for(var m in s)if(m){var b=p[m];if(b){var f=b(s[m],u);c.push(f)}else d[m]=s[m]}return o.createElement(i.View,{testID:n,style:[d,c,r]},t)};t.Box=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Box/index.ts":function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r("./src/components/Box/Box.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Typography/BulletItem.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.BulletItem=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/extends.js")),o=s(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(r("./node_modules/react/index.js")),l=r("./src/components/Typography/ListItem.tsx");"undefined"!==typeof BulletItemProps&&BulletItemProps&&BulletItemProps===Object(BulletItemProps)&&Object.isExtensible(BulletItemProps)&&Object.defineProperty(BulletItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BulletItemProps",filename:"src/components/Typography/BulletItem.tsx"}});var u=function(e){var t=e.icon,r=(e.iconColor,(0,o.default)(e,["icon","iconColor"]));return i.createElement(l.ListItem,(0,a.default)({mark:t},r))};t.BulletItem=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BulletItem",filename:"src/components/Typography/BulletItem.tsx"}})},"./src/components/Typography/BulletedList.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.BulletedList=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/extends.js")),o=n(r("./node_modules/react/index.js")),i=r("./src/components/Typography/List.tsx");"undefined"!==typeof BulletedListProps&&BulletedListProps&&BulletedListProps===Object(BulletedListProps)&&Object.isExtensible(BulletedListProps)&&Object.defineProperty(BulletedListProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BulletedListProps",filename:"src/components/Typography/BulletedList.tsx"}});var l=function(e){return o.createElement(i.List,(0,a.default)({listType:"ul"},e))};t.BulletedList=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BulletedList",filename:"src/components/Typography/BulletedList.tsx"}})},"./src/components/Typography/Code.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Code=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/extends.js")),o=s(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(r("./node_modules/react/index.js")),l=r("./node_modules/react-native-web/dist/index.js"),u=r("./src/theme/index.ts"),p=r("./src/components/Typography/Text.tsx");"undefined"!==typeof CodeProps&&CodeProps&&CodeProps===Object(CodeProps)&&Object.isExtensible(CodeProps)&&Object.defineProperty(CodeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CodeProps",filename:"src/components/Typography/Code.tsx"}});var c=function(e){var t=e.appearance,r=(0,o.default)(e,["appearance"]),n=(0,u.useTheme)(),s=i.createElement(p.Text,(0,a.default)({fontFamily:"mono"},r));return"default"===t?i.createElement(l.View,{style:[d.default,{backgroundColor:n.colors.background.greyDefault}]},s):s};t.Code=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Code",filename:"src/components/Typography/Code.tsx"}});var d=l.StyleSheet.create({default:{borderRadius:2,paddingBottom:3,paddingLeft:6,paddingRight:6,paddingTop:3}})},"./src/components/Typography/Heading.styles.ts":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getHeadingStyles=t.getHeadingSize=void 0;var s=n(r("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=r("./src/components/Typography/Text.styles.ts");"undefined"!==typeof HeadingVariables&&HeadingVariables&&HeadingVariables===Object(HeadingVariables)&&Object.isExtensible(HeadingVariables)&&Object.defineProperty(HeadingVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingVariables",filename:"src/components/Typography/Heading.styles.ts"}}),"undefined"!==typeof HeadingStyles&&HeadingStyles&&HeadingStyles===Object(HeadingStyles)&&Object.isExtensible(HeadingStyles)&&Object.defineProperty(HeadingStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingStyles",filename:"src/components/Typography/Heading.styles.ts"}}),"undefined"!==typeof HeadingStylesProps&&HeadingStylesProps&&HeadingStylesProps===Object(HeadingStylesProps)&&Object.isExtensible(HeadingStylesProps)&&Object.defineProperty(HeadingStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingStylesProps",filename:"src/components/Typography/Heading.styles.ts"}}),"undefined"!==typeof GetHeadingStyles&&GetHeadingStyles&&GetHeadingStyles===Object(GetHeadingStyles)&&Object.isExtensible(GetHeadingStyles)&&Object.defineProperty(GetHeadingStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetHeadingStyles",filename:"src/components/Typography/Heading.styles.ts"}});var o=function(e){return function(t){return e[t]||{fontSize:t}}};t.getHeadingSize=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getHeadingSize",filename:"src/components/Typography/Heading.styles.ts"}});var i=function(e,t){var r=e.size,n=e.align,i=e.color,l=e.weight,u=o(t.headingSizes)(r);return{headingStyle:(0,s.default)({},u,{color:(0,a.getTextColor)(t.colors.text)(i),fontFamily:t.fontFamilies.heading,fontWeight:(0,a.getFontWeight)(t.fontWeights)(l)||u.fontWeight,textAlign:n})}};t.getHeadingStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getHeadingStyles",filename:"src/components/Typography/Heading.styles.ts"}})},"./src/components/Typography/Heading.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Heading=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/extends.js")),o=s(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(r("./node_modules/react/index.js")),l=r("./node_modules/react-native-web/dist/index.js"),u=r("./src/theme/index.ts"),p=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Typography/Heading.styles.ts");"undefined"!==typeof HeadingProps&&HeadingProps&&HeadingProps===Object(HeadingProps)&&Object.isExtensible(HeadingProps)&&Object.defineProperty(HeadingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingProps",filename:"src/components/Typography/Heading.tsx"}});var d=function(e){var t=e.accessibilityLevel,r=e.size,n=void 0===r?"medium":r,s=e.align,d=void 0===s?"left":s,m=e.color,b=void 0===m?"default":m,f=e.weight,y=e.getStyles,g=(0,o.default)(e,["accessibilityLevel","size","align","color","weight","getStyles"]),x=(0,u.useTheme)(),h=(0,p.mergeStyles)(c.getHeadingStyles,y)({size:n,align:d,color:b,weight:f},x).headingStyle;return i.createElement(l.Text,(0,a.default)({accessibilityRole:"web"===l.Platform.OS?"heading":"none","aria-level":t,style:h},g))};t.Heading=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Heading",filename:"src/components/Typography/Heading.tsx"}})},"./src/components/Typography/Label.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/extends.js")),o=s(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(r("./node_modules/react/index.js")),l=r("./node_modules/react-native-web/dist/index.js"),u=r("./src/components/Typography/Text.tsx"),p=function(e){var t=e.children,r=(0,o.default)(e,["children"]);return i.createElement(u.Text,(0,a.default)({accessibilityRole:"web"===l.Platform.OS?"label":"none"},r),t)};t.Label=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/components/Typography/Label.tsx"}})},"./src/components/Typography/List.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.List=void 0;var s=n(r("./node_modules/react/index.js")),a=r("./node_modules/react-native-web/dist/index.js"),o=r("./src/components/Box/index.ts");"undefined"!==typeof ListProps&&ListProps&&ListProps===Object(ListProps)&&Object.isExtensible(ListProps)&&Object.defineProperty(ListProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListProps",filename:"src/components/Typography/List.tsx"}});var i=function(e){var t=e.listType,r=e.children,n=e.icon,i=e.size,l=void 0===i?"medium":i,u=s.Children.map(r,function(e,r){return s.isValidElement(e)?s.cloneElement(e,{icon:e.props.icon||n,index:"ol"===t?r+1:null,size:e.props.size||l}):e});return s.createElement(a.View,{accessibilityRole:"web"===a.Platform.OS?"list":"none"},s.createElement(o.Box,{margin:0,marginLeft:8,padding:0},u))};t.List=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"List",filename:"src/components/Typography/List.tsx"}})},"./src/components/Typography/ListItem.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ListItem=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/extends.js")),o=s(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(r("./node_modules/react/index.js")),l=r("./node_modules/react-native-web/dist/index.js"),u=r("./src/components/Box/index.ts"),p=r("./src/components/Typography/Text.tsx"),c={large:24,medium:16,small:16,xsmall:8};"undefined"!==typeof ListItemProps&&ListItemProps&&ListItemProps===Object(ListItemProps)&&Object.isExtensible(ListItemProps)&&Object.defineProperty(ListItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemProps",filename:"src/components/Typography/ListItem.tsx"}});var d=function(e){var t=e.size,r=void 0===t?"medium":t,n=e.mark,s=(0,o.default)(e,["size","mark"]),d="number"===typeof r?16:c[r];return i.createElement(l.View,{accessibilityRole:"web"===l.Platform.OS?"listitem":"none"},i.createElement(u.Box,{flexDirection:"row",alignItems:"center",marginVertical:8},i.createElement(u.Box,null,n),i.createElement(u.Box,{width:"100%",paddingLeft:d},i.createElement(p.Text,(0,a.default)({isInline:!0,size:r},s)))))};t.ListItem=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItem",filename:"src/components/Typography/ListItem.tsx"}})},"./src/components/Typography/NumberedItem.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.NumberedItem=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/extends.js")),o=s(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(r("./node_modules/react/index.js")),l=r("./src/components/Typography/ListItem.tsx"),u=r("./src/components/Typography/Text.tsx");"undefined"!==typeof NumberedItemProps&&NumberedItemProps&&NumberedItemProps===Object(NumberedItemProps)&&Object.isExtensible(NumberedItemProps)&&Object.defineProperty(NumberedItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NumberedItemProps",filename:"src/components/Typography/NumberedItem.tsx"}});var p=function(e){var t=e.index,r=(0,o.default)(e,["index"]);return i.createElement(l.ListItem,(0,a.default)({mark:i.createElement(u.Text,(0,a.default)({size:r.size},r),"".concat(t,"."))},r))};t.NumberedItem=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NumberedItem",filename:"src/components/Typography/NumberedItem.tsx"}})},"./src/components/Typography/NumberedList.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.NumberedList=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/extends.js")),o=n(r("./node_modules/react/index.js")),i=r("./src/components/Typography/List.tsx");"undefined"!==typeof NumberedListProps&&NumberedListProps&&NumberedListProps===Object(NumberedListProps)&&Object.isExtensible(NumberedListProps)&&Object.defineProperty(NumberedListProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NumberedListProps",filename:"src/components/Typography/NumberedList.tsx"}});var l=function(e){return o.createElement(i.List,(0,a.default)({listType:"ol"},e))};t.NumberedList=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NumberedList",filename:"src/components/Typography/NumberedList.tsx"}})},"./src/components/Typography/Paragraph.styles.ts":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getParagraphStyles=t.getParagraphSize=void 0;var s=n(r("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=r("./src/components/Typography/Text.styles.ts");"undefined"!==typeof ParagraphVariables&&ParagraphVariables&&ParagraphVariables===Object(ParagraphVariables)&&Object.isExtensible(ParagraphVariables)&&Object.defineProperty(ParagraphVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphVariables",filename:"src/components/Typography/Paragraph.styles.ts"}}),"undefined"!==typeof ParagraphStylesProps&&ParagraphStylesProps&&ParagraphStylesProps===Object(ParagraphStylesProps)&&Object.isExtensible(ParagraphStylesProps)&&Object.defineProperty(ParagraphStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphStylesProps",filename:"src/components/Typography/Paragraph.styles.ts"}}),"undefined"!==typeof ParagraphStyles&&ParagraphStyles&&ParagraphStyles===Object(ParagraphStyles)&&Object.isExtensible(ParagraphStyles)&&Object.defineProperty(ParagraphStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphStyles",filename:"src/components/Typography/Paragraph.styles.ts"}}),"undefined"!==typeof GetParagraphStyles&&GetParagraphStyles&&GetParagraphStyles===Object(GetParagraphStyles)&&Object.isExtensible(GetParagraphStyles)&&Object.defineProperty(GetParagraphStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetParagraphStyles",filename:"src/components/Typography/Paragraph.styles.ts"}});var o=function(e){return function(t){return e[t]||{fontSize:t}}};t.getParagraphSize=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getParagraphSize",filename:"src/components/Typography/Paragraph.styles.ts"}});var i=function(e,t){var r=e.size,n=e.color,i=e.fontFamily,l=e.align,u=e.weight,p=o(t.paragraphSizes)(r);return{paragraphStyle:(0,s.default)({},p,{color:(0,a.getTextColor)(t.colors.text)(n),fontFamily:(0,a.getFontFamily)(t.fontFamilies)(i),fontWeight:(0,a.getFontWeight)(t.fontWeights)(u)||p.fontWeight,marginBottom:"1em",marginTop:"1em",textAlign:l})}};t.getParagraphStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getParagraphStyles",filename:"src/components/Typography/Paragraph.styles.ts"}})},"./src/components/Typography/Paragraph.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Paragraph=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/extends.js")),o=s(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(r("./node_modules/react/index.js")),l=r("./node_modules/react-native-web/dist/index.js"),u=r("./src/theme/index.ts"),p=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Typography/Paragraph.styles.ts");"undefined"!==typeof ParagraphProps&&ParagraphProps&&ParagraphProps===Object(ParagraphProps)&&Object.isExtensible(ParagraphProps)&&Object.defineProperty(ParagraphProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphProps",filename:"src/components/Typography/Paragraph.tsx"}});var d=function(e){var t=e.children,r=e.color,n=void 0===r?"default":r,s=e.fontFamily,d=void 0===s?"text":s,m=e.size,b=void 0===m?"medium":m,f=e.align,y=void 0===f?"left":f,g=e.weight,x=e.getStyles,h=(0,o.default)(e,["children","color","fontFamily","size","align","weight","getStyles"]),j=(0,u.useTheme)(),P=(0,p.mergeStyles)(c.getParagraphStyles,x)({align:y,size:b,color:n,fontFamily:d,weight:g},j).paragraphStyle;return i.createElement(l.Text,(0,a.default)({accessibilityLabel:"p",style:P},h),t)};t.Paragraph=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Paragraph",filename:"src/components/Typography/Paragraph.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getTextStyles=t.getTextSize=t.getTextColor=t.getFontWeight=t.getFontFamily=void 0;var s=n(r("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof TextVariables&&TextVariables&&TextVariables===Object(TextVariables)&&Object.isExtensible(TextVariables)&&Object.defineProperty(TextVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextVariables",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof TextStylesProps&&TextStylesProps&&TextStylesProps===Object(TextStylesProps)&&Object.isExtensible(TextStylesProps)&&Object.defineProperty(TextStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStylesProps",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]}};t.getFontFamily=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontFamily",filename:"src/components/Typography/Text.styles.ts"}});var o=function(e){return function(t){if(t)return e[t]||t}};t.getFontWeight=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||t}};t.getTextColor=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){return e[t]||{fontSize:t}}};t.getTextSize=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var u=function(e,t){var r=e.size,n=e.color,u=e.fontFamily,p=e.isInline,c=e.isItalic,d=e.align,m=e.transform,b=e.weight,f=l(t.textSizes)(r);return{textStyle:(0,s.default)({},f,{color:i(t.colors.text)(n),fontFamily:a(t.fontFamilies)(u),fontWeight:o(t.fontWeights)(b)||f.fontWeight,textAlign:d},p?{alignSelf:"flex-start",flexDirection:"row"}:{},c&&{fontStyle:"italic"},m&&{textTransform:m})}};t.getTextStyles=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Text=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/extends.js")),o=s(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(r("./node_modules/react/index.js")),l=r("./node_modules/react-native-web/dist/index.js"),u=r("./src/theme/index.ts"),p=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextStyleProps&&TextStyleProps&&TextStyleProps===Object(TextStyleProps)&&Object.isExtensible(TextStyleProps)&&Object.defineProperty(TextStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyleProps",filename:"src/components/Typography/Text.tsx"}}),"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var d=function(e){var t=e.children,r=e.color,n=void 0===r?"default":r,s=e.fontFamily,d=void 0===s?"text":s,m=e.size,b=void 0===m?"medium":m,f=e.align,y=void 0===f?"left":f,g=e.weight,x=e.isInline,h=void 0!==x&&x,j=e.getStyles,P=e.isItalic,_=void 0!==P&&P,O=e.transform,v=(0,o.default)(e,["children","color","fontFamily","size","align","weight","isInline","getStyles","isItalic","transform"]),T=(0,u.useTheme)(),S=(0,p.mergeStyles)(c.getTextStyles,j)({align:y,color:n,fontFamily:d,isInline:h,isItalic:_,size:b,transform:O,weight:g},T).textStyle;return i.createElement(l.Text,(0,a.default)({style:S},v),t)};t.Text=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/components/Typography/index.ts":function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r("./src/components/Typography/Code.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var s=r("./src/components/Typography/Heading.tsx");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var a=r("./src/components/Typography/Label.tsx");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var o=r("./src/components/Typography/NumberedList.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var i=r("./src/components/Typography/Paragraph.tsx");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var l=r("./src/components/Typography/BulletItem.tsx");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})});var u=r("./src/components/Typography/NumberedItem.tsx");Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var p=r("./src/components/Typography/Text.tsx");Object.keys(p).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})});var c=r("./src/components/Typography/BulletedList.tsx");Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})})},"./src/utils/mergeStyles.ts":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.mergeStyles=void 0;var s=n(r("./node_modules/deepmerge/dist/umd.js"));"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var a=function(e,t){return function(r,n){var a=e(r,n);return t?(0,s.default)(a,t(r,n)):a}};t.mergeStyles=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=2.76cdd36a11050c61b923.js.map
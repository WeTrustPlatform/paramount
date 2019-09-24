(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/Layout/Column.tsx":function(e,o,n){"use strict";var t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/react/index.js"),l=n("./node_modules/react-native-web/dist/exports/View/index.js"),i=n("./src/theme/Theme.tsx"),m=n("./src/utils/mergeStyles.ts"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=n("./src/components/Layout/LayoutContext.tsx");"undefined"!==typeof GetColumnStyles&&GetColumnStyles&&GetColumnStyles===Object(GetColumnStyles)&&Object.isExtensible(GetColumnStyles)&&Object.defineProperty(GetColumnStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetColumnStyles",filename:"src/components/Layout/Column.styles.ts"}}),"undefined"!==typeof ColumnStyles&&ColumnStyles&&ColumnStyles===Object(ColumnStyles)&&Object.isExtensible(ColumnStyles)&&Object.defineProperty(ColumnStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnStyles",filename:"src/components/Layout/Column.styles.ts"}});var u=function(e,o){var n=e[o];if(n)return n;var t=function(e,o){var n=b.b.indexOf(o),t=b.b.find(function(o,t){return!(n>t)&&!!e[o]});return t?e[t]:null}(e,o);return t||null},c=function(e,o){return"".concat(e*(100/o),"%")};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getProportion",filename:"src/components/Layout/Column.styles.ts"}});var s=function(e){var o=e.xsmall,n=e.small,t=e.medium,r=e.large,l=e.xlarge,i=e.offsetXsmall,m=e.offsetSmall,a=e.offsetMedium;return{columns:{xsmall:o,small:n,medium:t,large:r,xlarge:l},offsetColumns:{large:e.offsetLarge,medium:a,small:m,xlarge:e.offsetXlarge,xsmall:i}}};s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"splitColumnConfig",filename:"src/components/Layout/Column.styles.ts"}});var d=function(e){var o=e.gutterWidth,n=e.currentScreenSize,t=e.gridColumnCount,r=Object(a.a)(e,["gutterWidth","currentScreenSize","gridColumnCount"]),l=s(r),i=l.columns,m=l.offsetColumns,b=u(i,n),d=c(b||12,t),p=u(m,n);return{columnStyle:{flex:1,flexBasis:d,marginLeft:c(p||0,t),maxWidth:d,paddingLeft:o/2,paddingRight:o/2}}};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getColumnStyles",filename:"src/components/Layout/Column.styles.ts"}});var p=n("./src/components/Layout/Row.tsx");n.d(o,"a",function(){return f});"undefined"!==typeof ColumnConfigBase&&ColumnConfigBase&&ColumnConfigBase===Object(ColumnConfigBase)&&Object.isExtensible(ColumnConfigBase)&&Object.defineProperty(ColumnConfigBase,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnConfigBase",filename:"src/components/Layout/Column.tsx"}}),"undefined"!==typeof ColumnConfig&&ColumnConfig&&ColumnConfig===Object(ColumnConfig)&&Object.isExtensible(ColumnConfig)&&Object.defineProperty(ColumnConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnConfig",filename:"src/components/Layout/Column.tsx"}}),"undefined"!==typeof ColumnProps&&ColumnProps&&ColumnProps===Object(ColumnProps)&&Object.isExtensible(ColumnProps)&&Object.defineProperty(ColumnProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnProps",filename:"src/components/Layout/Column.tsx"}});var f=function(e){var o=e.children,n=e.getStyles,a=Object(b.e)(),u=Object(i.b)(),c=r.useContext(p.a),s=Object(m.a)(d,n,u.components.getColumnStyles)(Object(t.a)({},a,e,{gutterWidth:c}),u).columnStyle;return r.createElement(l.a,{style:s,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Column.tsx",lineNumber:84}},o)};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Column",filename:"src/components/Layout/Column.tsx"}})},"./src/components/Layout/Container.tsx":function(e,o,n){"use strict";var t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/react/index.js"),l=n("./node_modules/react-native-web/dist/exports/View/index.js"),i=n("./src/theme/Theme.tsx"),m=n("./src/utils/mergeStyles.ts"),a=n("./src/components/Layout/LayoutContext.tsx");"undefined"!==typeof GetContainerStyles&&GetContainerStyles&&GetContainerStyles===Object(GetContainerStyles)&&Object.isExtensible(GetContainerStyles)&&Object.defineProperty(GetContainerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetContainerStyles",filename:"src/components/Layout/Container.styles.ts"}}),"undefined"!==typeof ContainerStyles&&ContainerStyles&&ContainerStyles===Object(ContainerStyles)&&Object.isExtensible(ContainerStyles)&&Object.defineProperty(ContainerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerStyles",filename:"src/components/Layout/Container.styles.ts"}});var b=function(e,o){var n=a.b.indexOf(o),t=a.b.find(function(o,t){return"xsmall"!==o&&(!(n>t)&&!!e[o])});if("xsmall"!==t)return t?e[t]:void 0},u=function(e,o){var n=e.size,t=e.currentScreenSize,r=e.containerSizes,l=e.gutterWidth;return{containerStyle:{marginLeft:"auto",marginRight:"auto",maxWidth:e.fluid?"100%":n?r[n]:b(r,t),paddingLeft:l/2,paddingRight:l/2,width:"100%"}}};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getContainerStyles",filename:"src/components/Layout/Container.styles.ts"}}),n.d(o,"a",function(){return c});"undefined"!==typeof ContainerProps&&ContainerProps&&ContainerProps===Object(ContainerProps)&&Object.isExtensible(ContainerProps)&&Object.defineProperty(ContainerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerProps",filename:"src/components/Layout/Container.tsx"}});var c=function(e){var o=e.children,n=e.getStyles,b=e.size,c=e.fluid,s=void 0!==c&&c,d=Object(a.e)(),p=Object(i.b)(),f=Object(m.a)(u,n,p.components.getContainerStyles)(Object(t.a)({size:b,fluid:s},d),p).containerStyle;return r.createElement(l.a,{style:f,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Container.tsx",lineNumber:43}},o)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Container",filename:"src/components/Layout/Container.tsx"}})},"./src/components/Layout/Row.tsx":function(e,o,n){"use strict";var t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/react/index.js"),l=n("./node_modules/react-native-web/dist/exports/View/index.js"),i=n("./src/theme/Theme.tsx"),m=n("./src/utils/mergeStyles.ts"),a=n("./src/components/Layout/LayoutContext.tsx");"undefined"!==typeof GetRowStyles&&GetRowStyles&&GetRowStyles===Object(GetRowStyles)&&Object.isExtensible(GetRowStyles)&&Object.defineProperty(GetRowStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetRowStyles",filename:"src/components/Layout/Row.styles.tsx"}}),"undefined"!==typeof RowStyles&&RowStyles&&RowStyles===Object(RowStyles)&&Object.isExtensible(RowStyles)&&Object.defineProperty(RowStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowStyles",filename:"src/components/Layout/Row.styles.tsx"}});var b=function(e){var o=e.hasGutter,n=void 0===o||o,t=e.gutterWidth;return{rowStyle:{flexDirection:"row",flexWrap:"wrap",marginLeft:n?-t/2:0,marginRight:n?-t/2:0}}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getRowStyles",filename:"src/components/Layout/Row.styles.tsx"}}),n.d(o,"a",function(){return c}),n.d(o,"b",function(){return s});var u="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Row.tsx";"undefined"!==typeof RowProps&&RowProps&&RowProps===Object(RowProps)&&Object.isExtensible(RowProps)&&Object.defineProperty(RowProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowProps",filename:"src/components/Layout/Row.tsx"}});var c=r.createContext(a.d.gutterWidth);"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GutterWidthContext",filename:"src/components/Layout/Row.tsx"}});var s=function(e){var o=e.children,n=e.hasGutter,s=void 0===n||n,d=e.getStyles,p=Object(a.e)(),f=Object(i.b)(),_=Object(m.a)(b,d,f.components.getRowStyles)(Object(t.a)({},p,e),f).rowStyle;return r.createElement(l.a,{style:_,__source:{fileName:u,lineNumber:44}},r.createElement(c.Provider,{value:s?p.gutterWidth:0,__source:{fileName:u,lineNumber:45}},o))};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Row",filename:"src/components/Layout/Row.tsx"}})},"./src/components/Layout/RowAndColumn.mdx":function(e,o,n){"use strict";n.r(o),n.d(o,"default",function(){return _});var t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),m=n("./src/components/Box/Box.tsx"),a=n("./src/components/Layout/Container.tsx"),b=n("./src/components/Layout/Column.tsx"),u=n("./src/components/Layout/Row.tsx"),c=n("./src/components/Layout/LayoutProvider.tsx"),s=n("./src/components/Typography/Text.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/RowAndColumn.mdx",p={},f="wrapper";function _(e){var o=e.components,n=Object(t.a)(e,["components"]);return Object(l.b)(f,Object(r.a)({},p,n,{components:o,mdxType:"MDXLayout",__source:{fileName:d,lineNumber:21}}),Object(l.b)("h1",Object(r.a)({id:"row-and-column"},{__source:{fileName:d,lineNumber:24}}),"Row and Column"),Object(l.b)("p",{__source:{fileName:d,lineNumber:27}},Object(l.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:27}},"Column")," renders at the width of defined columns count. It will match nearest defined size that is smaller than or equal to current screen size.\n",Object(l.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:28}},"Row")," wraps ",Object(l.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:28}},"Column"),"s to keep them horizontal"),Object(l.b)("p",{__source:{fileName:d,lineNumber:29}},"Refer to ",Object(l.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:29}},"Layout")," docs for setup"),Object(l.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:d,lineNumber:30}}),"Usage"),Object(l.b)(i.c,{__position:0,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={8}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,Box:m.a,Container:a.a,Column:b.a,Row:u.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:33}},Object(l.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:44}},Object(l.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:45}},Object(l.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:46}},Object(l.b)(u.b,{mdxType:"Row",__source:{fileName:d,lineNumber:47}},Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:48}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:49}})),Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:51}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:52}})),Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:54}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:55}})),Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:57}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:58}})),Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:60}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:61}})),Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:63}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:64}})),Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:66}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:67}})),Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:69}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:70}})),Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:72}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:73}})),Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:75}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:76}})),Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:78}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:79}})),Object(l.b)(b.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:81}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:82}}))))),Object(l.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:87}},Object(l.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:88}},Object(l.b)(u.b,{mdxType:"Row",__source:{fileName:d,lineNumber:89}},Object(l.b)(b.a,{medium:8,mdxType:"Column",__source:{fileName:d,lineNumber:90}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:91}})),Object(l.b)(b.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:93}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:94}}))))),Object(l.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:99}},Object(l.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:100}},Object(l.b)(u.b,{mdxType:"Row",__source:{fileName:d,lineNumber:101}},Object(l.b)(b.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:102}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:103}})),Object(l.b)(b.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:105}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:106}})),Object(l.b)(b.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:108}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:109}}))))),Object(l.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:114}},Object(l.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:115}},Object(l.b)(u.b,{mdxType:"Row",__source:{fileName:d,lineNumber:116}},Object(l.b)(b.a,{medium:6,mdxType:"Column",__source:{fileName:d,lineNumber:117}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:118}})),Object(l.b)(b.a,{medium:6,mdxType:"Column",__source:{fileName:d,lineNumber:120}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:121}}))))))),Object(l.b)("h3",Object(r.a)({id:"column-wrapping"},{__source:{fileName:d,lineNumber:128}}),"Column wrapping"),Object(l.b)(i.c,{__position:1,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column xsmall={9}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,Box:m.a,Container:a.a,Column:b.a,Row:u.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:131}},Object(l.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:142}},Object(l.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:143}},Object(l.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:144}},Object(l.b)(u.b,{mdxType:"Row",__source:{fileName:d,lineNumber:145}},Object(l.b)(b.a,{xsmall:9,mdxType:"Column",__source:{fileName:d,lineNumber:146}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:147}})),Object(l.b)(b.a,{xsmall:4,mdxType:"Column",__source:{fileName:d,lineNumber:149}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:150}})),Object(l.b)(b.a,{xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:152}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:153}}))))))),Object(l.b)("h3",Object(r.a)({id:"offsets"},{__source:{fileName:d,lineNumber:160}}),"Offsets"),Object(l.b)(i.c,{__position:2,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column offsetXsmall={2} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n      <Row>\n        <Column offsetXsmall={4} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n      <Row>\n        <Column offsetXsmall={6} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,Box:m.a,Container:a.a,Column:b.a,Row:u.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:163}},Object(l.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:174}},Object(l.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:175}},Object(l.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:176}},Object(l.b)(u.b,{mdxType:"Row",__source:{fileName:d,lineNumber:177}},Object(l.b)(b.a,{offsetXsmall:2,xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:178}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:179}}))),Object(l.b)(u.b,{mdxType:"Row",__source:{fileName:d,lineNumber:182}},Object(l.b)(b.a,{offsetXsmall:4,xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:183}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:184}}))),Object(l.b)(u.b,{mdxType:"Row",__source:{fileName:d,lineNumber:187}},Object(l.b)(b.a,{offsetXsmall:6,xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:188}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:189}}))))))),Object(l.b)("h3",Object(r.a)({id:"without-gutter"},{__source:{fileName:d,lineNumber:196}}),"Without gutter"),Object(l.b)(i.c,{__position:3,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row hasGutter={false}>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,Box:m.a,Container:a.a,Column:b.a,Row:u.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:199}},Object(l.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:210}},Object(l.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:211}},Object(l.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:212}},Object(l.b)(u.b,{hasGutter:!1,mdxType:"Row",__source:{fileName:d,lineNumber:213}},Object(l.b)(b.a,{xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:214}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:215}})),Object(l.b)(b.a,{xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:217}},Object(l.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:218}}))))))),Object(l.b)("h2",Object(r.a)({id:"row-props"},{__source:{fileName:d,lineNumber:225}}),"Row Props"),Object(l.b)(i.d,{of:u.b,mdxType:"Props",__source:{fileName:d,lineNumber:228}}),Object(l.b)("h2",Object(r.a)({id:"row-customization"},{__source:{fileName:d,lineNumber:229}}),"Row Customization"),Object(l.b)("p",{__source:{fileName:d,lineNumber:232}},"Using ",Object(l.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:232}},"getStyles")," prop"),Object(l.b)("pre",{__source:{fileName:d,lineNumber:233}},Object(l.b)("code",Object(r.a)({parentName:"pre"},{},{__source:{fileName:d,lineNumber:233}}),"RowStyles {\n  rowStyle: ViewStyle;\n}\n\ngetStyles={(RowProps, Theme) => RowStyles}\n")),Object(l.b)("p",{__source:{fileName:d,lineNumber:239}},"Markup"),Object(l.b)("pre",{__source:{fileName:d,lineNumber:240}},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:d,lineNumber:240}}),"<View rowStyle />\n")),Object(l.b)("h2",Object(r.a)({id:"column-props"},{__source:{fileName:d,lineNumber:244}}),"Column Props"),Object(l.b)(i.d,{of:b.a,mdxType:"Props",__source:{fileName:d,lineNumber:247}}),Object(l.b)("h2",Object(r.a)({id:"column-customization"},{__source:{fileName:d,lineNumber:248}}),"Column Customization"),Object(l.b)("p",{__source:{fileName:d,lineNumber:251}},"Using ",Object(l.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:251}},"getStyles")," prop"),Object(l.b)("pre",{__source:{fileName:d,lineNumber:252}},Object(l.b)("code",Object(r.a)({parentName:"pre"},{},{__source:{fileName:d,lineNumber:252}}),"ColumnStyles {\n  columnStyle: ViewStyle;\n}\n\ngetStyles={(ColumnProps, Theme) => ColumnStyles}\n")),Object(l.b)("p",{__source:{fileName:d,lineNumber:258}},"Markup"),Object(l.b)("pre",{__source:{fileName:d,lineNumber:259}},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:d,lineNumber:259}}),"<View columnStyle />\n")))}_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Layout/RowAndColumn.mdx"}}),_.isMDXComponent=!0}}]);
//# sourceMappingURL=20.a52789c07fb13fb9a33f.js.map
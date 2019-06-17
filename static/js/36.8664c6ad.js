(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/react/index.js"),r=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var l={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},c=function(e){var t=e.children,n=e.style,c=e.testID,s=Object(o.a)(e,["children","style","testID"]),u=Object(a.a)(),m=[],p={};for(var d in s)if(d){var b=l[d];if(b){var f=b(s[d],u);m.push(f)}else p[d]=s[d]}return i.createElement(r.a,{testID:c,style:[p,m,n],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:55}},t)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Button/Button.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/components/Box/Box.tsx"),c=n("./src/components/Button/Button.tsx"),s="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.mdx",u={},m="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(m,Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout",__source:{fileName:s,lineNumber:21}}),Object(r.b)("h1",Object(i.a)({id:"button"},{__source:{fileName:s,lineNumber:23}}),"Button"),Object(r.b)("h3",Object(i.a)({id:"usage"},{__source:{fileName:s,lineNumber:26}}),"Usage"),Object(r.b)(a.c,{__position:0,__code:'<Button\n  color="primary"\n  appearance="primary"\n  size="large"\n  isLoading={false}\n  isActive={false}\n  isDisabled={false}\n  isInline={false}\n  iconBefore={null}\n  iconAfter={null}\n  iconLoading={null}\n  title="Usage"\n  onPress={() => console.log(\'Pressed!\')}\n  getStyles={(props, theme) => ({\n    buttonStyle: {},\n    textStyle: {},\n    focusColor: \'#5ab9ae\',\n  })}\n/>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:l.a,Button:c.a},mdxType:"Playground",__source:{fileName:s,lineNumber:29}},Object(r.b)(c.a,{color:"primary",appearance:"primary",size:"large",isLoading:!1,isActive:!1,isDisabled:!1,isInline:!1,iconBefore:null,iconAfter:null,iconLoading:null,title:"Usage",onPress:function(){return console.log("Pressed!")},getStyles:function(e,t){return{buttonStyle:{},textStyle:{},focusColor:"#5ab9ae"}},mdxType:"Button",__source:{fileName:s,lineNumber:36}})),Object(r.b)("h3",Object(i.a)({id:"variants"},{__source:{fileName:s,lineNumber:42}}),"Variants"),Object(r.b)(a.c,{__position:1,__code:'<Box flexDirection="row">\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="default" title="Default" />\n    <Button color="default" appearance="outline" title="Default" />\n    <Button color="default" appearance="minimal" title="Default" />\n    <Button color="default" appearance="primary" title="Default" isLoading />\n  </Box>\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="primary" title="Primary" />\n    <Button color="primary" appearance="outline" title="Primary" />\n    <Button color="primary" appearance="minimal" title="Primary" />\n    <Button color="primary" appearance="primary" title="Primary" isLoading />\n  </Box>\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="secondary" title="Secondary" />\n    <Button color="secondary" appearance="outline" title="Secondary" />\n    <Button color="secondary" appearance="minimal" title="Secondary" />\n    <Button\n      color="secondary"\n      appearance="primary"\n      title="Secondary"\n      isLoading\n    />\n  </Box>\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="danger" title="Danger" />\n    <Button color="danger" appearance="outline" title="Danger" />\n    <Button color="danger" appearance="minimal" title="Danger" />\n    <Button color="danger" appearance="primary" title="Danger" isLoading />\n  </Box>\n</Box>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:l.a,Button:c.a},mdxType:"Playground",__source:{fileName:s,lineNumber:45}},Object(r.b)(l.a,{flexDirection:"row",mdxType:"Box",__source:{fileName:s,lineNumber:52}},Object(r.b)(l.a,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box",__source:{fileName:s,lineNumber:53}},Object(r.b)(c.a,{color:"default",title:"Default",mdxType:"Button",__source:{fileName:s,lineNumber:54}}),Object(r.b)(c.a,{color:"default",appearance:"outline",title:"Default",mdxType:"Button",__source:{fileName:s,lineNumber:55}}),Object(r.b)(c.a,{color:"default",appearance:"minimal",title:"Default",mdxType:"Button",__source:{fileName:s,lineNumber:56}}),Object(r.b)(c.a,{color:"default",appearance:"primary",title:"Default",isLoading:!0,mdxType:"Button",__source:{fileName:s,lineNumber:57}})),Object(r.b)(l.a,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box",__source:{fileName:s,lineNumber:59}},Object(r.b)(c.a,{color:"primary",title:"Primary",mdxType:"Button",__source:{fileName:s,lineNumber:60}}),Object(r.b)(c.a,{color:"primary",appearance:"outline",title:"Primary",mdxType:"Button",__source:{fileName:s,lineNumber:61}}),Object(r.b)(c.a,{color:"primary",appearance:"minimal",title:"Primary",mdxType:"Button",__source:{fileName:s,lineNumber:62}}),Object(r.b)(c.a,{color:"primary",appearance:"primary",title:"Primary",isLoading:!0,mdxType:"Button",__source:{fileName:s,lineNumber:63}})),Object(r.b)(l.a,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box",__source:{fileName:s,lineNumber:65}},Object(r.b)(c.a,{color:"secondary",title:"Secondary",mdxType:"Button",__source:{fileName:s,lineNumber:66}}),Object(r.b)(c.a,{color:"secondary",appearance:"outline",title:"Secondary",mdxType:"Button",__source:{fileName:s,lineNumber:67}}),Object(r.b)(c.a,{color:"secondary",appearance:"minimal",title:"Secondary",mdxType:"Button",__source:{fileName:s,lineNumber:68}}),Object(r.b)(c.a,{color:"secondary",appearance:"primary",title:"Secondary",isLoading:!0,mdxType:"Button",__source:{fileName:s,lineNumber:69}})),Object(r.b)(l.a,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box",__source:{fileName:s,lineNumber:71}},Object(r.b)(c.a,{color:"danger",title:"Danger",mdxType:"Button",__source:{fileName:s,lineNumber:72}}),Object(r.b)(c.a,{color:"danger",appearance:"outline",title:"Danger",mdxType:"Button",__source:{fileName:s,lineNumber:73}}),Object(r.b)(c.a,{color:"danger",appearance:"minimal",title:"Danger",mdxType:"Button",__source:{fileName:s,lineNumber:74}}),Object(r.b)(c.a,{color:"danger",appearance:"primary",title:"Danger",isLoading:!0,mdxType:"Button",__source:{fileName:s,lineNumber:75}})))),Object(r.b)("h3",Object(i.a)({id:"positioning-inline-button-with-different-sizes"},{__source:{fileName:s,lineNumber:79}}),"Positioning inline button with different sizes"),Object(r.b)(a.c,{__position:2,__code:'<Box paddingBottom={16} flexDirection="row" justifyContent="flex-start">\n  <Button isInline color="primary" title="Left small" size="small" />\n</Box>\n<Box paddingBottom={16} flexDirection="row" justifyContent="center">\n  <Button isInline color="primary" title="Center medium" size="medium" />\n</Box>\n<Box paddingBottom={16} flexDirection="row" justifyContent="flex-end">\n  <Button isInline color="primary" title="Right large" size="large" />\n</Box>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:l.a,Button:c.a},mdxType:"Playground",__source:{fileName:s,lineNumber:82}},Object(r.b)(l.a,{paddingBottom:16,flexDirection:"row",justifyContent:"flex-start",mdxType:"Box",__source:{fileName:s,lineNumber:89}},Object(r.b)(c.a,{isInline:!0,color:"primary",title:"Left small",size:"small",mdxType:"Button",__source:{fileName:s,lineNumber:90}})),Object(r.b)(l.a,{paddingBottom:16,flexDirection:"row",justifyContent:"center",mdxType:"Box",__source:{fileName:s,lineNumber:92}},Object(r.b)(c.a,{isInline:!0,color:"primary",title:"Center medium",size:"medium",mdxType:"Button",__source:{fileName:s,lineNumber:93}})),Object(r.b)(l.a,{paddingBottom:16,flexDirection:"row",justifyContent:"flex-end",mdxType:"Box",__source:{fileName:s,lineNumber:95}},Object(r.b)(c.a,{isInline:!0,color:"primary",title:"Right large",size:"large",mdxType:"Button",__source:{fileName:s,lineNumber:96}}))),Object(r.b)("p",{__source:{fileName:s,lineNumber:99}},"If ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:99}},"isInline")," does not inline the button, try wrapping it with ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:99}},"Box")),Object(r.b)("h3",Object(i.a)({id:"props"},{__source:{fileName:s,lineNumber:100}}),"Props"),Object(r.b)(a.d,{of:c.a,mdxType:"Props",__source:{fileName:s,lineNumber:103}}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Button/Button.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=36.a53f8bfe28cee82ae846.js.map
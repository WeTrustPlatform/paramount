(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./src/components/Tabs/Tabs.mdx":function(e,n,t){var a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=u;var o=a(t("./node_modules/@babel/runtime/helpers/extends.js")),s=a(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=(a(t("./node_modules/react/index.js")),t("./node_modules/@mdx-js/react/dist/index.es.js")),d=t("./node_modules/docz/dist/index.esm.js"),r=t("./src/components/index.ts"),l={},m="wrapper";function u(e){var n=e.components,t=(0,s.default)(e,["components"]);return(0,i.mdx)(m,(0,o.default)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"tabs"},"Tabs"),(0,i.mdx)("p",null,"You can use a custom component in place of ",(0,i.mdx)("inlineCode",{parentName:"p"},"Tab")," component, though keep in mind you need to manage ",(0,i.mdx)("inlineCode",{parentName:"p"},"isActive")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"onPress")," by yourself"),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)(d.Playground,{__position:0,__code:"<State initial={{ activeTabIndex: 0 }}>\n  {({ state, setState }) => (\n    <Tabs\n      activeTabIndex={state.activeTabIndex}\n      onChange={index => setState({ activeTabIndex: index })}\n      getStyles={(props, theme) => ({\n        containerStyle: {},\n      })}\n    >\n      {new Array(4).fill(0).map((v, i) => {\n        if (i === 0) {\n          return (\n            <Tab\n              key={0}\n              title=\"Custom\"\n              onPress={() => setState({ activeTabIndex: 0 })}\n              getStyles={() => ({\n                containerStyle: {},\n                buttonStyle: {},\n                textStyle: {},\n                focusColor: '#fafafa',\n              })}\n            />\n          )\n        }\n        return <Tab key={i} title={`Tab ${i + 1}`} />\n      })}\n    </Tabs>\n  )}\n</State>",__scope:{props:this?this.props:t,Playground:d.Playground,Props:d.Props,Icon:r.Icon,State:r.State,Tabs:r.Tabs,Tab:r.Tab},mdxType:"Playground"},(0,i.mdx)(r.State,{initial:{activeTabIndex:0},mdxType:"State"},function(e){var n=e.state,t=e.setState;return(0,i.mdx)(r.Tabs,{activeTabIndex:n.activeTabIndex,onChange:function(e){return t({activeTabIndex:e})},getStyles:function(e,n){return{containerStyle:{}}},mdxType:"Tabs"},new Array(4).fill(0).map(function(e,n){return 0===n?(0,i.mdx)(r.Tab,{key:0,title:"Custom",onPress:function(){return t({activeTabIndex:0})},getStyles:function(){return{containerStyle:{},buttonStyle:{},textStyle:{},focusColor:"#fafafa"}},mdxType:"Tab"}):(0,i.mdx)(r.Tab,{key:n,title:"Tab ".concat(n+1),mdxType:"Tab"})}))})),(0,i.mdx)("h3",{id:"props"},"Props"),(0,i.mdx)(d.Props,{of:r.Tabs,mdxType:"Props"}))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Tabs/Tabs.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=32.b2d7fd6e78b64eb52f9c.js.map
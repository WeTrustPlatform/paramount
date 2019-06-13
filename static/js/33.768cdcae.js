(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/components/Toast/Toast.mdx":function(t,n,e){var o=e("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=c;var s=o(e("./node_modules/@babel/runtime/helpers/extends.js")),i=o(e("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=o(e("./node_modules/react/index.js")),d=e("./node_modules/@mdx-js/react/dist/index.es.js"),a=e("./node_modules/docz/dist/index.esm.js"),l=e("./src/components/index.ts"),p={},u="wrapper";function c(t){var n=t.components,e=(0,i.default)(t,["components"]);return(0,d.mdx)(u,(0,s.default)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"toast"},"Toast"),(0,d.mdx)("p",null,"Composes ",(0,d.mdx)("inlineCode",{parentName:"p"},"Alert"),"."),(0,d.mdx)("h3",{id:"usage"},"Usage"),(0,d.mdx)(a.Playground,{__position:0,__code:"<ToastProvider\n  getStyles={(props, theme) => ({\n    containerStyle: {},\n  })}\n>\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <Button\n        onPress={() => {\n          notify({\n            title: 'Title',\n            description: 'Description',\n            component: null, // A React Component that overrides title and description\n            isCloseable: true,\n            offset: 16,\n            duration: 3000,\n            // ...Alert props e.g. getStyles\n          })\n        }}\n        title=\"Use\"\n      />\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:e,Playground:a.Playground,Props:a.Props,Box:l.Box,Button:l.Button,ToastContext:l.ToastContext,ToastProvider:l.ToastProvider,Toast:l.Toast},mdxType:"Playground"},(0,d.mdx)(l.ToastProvider,{getStyles:function(t,n){return{containerStyle:{}}},mdxType:"ToastProvider"},(0,d.mdx)(l.ToastContext.Consumer,null,function(t){var n=t.notify;return(0,d.mdx)(l.Button,{onPress:function(){n({title:"Title",description:"Description",component:null,isCloseable:!0,offset:16,duration:3e3})},title:"Use",mdxType:"Button"})}))),(0,d.mdx)("h3",{id:"variants"},"Variants"),(0,d.mdx)(a.Playground,{__position:1,__code:"<ToastProvider>\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <>\n        <Button\n          onPress={() =>\n            notify({\n              title: 'Title',\n              description: 'Description',\n              isCloseable: true,\n            })\n          }\n          title=\"Open default toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'success',\n              title: 'Title',\n            })\n          }\n          color=\"primary\"\n          title=\"Open success toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'danger',\n              title: 'Title',\n            })\n          }\n          color=\"danger\"\n          title=\"Open danger toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'warning',\n              title: 'Title',\n            })\n          }\n          color=\"secondary\"\n          title=\"Open warning toast\"\n        />\n      </>\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:e,Playground:a.Playground,Props:a.Props,Box:l.Box,Button:l.Button,ToastContext:l.ToastContext,ToastProvider:l.ToastProvider,Toast:l.Toast},mdxType:"Playground"},(0,d.mdx)(l.ToastProvider,{mdxType:"ToastProvider"},(0,d.mdx)(l.ToastContext.Consumer,null,function(t){var n=t.notify;return(0,d.mdx)(r.default.Fragment,null,(0,d.mdx)(l.Button,{onPress:function(){return n({title:"Title",description:"Description",isCloseable:!0})},title:"Open default toast",mdxType:"Button"}),(0,d.mdx)(l.Button,{onPress:function(){return n({description:"Description",intent:"success",title:"Title"})},color:"primary",title:"Open success toast",mdxType:"Button"}),(0,d.mdx)(l.Button,{onPress:function(){return n({description:"Description",intent:"danger",title:"Title"})},color:"danger",title:"Open danger toast",mdxType:"Button"}),(0,d.mdx)(l.Button,{onPress:function(){return n({description:"Description",intent:"warning",title:"Title"})},color:"secondary",title:"Open warning toast",mdxType:"Button"}))}))),(0,d.mdx)("h3",{id:"props"},"Props"),(0,d.mdx)(a.Props,{of:l.Toast,mdxType:"Props"}))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Toast/Toast.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=33.b2d7fd6e78b64eb52f9c.js.map
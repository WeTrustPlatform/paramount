(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1207:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return m}));n(17),n(6),n(5),n(4),n(7),n(10),n(3);var o=n(142),r=n(1173),a=n(13),s=n(206),i=n(255),c=n(42),u=n(130);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Toast/Toast.mdx"}});var l={_frontmatter:b},d=r.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(d,p({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"toast"},"Toast"),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"Make sure to use ",Object(o.b)("inlineCode",{parentName:"p"},"ThemeProvider")," at the top-level component."),Object(o.b)("pre",null,Object(o.b)("code",p({parentName:"pre"},{className:"language-tsx"}),"<ThemeProvider>{children}</ThemeProvider>\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Paramount exposes a convenience hook ",Object(o.b)("inlineCode",{parentName:"p"},"useToast")," you can use to create toasts from anywhere in the application."),Object(o.b)(a.c,{__position:0,__code:"<ToastProvider>\n  {/*\n    We use `ToastContext.Consumer` here due to limitations in docs\n    Use `const { notify } = useToast()` inside your function component\n   */}\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <Button\n        onPress={() =>\n          notify({\n            title: 'Title',\n            description: 'Description',\n            duration: 5000,\n          })\n        }\n        title=\"Open toast\"\n      />\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:n,DefaultLayout:r.a,Playground:a.c,Props:a.d,ToastContext:s.a,ToastProvider:s.b,Toast:i.a,Box:c.a,Button:u.a},mdxType:"Playground"},Object(o.b)(s.b,{mdxType:"ToastProvider"},Object(o.b)(s.a.Consumer,null,(function(e){var t=e.notify;return Object(o.b)(u.a,{onPress:function(){return t({title:"Title",description:"Description",duration:5e3})},title:"Open toast",mdxType:"Button"})})))),Object(o.b)("h2",{id:"toast-options"},"Toast Options"),Object(o.b)(a.d,{of:i.a,mdxType:"Props"}))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Toast/Toast.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-toast-toast-mdx-b5a38f6a6077810fc4b5.js.map
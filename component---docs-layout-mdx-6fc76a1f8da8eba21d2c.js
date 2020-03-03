(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1179:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return s}));t(17),t(6),t(5),t(4),t(7),t(10),t(3);var a=t(142),o=t(1173);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/Layout.mdx"}});var l={_frontmatter:i},c=o.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(c,r({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"layout"},"Layout"),Object(a.b)("p",null,"Paramount provides building blocks to create responsive layout via components ",Object(a.b)("inlineCode",{parentName:"p"},"Visible"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Row and Column"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Container")," and convenience functions."),Object(a.b)("h2",{id:"components"},"Components"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"/paramount/src-components-visible"}),"Visible")," - Conditionally render children depending on screen size"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"/paramount/src-components-row-and-column"}),"Row and Column (Grid)")," - For doing grid layouts"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"/paramount/src-components-container"}),"Container")," - Keep children at contained width")),Object(a.b)("h2",{id:"hook"},"Hook"),Object(a.b)("p",null,"Paramount exposes a convenience hook ",Object(a.b)("inlineCode",{parentName:"p"},"useLayout")," that you can import to make use of utility functions for layout"),Object(a.b)("h3",{id:"currentscreensize"},"currentScreenSize"),Object(a.b)("p",null,"Retrieves the current screen size"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-ts"}),"const { currentScreenSize } = useLayout();\n")),Object(a.b)("h3",{id:"getresponsivevalue"},"getResponsiveValue"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-ts"}),"const { getResponsiveValue } = useLayout();\n\nconst color = getResponsiveValue({\n  xsmall: 'red',\n  large: 'blue',\n});\nconst number = getResponsiveValue({\n  xsmall: 0,\n  large: 1,\n});\n")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("p",null,"These are all the available theme configuration options, as well as their default values. Pass the config to ",Object(a.b)("inlineCode",{parentName:"p"},"ThemeProvider")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-ts"}),"export const layout: Layout = {\n  breakpoints: {\n    small: 480,\n\n    medium: 768,\n\n    large: 992,\n\n    xlarge: 1200,\n  },\n  containerSizes: {\n    small: 540,\n\n    medium: 720,\n\n    large: 960,\n\n    xlarge: 1200,\n  },\n  gridColumnCount: 12,\n  gutterWidth: 32,\n};\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/Layout.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-layout-mdx-6fc76a1f8da8eba21d2c.js.map
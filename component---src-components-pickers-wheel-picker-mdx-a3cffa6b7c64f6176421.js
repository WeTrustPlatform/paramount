(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1208:function(e,a,l){"use strict";l.r(a),l.d(a,"_frontmatter",(function(){return i})),l.d(a,"default",(function(){return p}));l(16),l(5),l(6),l(4),l(7),l(9),l(185),l(3);var n=l(142),t=l(1180),r=l(14),u=l(459),o=l(42),c=l(141);function b(){return(b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Pickers/WheelPicker.mdx"}});var v={_frontmatter:i},s=t.a;function p(e){var a=e.components,l=function(e,a){if(null==e)return{};var l,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],a.indexOf(l)>=0||(t[l]=e[l]);return t}(e,["components"]);return Object(n.b)(s,b({},v,l,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"wheelpicker-experimental"},"WheelPicker (Experimental)"),Object(n.b)(r.c,{__position:0,__code:"<State initial={{ month: 'March', day: '15', year: '2019' }}>\n  {({ state, setState }) => (\n    <Box flexDirection=\"row\">\n      <WheelPicker\n        value={state.month}\n        data={[\n          { label: 'January', value: 'January' },\n          { label: 'February', value: 'February' },\n          { label: 'March', value: 'March' },\n          { label: 'April', value: 'April' },\n          { label: 'May', value: 'May' },\n          { label: 'June', value: 'June' },\n          { label: 'July', value: 'July' },\n          { label: 'August', value: 'August' },\n          { label: 'September', value: 'September' },\n          { label: 'October', value: 'October' },\n          { label: 'November', value: 'November' },\n          { label: 'December', value: 'December' },\n        ]}\n        onValueChange={value => {\n          console.log(value)\n          setState({ month: value })\n        }}\n      />\n      <WheelPicker\n        value={state.day}\n        data={new Array(31)\n          .fill(0)\n          .map((v, i) => ({ label: `${i + 1}`, value: `${i + 1}` }))}\n        onValueChange={value => {\n          console.log(value)\n          setState({ day: value })\n        }}\n      />\n      <WheelPicker\n        value={state.year}\n        data={new Array(50)\n          .fill(0)\n          .map((v, i) => ({ label: `${2000 + i}`, value: `${2000 + i}` }))}\n        onValueChange={value => {\n          console.log(value)\n          setState({ year: value })\n        }}\n      />\n    </Box>\n  )}\n</State>",__scope:{props:l,DefaultLayout:t.a,Playground:r.c,Props:r.d,WheelPicker:u.a,Box:o.a,State:c.a},mdxType:"Playground"},Object(n.b)(c.a,{initial:{month:"March",day:"15",year:"2019"},mdxType:"State"},(function(e){var a=e.state,l=e.setState;return Object(n.b)(o.a,{flexDirection:"row",mdxType:"Box"},Object(n.b)(u.a,{value:a.month,data:[{label:"January",value:"January"},{label:"February",value:"February"},{label:"March",value:"March"},{label:"April",value:"April"},{label:"May",value:"May"},{label:"June",value:"June"},{label:"July",value:"July"},{label:"August",value:"August"},{label:"September",value:"September"},{label:"October",value:"October"},{label:"November",value:"November"},{label:"December",value:"December"}],onValueChange:function(e){console.log(e),l({month:e})},mdxType:"WheelPicker"}),Object(n.b)(u.a,{value:a.day,data:new Array(31).fill(0).map((function(e,a){return{label:""+(a+1),value:""+(a+1)}})),onValueChange:function(e){console.log(e),l({day:e})},mdxType:"WheelPicker"}),Object(n.b)(u.a,{value:a.year,data:new Array(50).fill(0).map((function(e,a){return{label:""+(2e3+a),value:""+(2e3+a)}})),onValueChange:function(e){console.log(e),l({year:e})},mdxType:"WheelPicker"}))}))),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)(r.d,{of:u.a,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Pickers/WheelPicker.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-pickers-wheel-picker-mdx-a3cffa6b7c64f6176421.js.map
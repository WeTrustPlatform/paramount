(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/components/Avatar/Avatar.mdx":function(e,a,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),r=n(t("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),o=n(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=n(t("./node_modules/@babel/runtime/helpers/inherits.js")),d=n(t("./node_modules/react/index.js")),m=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js"),p=n(t("./src/components/Avatar/Avatar.tsx")),h=function(e){function a(e){var t;return(0,s.default)(this,a),(t=(0,l.default)(this,(0,o.default)(a).call(this,e))).layout=null,t}return(0,u.default)(a,e),(0,r.default)(a,[{key:"render",value:function(){var e=this.props,a=e.components,t=(0,i.default)(e,["components"]);return d.default.createElement(m.MDXTag,{name:"wrapper",components:a},d.default.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"usage"}},"Usage"),d.default.createElement(m.MDXTag,{name:"p",components:a},d.default.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Note")," Accessibility/Interactivity is a responsibility of a wrapping component"),d.default.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"automatic-default-usage"}},"Automatic default usage"),d.default.createElement(c.Playground,{__position:0,__code:'<Avatar name="Bill Gates" />',__scope:{props:this?this.props:t,Avatar:p.default}},d.default.createElement(p.default,{name:"Bill Gates"})),d.default.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"automatic-solid-usage"}},"Automatic solid usage"),d.default.createElement(c.Playground,{__position:1,__code:'<Avatar isSolid name="Eri Reis" />',__scope:{props:this?this.props:t,Avatar:p.default}},d.default.createElement(p.default,{isSolid:!0,name:"Eri Reis"})),d.default.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"using-image-source"}},"Using image source"),d.default.createElement(c.Playground,{__position:2,__code:'<Avatar source="https://picsum.photos/200/200" />',__scope:{props:this?this.props:t,Avatar:p.default}},d.default.createElement(p.default,{source:"https://picsum.photos/200/200"})),d.default.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"avatar-sizes"}},"Avatar sizes"),d.default.createElement(c.Playground,{__position:3,__code:'<Avatar name="Andy Grove" />\n<Avatar name="Bill Gates" size={60} />',__scope:{props:this?this.props:t,Avatar:p.default}},d.default.createElement(p.default,{name:"Andy Grove"}),d.default.createElement(p.default,{name:"Bill Gates",size:60})),d.default.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"props"}},"Props"),d.default.createElement(c.PropsTable,{of:p.default}))}}]),a}(d.default.Component);a.default=h},"./src/components/Avatar/Avatar.tsx":function(e,a,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.Avatar=a.AvatarBase=a.globalGetInitials=void 0;var s=i(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),r=n(t("./node_modules/react/index.js")),l=t("./node_modules/react-native-web/dist/index.js"),o=t("./src/theme/index.ts"),u=t("./src/components/Typography/index.ts"),d=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):a};a.globalGetInitials=d;var m=function(e){var a=e.theme,t=e.source,n=e.size,i=void 0===n?40:n,o=e.name,m=e.isSolid,c=void 0!==m&&m,p=e.hashValue,h=e.getInitials,f=void 0===h?d:h,y=e.color,v=void 0===y?"automatic":y,g=e.forceShowInitials,_=void 0!==g&&g,b=e.sizeLimitOneCharacter,S=void 0===b?20:b,A=e.dangerouslySetInlineStyle,T=!t||!1,V=f(o);i<=S&&(V=V.substring(0,1));var I=a.getAvatarStyles({color:v,hashValue:p,isSolid:c,name:o,size:i,sizeLimitOneCharacter:S}),E=I.boxStyle,q=I.textStyle,w=I.imageStyle;return r.createElement(l.View,{style:(0,s.default)({},E,A&&A.boxStyle)},(T||_)&&r.createElement(u.Text,{dangerouslySetInlineStyle:{textStyle:(0,s.default)({},q,A&&A.textStyle)}},V),!T&&r.createElement(l.Image,{source:{uri:t},style:(0,s.default)({},w,A&&A.imageStyle)}))};a.AvatarBase=m;var c=(0,o.withTheme)(m);a.Avatar=c;var p=c;a.default=p;try{m.displayName="AvatarBase",m.__docgenInfo={description:"",displayName:"AvatarBase",props:{source:{defaultValue:null,description:"The source attribute of the image.\nWhen it's not available, render initials instead.",name:"source",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The size of the avatar.",name:"size",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name used for the initials and title attribute.",name:"name",required:!1,type:{name:"string"}},hashValue:{defaultValue:null,description:"The value used for the hash function.\nThe name is used as the hashValue by default.\nWhen dealing with anonymous users you should use the id instead.",name:"hashValue",required:!1,type:{name:"string"}},isSolid:{defaultValue:null,description:"When true, render a solid avatar.",name:"isSolid",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color used for the avatar.\nWhen the value is `automatic`, use the hash function to determine the color.",name:"color",required:!1,type:{name:'"automatic" | "neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},getInitials:{defaultValue:null,description:"Function to get the initials based on the name.",name:"getInitials",required:!1,type:{name:"GetInitialsType"}},forceShowInitials:{defaultValue:null,description:"When true, force show the initials.\nThis is useful in some cases when using Gravatar and transparent pngs.",name:"forceShowInitials",required:!1,type:{name:"boolean"}},sizeLimitOneCharacter:{defaultValue:null,description:"When the size is smaller than this number, use a single initial for the avatar.",name:"sizeLimitOneCharacter",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Theme provided by ThemeProvider.",name:"theme",required:!0,type:{name:"Theme"}},dangerouslySetInlineStyle:{defaultValue:null,description:"Inline styles for components",name:"dangerouslySetInlineStyle",required:!1,type:{name:"Partial<AvatarStyles>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#AvatarBase"]={docgenInfo:m.__docgenInfo,name:"AvatarBase",path:"src/components/Avatar/Avatar.tsx#AvatarBase"})}catch(h){}try{c.displayName="Avatar",c.__docgenInfo={description:"",displayName:"Avatar",props:{source:{defaultValue:null,description:"The source attribute of the image.\nWhen it's not available, render initials instead.",name:"source",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The size of the avatar.",name:"size",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name used for the initials and title attribute.",name:"name",required:!1,type:{name:"string"}},hashValue:{defaultValue:null,description:"The value used for the hash function.\nThe name is used as the hashValue by default.\nWhen dealing with anonymous users you should use the id instead.",name:"hashValue",required:!1,type:{name:"string"}},isSolid:{defaultValue:null,description:"When true, render a solid avatar.",name:"isSolid",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color used for the avatar.\nWhen the value is `automatic`, use the hash function to determine the color.",name:"color",required:!1,type:{name:'"automatic" | "neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},getInitials:{defaultValue:null,description:"Function to get the initials based on the name.",name:"getInitials",required:!1,type:{name:"GetInitialsType"}},forceShowInitials:{defaultValue:null,description:"When true, force show the initials.\nThis is useful in some cases when using Gravatar and transparent pngs.",name:"forceShowInitials",required:!1,type:{name:"boolean"}},sizeLimitOneCharacter:{defaultValue:null,description:"When the size is smaller than this number, use a single initial for the avatar.",name:"sizeLimitOneCharacter",required:!1,type:{name:"number"}},dangerouslySetInlineStyle:{defaultValue:null,description:"Inline styles for components",name:"dangerouslySetInlineStyle",required:!1,type:{name:"Partial<AvatarStyles>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:c.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(h){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{source:{defaultValue:null,description:"The source attribute of the image.\nWhen it's not available, render initials instead.",name:"source",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The size of the avatar.",name:"size",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name used for the initials and title attribute.",name:"name",required:!1,type:{name:"string"}},hashValue:{defaultValue:null,description:"The value used for the hash function.\nThe name is used as the hashValue by default.\nWhen dealing with anonymous users you should use the id instead.",name:"hashValue",required:!1,type:{name:"string"}},isSolid:{defaultValue:null,description:"When true, render a solid avatar.",name:"isSolid",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color used for the avatar.\nWhen the value is `automatic`, use the hash function to determine the color.",name:"color",required:!1,type:{name:'"automatic" | "neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},getInitials:{defaultValue:null,description:"Function to get the initials based on the name.",name:"getInitials",required:!1,type:{name:"GetInitialsType"}},forceShowInitials:{defaultValue:null,description:"When true, force show the initials.\nThis is useful in some cases when using Gravatar and transparent pngs.",name:"forceShowInitials",required:!1,type:{name:"boolean"}},sizeLimitOneCharacter:{defaultValue:null,description:"When the size is smaller than this number, use a single initial for the avatar.",name:"sizeLimitOneCharacter",required:!1,type:{name:"number"}},dangerouslySetInlineStyle:{defaultValue:null,description:"Inline styles for components",name:"dangerouslySetInlineStyle",required:!1,type:{name:"Partial<AvatarStyles>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Avatar/Avatar.tsx#__class"})}catch(h){}}}]);
//# sourceMappingURL=21.c53227a0609b39f66c03.js.map
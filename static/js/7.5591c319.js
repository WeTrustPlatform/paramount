(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/components/Dialog/Dialog.mdx":function(e,n,o){var t=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=t(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=t(o("./node_modules/@babel/runtime/helpers/createClass.js")),s=t(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),r=t(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=t(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=t(o("./node_modules/react/index.js")),c=o("./node_modules/@mdx-js/tag/dist/index.js"),p=o("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),m=o("./node_modules/docz/dist/index.m.js"),f=o("./src/components/Dialog/index.ts"),h=o("./src/components/Button/index.ts"),g=o("./src/components/Layout/index.ts"),_=o("./src/components/Typography/index.ts"),y=function(e){function n(e){var o;return(0,l.default)(this,n),(o=(0,s.default)(this,(0,r.default)(n).call(this,e))).layout=null,o}return(0,d.default)(n,e),(0,i.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components,o=(0,a.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:n},u.default.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),u.default.createElement(c.MDXTag,{name:"h3",components:n,props:{id:"go"}},"Go"),u.default.createElement(m.Playground,{__position:0,__code:"<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Box>\n      <Dialog isVisible={on} onClose={toggle}>\n        <Box height={1800}>\n          <Text>Put any content in the dialog</Text>\n        </Box>\n      </Dialog>\n      <Button onPress={toggle}>Open dialog</Button>\n    </Box>\n  )}\n</Toggle>",__scope:{props:this?this.props:o,Toggle:p.Toggle,Dialog:f.Dialog,Button:h.Button,Box:g.Box,Text:_.Text}},u.default.createElement(p.Toggle,{initial:!1},function(e){var n=e.on,o=e.toggle;return u.default.createElement(g.Box,null,u.default.createElement(f.Dialog,{isVisible:n,onClose:o},u.default.createElement(g.Box,{height:1800},u.default.createElement(_.Text,null,"Put any content in the dialog"))),u.default.createElement(h.Button,{onPress:o},"Open dialog"))})),u.default.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),u.default.createElement(m.PropsTable,{of:f.Dialog}))}}]),n}(u.default.Component);n.default=y},"./src/components/Dialog/Dialog.tsx":function(e,n,o){var t=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.Dialog=void 0;var l=a(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),s=o("./src/theme/index.ts"),r=t(o("./src/components/Dialog/Modal.tsx")),d=(0,s.withTheme)(function(e){var n=e.children,o=e.footer,t=e.header,a=e.isVisible,s=e.onClose,d=e.theme;if(!a)return null;var u=d.getDialogStyles(),c=u.modalContainerStyle,p=u.overlayStyle,m=u.containerStyle,f=u.bodyStyle;return l.createElement(r.default,{visible:a,transparent:!0},l.createElement(i.View,{style:c},l.createElement(i.View,{style:m},t,l.createElement(i.View,{style:f},n),o),l.createElement(i.TouchableWithoutFeedback,{onPress:s},l.createElement(i.View,{style:p}))))});n.Dialog=d;var u=d;n.default=u;try{d.displayName="Dialog",d.__docgenInfo={description:"",displayName:"Dialog",props:{isVisible:{defaultValue:null,description:"",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc",name:"onClose",required:!1,type:{name:"() => void"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Dialog.tsx#Dialog"]={docgenInfo:d.__docgenInfo,name:"Dialog",path:"src/components/Dialog/Dialog.tsx#Dialog"})}catch(c){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{isVisible:{defaultValue:null,description:"",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc",name:"onClose",required:!1,type:{name:"() => void"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Dialog.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Dialog/Dialog.tsx#__class"})}catch(c){}},"./src/components/Dialog/Modal.tsx":function(e,n,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=o("./node_modules/react-native-web/dist/index.js"),a=t.Modal;n.default=a;try{t.Modal.displayName="Modal",t.Modal.__docgenInfo={description:"",displayName:"Modal",props:{animated:{defaultValue:null,description:"",name:"animated",required:!1,type:{name:"boolean"}},animationType:{defaultValue:null,description:"The `animationType` prop controls how the modal animates.\n\n- `slide` slides in from the bottom\n- `fade` fades into view\n- `none` appears without an animation",name:"animationType",required:!1,type:{name:'"none" | "slide" | "fade"'}},transparent:{defaultValue:null,description:"The `transparent` prop determines whether your modal will fill the entire view.\nSetting this to `true` will render the modal over a transparent background.",name:"transparent",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"The `visible` prop determines whether your modal is visible.",name:"visible",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"The `onRequestClose` prop allows passing a function that will be called once the modal has been dismissed.\n_On the Android platform, this is a required function._",name:"onRequestClose",required:!1,type:{name:"() => void"}},onShow:{defaultValue:null,description:"The `onShow` prop allows passing a function that will be called once the modal has been shown.",name:"onShow",required:!1,type:{name:"(event: NativeSyntheticEvent<any>) => void"}},presentationStyle:{defaultValue:null,description:"The `presentationStyle` determines the style of modal to show",name:"presentationStyle",required:!1,type:{name:'"fullScreen" | "pageSheet" | "formSheet" | "overFullScreen"'}},supportedOrientations:{defaultValue:null,description:"The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations.\nOn iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field.",name:"supportedOrientations",required:!1,type:{name:'("portrait" | "portrait-upside-down" | "landscape" | "landscape-left" | "landscape-right")[]'}},onDismiss:{defaultValue:null,description:"The `onDismiss` prop allows passing a function that will be called once the modal has been dismissed.",name:"onDismiss",required:!1,type:{name:"() => void"}},onOrientationChange:{defaultValue:null,description:"The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed.\nThe orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.",name:"onOrientationChange",required:!1,type:{name:"(event: NativeSyntheticEvent<any>) => void"}},hardwareAccelerated:{defaultValue:null,description:"Controls whether to force hardware acceleration for the underlying window.",name:"hardwareAccelerated",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Modal.tsx#Modal"]={docgenInfo:t.Modal.__docgenInfo,name:"Modal",path:"src/components/Dialog/Modal.tsx#Modal"})}catch(l){}},"./src/components/Dialog/index.ts":function(e,n,o){var t=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Dialog",{enumerable:!0,get:function(){return a.default}});var a=t(o("./src/components/Dialog/Dialog.tsx"));try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{isVisible:{defaultValue:null,description:"",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc",name:"onClose",required:!1,type:{name:"() => void"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/index.ts#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Dialog/index.ts#__class"})}catch(l){}}}]);
//# sourceMappingURL=7.fa7e782125e5bcba0a0c.js.map
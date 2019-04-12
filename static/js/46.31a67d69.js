(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"./src/components/Positioner/Positioner.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("./node_modules/@babel/runtime/helpers/extends.js")),l=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),r=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),g=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),c=o(n("./node_modules/react/index.js")),d=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),f=o(n("./src/components/Positioner/Positioner.tsx")),m=o(n("./src/components/Positioner/PositionerController.tsx")),h=n("./src/components/Button/index.ts"),P=n("./src/components/Layout/index.ts"),T=n("./src/components/Helpers/index.ts"),y=n("./src/components/Typography/index.ts"),x=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),B={},b=function(e){function t(e){var n;return(0,s.default)(this,t),(n=(0,r.default)(this,(0,u.default)(t).call(this,e))).layout=function(e){var t=e.children;return document.body.style.height="initial",document.body.style.position="relative",c.default.createElement("div",null,t)},n}return(0,g.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,l.default)(e,["components"]);return c.default.createElement(d.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:(0,i.default)({},B,n),components:t},c.default.createElement(d.MDXTag,{name:"h1",components:t,props:{id:"positioner"}},"Positioner"),c.default.createElement(d.MDXTag,{name:"p",components:t},"A base component for manipulating the position of the element on the screen. Used by ",c.default.createElement(d.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Popover")),c.default.createElement(d.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),c.default.createElement(p.Playground,{__position:0,__code:'<Positioner\n  isVisible={false}\n  onClose={() => console.log(\'Close\')}\n  isDynamicContent={false}\n  position="top-right"\n  content={props => null}\n  isFullWidth={false}\n  parentHeight={1000}\n  targetMeasurements={{}}\n  getStyles={(props, theme) => ({\n    positionerStyle: {},\n    modalContainerStyle: {},\n  })}\n>\n  <Button title="Usage" />\n</Positioner>',__scope:{props:this?this.props:n,Positioner:f.default,PositionerController:m.default,Button:h.Button,Box:P.Box,Spacing:P.Spacing,RefMeasure:T.RefMeasure,Text:y.Text,Toggle:x.Toggle}},c.default.createElement(f.default,{isVisible:!1,onClose:function(){return console.log("Close")},isDynamicContent:!1,position:"top-right",content:function(e){return null},isFullWidth:!1,parentHeight:1e3,targetMeasurements:{},getStyles:function(e,t){return{positionerStyle:{},modalContainerStyle:{}}}},c.default.createElement(h.Button,{title:"Usage"}))),c.default.createElement(d.MDXTag,{name:"h3",components:t,props:{id:"variants"}},"Variants"),c.default.createElement(p.Playground,{__position:1,__code:'<Spacing paddingBottom={8} zIndex={1}>\n  <Box flexDirection="row" justifyContent="space-between">\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          onClose={toggle}\n          position="top-right"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top right" />\n        </Positioner>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          onClose={toggle}\n          position="top"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top" />\n        </Positioner>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          onClose={toggle}\n          position="top-left"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top left" />\n        </Positioner>\n      )}\n    </Toggle>\n  </Box>\n</Spacing>\n<Spacing paddingVertical={8} zIndex={2}>\n  <Box flexDirection="row" justifyContent="space-between">\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          onClose={toggle}\n          position="left"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Left" />\n        </Positioner>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          onClose={toggle}\n          position="right"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Right" />\n        </Positioner>\n      )}\n    </Toggle>\n  </Box>\n</Spacing>\n<Spacing paddingTop={8} zIndex={3}>\n  <Box flexDirection="row" justifyContent="space-between">\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          onClose={toggle}\n          position="bottom-right"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Bottom right" />\n        </Positioner>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          onClose={toggle}\n          position="bottom"\n          parentHeight={2480}\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>This has parent height set to 2480</Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Bottom" />\n        </Positioner>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          onClose={toggle}\n          position="bottom-left"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Bottom left" />\n        </Positioner>\n      )}\n    </Toggle>\n  </Box>\n</Spacing>',__scope:{props:this?this.props:n,Positioner:f.default,PositionerController:m.default,Button:h.Button,Box:P.Box,Spacing:P.Spacing,RefMeasure:T.RefMeasure,Text:y.Text,Toggle:x.Toggle}},c.default.createElement(P.Spacing,{paddingBottom:8,zIndex:1},c.default.createElement(P.Box,{flexDirection:"row",justifyContent:"space-between"},c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,onClose:n,position:"top-right",content:function(){return c.default.createElement(P.Box,{width:200,height:200},c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Top right"}))}),c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,onClose:n,position:"top",content:function(){return c.default.createElement(P.Box,{width:200,height:200},c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Top"}))}),c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,onClose:n,position:"top-left",content:function(){return c.default.createElement(P.Box,{width:200,height:200},c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Top left"}))}))),c.default.createElement(P.Spacing,{paddingVertical:8,zIndex:2},c.default.createElement(P.Box,{flexDirection:"row",justifyContent:"space-between"},c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,onClose:n,position:"left",content:function(){return c.default.createElement(P.Box,{width:200,height:200},c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Left"}))}),c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,onClose:n,position:"right",content:function(){return c.default.createElement(P.Box,{width:200,height:200},c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Right"}))}))),c.default.createElement(P.Spacing,{paddingTop:8,zIndex:3},c.default.createElement(P.Box,{flexDirection:"row",justifyContent:"space-between"},c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,onClose:n,position:"bottom-right",content:function(){return c.default.createElement(P.Box,{width:200,height:200},c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Bottom right"}))}),c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,onClose:n,position:"bottom",parentHeight:2480,content:function(){return c.default.createElement(P.Box,{width:200,height:200},c.default.createElement(y.Text,null,"This has parent height set to 2480"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Bottom"}))}),c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,onClose:n,position:"bottom-left",content:function(){return c.default.createElement(P.Box,{width:200,height:200},c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Bottom left"}))})))),c.default.createElement(d.MDXTag,{name:"h3",components:t,props:{id:"dynamically-sized-content"}},"Dynamically sized content"),c.default.createElement(d.MDXTag,{name:"p",components:t},"Add ",c.default.createElement(d.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isDynamicContent")," to props to give time for Positioner to calculate its layout of dynamic content prior to displaying it"),c.default.createElement(p.Playground,{__position:2,__code:'<Spacing paddingBottom={8} zIndex={1}>\n  <Box flexDirection="row" justifyContent="space-between">\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          isDynamicContent\n          onClose={toggle}\n          position="top-right"\n          content={() => (\n            <Box>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top right" />\n        </Positioner>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          isDynamicContent\n          onClose={toggle}\n          position="top"\n          content={() => (\n            <Box>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top" />\n        </Positioner>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          isDynamicContent\n          onClose={toggle}\n          position="top-left"\n          content={() => (\n            <Box>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top left" />\n        </Positioner>\n      )}\n    </Toggle>\n  </Box>\n</Spacing>\n<Spacing paddingVertical={8} zIndex={2}>\n  <Box flexDirection="row" justifyContent="space-between">\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          isDynamicContent\n          onClose={toggle}\n          position="left"\n          content={() => (\n            <Box>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Left" />\n        </Positioner>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          isDynamicContent\n          onClose={toggle}\n          position="right"\n          content={() => (\n            <Box>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Right" />\n        </Positioner>\n      )}\n    </Toggle>\n  </Box>\n</Spacing>\n<Spacing paddingTop={8} zIndex={3}>\n  <Box flexDirection="row" justifyContent="space-between">\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          isDynamicContent\n          onClose={toggle}\n          position="bottom-right"\n          content={() => (\n            <Box>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Bottom right" />\n        </Positioner>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          isDynamicContent\n          onClose={toggle}\n          position="bottom"\n          parentHeight={2480}\n          content={() => (\n            <Box>\n              <Text>This has parent height set to 2480</Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Bottom" />\n        </Positioner>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          isDynamicContent\n          onClose={toggle}\n          position="bottom-left"\n          content={() => (\n            <Box>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Bottom left" />\n        </Positioner>\n      )}\n    </Toggle>\n  </Box>\n</Spacing>',__scope:{props:this?this.props:n,Positioner:f.default,PositionerController:m.default,Button:h.Button,Box:P.Box,Spacing:P.Spacing,RefMeasure:T.RefMeasure,Text:y.Text,Toggle:x.Toggle}},c.default.createElement(P.Spacing,{paddingBottom:8,zIndex:1},c.default.createElement(P.Box,{flexDirection:"row",justifyContent:"space-between"},c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,isDynamicContent:!0,onClose:n,position:"top-right",content:function(){return c.default.createElement(P.Box,null,c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Top right"}))}),c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,isDynamicContent:!0,onClose:n,position:"top",content:function(){return c.default.createElement(P.Box,null,c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Top"}))}),c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,isDynamicContent:!0,onClose:n,position:"top-left",content:function(){return c.default.createElement(P.Box,null,c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Top left"}))}))),c.default.createElement(P.Spacing,{paddingVertical:8,zIndex:2},c.default.createElement(P.Box,{flexDirection:"row",justifyContent:"space-between"},c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,isDynamicContent:!0,onClose:n,position:"left",content:function(){return c.default.createElement(P.Box,null,c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Left"}))}),c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,isDynamicContent:!0,onClose:n,position:"right",content:function(){return c.default.createElement(P.Box,null,c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Right"}))}))),c.default.createElement(P.Spacing,{paddingTop:8,zIndex:3},c.default.createElement(P.Box,{flexDirection:"row",justifyContent:"space-between"},c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,isDynamicContent:!0,onClose:n,position:"bottom-right",content:function(){return c.default.createElement(P.Box,null,c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Bottom right"}))}),c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,isDynamicContent:!0,onClose:n,position:"bottom",parentHeight:2480,content:function(){return c.default.createElement(P.Box,null,c.default.createElement(y.Text,null,"This has parent height set to 2480"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Bottom"}))}),c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,isDynamicContent:!0,onClose:n,position:"bottom-left",content:function(){return c.default.createElement(P.Box,null,c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,isInline:!0,title:"Bottom left"}))})))),c.default.createElement(d.MDXTag,{name:"h3",components:t,props:{id:"positioner-with-positionercontroller"}},"Positioner with PositionerController"),c.default.createElement(d.MDXTag,{name:"p",components:t},"For more advanced usage, you can use ",c.default.createElement(d.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"PositionerController"),"."),c.default.createElement(d.MDXTag,{name:"ul",components:t},c.default.createElement(d.MDXTag,{name:"li",components:t,parentName:"ul"},"Adds convenient methods for opening/closing Positioner"),c.default.createElement(d.MDXTag,{name:"li",components:t,parentName:"ul"},"You must use this for compatibility in React-Native. (It gets correct targetMeasurements on open)"),c.default.createElement(d.MDXTag,{name:"li",components:t,parentName:"ul"},"You do want to separate ",c.default.createElement(d.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Positioner")," and the anchor")),c.default.createElement(p.Playground,{__position:3,__code:'<Spacing paddingVertical={10}>\n  <PositionerController>\n    {({\n      openPositioner,\n      closePositioner,\n      isPositionerVisible,\n      setTarget,\n      onTargetLayout,\n      targetMeasurements,\n    }) => {\n      return (\n        <>\n          <Positioner\n            targetMeasurements={targetMeasurements}\n            isVisible={isPositionerVisible}\n            onClose={closePositioner}\n            position="top-right"\n            content={() => (\n              <Box>\n                <Text>\n                  Content that can be anything. By default it has no styling\n                  at all. You can use `Popover` that comes with predefined\n                  styles. Positioner is used as a base for `Popovers`,\n                  `Tooltips`, `DropdownMenus`\n                </Text>\n              </Box>\n            )}\n          />\n          <Button\n            onLayout={onTargetLayout}\n            ref={setTarget}\n            onPress={openPositioner}\n            isInline\n            title="Some Button"\n          />\n        </>\n      )\n    }}\n  </PositionerController>\n</Spacing>',__scope:{props:this?this.props:n,Positioner:f.default,PositionerController:m.default,Button:h.Button,Box:P.Box,Spacing:P.Spacing,RefMeasure:T.RefMeasure,Text:y.Text,Toggle:x.Toggle}},c.default.createElement(P.Spacing,{paddingVertical:10},c.default.createElement(m.default,null,function(e){var t=e.openPositioner,n=e.closePositioner,o=e.isPositionerVisible,i=e.setTarget,l=e.onTargetLayout,s=e.targetMeasurements;return c.default.createElement(c.default.Fragment,null,c.default.createElement(f.default,{targetMeasurements:s,isVisible:o,onClose:n,position:"top-right",content:function(){return c.default.createElement(P.Box,null,c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}}),c.default.createElement(h.Button,{onLayout:l,ref:i,onPress:t,isInline:!0,title:"Some Button"}))}))),c.default.createElement(d.MDXTag,{name:"h3",components:t,props:{id:"positioner-with-full-width"}},"Positioner with full width"),c.default.createElement(d.MDXTag,{name:"p",components:t},"On Mobile sometimes we want the content to stretch full width of the window. There is the prop ",c.default.createElement(d.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isFullWidth")," for that"),c.default.createElement(p.Playground,{__position:4,__code:'<Spacing flexDirection="row">\n  <Spacing flex={1}>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          isFullWidth\n          onClose={toggle}\n          position="top-left"\n          content={() => (\n            <Box>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} title="Bottom" />\n        </Positioner>\n      )}\n    </Toggle>\n  </Spacing>\n  <Spacing flex={1}>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Positioner\n          isVisible={on}\n          isFullWidth\n          onClose={toggle}\n          position="bottom-right"\n          content={() => (\n            <Box>\n              <Text>\n                Content that can be anything. By default it has no styling at\n                all. You can use `Popover` that comes with predefined styles.\n                Positioner is used as a base for `Popovers`, `Tooltips`,\n                `DropdownMenus`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} title="Bottom" />\n        </Positioner>\n      )}\n    </Toggle>\n  </Spacing>\n</Spacing>',__scope:{props:this?this.props:n,Positioner:f.default,PositionerController:m.default,Button:h.Button,Box:P.Box,Spacing:P.Spacing,RefMeasure:T.RefMeasure,Text:y.Text,Toggle:x.Toggle}},c.default.createElement(P.Spacing,{flexDirection:"row"},c.default.createElement(P.Spacing,{flex:1},c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,isFullWidth:!0,onClose:n,position:"top-left",content:function(){return c.default.createElement(P.Box,null,c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,title:"Bottom"}))})),c.default.createElement(P.Spacing,{flex:1},c.default.createElement(x.Toggle,null,function(e){var t=e.on,n=e.toggle;return c.default.createElement(f.default,{isVisible:t,isFullWidth:!0,onClose:n,position:"bottom-right",content:function(){return c.default.createElement(P.Box,null,c.default.createElement(y.Text,null,"Content that can be anything. By default it has no styling at all. You can use `Popover` that comes with predefined styles. Positioner is used as a base for `Popovers`, `Tooltips`, `DropdownMenus`"))}},c.default.createElement(h.Button,{onPress:n,title:"Bottom"}))})))),c.default.createElement(d.MDXTag,{name:"h3",components:t,props:{id:"props"}},"Props"),c.default.createElement(p.PropsTable,{of:f.default}))}}]),t}(c.default.Component);t.default=b}}]);
//# sourceMappingURL=46.586c54bb9e5eb64e8829.js.map
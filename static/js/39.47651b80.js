(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"./docs/Contributing.mdx":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return c});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i="/home/travis/build/WeTrustPlatform/paramount/docs/Contributing.mdx",b={},l="wrapper";function c(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(l,Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout",__source:{fileName:i,lineNumber:20}}),Object(o.b)("h1",Object(n.a)({id:"contributing"},{__source:{fileName:i,lineNumber:21}}),"Contributing"),Object(o.b)("h2",Object(n.a)({id:"pull-requests"},{__source:{fileName:i,lineNumber:24}}),"Pull requests"),Object(o.b)("p",{__source:{fileName:i,lineNumber:27}},"Follow this process if you'd like your work considered for inclusion in the project:"),Object(o.b)("ol",{__source:{fileName:i,lineNumber:28}},Object(o.b)("li",{parentName:"ol",__source:{fileName:i,lineNumber:29}},Object(o.b)("p",{parentName:"li",__source:{fileName:i,lineNumber:30}},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://help.github.com/fork-a-repo/"},{__source:{fileName:i,lineNumber:30}}),"Fork")," the project, clone your fork, and configure the remotes:"),Object(o.b)("pre",{parentName:"li",__source:{fileName:i,lineNumber:33}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"},{__source:{fileName:i,lineNumber:33}}),"git clone https://github.com/<your-username>/paramount\ncd paramount\ngit remote add upstream https://github.com/WeTrustPlatform/paramount\n"))),Object(o.b)("li",{parentName:"ol",__source:{fileName:i,lineNumber:40}},Object(o.b)("p",{parentName:"li",__source:{fileName:i,lineNumber:41}},"If you cloned a while ago, get the latest changes from upstream:"),Object(o.b)("pre",{parentName:"li",__source:{fileName:i,lineNumber:42}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"},{__source:{fileName:i,lineNumber:42}}),"git checkout master\ngit pull upstream master\n"))),Object(o.b)("li",{parentName:"ol",__source:{fileName:i,lineNumber:48}},Object(o.b)("p",{parentName:"li",__source:{fileName:i,lineNumber:49}},"Install/update dependencies:"),Object(o.b)("pre",{parentName:"li",__source:{fileName:i,lineNumber:50}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"},{__source:{fileName:i,lineNumber:50}}),"yarn install\n"))),Object(o.b)("li",{parentName:"ol",__source:{fileName:i,lineNumber:55}},Object(o.b)("p",{parentName:"li",__source:{fileName:i,lineNumber:56}},"Create a new topic branch (off the ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:56}},"master")," branch) to\ncontain your feature, change, or fix:"),Object(o.b)("pre",{parentName:"li",__source:{fileName:i,lineNumber:58}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"},{__source:{fileName:i,lineNumber:58}}),"git checkout -b <topic-branch-name>\n"))),Object(o.b)("li",{parentName:"ol",__source:{fileName:i,lineNumber:63}},Object(o.b)("p",{parentName:"li",__source:{fileName:i,lineNumber:64}},"Locally merge (or rebase) the upstream development branch into your topic branch:"),Object(o.b)("pre",{parentName:"li",__source:{fileName:i,lineNumber:65}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"},{__source:{fileName:i,lineNumber:65}}),"git pull [--rebase] upstream master\n"))),Object(o.b)("li",{parentName:"ol",__source:{fileName:i,lineNumber:70}},Object(o.b)("p",{parentName:"li",__source:{fileName:i,lineNumber:71}},"Push your topic branch up to your fork:"),Object(o.b)("pre",{parentName:"li",__source:{fileName:i,lineNumber:72}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"},{__source:{fileName:i,lineNumber:72}}),"git push origin <topic-branch-name>\n"))),Object(o.b)("li",{parentName:"ol",__source:{fileName:i,lineNumber:77}},Object(o.b)("p",{parentName:"li",__source:{fileName:i,lineNumber:78}},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/using-pull-requests/"},{__source:{fileName:i,lineNumber:78}}),"Open a Pull Request"),"\nwith a clear title and description. If screenshot can be included, please attach one."))),Object(o.b)("h2",Object(n.a)({id:"development-for-react-native"},{__source:{fileName:i,lineNumber:84}}),"Development for React Native"),Object(o.b)("p",{__source:{fileName:i,lineNumber:87}},"The development of components on native is done by levaraging ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://expo.io/"},{__source:{fileName:i,lineNumber:87}}),"Expo")),Object(o.b)("pre",{__source:{fileName:i,lineNumber:90}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"},{__source:{fileName:i,lineNumber:90}}),"cd <root>\nyarn develop:expo\n")),Object(o.b)("h2",Object(n.a)({id:"development-for-react-web"},{__source:{fileName:i,lineNumber:95}}),"Development for React Web"),Object(o.b)("p",{__source:{fileName:i,lineNumber:98}},"The development of components on web happen on the documentation site"),Object(o.b)("pre",{__source:{fileName:i,lineNumber:99}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"},{__source:{fileName:i,lineNumber:99}}),"cd <root>\nyarn develop:docs\n")),Object(o.b)("p",{__source:{fileName:i,lineNumber:104}},"The development/docs will then be available at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"},{__source:{fileName:i,lineNumber:104}}),"http://localhost:3000"),"."),Object(o.b)("p",{__source:{fileName:i,lineNumber:107}},"The site is created based on ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:107}},"*.mdx")," files (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mdx-js/mdx"},{__source:{fileName:i,lineNumber:107}}),"see MDX"),") throughout the codebase which provides:"),Object(o.b)("p",{__source:{fileName:i,lineNumber:110}},Object(o.b)("strong",{parentName:"p",__source:{fileName:i,lineNumber:110}},"Component's playground"),". Test out usage of the components and their features"),Object(o.b)("pre",{__source:{fileName:i,lineNumber:111}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{},{__source:{fileName:i,lineNumber:111}}),'<Playground>\n  <Button appearance="minimal" color="default" title="Default" />\n  <Button isDisabled color="primary" title="Disabled" />\n</Playground>\n')),Object(o.b)("p",{__source:{fileName:i,lineNumber:116}},Object(o.b)("strong",{parentName:"p",__source:{fileName:i,lineNumber:116}},"Documentation"),". Edit markdown for documentation of component features"),Object(o.b)("pre",{__source:{fileName:i,lineNumber:117}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{},{__source:{fileName:i,lineNumber:117}}),"## Section of component documentation\n\nYou can just write documentation right next to the playground\n\n<Playground>\n ...\n</Playground>\n")),Object(o.b)("p",{__source:{fileName:i,lineNumber:125}},Object(o.b)("strong",{parentName:"p",__source:{fileName:i,lineNumber:125}},"Tests"),". Snapshots of components are taken directly from ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:125}},"<Playground />")," for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/snapshot-testing"},{__source:{fileName:i,lineNumber:125}}),"snapshot testing")," for UI tests"),Object(o.b)("h2",Object(n.a)({id:"making-changes"},{__source:{fileName:i,lineNumber:128}}),"Making changes"),Object(o.b)("p",{__source:{fileName:i,lineNumber:131}},"There are two files required to each component. Let's say for ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:131}},"TextInput")),Object(o.b)("ol",{__source:{fileName:i,lineNumber:132}},Object(o.b)("li",{parentName:"ol",__source:{fileName:i,lineNumber:133}},Object(o.b)("inlineCode",{parentName:"li",__source:{fileName:i,lineNumber:133}},"TextInput.tsx")," - The actual React Component"),Object(o.b)("li",{parentName:"ol",__source:{fileName:i,lineNumber:134}},Object(o.b)("inlineCode",{parentName:"li",__source:{fileName:i,lineNumber:134}},"TextInput.styles.ts")," - The React Component styling logic")),Object(o.b)("h2",Object(n.a)({id:"running-tests"},{__source:{fileName:i,lineNumber:136}}),"Running Tests"),Object(o.b)("p",{__source:{fileName:i,lineNumber:139}},"You can run unit tests with like so:"),Object(o.b)("pre",{__source:{fileName:i,lineNumber:140}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"},{__source:{fileName:i,lineNumber:140}}),"yarn test\n")),Object(o.b)("p",{__source:{fileName:i,lineNumber:144}},"If you are confident in your changes, update snapshots"),Object(o.b)("pre",{__source:{fileName:i,lineNumber:145}},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"},{__source:{fileName:i,lineNumber:145}}),"  yarn test -u\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/Contributing.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=39.8f268ae8d65d7c0f3f9a.js.map
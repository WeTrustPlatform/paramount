(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/components/Avatar/Avatar.styles.ts":function(e,t,a){var n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getAvatarStyles=t.hashCode=t.getAvatarVariables=void 0;var r=n(a("./node_modules/@babel/runtime/helpers/objectSpread.js")),i=function(e){return{box:{alignItems:"center",borderRadius:9999,display:"flex",justifyContent:"center",overflow:"hidden",position:"relative"},image:{height:"100%",width:"100%"},text:{},fills:e.fills}};t.getAvatarVariables=i;var s=function(e){var t=String(e),a=0;if(0===t.trim().length)return a;for(var n=0;n<t.length;n++)a=(a<<5)-a+t.charCodeAt(n),a&=a;return Math.abs(a)};t.hashCode=s;var l=function(e,t){var a=t.isSolid,n=t.color,r=t.hashValue,i=e[a?"solid":"subtle"];if("automatic"===n){var s=Object.keys(i);return i[s[r%s.length]]}return i[n]};t.getAvatarStyles=function(e,t){var a,n=e.name,o=e.color,u=e.hashValue,d=e.isSolid,c=e.size,h=void 0===c?24:c,p=e.sizeLimitOneCharacter,m=void 0===p?20:p,g=i(t),f=g.fills;if("automatic"===o){var b=s(u||n);a=l(g.fills,{color:o,hashValue:b,isSolid:d})}else a=l(f,{color:o,isSolid:d,hashValue:0});var y=function(e,t){return e<=t?Math.ceil(e/2.2):Math.ceil(e/2.6)}(h,m);return{boxStyle:(0,r.default)({},g.box,{backgroundColor:a.backgroundColor,height:h,width:h}),textStyle:(0,r.default)({},g.text,{color:a.color,fontSize:y,lineHeight:y}),imageStyle:g.image}};try{i.displayName="getAvatarVariables",i.__docgenInfo={description:"",displayName:"getAvatarVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.styles.ts#getAvatarVariables"]={docgenInfo:i.__docgenInfo,name:"getAvatarVariables",path:"src/components/Avatar/Avatar.styles.ts#getAvatarVariables"})}catch(o){}try{s.displayName="hashCode",s.__docgenInfo={description:"",displayName:"hashCode",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!0,type:{name:"() => string"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:"Returns a string that contains the concatenation of two or more strings.\n@param strings The strings to append to the end of the string.",name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }"}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string an object that supports being matched against, and returns an array containing the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.\n@param matcher An object that supports being matched against.",name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray; (matcher: { [Symbol.match](string: string): RegExpMatchArray; }): RegExpMatchArray; }"}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nReplaces text in a string, using a regular expression or search string.\nReplaces text in a string, using an object that supports replacement within a string.\nReplaces text in a string, using an object that supports replacement within a string.\n@param searchValue A string to search for.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.\n@param searchValue A object can search for and replace matches within a string.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A object can search for and replace matches within a string.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substri..."}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\nFinds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.\n@param searcher An object which supports searching within a string.",name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\nIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\nSplit a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.\n@param splitter An object that can split a string.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number): string[]; (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]; }"}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"() => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"() => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!0,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\nthe String resulting from converting this object to a String.\nIf there is no element at that position, the result is undefined.\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",name:"codePointAt",required:!0,type:{name:"(pos: number) => number"}},includes:{defaultValue:null,description:"Returns true if searchString appears as a substring of the result of converting this\nobject to a String, at one or more positions that are\ngreater than or equal to position; otherwise, returns false.\n@param searchString search string\n@param position If position is undefined, 0 is assumed, so as to search all of the String.",name:"includes",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},endsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nendPosition \u2013 length(this). Otherwise returns false.",name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number) => boolean"}},normalize:{defaultValue:null,description:'Returns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\nReturns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"',name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string): string; }'}},repeat:{defaultValue:null,description:"Returns a String value that is made from count copies appended together. If count is 0,\nthe empty string is returned.\n@param count number of copies to append",name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nposition. Otherwise returns false.",name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},anchor:{defaultValue:null,description:"Returns an <a> HTML anchor element and sets the name attribute to the text value\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a <big> HTML element",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a <blink> HTML element",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a <b> HTML element",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a <tt> HTML element",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a <font> HTML element and sets the color attribute value",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a <font> HTML element and sets the size attribute value\nReturns a <font> HTML element and sets the size attribute value",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an <i> HTML element",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an <a> HTML element and sets the href attribute value",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a <small> HTML element",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a <strike> HTML element",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a <sub> HTML element",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a <sup> HTML element",name:"sup",required:!0,type:{name:"() => string"}},"__@iterator":{defaultValue:null,description:"Iterator",name:"__@iterator",required:!0,type:{name:"() => IterableIterator<string>"}},padStart:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the start (left) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},padEnd:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the end (right) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},trimLeft:{defaultValue:null,description:"Removes whitespace from the left end of a string.",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes whitespace from the right end of a string.",name:"trimRight",required:!0,type:{name:"() => string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.styles.ts#hashCode"]={docgenInfo:s.__docgenInfo,name:"hashCode",path:"src/components/Avatar/Avatar.styles.ts#hashCode"})}catch(o){}},"./src/components/Avatar/Avatar.tsx":function(e,t,a){var n=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Avatar=t.AvatarBase=t.globalGetInitials=void 0;var r=n(a("./node_modules/react/index.js")),i=a("./node_modules/react-native-web/dist/index.js"),s=a("./src/theme/index.ts"),l=a("./src/utils/mergeStyles.ts"),o=a("./src/components/Typography/index.ts"),u=a("./src/components/Avatar/Avatar.styles.ts"),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):t};t.globalGetInitials=d;var c=function(e){var t=e.theme,a=e.source,n=e.size,s=void 0===n?48:n,c=e.name,h=e.isSolid,p=void 0!==h&&h,m=e.hashValue,g=e.getInitials,f=void 0===g?d:g,b=e.color,y=void 0===b?"automatic":b,v=e.forceShowInitials,S=void 0!==v&&v,V=e.sizeLimitOneCharacter,A=void 0===V?20:V,T=e.getStyles,q=e.testID,R=!a||!1,x=f(c);s<=A&&(x=x.substring(0,1));var C=(0,l.mergeStyles)(u.getAvatarStyles,T)({color:y,hashValue:m,isSolid:p,name:c,size:s,sizeLimitOneCharacter:A},t),I=C.boxStyle,w=C.textStyle,_=C.imageStyle;return r.createElement(i.View,{style:I,testID:q},(R||S)&&r.createElement(o.Text,{getStyles:function(){return{textStyle:w}}},x),!R&&!!a&&r.createElement(i.Image,{source:a,style:_}))};t.AvatarBase=c;var h=(0,s.withTheme)(c);t.Avatar=h;var p=h;t.default=p;try{c.displayName="AvatarBase",c.__docgenInfo={description:"",displayName:"AvatarBase",props:{source:{defaultValue:null,description:"The source attribute of the image.\nWhen it's not available, render initials instead.",name:"source",required:!1,type:{name:"ImageSourcePropType"}},size:{defaultValue:null,description:"The size of the avatar.",name:"size",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name used for the initials and title attribute.",name:"name",required:!1,type:{name:"string"}},hashValue:{defaultValue:null,description:"The value used for the hash function.\nThe name is used as the hashValue by default.\nWhen dealing with anonymous users you should use the id instead.",name:"hashValue",required:!1,type:{name:"string"}},isSolid:{defaultValue:null,description:"When true, render a solid avatar.",name:"isSolid",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color used for the avatar.\nWhen the value is `automatic`, use the hash function to determine the color.",name:"color",required:!1,type:{name:'"automatic" | "neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},getInitials:{defaultValue:null,description:"Function to get the initials based on the name.",name:"getInitials",required:!1,type:{name:"GetInitialsType"}},forceShowInitials:{defaultValue:null,description:"When true, force show the initials.\nThis is useful in some cases when using Gravatar and transparent pngs.",name:"forceShowInitials",required:!1,type:{name:"boolean"}},sizeLimitOneCharacter:{defaultValue:null,description:"When the size is smaller than this number, use a single initial for the avatar.",name:"sizeLimitOneCharacter",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Theme provided by ThemeProvider.",name:"theme",required:!0,type:{name:"Theme"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetAvatarStyles, DeepPartial<AvatarStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#AvatarBase"]={docgenInfo:c.__docgenInfo,name:"AvatarBase",path:"src/components/Avatar/Avatar.tsx#AvatarBase"})}catch(m){}try{h.displayName="Avatar",h.__docgenInfo={description:"",displayName:"Avatar",props:{source:{defaultValue:null,description:"The source attribute of the image.\nWhen it's not available, render initials instead.",name:"source",required:!1,type:{name:"ImageSourcePropType"}},size:{defaultValue:null,description:"The size of the avatar.",name:"size",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name used for the initials and title attribute.",name:"name",required:!1,type:{name:"string"}},hashValue:{defaultValue:null,description:"The value used for the hash function.\nThe name is used as the hashValue by default.\nWhen dealing with anonymous users you should use the id instead.",name:"hashValue",required:!1,type:{name:"string"}},isSolid:{defaultValue:null,description:"When true, render a solid avatar.",name:"isSolid",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color used for the avatar.\nWhen the value is `automatic`, use the hash function to determine the color.",name:"color",required:!1,type:{name:'"automatic" | "neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},getInitials:{defaultValue:null,description:"Function to get the initials based on the name.",name:"getInitials",required:!1,type:{name:"GetInitialsType"}},forceShowInitials:{defaultValue:null,description:"When true, force show the initials.\nThis is useful in some cases when using Gravatar and transparent pngs.",name:"forceShowInitials",required:!1,type:{name:"boolean"}},sizeLimitOneCharacter:{defaultValue:null,description:"When the size is smaller than this number, use a single initial for the avatar.",name:"sizeLimitOneCharacter",required:!1,type:{name:"number"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetAvatarStyles, DeepPartial<AvatarStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:h.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(m){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{source:{defaultValue:null,description:"The source attribute of the image.\nWhen it's not available, render initials instead.",name:"source",required:!1,type:{name:"ImageSourcePropType"}},size:{defaultValue:null,description:"The size of the avatar.",name:"size",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name used for the initials and title attribute.",name:"name",required:!1,type:{name:"string"}},hashValue:{defaultValue:null,description:"The value used for the hash function.\nThe name is used as the hashValue by default.\nWhen dealing with anonymous users you should use the id instead.",name:"hashValue",required:!1,type:{name:"string"}},isSolid:{defaultValue:null,description:"When true, render a solid avatar.",name:"isSolid",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color used for the avatar.\nWhen the value is `automatic`, use the hash function to determine the color.",name:"color",required:!1,type:{name:'"automatic" | "neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},getInitials:{defaultValue:null,description:"Function to get the initials based on the name.",name:"getInitials",required:!1,type:{name:"GetInitialsType"}},forceShowInitials:{defaultValue:null,description:"When true, force show the initials.\nThis is useful in some cases when using Gravatar and transparent pngs.",name:"forceShowInitials",required:!1,type:{name:"boolean"}},sizeLimitOneCharacter:{defaultValue:null,description:"When the size is smaller than this number, use a single initial for the avatar.",name:"sizeLimitOneCharacter",required:!1,type:{name:"number"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetAvatarStyles, DeepPartial<AvatarStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Avatar/Avatar.tsx#__class"})}catch(m){}}}]);
//# sourceMappingURL=4.0db58c1144c679ec3a19.js.map
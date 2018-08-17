(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/MainTile/MainTile.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),r=t.n(a),i=t("./node_modules/@mdx-js/tag/dist/index.js"),o=t("./node_modules/docz/dist/index.m.js"),l=t("./src/utils/cn.ts");t("./src/components/MainTile/MainTileWrapper.less");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?m(e):n}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=Object(l.a)("main-tile-wrapper"),d=function(e){function n(){var e,t,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return p(a,(t=a=p(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),Object.defineProperty(m(a),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return"A"!==e.target.tagName}}),t))}var t,r,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,a["Component"]),t=n,(r=[{key:"renderHintLabel",value:function(){return a.createElement("div",{className:f("hint-box")},a.createElement("div",{className:f("hint-text")},this.props.hint.title))}},{key:"render",value:function(){var e=this.props,n=e.hint,t=e.IsBorderRight;return a.createElement("div",{className:f("",{hint:!!n&&n.color,"br-no":!t}),onClick:this.handleClick},a.createElement("div",{className:f("inner")},n&&this.renderHintLabel(),a.createElement("div",{className:f("container")},this.props.children)))}}])&&c(t.prototype,r),i&&c(t,i),n}();Object.defineProperty(d,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{IsBorderRight:!0}});var h=d;try{d.displayName="MainTileWrapper",d.__docgenInfo={description:"",displayName:"MainTileWrapper",props:{hint:{defaultValue:null,description:"Hint from left",name:"hint",required:!1,type:{name:'{ title: string; color: "green" | "orange" | "black"; }'}},IsBorderRight:{defaultValue:{value:"true"},description:"Show right border",name:"IsBorderRight",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainTile/MainTileWrapper.tsx#MainTileWrapper"]={docgenInfo:d.__docgenInfo,name:"MainTileWrapper",path:"src/components/MainTile/MainTileWrapper.tsx#MainTileWrapper"})}catch(e){}t("./src/components/MainTile/MainTileInfo.less");var y=t("./src/components/BubbleHint/BubbleHint.tsx"),b=t("./src/components/TextLink/TextLink.tsx"),T=t("./src/components/Header/Header.tsx");function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,n){return!n||"object"!==g(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function M(e,n){return(M=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var S=Object(l.a)("main-tile-info"),w=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),E(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,r,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&M(e,n)}(n,a["Component"]),t=n,(r=[{key:"renderBadges",value:function(){var e=this,n=function(e){return a.createElement("div",{className:S("badge-title")},e.title)};return a.createElement("div",{className:S("badges")},this.props.badges.map(function(t,r){return a.createElement("div",{key:"".concat(t.title).concat(r),className:S("badge",{type:t.code})},t.hint?e.renderBubbleHint(n(t),t.hint):n(t))}))}},{key:"renderBubbleHint",value:function(e,n){return a.createElement(y.a,{popupWidth:"small",placement:"right",trigger:e},a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))}},{key:"render",value:function(){return a.createElement("div",{className:S("")},a.createElement("div",{className:S("description")},a.createElement(T.a,{className:S("description-title"),as:"h2",margin:!1},this.props.title),this.props.badges&&this.renderBadges(),this.props.description&&a.createElement("div",{className:S("description-wrap")},this.props.descriptionIcon,a.createElement("div",{className:S("description-text")},this.props.description)),a.createElement(b.a,{className:S("description-more"),href:this.props.link,target:"_blank"},this.props.linkText)),a.createElement("div",{className:S("params")},a.createElement("ul",{className:S("params-list")},this.props.additionalParams.map(function(e,n){return a.createElement("li",{key:e.title+n,className:S("params-item")},a.createElement("span",{"data-amount":e.value},e.value)," ",e.unit)}))))}}])&&v(t.prototype,r),i&&v(t,i),n}();Object.defineProperty(w,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{linkText:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}});var _=w;try{w.displayName="MainTileInfo",w.__docgenInfo={description:"",displayName:"MainTileInfo",props:{title:{defaultValue:null,description:"Title",name:"title",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"Link",name:"link",required:!0,type:{name:"string"}},linkText:{defaultValue:{value:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"},description:"Link text",name:"linkText",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description",name:"description",required:!1,type:{name:"string"}},descriptionIcon:{defaultValue:null,description:"Description Svg",name:"descriptionIcon",required:!1,type:{name:"Element"}},badges:{defaultValue:null,description:"Badges\nlist of objects with args: title(required), code(required), hint",name:"badges",required:!1,type:{name:"IBadge[]"}},additionalParams:{defaultValue:null,description:"Additional params\nlist of params with args: title(required), value(required), unit(required)",name:"additionalParams",required:!1,type:{name:"IAdditionalParams[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainTile/MainTileInfo.tsx#MainTileInfo"]={docgenInfo:w.__docgenInfo,name:"MainTileInfo",path:"src/components/MainTile/MainTileInfo.tsx#MainTileInfo"})}catch(e){}t("./src/components/MainTile/MainTileFeatures.less"),t("./src/components/MainTile/MainTileInternet.less");var I=t("./src/components/DropdownSocialList/DropdownSocialList.tsx");function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e,n){return!n||"object"!==O(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function P(e,n){return(P=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var k=Object(l.a)("main-tile-internet"),j=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),N(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,r,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&P(e,n)}(n,a["Component"]),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.params,t=e.socialIcons;return a.createElement("div",{className:k("",{},this.props.className)},n.map(function(e,n){return a.createElement("div",{className:k("inner"),key:e.title+n},a.createElement(T.a,{className:k("title"),as:"h3",margin:!1},e.title),a.createElement("div",{className:k("text")},e.caption),!!t.length&&a.createElement(I.a,{icons:t}))}))}}])&&x(t.prototype,r),i&&x(t,i),n}();Object.defineProperty(j,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{params:[],socialIcons:[]}});var C=j;try{j.displayName="MainTileInternet",j.__docgenInfo={description:"",displayName:"MainTileInternet",props:{className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},socialIcons:{defaultValue:null,description:"Social icons list",name:"socialIcons",required:!1,type:{name:"Partial<ISocialIcon>[]"}},params:{defaultValue:null,description:"Showcase params childrens list",name:"params",required:!1,type:{name:"Partial<IShowcaseChildren>[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainTile/MainTileInternet.tsx#MainTileInternet"]={docgenInfo:j.__docgenInfo,name:"MainTileInternet",path:"src/components/MainTile/MainTileInternet.tsx#MainTileInternet"})}catch(e){}t("./src/components/MainTile/MainTileFree.less");var A=t("./src/components/Paragraph/Paragraph.tsx");function R(e){return(R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function q(e,n){return!n||"object"!==R(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function D(e,n){return(D=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var B=Object(l.a)("main-tile-free"),F=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),q(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,r,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&D(e,n)}(n,a["Component"]),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.params,t=e.title,r=e.className;return a.createElement("div",{className:B("",{},r)},t&&a.createElement(T.a,{className:B("title"),as:"h3",margin:!1},t),a.createElement("ul",{className:B("list")},n.map(function(e){return a.createElement("li",{className:B("item",{icon:!!e.svgIcon}),key:e.title},e.svgIcon,a.createElement(T.a,{className:B("item-title"),as:"h5",margin:!1},e.title),a.createElement(A.a,{className:B("item-text"),marginAll:"none",sizeAll:"small"},e.caption))})))}}])&&V(t.prototype,r),i&&V(t,i),n}();Object.defineProperty(F,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{params:[]}});var W=F;try{F.displayName="MainTileFree",F.__docgenInfo={description:"",displayName:"MainTileFree",props:{className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Title",name:"title",required:!1,type:{name:"string"}},params:{defaultValue:null,description:"Showcase params childrens list",name:"params",required:!0,type:{name:"Partial<IShowcaseChildren>[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainTile/MainTileFree.tsx#MainTileFree"]={docgenInfo:F.__docgenInfo,name:"MainTileFree",path:"src/components/MainTile/MainTileFree.tsx#MainTileFree"})}catch(e){}function X(e){return(X="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function K(e,n){return!n||"object"!==X(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function H(e,n){return(H=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var J=Object(l.a)("main-tile-features"),z=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),K(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,r,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&H(e,n)}(n,a["Component"]),t=n,(r=[{key:"render",value:function(){var e=L(this.props.showcaseParams.filter(function(e){return e.children.length})),n=e[0],t=e.slice(1);return a.createElement("div",{className:J("")},n&&a.createElement(C,{className:J("internet"),params:n.children,socialIcons:this.props.socialIcons}),t.map(function(e,n){return a.createElement(W,{className:J("free"),params:e.children,title:e.value,key:n})}))}}])&&Y(t.prototype,r),i&&Y(t,i),n}(),G=z;try{z.displayName="MainTileFeatures",z.__docgenInfo={description:"",displayName:"MainTileFeatures",props:{showcaseParams:{defaultValue:null,description:"Showcase\nList with args: title: title: string(requred), value: string(requred), children: list",name:"showcaseParams",required:!1,type:{name:"IShowcaseParams[]"}},socialIcons:{defaultValue:null,description:"Social icons\nList with args: svgIcon: JSX.Element, title: string",name:"socialIcons",required:!1,type:{name:"Partial<ISocialIcon>[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainTile/MainTileFeatures.tsx#MainTileFeatures"]={docgenInfo:z.__docgenInfo,name:"MainTileFeatures",path:"src/components/MainTile/MainTileFeatures.tsx#MainTileFeatures"})}catch(e){}t("./src/components/MainTile/MainTileTotal.less");var Q=t("./src/components/Button/Button.tsx");function U(e){return(U="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function $(e,n){return!n||"object"!==U(n)&&"function"!==typeof n?ne(e):n}function ee(e,n){return(ee=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var te=Object(l.a)("main-tile-total"),ae=function(e){function n(){var e,t,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return $(a,(t=a=$(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),Object.defineProperty(ne(a),"handleSubmit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=a.props,t=n.handleSubmit,r=n.info;t&&t(e,r)}}),t))}var t,r,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&ee(e,n)}(n,a["Component"]),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.payment,t=e.handleSubmit,r=e.submitText;return a.createElement("div",{className:te("")},a.createElement("div",{className:te("wrap")},a.createElement("div",{className:te("cost",{"old-value":!!n.oldValue})},a.createElement("span",{className:te("price")},n.value),"\xa0",n.oldValue&&a.createElement(a.Fragment,null,a.createElement("span",{className:te("old-price")},n.oldValue),a.createElement("br",null)),a.createElement("span",{className:te("unit")},n.unit)),t&&a.createElement("div",{className:te("buttons")},a.createElement(Q.a,{className:te("button"),onClick:this.handleSubmit,width:"full"},r))))}}])&&Z(t.prototype,r),i&&Z(t,i),n}();Object.defineProperty(ae,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{submitText:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}});var re=ae;try{ae.displayName="MainTileTotal",ae.__docgenInfo={description:"",displayName:"MainTileTotal",props:{payment:{defaultValue:null,description:"Payment\nObject with args: value: string(required), unit: string(required), oldValue: string",name:"payment",required:!0,type:{name:"{ value: string; unit: string; oldValue?: string; }"}},info:{defaultValue:null,description:"Info - any object",name:"info",required:!1,type:{name:"{}"}},submitText:{defaultValue:{value:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"},description:"Submit text",name:"submitText",required:!1,type:{name:"string"}},handleSubmit:{defaultValue:null,description:"Submit hander\nShow button if included",name:"handleSubmit",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>, info: {}) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainTile/MainTileTotal.tsx#MainTileTotal"]={docgenInfo:ae.__docgenInfo,name:"MainTileTotal",path:"src/components/MainTile/MainTileTotal.tsx#MainTileTotal"})}catch(e){}var ie=t("./src/icons/checked_24.svg");function oe(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,"Wrapper",function(){return le}),t.d(n,"infoProps",function(){return se}),t.d(n,"featuresProps",function(){return ce}),t.d(n,"featuresIconsProps",function(){return pe}),t.d(n,"totalProps",function(){return ue}),t.d(n,"oldTotalProps",function(){return me});var le=function(e){var n=e.children;return r.a.createElement("div",{style:{padding:"20px"}},n)},se={title:"\u0412\u043a\u043b\u044e\u0447\u0430\u0439\u0441\u044f!",link:"https://www.google.com/",description:"\u0410\u043c\u0435\u0434\u0438\u0430\u0442\u0435\u043a\u0430",descriptionIcon:r.a.createElement(ie.a,{style:{width:"40px",height:"40px"}}),additionalParams:[{value:"300",unit:"\u043c\u0438\u043d\u0443\u0442",title:"\u0417\u0432\u043e\u043d\u043a\u0438 \u043d\u0430 \u0432\u0441\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u0420\u043e\u0441\u0441\u0438\u0438"},{value:"300",unit:"SMS",title:"SMS \u043d\u0430\xa0\u043d\u043e\u043c\u0435\u0440\u0430 \u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0430"},{value:"4",unit:"\u0413\u0411",title:"\u041d\u0430 \u043b\u044e\u0431\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b"}]},ce={showcaseParams:[{title:"\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442",value:"\u043d\u0430 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b",children:[{title:"\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442",caption:"\u043d\u0430 \u0432\u0438\u0434\u0435\u043e, \u0441\u043e\u0446-\u0441\u0435\u0442\u0438 \u0438 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b",value:"test"}]},{children:[{title:"Youtube, Rutube, Vimeo"}]},{children:[{title:"WhatsApp, Viber, Facebook Messanger, Snapchat, eMotion"}]},{children:[{title:"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435, \u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438, Facebook, Instagram, Twitter"}]}]},pe={showcaseParams:[{title:"\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442",value:"\u043d\u0430 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b",children:[{title:"\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442",caption:"\u043d\u0430 \u0432\u0438\u0434\u0435\u043e, \u0441\u043e\u0446-\u0441\u0435\u0442\u0438 \u0438 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b",value:"test"}]},{title:"\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442",value:"\u043d\u0430 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b",children:[{title:"\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442",caption:"\u043d\u0430 \u0432\u0438\u0434\u0435\u043e, \u0441\u043e\u0446-\u0441\u0435\u0442\u0438 \u0438 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b",value:"test",svgIcon:r.a.createElement(ie.a,{style:{position:"absolute",top:"0",left:"0",width:"32px",height:"32px",fill:"#00b956",pointerEvents:"none"}})}]}],socialIcons:[{svgIcon:r.a.createElement(ie.a,{style:{width:"24px",height:"24px"}}),title:"Youtube"},{svgIcon:r.a.createElement(ie.a,{style:{width:"24px",height:"24px"}}),title:"VK"},{svgIcon:r.a.createElement(ie.a,{style:{width:"24px",height:"24px"}}),title:"Mail"},{svgIcon:r.a.createElement(ie.a,{style:{width:"24px",height:"24px"}}),title:"Google"},{svgIcon:r.a.createElement(ie.a,{style:{width:"24px",height:"24px"}}),title:"Yandex"},{svgIcon:r.a.createElement(ie.a,{style:{width:"24px",height:"24px"}}),title:"Snapchat"},{svgIcon:r.a.createElement(ie.a,{style:{width:"24px",height:"24px"}}),title:"WhatsApp"}]},ue={payment:{value:"600 \u20bd",unit:"\u0432 \u043c\u0435\u0441\u044f\u0446"}},me={payment:{value:"600 \u20bd",oldValue:"750 \u20bd",unit:"\u0432 \u043c\u0435\u0441\u044f\u0446"}};n.default=function(e){var n=e.components;oe(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:n},r.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"maintile"}},r.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#maintile"}},r.a.createElement(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"MainTile"),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"properties-maintilewrapper"}},r.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties-maintilewrapper"}},r.a.createElement(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties MainTileWrapper"),r.a.createElement(o.e,{of:h}),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"properties-maintileinfo"}},r.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties-maintileinfo"}},r.a.createElement(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties MainTileInfo"),r.a.createElement(o.e,{of:_}),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"properties-maintilefeatures"}},r.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties-maintilefeatures"}},r.a.createElement(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties MainTileFeatures"),r.a.createElement(o.e,{of:G}),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"properties-maintiletotal"}},r.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties-maintiletotal"}},r.a.createElement(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties MainTileTotal"),r.a.createElement(o.e,{of:re}),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},r.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},r.a.createElement(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),r.a.createElement(o.d,{__position:4,__code:"<MainTileWrapper hint={{ title: '\u0420\u0435\u043a\u043e\u043c\u043c\u0435\u043d\u0434\u0443\u0435\u043c', color: 'green' }}>\n  <MainTileInfo {...infoProps} />\n  <MainTileTotal {...totalProps} />\n</MainTileWrapper>\n<MainTileWrapper hint={{ title: '\u0416\u0435\u043b\u0430\u0435\u043c\u044b\u0439', color: 'orange' }}>\n  <MainTileInfo {...infoProps} />\n  <MainTileTotal {...totalProps} />\n</MainTileWrapper>\n<MainTileWrapper hint={{ title: '\u0422\u0435\u043a\u0443\u0449\u0438\u0439', color: 'black' }}>\n  <MainTileInfo {...infoProps} />\n  <MainTileFeatures {...featuresProps} />\n  <MainTileTotal {...oldTotalProps} />\n</MainTileWrapper>\n<MainTileWrapper>\n  <MainTileInfo {...infoProps} />\n  <MainTileFeatures {...featuresIconsProps} />\n  <MainTileTotal {...totalProps} handleSubmit={() => ({})} />\n</MainTileWrapper>\n<MainTileWrapper hint={{ title: '\u0422\u0435\u043a\u0443\u0449\u0438\u0439', color: 'black' }}>\n  <MainTileInfo {...infoProps} />\n  <MainTileFeatures {...featuresProps} />\n  <MainTileTotal {...oldTotalProps} handleSubmit={() => ({})} />\n</MainTileWrapper>",wrapper:le},r.a.createElement(h,{hint:{title:"\u0420\u0435\u043a\u043e\u043c\u043c\u0435\u043d\u0434\u0443\u0435\u043c",color:"green"}},r.a.createElement(_,se),r.a.createElement(re,ue)),r.a.createElement(h,{hint:{title:"\u0416\u0435\u043b\u0430\u0435\u043c\u044b\u0439",color:"orange"}},r.a.createElement(_,se),r.a.createElement(re,ue)),r.a.createElement(h,{hint:{title:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439",color:"black"}},r.a.createElement(_,se),r.a.createElement(G,ce),r.a.createElement(re,me)),r.a.createElement(h,null,r.a.createElement(_,se),r.a.createElement(G,pe),r.a.createElement(re,Object.assign({},ue,{handleSubmit:function(){return{}}}))),r.a.createElement(h,{hint:{title:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439",color:"black"}},r.a.createElement(_,se),r.a.createElement(G,ce),r.a.createElement(re,Object.assign({},me,{handleSubmit:function(){return{}}})))),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"included-props"}},r.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#included-props"}},r.a.createElement(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Included props"),r.a.createElement(i.MDXTag,{name:"pre",components:n},r.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"export const infoProps = {\n    title: '\u0412\u043a\u043b\u044e\u0447\u0430\u0439\u0441\u044f!',\n    link: 'https://www.google.com/',\n    description: '\u0410\u043c\u0435\u0434\u0438\u0430\u0442\u0435\u043a\u0430',\n    descriptionIcon: <Checked style={{ width: '40px', height: '40px'}}/>,\n    additionalParams: [\n        {\n            value: '300',\n            unit: '\u043c\u0438\u043d\u0443\u0442',\n            title: '\u0417\u0432\u043e\u043d\u043a\u0438 \u043d\u0430 \u0432\u0441\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u0420\u043e\u0441\u0441\u0438\u0438',\n        }, {\n            value: '300',\n            unit: 'SMS',\n            title: 'SMS \u043d\u0430\xa0\u043d\u043e\u043c\u0435\u0440\u0430 \u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0430',\n        }, {\n            value: '4',\n            unit: '\u0413\u0411',\n            title: '\u041d\u0430 \u043b\u044e\u0431\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b',\n        },\n    ]\n};\n\nexport const featuresProps = {\n    showcaseParams: [{\n        title: '\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442',\n        value: '\u043d\u0430 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b',\n        children: [{\n            title: '\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442',\n            caption: '\u043d\u0430 \u0432\u0438\u0434\u0435\u043e, \u0441\u043e\u0446-\u0441\u0435\u0442\u0438 \u0438 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b',\n            value: 'test',\n        }],\n    },\n    {\n        children: [{\n            title: 'Youtube, Rutube, Vimeo',\n        }],\n    },\n    {\n        children: [{\n            title: 'WhatsApp, Viber, Facebook Messanger, Snapchat, eMotion',\n        }],\n    },\n    {\n        children: [{\n            title: '\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435, \u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438, Facebook, Instagram, Twitter'\n        }],\n    }],\n};\n\nconst featuresIconsProps = {\n    showcaseParams: [{\n        title: '\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442',\n        value: '\u043d\u0430 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b',\n        children: [{\n            title: '\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442',\n            caption: '\u043d\u0430 \u0432\u0438\u0434\u0435\u043e, \u0441\u043e\u0446-\u0441\u0435\u0442\u0438 \u0438 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b',\n            value: 'test',\n        }],\n    },\n    {\n        title: '\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442',\n        value: '\u043d\u0430 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b',\n        children: [\n        {\n            title: '\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442',\n            caption: '\u043d\u0430 \u0432\u0438\u0434\u0435\u043e, \u0441\u043e\u0446-\u0441\u0435\u0442\u0438 \u0438 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b',\n            value: 'test',\n            svgIcon: <Checked style={{\n                position: 'absolute',\n                top: '0',\n                left: '0',\n                width: '32px',\n                height: '32px',\n                fill: '#00b956',\n                pointerEvents: 'none',\n            }}/>,\n        }],\n    }],\n    socialIcons: [{\n        svgIcon: <Checked style={{ width: '24px', height: '24px'}}/>,\n        title: 'Youtube',\n    },{\n        svgIcon: <Checked style={{ width: '24px', height: '24px'}}/>,\n        title: 'VK',\n    },{\n        svgIcon: <Checked style={{ width: '24px', height: '24px'}}/>,\n        title: 'Mail',\n    },{\n        svgIcon: <Checked style={{ width: '24px', height: '24px'}}/>,\n        title: 'Google',\n    },{\n        svgIcon: <Checked style={{ width: '24px', height: '24px'}}/>,\n        title: 'Yandex',\n    },{\n        svgIcon: <Checked style={{ width: '24px', height: '24px'}}/>,\n        title: 'Snapchat',\n    },{\n        svgIcon: <Checked style={{ width: '24px', height: '24px'}}/>,\n        title: 'WhatsApp',\n    }]\n};\n\nexport const totalProps = {\n    payment: {\n        value: '600 \u20bd',\n        unit: '\u0432 \u043c\u0435\u0441\u044f\u0446'\n    }\n};\n\nexport const oldTotalProps = {\n    payment: {\n        value: '600 \u20bd',\n        oldValue: '750 \u20bd',\n        unit: '\u0432 \u043c\u0435\u0441\u044f\u0446'\n    }\n};\n")))}},"./src/components/MainTile/MainTileFeatures.less":function(e,n,t){},"./src/components/MainTile/MainTileFree.less":function(e,n,t){},"./src/components/MainTile/MainTileInfo.less":function(e,n,t){},"./src/components/MainTile/MainTileInternet.less":function(e,n,t){},"./src/components/MainTile/MainTileTotal.less":function(e,n,t){},"./src/components/MainTile/MainTileWrapper.less":function(e,n,t){}}]);
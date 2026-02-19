import{r as q}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var F={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=q,I=Symbol.for("react.element"),V=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,U=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function A(t,e,a){var r,n={},o=null,s=null;a!==void 0&&(o=""+a),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)D.call(e,r)&&!$.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:I,type:t,key:o,ref:s,props:n,_owner:U.current}}m.Fragment=V;m.jsx=A;m.jsxs=A;F.exports=m;var J=F.exports;function C(t){var e,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=C(t[e]))&&(r&&(r+=" "),r+=a);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Y(){for(var t,e,a=0,r="";a<arguments.length;)(t=arguments[a++])&&(e=C(t))&&(r&&(r+=" "),r+=e);return r}const z="_button_1tfco_1",G="_fullWidth_1tfco_13",H="_primary_1tfco_17",K="_secondary_1tfco_22",M="_tertiary_1tfco_27",Q="_link_1tfco_32",X="_icon_1tfco_37",f={button:z,fullWidth:G,primary:H,secondary:K,tertiary:M,link:Q,icon:X},y=t=>{const{as:e="button",className:a,fullWidth:r,variant:n="primary",...o}=t,s=Y(f.button,f[n],r&&f.fullWidth,a);return J.jsx(e,{className:s,...o})};try{y.displayName="Button",y.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const er={argTypes:{onClick:{action:"clicked"},variant:{control:{type:"radio"},options:["primary","secondary","tertiary","link"]}},component:y,tags:["autodocs"],title:"Components/Button"},i={args:{children:"Primary Button",disabled:!1,variant:"primary"}},l={args:{children:"Secondary Button",disabled:!1,variant:"secondary"}},c={args:{children:"Tertiary Button",disabled:!1,variant:"tertiary"}},d={args:{children:"Button that looks like a link",disabled:!1,variant:"link"}},u={args:{children:"Full Width Button",disabled:!1,fullWidth:!0,variant:"primary"}},p={args:{as:"a",children:"Link that looks like a button",href:"https://google.com",rel:"noopener noreferrer",target:"_blank",variant:"primary"}};var _,h,g;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary'
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,k,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary'
  }
}`,...(b=(k=l.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var B,S,x;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary Button',
    disabled: false,
    variant: 'tertiary'
  }
}`,...(x=(S=c.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var W,E,L;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Button that looks like a link',
    disabled: false,
    variant: 'link'
  }
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var O,T,N;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary'
  }
}`,...(N=(T=u.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var P,R,j;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://google.com',
    rel: 'noopener noreferrer',
    target: '_blank',
    variant: 'primary'
  }
}`,...(j=(R=p.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const tr=["Primary","Secondary","Tertiary","Link","FullWidth","AsLink"];export{p as AsLink,u as FullWidth,d as Link,i as Primary,l as Secondary,c as Tertiary,tr as __namedExportsOrder,er as default};

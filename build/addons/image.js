module.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(31),o=n(1);n(52);var a={defaultContent:function(){return{src:"",caption:"",attribution:""}},render:function(){return o.createElement(i,r({onChange:this.setContent},this.state.content))}};t.exports=a},1:function(t){t.exports=require("react")},6:function(t,e,n){"use strict";var r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(1),a=o.createClass({displayName:"Field",getDefaultProps:function(){return{type:"text"}},render:function(){var t=this.props,e=t.label,n=t.name,a=t.type,s=r(t,["label","name","type"]);return o.createElement("div",{className:"col-img-field"},o.createElement("label",{className:"col-img-label",htmlFor:n||this.props.id},e),o.createElement("input",i({className:"col-img-input",type:a},s,{name:n||this.props.id})))}});t.exports=a},31:function(t,e,n){"use strict";var r=n(6),i=n(32),o=n(1),a=o.PropTypes,s=o.createClass({displayName:"Editor",propTypes:{src:a.string,caption:a.string,attribution:a.string,onChange:a.func.isRequired},render:function(){var t=this.props,e=t.src,n=t.caption,a=t.attribution;return o.createElement("div",{className:"col-img"},o.createElement(i,this.props),o.createElement("fieldset",{className:"col-img-fieldset"},o.createElement(r,{label:"Image Source",type:"url",value:e,name:"image_src",onChange:this._onSrcChange}),o.createElement(r,{label:"Caption",type:"text",value:n,name:"image_caption",onChange:this._onCaptionChange}),o.createElement(r,{label:"Attribution",type:"text",value:a,name:"image_attribution",onChange:this._onAttributionChange})))},_onSrcChange:function(t){this.props.onChange({src:t.currentTarget.value})},_onCaptionChange:function(t){this.props.onChange({caption:t.currentTarget.value})},_onAttributionChange:function(t){this.props.onChange({attribution:t.currentTarget.value})}});t.exports=s},32:function(t,e,n){"use strict";var r=n(1),i=r.createClass({displayName:"Graphic",getCaption:function(){var t=this.props.caption;return t?r.createElement("figcaption",{className:"col-img-caption"},t):null},render:function(){var t=this.props.src;return t?r.createElement("figure",{className:"col-img-figure"},r.createElement("img",{className:"col-img-graphic",src:t,alt:""}),this.getCaption()):null}});t.exports=i},52:function(){}});
//# sourceMappingURL=image.js.map
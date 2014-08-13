//     BbPicker
//     (c) simonfan
//     BbPicker is licensed under the MIT terms.

define("bb-picker",["require","exports","module","bbcv","lowercase-backbone","lodash"],function(e,i,t){var c=e("bbcv"),l=e("lowercase-backbone").view,a=e("lodash"),n=l.extend({initialize:function(e){l.prototype.initialize.call(this,e),this.$el.data("__pickerItemModelCid",e.model.cid)}});t.exports=c.extend({initialize:function(e){c.prototype.initialize.call(this,e),a.each(["callback"],function(i){this[i]=e[i]||this[i]},this)},events:{"click > *":"handleItemClick"},handleItemClick:function(e){var i=$(e.currentTarget);return this.callback(this.collection.get(i.data("__pickerItemModelCid"))),!1},modelView:n})});
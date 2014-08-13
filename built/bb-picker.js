//     BbPicker
//     (c) simonfan
//     BbPicker is licensed under the MIT terms.

define("bb-picker",["require","exports","module","bbcv","lowercase-backbone"],function(e,i,t){var c=e("bbcv"),l=e("lowercase-backbone").view,n=l.extend({initialize:function(e){l.prototype.initialize.call(this,e),this.$el.data("__pickerItemModelCid",e.model.cid)}});t.exports=c.extend({events:{"click > *":"handleItemClick"},handleItemClick:function(e){var i=$(e.currentTarget);return this.collection.get(i.data("__pickerItemModelCid"))},modelView:n})});
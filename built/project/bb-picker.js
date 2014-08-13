//     BbPicker
//     (c) simonfan
//     BbPicker is licensed under the MIT terms.

define(["require","exports","module","bbcv","lowercase-backbone"],function(e,t,n){var r=e("bbcv"),i=e("lowercase-backbone").view,s=i.extend({initialize:function(t){i.prototype.initialize.call(this,t),this.$el.data("__pickerItemModelCid",t.model.cid)}});n.exports=r.extend({events:{"click > *":"handleItemClick"},handleItemClick:function(t){var n=$(t.currentTarget);return this.collection.get(n.data("__pickerItemModelCid"))},modelView:s})});
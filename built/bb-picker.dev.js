//     BbPicker
//     (c) simonfan
//     BbPicker is licensed under the MIT terms.

/**
 * AMD module.
 *
 * @module BbPicker
 */

define('bb-picker',['require','exports','module','bbcv','lowercase-backbone'],function (require, exports, module) {
	

	var bbcv = require('bbcv'),
		view = require('lowercase-backbone').view;


	var pickerItemView = view.extend({
		initialize: function initializePickerItemView(options) {
			// initialize oriiginal
			view.prototype.initialize.call(this, options);

			// set model id onto the
			this.$el.data('__pickerItemModelCid', options.model.cid);
		},
	});


	module.exports = bbcv.extend({

		events: {
			'click > *': 'handleItemClick'
		},

		handleItemClick: function handleItemClick(e) {
			var $el = $(e.currentTarget);

			return this.collection.get($el.data('__pickerItemModelCid'));
		},

		modelView: pickerItemView

	});
});


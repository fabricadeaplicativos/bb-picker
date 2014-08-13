//     BbPicker
//     (c) simonfan
//     BbPicker is licensed under the MIT terms.

/**
 * AMD module.
 *
 * @module BbPicker
 */

define(function (require, exports, module) {
	'use strict';

	var bbcv = require('bbcv'),
		view = require('lowercase-backbone').view,
		_    = require('lodash');

	/**
	 * View for a single item.
	 * Basically sets the cid onto the $el
	 * for the colleciton view to be capalble of retrieving
	 * the model.
	 *
	 * @param  {[type]} options) {						view.prototype.initialize.call(this, options);						this.$el.data('__pickerItemModelCid', options.model.cid);		} [description]
	 * @param  {[type]} }       [description]
	 * @return {[type]}          [description]
	 */
	var pickerItemView = view.extend({
		initialize: function initializePickerItemView(options) {
			// initialize oriiginal
			view.prototype.initialize.call(this, options);

			// set model id onto the
			this.$el.data('__pickerItemModelCid', options.model.cid);
		},
	});


	module.exports = bbcv.extend({

		/**
		 * Picks some options.
		 *
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		initialize: function initializeBbPicker(options) {
			// initialize collection view.
			bbcv.prototype.initialize.call(this, options);

			// pick some options
			_.each(['callback'], function (prop) {
				this[prop] = options[prop] || this[prop];
			}, this);
		},

		events: {
			'click > *': 'handleItemClick'
		},

		/**
		 * Handles click events
		 * @param  {[type]} e [description]
		 * @return {[type]}   [description]
		 */
		handleItemClick: function handleItemClick(e) {
			var $el = $(e.currentTarget);

			// run the callback passing the picked model as first argument.
			this.callback(this.collection.get($el.data('__pickerItemModelCid')));

			return false;
		},

		modelView: pickerItemView

	});
});

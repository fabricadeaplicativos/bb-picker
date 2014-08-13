define(['bb-picker', 'lowercase-backbone', 'jquery'],
function (bbPicker ,  backbone           ,  $      ) {


	var options = window.options = backbone.collection([
		{ name: 'one', value: 1 },
		{ name: 'two', value: 2 },
		{ name: 'three', value: 3 }
	]);

	window.optionsView = bbPicker({

		el: $('#picker'),
		collection: options,

		modelHtmlTemplate: '<li><%- name %></li>',

		callback: function (optionModel) {

			alert(optionModel.get('value'));
		}
	});




});

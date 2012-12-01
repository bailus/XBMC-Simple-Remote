/*global JsonML */

/* namespace template */
var template;
if ("undefined" === typeof template) {
	template = {};
}

template.list = JsonML.BST(
[
	"",
	" ",
	[
		"div",
		{
			"jbst:visible": 
				function() {
	return !this.data.items;
},
			"class": "emptylist"
		},
		"Empty"
	],
	" ",
	[
		"div",
		{
			"jbst:visible": 
				function() {
	return !!this.data.items;
},
			"class": 
				function() {
	return ('list'+(this.data.collapsed ? ' collapsed' : ''));
},
			"data-groupby": 
				function() {
	return this.data.groupby;
}
		},
		" ",
		function() {
				return JsonML.BST(template.listdetails).dataBind(this.data, this.index, this.count);
			},
		" ",
		[
			"ul",
			{
				"jbst:visible": 
					function() {
	return !this.data.items[0].items;
}
			},
			" ",
			function() {
				return JsonML.BST(template.listitem).dataBind(this.data.items, this.index, this.count);
			},
			" "
		],
		" ",
		[
			"ul",
			{
				"jbst:visible": 
					function() {
	return !!this.data.items[0].items;
}
			},
			" ",
			function() {
				return JsonML.BST([
				"",
				" ",
				[
					"li",
					{
						"class": "superListItem"
					},
					" ",
					[
						"h3",
						function() {
	return this.data.label;
}
					],
					" ",
					[
						"ul",
						" ",
						function() {
				return JsonML.BST(template.listitem).dataBind(this.data.items, this.index, this.count);
			},
						" "
					],
					" "
				],
				" "
			]).dataBind(this.data.items, this.index, this.count);
			},
			" "
		],
		" ",
		[
			"div",
			{
				"jbst:visible": 
					function() {
	return !!this.data.fanart;
},
				"class": "fanart"
			},
			" ",
			[
				"img",
				{
					src: 
						function() {
	return this.data.fanart;
},
					alt: ""
				}
			],
			" "
		],
		" "
	],
	"\n"
]);
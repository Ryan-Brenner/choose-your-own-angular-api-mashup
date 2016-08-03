function nasaDisplay() {
	return {
		link: function(scope, element, attr){
			var circle = element.children().children("circle#5Mm");
			circle.attr("cx", attr.distance)
		},
		restrict: "A",
		distance: "=distance",
		templateUrl: "/templates/nasa-display.template.html"
	};
}
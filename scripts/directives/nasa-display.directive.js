function nasaDisplay() {
    
    return {
        link: function(scope, element, attr) {
            var circle = element.children().children("circle#5Mm");
            scope.$watch('config', function(){
                circle.attr("r", scope.config.radius * scope.config.counter)
            }, true);
        },
        restrict: "A",
        scope: {config: "=*nasaDisplay"},
        templateUrl: "/templates/nasa-display.template.html"
    };
    
}

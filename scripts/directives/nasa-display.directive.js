function nasaDisplay() {
    

    return {
        link: function(scope, element, attr) {
            var circle1 = element.children().children("circle#10Mm");
            scope.$watch('config', function(){
                circle1.attr("r", scope.config.radius * scope.config.counter1)
            }, true);

            var circle2 = element.children().children("circle#20Mm");
            scope.$watch('config', function(){
                circle2.attr("r", scope.config.radius * scope.config.counter2)
            }, true);

            var circle3 = element.children().children("circle#30Mm");
            scope.$watch('config', function(){
                circle3.attr("r", scope.config.radius * scope.config.counter3)
            }, true);
            var circle4 = element.children().children("circle#40Mm");
            scope.$watch('config', function(){
                circle4.attr("r", scope.config.radius * scope.config.counter4)
            }, true);
            var circle5 = element.children().children("circle#50Mm");
            scope.$watch('config', function(){
                circle5.attr("r", scope.config.radius * scope.config.counter5)
            }, true);
            var circle10 = element.children().children("circle#50Mmp");
            scope.$watch('config', function(){
                circle10.attr("r", scope.config.radius * scope.config.counter10)
            }, true);
        },
        restrict: "A",
        scope: {config: "=*nasaDisplay"},
        templateUrl: "/templates/nasa-display.template.html"
    };
    
}

ExampleController.$inject = ['$http'];

function ExampleController($http) {
    console.log("ExampleController!");

    var vm = this;
    vm.counter1 = 0;
    vm.radius = 3 //* vm.counter;
    vm.counter2 = 0;
    vm.counter3 = 0;
    vm.counter4 = 0;
    vm.counter5 = 0;
    vm.counter10 = 0;

    // 	$watch('vm.distance', function(newValue, oldValue) {
    //  	vm.counter = vm.counter + 1;
    // });
 //    var rightNow = new Date();
	// var today = rightNow.toISOString().slice(0,10);
 //    console.log(today)
 	var today = new Date();
    var start_date = today.toISOString().slice(0,10);
    var start_day = start_date.slice(9,10);
    console.log(start_day);
    var year_month = today.toISOString().slice(0,8).toString();
    console.log(year_month);
    var end_date = year_month+(parseInt(start_day) + 7);
    var end_day = end_date.slice(8,10);
    console.log(end_day);
    $http({
            method: "GET",
            url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+start_date+'&api_key=gdoAkGrt3ktDnGw89ddBIOcwYeo1DynTlncNGKza',
        })
        .then(
            function successCallback(neo_response) {
            	console.log(neo_response)
            	
            
            	
                for (x = parseInt(start_day); x <=parseInt(end_day); x++){
                	var xScrape = (x-10 < 0) ? 0+x.toString() : x 
               	var year_month = today.toISOString().slice(0,8).toString();
            		console.log(year_month+xScrape);

                    var neos = neo_response.data.near_earth_objects[year_month+xScrape]
                    	
                    for (i = 0; i < neos.length; i++) {
                        var distance = Math.floor(neos[i].close_approach_data[0].miss_distance['miles'] / 10000);

                        if (distance < 1000) {
                            vm.counter1++
                        } else if (distance >= 1000 && distance < 2000) {
                            vm.counter2++
                        }
                        else if (distance >= 2000 && distance < 3000) {
                            vm.counter3++
                        }
                        else if (distance >= 3000 && distance < 4000) {
                            vm.counter4++
                        }
                        else if (distance >= 4000 && distance < 5000) {
                            vm.counter5++
                        }
                        else if (distance > 5000) {
                            vm.counter10++
                        }

                    }
                }
                // vm.radius = 5 * vm.counter;
                console.log(vm.counter10);
                console.log(vm.counter1+vm.counter2+vm.counter3+vm.counter4+vm.counter5+vm.counter10)
            },
            function errorCallback(response) {
                console.log('There was an error getting the data', response);
            }
        );

}

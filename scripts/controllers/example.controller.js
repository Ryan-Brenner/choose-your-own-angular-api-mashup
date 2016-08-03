ExampleController.$inject=['$http'];
function ExampleController($http) {
	console.log("ExampleController!");

	var vm = this;
	vm.counter = 1;
	vm.radius = 5 //* vm.counter;


	// 	$watch('vm.distance', function(newValue, oldValue) {
 //  	vm.counter = vm.counter + 1;
	// });

	$http({
		method: "GET",
		url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2016-8-03&end_date=2016-08-10&api_key=gdoAkGrt3ktDnGw89ddBIOcwYeo1DynTlncNGKza',
	})
	.then(
		function successCallback(neo_response) {
			var neos = neo_response.data.near_earth_objects['2016-08-03']
			for(i=0; i<=neos.length-1; i++ ){
				var distance = Math.floor(neo_response.data.near_earth_objects['2016-08-03'][i].close_approach_data[0].miss_distance['miles']/10000);
				if(distance < 1000){
					 vm.counter++
				}
				

				console.log(Math.floor(neo_response.data.near_earth_objects['2016-08-03'][i].close_approach_data[0].miss_distance['miles']/10000))
				// for (var i =0; i<7; i++){
				
			}
			// vm.radius = 5 * vm.counter;
			console.log("radius", vm.radius);
			console.log("counter", vm.counter);
		}, 
		function errorCallback(response) {
		  console.log('There was an error getting the data', response);
		}
	);

}

ExampleController.$inject=['$http'];
function ExampleController($http) {
	console.log("ExampleController!");

	var vm = this;
	vm.distance = 150;

		// $http({
		// 	method: "GET",
		// 	url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2016-8-03&end_date=2016-08-10&api_key=gdoAkGrt3ktDnGw89ddBIOcwYeo1DynTlncNGKza',
		// }).then(function successCallback(json) {
		// 	console.log(neo_response),
		// 	// for (var i =0; i<7; i++){
	//     	console.log(neo_response.data.near_earth_objects['2016-08-03'][2].close_approach_data[0].miss_distance['miles'])
	//      // }
	//   }, function errorCallback(response) {
	//       console.log('There was an error getting the data', response);

	//   });

}

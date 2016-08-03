angular.module('EarthIsScrewedApp', ['ngRoute'])
	.controller('ExampleController', ExampleController)
	.directive('nasaDisplay', nasaDisplay);
       // .config(config);


////////////
// ROUTES //    //  SAVE THIS FOR LATER
////////////

// config.$inject = ['$routeProvider', '$locationProvider'];
// function config (  $routeProvider,   $locationProvider  )  {
//   $routeProvider
//     .when('/', {
//       templateUrl: '/templates/example-index.html',
//       controller: 'ExampleController',
//       controllerAs: 'dngr'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });

//   $locationProvider
//     .html5Mode({
//       enabled: true,
//       requireBase: false
//     });
// }

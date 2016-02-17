var app=angular.module("myApp",['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when("/Animation",{templateUrl:'pages/animate.html'}).
	when("/Change case",{templateUrl:"pages/change case.html"}).
	when("/Include file content",{templateUrl:"pages/include file content.html"});
}]);


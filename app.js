// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource'])

// ROUTES
weatherApp.config(function ($routeProvider, $sceProvider) {
    $sceProvider.enabled(false),
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })

        .when('/forecast', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        });
});

// SERVICES
weatherApp.service('forecastService', function () {
    city = "Lviv";
})

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'forecastService', function ($scope, forecastService) {
    forecastService.city = "Lviv";
    console.log(forecastService.city);
    $scope.city = forecastService.city;

    $scope.$watch('city', function () {
        forecastService.city = $scope.city;
    });

    // $scope.getForecastByCity = function(c){
    //     forecastService.city = c;
    //     console.log(forecastService.city);
    // }
}]);

/*
http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=142ee522d7801a1529a15ec5c6d7c7f6
 */
weatherApp.controller('forecastController', ['$scope', '$http', 'forecastService', function ($scope, $http, forecastService) {

    $scope.city = forecastService.city;

    $scope.convert = function(degK) {
        return degK - 273;
    };

    $scope.temperature = 0;
    var self = $scope;

    var query = "http://api.openweathermap.org/data/2.5/forecast?q=" + $scope.city + "&APPID=142ee522d7801a1529a15ec5c6d7c7f6";
    
    $http.jsonp(query).then(function(response){
        self.data = response.data;
        console.log(self.data);
      });

}]);
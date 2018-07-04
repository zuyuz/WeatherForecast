// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'forecastService', function ($scope, $location, forecastService) {
    forecastService.city = "Lviv";
    console.log(forecastService.city);
    $scope.city = forecastService.city;

    $scope.$watch('city', function () {
        forecastService.city = $scope.city;
    });

    $scope.submit = function(){
        $location.path("/forecast")
    };
}]);

weatherApp.controller('forecastController', ['$scope', 'forecastService', '$routeParams', 'weatherService', function ($scope, forecastService, $routeParams, weatherService) {

    console.log($routeParams);

    $scope.city = forecastService.city;

    $scope.convert = function (degK) {
        return degK - 273;
    };

    $scope.days = $routeParams.days || 2;
    
    $scope.temperature = 0;

    $scope.data = weatherService.GetWeather($scope.city, $scope.days);

    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
    }

}]);
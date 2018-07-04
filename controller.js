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

weatherApp.controller('forecastController', ['$scope', '$http', 'forecastService', '$routeParams', function ($scope, $http, forecastService, $routeParams) {

    console.log($routeParams);

    $scope.city = forecastService.city;

    $scope.convert = function (degK) {
        return degK - 273;
    };

    $scope.days = $routeParams.days || 2;

    $scope.temperature = 0;
    var self = $scope;

    var query = "http://api.openweathermap.org/data/2.5/forecast?q="
        + $scope.city
        + "&cnt="
        + $scope.days
        + "&APPID=142ee522d7801a1529a15ec5c6d7c7f6";

    $http.jsonp(query).then(function (response) {
        self.data = response.data;
        console.log(self.data);
    });

    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
    }

}]);
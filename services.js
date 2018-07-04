// SERVICES
weatherApp.service('forecastService', function () {
    city = "Lviv";
})

weatherApp.service('weatherService', ['$resource', function ($recource) {

    this.GetWeather = function (city, days) {
        var weatherAPI =
            $recource("http://api.openweathermap.org/data/2.5/forecast", {
            });

        return weatherAPI.get({
            q: city,
            cnt: days,
            APPID: "142ee522d7801a1529a15ec5c6d7c7f6"
        });
    }
}]);
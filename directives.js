// DIRECTIVIES
weatherApp.directive('forecastResult', function () {
    return {
        templateUrl: 'directives/forecastResult.htm',
        scope: {
            dateTime: "=",
            temperature: "=",
            convertToDate: "&",
            convert: "&"
        }
    };
});
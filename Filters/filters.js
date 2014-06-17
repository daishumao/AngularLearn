(function () {
    var app = angular.module('MyApp', []);
    app.controller('FiltersController', function($scope) {
        $scope.Date = new Date();
    });
})();
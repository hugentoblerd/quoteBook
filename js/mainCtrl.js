var app = angular.module('quoteBook');

app.controller('mainCtrl', function ($scope, dataService) {
   $scope.quotes = dataService.getData();
});
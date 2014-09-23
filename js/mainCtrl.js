var app = angular.module('quoteBook');

app.controller('mainCtrl', function ($scope, dataService) {
// empty object
  $scope.quote = {};

// 
  $scope.searchTerm = '';

// grabs the quotes data from dataService and makes it available on the $scope
  $scope.quotes = dataService.getData();

// initally hides input text areas and submit buttons
  $scope.showAdd = false;
  $scope.showRemove = false;
  $scope.showFilter = false;

// shows addQuote input and submit. hides removeQuote and filterQuote
  $scope.showAddQuote = function () {
    $scope.showAdd = !$scope.showAdd;
    $scope.showRemove = false;
    $scope.showFilter = false;
  };

// shows removeQuote input and submit. hides addQuote and filterQuote
  $scope.showRemoveQuote = function () {
    $scope.showRemove = !$scope.showRemove;
    $scope.showAdd = false;
    $scope.showFilter = false;
  };

// shows filterQuote input and submit. hides removeQuote and addQuote
  $scope.showFilterQuote = function () {
    $scope.showFilter = !$scope.showFilter;
    $scope.showRemove = false;
    $scope.showAdd = false;
  }

// adds quote object on $scope to services array of quotes
  $scope.addQuote = function () {
    dataService.addData($scope.quote);
    // removes object on quote so we can add other quotes
    $scope.quote = {};
    // hides the add quote input and submit
    $scope.showAdd = false;
  }

// removes quote object on $scope from the services array of quotes
  $scope.removeQuote = function () {
    dataService.removeData($scope.quote.text);
    // removes object on quote so we can add other quotes
    $scope.quote = {};
    // hides the quote input and submit
    $scope.showRemove = false;
  }

// filters quote




});
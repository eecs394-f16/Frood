var app = angular.module('frood')

  app.controller('IndexController', function($scope, supersonic) {

    $scope.testEvent = {
        name: "GEECS BBQ",
        loc: "The Lakefill",
        time: "Sep 30, 6:00pm",
        foodType: "BBQ",
        desc: "Come join Graduate EECS for friends and food at the Lakefill"
    }
    
  });

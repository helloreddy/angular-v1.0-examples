var app = angular.module('app', ['app.service']);

app.controller('CalculatorController', function($scope, CalculatorService) {

    $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number);
    }

    $scope.doCube = function() {
        $scope.answer = CalculatorService.cube($scope.number);
    }
});

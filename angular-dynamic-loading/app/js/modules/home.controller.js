define(['app', 'modules/home.service'], function (app, homeSerivce) {
    console.log('home.controller.js - Strar home.controller module..');

    app.controller('HomeCtrl', function ($scope, homeService) {
        console.log('HomeCtrl start working..');

        $scope.message = "Message from HomeCtrl";
        $scope.message2 = homeService.getMessage();
    });
});

define(['app', 'modules/view1.service'], function (app, view1Service) {
    console.log('view1.controller.js - Strar view1.controller module..');

    app.controller('View1Ctrl', function ($scope, view1Service) {
        console.log('ViewCtrl start working..');

        $scope.message = "Message from View1Ctrl";
        $scope.message2 = view1Service.getMessage();

    });
});

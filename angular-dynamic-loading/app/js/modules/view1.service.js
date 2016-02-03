define(['app'], function (app) {
    console.log('view1.service.js - Strar view1.service module..');

    app.factory('view1Service', view1Service);

    // Constructor
    function view1Service($http, $q) {
      console.log("Get in view1Service");

      var service = {
        getMessage : getMessage
      };
      return service;

      function getMessage() {
        return "Message from view1Service";
      };
    };

});

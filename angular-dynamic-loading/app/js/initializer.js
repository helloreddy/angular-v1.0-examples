require.config({
    baseUrl: "js",

    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',
        'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min',
        'angularAMD': '//cdn.jsdelivr.net/angular.amd/0.2.0/angularAMD.min'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD' : ['angular'],
        'angular-route' : ['angular']
    },

    // kick start application
    deps: ['app']
});

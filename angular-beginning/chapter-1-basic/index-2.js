/*
    앵귤러 모듈 선언
    C에서는 main() 함수가 프로그램의 시작 지점이지만,
    angular 에서는 특별한 시작 지점이 존재하지 않는다.
    다만 여러개의 모듈들이 존재하고, ngApp에서 시작 지점으로 특정 모듈을
    지정하는 방식을 취한다.

    아래 모듈 선언에서는 설명을 위해 다소 파라메터들을 줄단위로 열거했다.
*/
    var myApp = angular.module
    (
        'myApp', //선언할 모듈명
        [], //선언하는 모듈에서 사용할 다른 모듈들(디펜던시). 예  'ngGrid'
        function(
            //여기에는 모듈 선언시에만 가져올 수 있는 프로바이더들을 파라메터로 넣어줄 수 있다.
            //예 : $provide, $routeProvider, $compileProvider, $controllerProvider, $filterProvider
        ){
            //위에서 파라메터로 넣어준 프로바이더들 통해 여기에서 프로바이더로만 해줄 수 있는 로우레벨의 작업들을 할 수 있다.
            //예 : route 설정
        }
    );

    //컨트롤러 선언. 컨트롤러는 여러개를 선언해줄 수 있다.
    myApp.controller
    (
        'myController', //선언할 컨트롤러명
        function($scope
            //여기에는 컨트롤러에서 사용할 서비스들을 파라메터로 넣어줄 수 있다.
            //예 : $scope, $rootScope, $location, $http ...
        ){
            //이 안에서 실제 여러가지 작업들을 하게 된다.
            $scope.test = "안녕하세요!";
        }
    );


// Beautiful Source
// var myApp = angular.module('myApp',[]);
//
// myApp.controller('myController', function($scope){
//   $scope.test = "안녕하세요!";
// });

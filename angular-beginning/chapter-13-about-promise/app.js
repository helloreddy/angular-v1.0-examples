angular.module('demo-app', [])
.controller('mainCtrl', ['$scope','$timeout', function ($scope, $timeout) {
    //$timeout 서비스는 setTimeout을 AngularJS가 추상화한 서비스로 기본적인 사용법은 같다. 그리고 $timeout 서비스는 promise객체를 반환한다.
    var threeSecPromise = $timeout(function() {
        return $scope.answer;
    },3000);

    //해당 약속은 3초가 지나면 자동으로 해당 약속은 지켜지고 then 메서드의 성공 콜백 함수가 실행된다.
    threeSecPromise.then(function(val) {
        if(val == 39){
            $scope.result="Correct.";
        }else{
            $scope.result="Incorrect.";
        }
    },function () {
        $scope.result="It's too hard?";
    });

    //약속이 성공하든 취소하든 finally 메소드가 호출한다.
    threeSecPromise.finally(function() {
        $scope.info = "Refresh to try again."
    });

    $scope.giveUp = function() {
        //$timeout은 $timeout.cancel(promise 객체)로 해당 약속을 취소할 수도 있다. 그러면 $timeout에 주어진 콜백 함수는 실행되지 않고 promise의 실패 콜백 함수가 실행된다.
        $timeout.cancel(threeSecPromise);
    };
}]);

//BODY 태그 안에 ng-controller 에서 할당해준 컨트롤러의 이름과 동일한
//자바스크립트 함수가 자동으로 매칭된다.
//ng-controller에서 호출할 때는 scope 파라메터를 따로 넣지 않았지만,
//실제 컨트롤러 함수에서는 아래와 같이 $scope 를 파라메터로 받는다.

//$scope는 앵귤러js에서 매우 중요한 요소이다.

function PhoneListController($scope) {
 //이 컨트롤러의 $scope에 할당된 변수는 이 컨트롤러 영향에 있는
 //어느 곳에서도 접근할 수 있다.

 //현재까지 컨트롤러에서는 어떤 결정적인 역할을 하지는 않는다.
 //단순히 모델의 값을 배열 형태로 선언해줄 뿐이다.
 //하지만 적절한 연산과 조작에 의해 모델 값을 유동적으로 변환하는 형태가 된다면,
 //여기에서 컨트롤러의 중요성이 더욱 커지게 될 것이다.
 $scope.phones = [{
     "name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."
   },
   {
     "name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."
   },
   {
     "name": "MOTOROLA XOOM™",
      "snippet": "The Next, Next Generation tablet."
 }]; //이렇게 선언된 배열 형태의 데이터 모델은 후에 NG-REPEAT에 의해 사용된다.
}

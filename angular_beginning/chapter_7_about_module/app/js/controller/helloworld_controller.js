//어플리케이션의 컨트롤러
function helloWorldController($scope, greeter, user, printHello)
{
	//뷰 상의 {{ greeting }} 부분에 출력될 모델을 결정해준다.
	$scope.greeting = printHello.print(greeter.salutation, user.name);
};

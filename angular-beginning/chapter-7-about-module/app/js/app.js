//어플리케이션 모듈 - 서비스, 지시어, 필터를 포함하고 있다(?).
angular.module('helloWorld',
	['helloWorld.service', 'helloWorld.directive', 'helloWorld.filter']).
	  run(function(greeter, user) //서비스모듈에 등록된 greeter와  user 서비스를 파라메터로 가져옴
	  {
		//여기에서 일종의 초기화가 이루어지고 있다.

		//어플리케이션 모듈은 이렇게 이 공간을 초기화를 목적으로
		//사용하게 되는 경우가 많은 걸까?

		//greeter 서비스에 포함된 setSalutation 함수를 사용해,
		//인사말을 Hello로 설정하고 있다.
		greeter.setSalutation('Hello');

		//user 서비스 안에 포함된 setName 함수를 사용해
		//이름을 World로 설정하고 있다.
		user.setName('World');
});

// Beautiful Source
// angular.module('helloWorld', ['helloWorld.service', 'helloWorld.directive', 'helloWorld.filter'])
//   .run(function(greeter, user){
//      greeter.setSalutation('Hello');
// 	    user.setName('World');
// });

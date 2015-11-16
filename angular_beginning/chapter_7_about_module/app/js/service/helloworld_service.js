//서비스 모듈
angular.module('helloWorld.service', [])
	.value('greeter', //greeter 라는 이름의 서비스 등록
	{
		salutation: 'ㅋㅋㅋㅋㅋㅋ', //인사말 기본값

		//setSalutation 함수 선언
		setSalutation: function(salutation)
		{
			//파라메터로 들어온 인사말을 내부의 인사말에 대입

			//즉, greeter 라는 서비스가 있는데 기본적으로는
			//salutation을 사용하지만, setSalutation 함수를
			//사용하면 인사말을 임의로 수정할 수 있다.
			this.salutation = salutation;
		},
	})
	.value('user', //user 라는 이름의 서비스 등록
	{
		name: 'ㅎㅎㅎㅎㅎㅎ', //이름 기본값

		//user 라는 서비스 안에는 load 라는 함수가 존재하는데,
		//setName 함수의 파라메터로 전달된 이름을 name 이라는
		//변수에 저장해둔다.
		setName: function(name)
		{
			this.name = name;
		}
	}).
	value('printHello', //printHello 라는 이름의 서비스 등록
	{
		print : function(salutation, name)
		{
			return salutation + ' ' + name + '!';
		}
});

// Beautiful Source
// angular.module('helloWorld.service', [])
// 	.value('greeter', {
// 		salutation: 'Hi',
// 		setSalutation: function(salutation)
// 		{
// 			this.salutation = salutation;
// 		},
// 	})
// 	.value('user', {
// 		name: Python,
// 		setName: function(name)
// 		{
// 			this.name = name;
// 		}
// 	})
// 	.value('printHello',
// 	{
// 		print : function(salutation, name)
// 		{
// 			return salutation + ' ' + name + '!';
// 		}
// 	});

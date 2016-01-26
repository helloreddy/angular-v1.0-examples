angular.module('CabinetApp').controller('TestWebSocketCtrl', function($scope, $timeout) {
	// STARTOFCONTROLLER
	$scope.message = '';
	$scope.ws;
	$scope.echoMessages = [];

	$scope.init = function() {
		$scope.ws = new WebSocket('ws://co.devdev.kr/echo');
		$scope.ws.onopen = function() {
			console.log('websocket opened');
		};
		$scope.ws.onmessage = function(message) {
			console.log(message);
			console.log('receive message : ' + message.data);
			$scope.echoMessages.unshift(message.data);
			$timeout(function() {
				$scope.$apply('echoMessages');
			})
		};
		$scope.ws.onclose = function(event) {
			console.log(event);
			console.log('websocket closed');
		};
	};

	$scope.send = function() {
		$scope.ws.send($scope.message);
	};

	$scope.init();
	//ENDOFCONTROLLER
});

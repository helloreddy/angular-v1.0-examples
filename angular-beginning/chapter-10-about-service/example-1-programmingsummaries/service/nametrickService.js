var app = angular.module('myApp.service', []);

app.service('nametrickService', function(){
	this.reverse = function(name){
		return name.split("").reverse().join("");
	};
});

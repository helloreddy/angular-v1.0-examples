function UserListController($scope, $http) {

    $http.jsonp('http://api.server.re.kr/api/users?callback=JSON_CALLBACK').
        success(function(data, status){
            $scope.users=data.contents;
            var userList = $scope.users;
            for (var i = 0 ; i < $scope.users.length ; i++){
                $scope.users[i].check = true;
                console.log($scope.users[i]);
            }
        }).
        error(function(data, status){
            alert(data);
    });

    $scope.appName = 'API APP';
    
    //새로운 할 일 추가
    $scope.addNewUser = function(newUser) {
        $scope.users.push({
           userName : newUser
        });
        $scope.newUser = '';
    };
    //완료한 일 삭제
    // $scope.archive = function() {
    //     for (var i = $scope.userList.length - 1; i >= 0; i--) {
    //         if ($scope.userList[i].done) {
    //             $scope.userList.splice(i, 1);
    //         }
    //     };
    // };

    // //남은 할 일 수 계산
    // $scope.remain = function() {
    //     var remainCount = 0;
    //     angular.forEach($scope.userList, function(value, key) {
    //         if (value.done === false) {
    //             remainCount++;
    //         }
    //     });
    //     return remainCount;
    // };

}

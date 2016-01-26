function Root($scope) {
    // you can't write out the element itself as JSON,
    // because of circular object references,
    // so I'll just write out the inner html.
    $scope.elem = angular.element('div').html();
}

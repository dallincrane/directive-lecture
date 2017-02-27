angular.module('directiveLecture')
.controller('testCtrl', function ($scope) {
  $scope.test = 'working'
  $scope.firstName = 'Dallin'
  $scope.lastName = 'Crane'

  $scope.showName = function () {
    alert($scope.firstName + ' ' + $scope.lastName)
  }
})

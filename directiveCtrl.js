angular.module('directiveLecture')
.controller('directiveCtrl', function ($scope, dataService) {
  console.log($scope)
  console.log(dataService.data)
})

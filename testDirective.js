angular.module('directiveLecture')
.directive('testDirective', function () {
  function myLinkFn(scope, elem, attrs) {
    elem.css({ color: 'blue' })
  }

  return {
    templateUrl: './directiveTmpl.html',
    restrict: 'E',
    scope: {
      test: '@',
      alertMyName: '&',
      firstName: '=',
      lastName: '=',
    },
    link: myLinkFn,
    controller: 'directiveCtrl'
  }
})

// '=', '@', '&'

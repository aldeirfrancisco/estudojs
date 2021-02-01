angular.module('docsIsolationExample')

.directive('myCustomer', function() {
    return {
      restrict: 'E',
      scope: {
        nome:'=',
        customerInfo: '=info'
      },
      templateUrl: 'templateDretivas.html'
    };
  });
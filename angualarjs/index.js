angular.module('docsIsolationExample', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
  $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
  $scope.nome="aldeir"
  
}])
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
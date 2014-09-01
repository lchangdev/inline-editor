function InlineEditorController($scope) {
  // function will run when Angular runs ng-controller
  // $scope is a special object that makes its properties
  // available to the view as variables

  $scope.showtooltip = false;
  $scope.value = 'Edit me.';

  // helper functions
  $scope.hideTooltip = function(){
    $scope.showtooltip = false;
  }

  $scope.toggleTooltip = function(e){
    e.stopPropagation();
    $scope.showtooltip = !$scope.showtooltip;
  }
}

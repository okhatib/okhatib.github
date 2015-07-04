app.directive('singleComment', function(){
  return {
    restrict: 'E',
    scope: {
      comm: '='
    },
    templateUrl: 'js/directives/singleComment.html'
  };
});
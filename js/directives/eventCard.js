app.directive('eventCard', function(){
    return {
        restrict: 'E',
        scope: {
            event: '='
        },
        templateUrl: 'js/directives/eventCard.html'
    };
});
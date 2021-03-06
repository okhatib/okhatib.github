app.controller('ContentController', ['$scope', 'events', function($scope, events){
    //These details should come from the event service
    //include events as a dependency to the controller
    //include $routeParam as a dependency to the controller
    events.success(function(data){
        console.log(data);
//        $scope.events = data[$routeParam.eventId];
	$scope.eventDetails = data;
    });
    /*
    $scope.eventDetails = {
        user: {
            name: 'Returning User 1',
            img: 'img/user1.svg'
        },
        event: {
            title: '3eed melad 7amada',
            date: '25/07/2015',
            time: '07:00 PM',
            location: 'Beit 7amada',
            description: 'Event Description will go here Event Description will go here Event Description will go here Event Description will go here Event Description will go here'
        }
    };
    */
    
    //These comments should come from the comments service
    //include comments as a dependency to the controller
    /*
    comments.success(function(data){
        $scope.comments = data;
    });
    */
    $scope.comments = [
        {
            userName: 'Returning User 2',
            userImg: 'img/user2.svg',
            text: 'ana mesh hayenfa3 3aya el ma3ad da....momken ne5aly fe wa2t tany?',
            originalPoster: false
        },
        {
            userName: 'Returning User 1',
            userImg: 'img/user1.svg',
            text: 'howa enta kol mara keda! mesh 3ayzinak teegy asln :@',
            originalPoster: true
        },
        {
            userName: 'Returning User 3',
            userImg: 'img/user2.svg',
            text: 'ana bardo baktare7 ne3\'ayar el ma3ad',
            originalPoster: false
        }
    ];
}]);

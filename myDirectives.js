var app = angular.module('myDirectives', []);

app.directive('dirPending', function($q) {
	return {
		restrict: 'AE',
		templateUrl: 'http://38.media.tumblr.com/05087768293dd7ff414c45e950896b54/tumblr_n7gp5hz1RU1tq9q5vo1_500.gif'
		scope: {
			request: '&',
			equal: '='
		},
		
		link: function(scope, elem, attr) {
			elem.on('click', function() {
				elem.hide('slow');
				scope.request().then(function() {
					elem.show('slow')
				
				});
				
			
			})

			
		},
		controller: function($scope) {
			$scope.request
			console.log($scope);
			$scope.subBtn = true;
			$scope.toggleButton = function() {
				$scope.subBtn = !$scope.subBtn;
				console.log($scope.toggleButton)
			}

		} 
	}
})

app.directive('newDir', function($scope, $q) {


	return {

		scope: {
			title: '=',
			body: '=',
			icon: '='
		},

	link: function(scope, elem, attr) {
		var Notification = window.Notification || window.mozNotification || window.webkitNotification;
    Notification.requestPermission(function (permission) {
                console.log(permission);
            }),

    elem.click(function() {
    	var notification = Notifaction(scope.title,  {body: scope.body, icon: scope.icon})
    notifaction.onshow = function() {
    	setTimeout(notifaction.close.bind(notification))
    }
    })
	}
}

})
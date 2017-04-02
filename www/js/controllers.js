angular.module('app.controllers', [])


 
  
.controller('feedsCtrl', function($scope) {

})
   
.controller('addToInventoryCtrl', function($scope) {

})
   
.controller('chatCtrl', function($scope) {

})
   
.controller('inventoryCtrl', function($scope) {

})
   
.controller('requirementCtrl', function($scope) {

})
      
.controller('loginCtrl', function($scope,$ionicPopup,FireBaseFactory,$firebaseAuth, $location,$rootScope, $ionicLoading) {
	$scope.EnterASUOR = function(username,password){
			$ionicLoading.show({
				template: 'Please Wait...'
			});
            var FB = new Firebase("https://asuor-app.firebaseio.com/");
  		 	var fbAuth = $firebaseAuth(FB);
  	   		fbAuth.$authWithPassword({
           		email: username,
            	password: password
        	}).then(function(authData) {
           		 
				$location.path("/home/inventory").replace();
             $ionicLoading.hide();
             
       		}).catch(function(error) {
            	console.error("ERROR: " + error);
            	 $ionicLoading.hide();
                $ionicPopup.alert({
    					title: 'Sorry!!',
     					template: error

   					});

        });
	}

})
   
.controller('signUpCtrl', function($scope) {

})
 
angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.factory('FireBaseFactory', ["$firebaseArray",function($firebaseArray){
	var itemsRef = new Firebase("https://asuor-app.firebaseio.com/");
	return $firebaseArray(itemsRef);

}])
.service('BlankService', [function(){

}]);


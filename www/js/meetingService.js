//	meetingService.js

angular.module('meetingService',[])

.factory('meetingServiceFact',['$http','$q','$timeout',function($http,$q,$timeout){

var meetingServiceFact = {};

// meetingServiceFact.addMeetingToLacelStorage = () => {
// 	console.log('-------->addMeetingToLacelStorage-------->');
// };

meetingServiceFact.getMeetingToLacelStorage = function (){


var deferred = $q.defer();

$timeout(function(){

deferred.resolve('Jaga');

}, 1000000);


//	console.log('-------->getNewMeetingToLacelStorage-------->');
   return deferred.promise;
};

meetingServiceFact.deleteAllList = function (){
 $window.localStorage.clear();
   console.log('--------Delete all-------->');
};
//
// meetingServiceFact.deleteMeetingToLacelStorage = function (){
//   console.log('-------->deleteNewMeetingToLacelStorage-------->');
// };
//
// meetingServiceFact.checkMeetingToLacelStorage = function (){
//   console.log('-------->checkNewMeetingToLacelStorage-------->');
// };
return meetingServiceFact;

}])


.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },removeAll: function(){
        $window.localStorage.clear();
   console.log('--------Delete all-------->key');


    }
  }
}]);

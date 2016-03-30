angular.module('meetingHome', ['ionic','meetingService'])

.controller('meetingHomeCtrl', function($scope, $ionicPopup, meetingServiceFact, $localstorage) {
    $scope.meetingList={};
    $scope.callMeeting = function(dailNumber) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Call to number',
            template: 'Are you sure you want to call meeting?'
        });
        confirmPopup.then(function(res) {
            if (res) {
                if (window && window.plugins && window.plugins.CallNumber) {
                    window.plugins.CallNumber.callNumber('', '', dailNumber, true);
                    //return true;
                }
            }
        });
    };
    $scope.loadMeeting = function(){
        meetingJsonDataTotal = $localstorage.getObject('meetingLS');
                if (meetingJsonDataTotal && meetingJsonDataTotal.meeting) {
                    $scope.meetingList = meetingJsonDataTotal.meeting;
                };
                meetingServiceFact.addMeetingToLacelStorage();
                meetingServiceFact.getMeetingToLacelStorage();
                 meetingServiceFact.editMeetingToLacelStorage();
    };
    $scope.loadMeeting();
});
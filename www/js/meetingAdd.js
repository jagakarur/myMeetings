angular.module('meetingAdd', ['ionic', 'meetingService'])

.controller('meetingAddCtrl', function($scope, $ionicPopup, meetingServiceFact, $localstorage) {
    //addListItem(meetingName, dailNumber, meetingNumber, attendeeId)
    $scope.addListItem = function(meetingForm) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Save Meeting',
            template: 'Are you sure want to save meeting in local?'
        });

        confirmPopup.then(function(res) {
            if (res) {
                var meetingJsonDataTotal = {};
                var meetings = [];
                meetingJsonDataTotal = $localstorage.getObject('meetingLS');

                if (meetingJsonDataTotal && !meetingJsonDataTotal.meeting) {
                    meetingJsonDataTotal = {
                        meeting: [{
                            meetingName: meetingForm.meetingName,
                            dailNumber: meetingForm.dailNumber,
                            meetingNumber: meetingForm.meetingNumber,
                            attendeeId: meetingForm.attendeeId
                        }]
                    };
                    $localstorage.setObject('meetingLS', meetingJsonDataTotal);
                } else {
                    var meeting = {
                        meetingName: meetingForm.meetingName,
                        dailNumber: meetingForm.dailNumber,
                        meetingNumber: meetingForm.meetingNumber,
                        attendeeId: meetingForm.attendeeId
                    };
                    meetingJsonDataTotal.meeting.push(meeting);
                    $localstorage.setObject('meetingLS', meetingJsonDataTotal);
                };

            }
        });


    };

});
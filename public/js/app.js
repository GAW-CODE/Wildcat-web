var today = new Date();
var dd = today.getDate()+1;
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

today = mm + '/' + dd + '/' + yyyy;


angular.module("cuppaDatepicker",["cuppaDatepickerDirective"])
.controller("cuppaDatepickerController",function($scope){
        $scope.myDate = today;
        $scope.onDateSelect = function(dateVal){
            //alert(dateVal);
        }
});

angular.module("cuppaDatepicker",["cuppaDatepickerDirective"])
  .controller("cuppaDatepickerController",function ($scope) {
        $scope.myDate = expirationDate;
        $scope.onDateSelect = function(dateVal) {
            //alert(dateVal);
        }
});

(function () {
    'use strict';
    var app = angular.module('AppModule');
    app.controller('OnlineToolCtrl', ['$scope', function ($scope) {

        $scope.goExcelPreview = function (e) {
            e.preventDefault();
            angular.element("#excelTable").excelPreview();
        }
    }])
})(angular)
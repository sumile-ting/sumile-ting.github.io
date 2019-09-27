(function () {
    'use strict';
    var app = angular.module('AppModule');
    app.controller('OnlineToolCtrl', ['$scope', '$timeout', 'BaiduMapService', function ($scope, $timeout, BaiduMapService) {

        $scope.init = function() {
            $timeout(() => {
                $scope.map.addEventListener("click",function(e){
                    var position = {
                        lng: e.point.lng,
                        lat: e.point.lat
                    }
                    BaiduMapService.showLocations(position, $scope.map);
                });
            });
        }

        /**
         * 在线预览excel
         * @param e
         */
        $scope.goExcelPreview = function (e) {
            e.preventDefault();
            angular.element("#excelTable").excelPreview();
        }


        /**
         * 地图坐标转换
         * @param e
         */
        $scope.goCoordinateTranform = function (e) {
            e.preventDefault();
        }

    }])
})(angular)
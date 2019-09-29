(function () {
    'use strict';
    var app = angular.module('AppModule');
    app.controller('OnlineToolCtrl', ['$scope', '$timeout', 'BaiduMapService', 'Md5Service',
        function ($scope, $timeout, BaiduMapService, Md5Service) {

        $scope.init = function() {
            $timeout(() => initMapEvt());
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
         * 初始化地图点击事件
         */
        function initMapEvt() {
            $scope.map.addEventListener("click",function(e){
                var position = {
                    lon: e.point.lng,
                    lat: e.point.lat
                }
                BaiduMapService.showLocations(position, $scope.map);
            });
        }

        /**
         * 地图坐标转换
         * @param e
         */
        $scope.goCoordinateTranform = function (e) {
            e.preventDefault();

        }

        /**
         * 验证输入内容是否为lon,lat格式
         * @param inputVal
         * @returns {boolean}
         */
        function validate(inputVal) {
            let pattern = /[0-9]+(.[0-9]+)?[,][0-9]+(.[0-9]+)?/;
            if(pattern.test(inputVal)) return true;
            alert('请检查输入格式，格式为：经度,纬度');
            return false;
        }

        /**
         * 输入经纬度
         * @param e
         */
        $scope.enterLonLat = function (e, inputId) {
            let keycode = window.event ? e.keyCode : e.which;
            let inputVal = angular.element("#" + inputId).val();
            if (keycode == 13) {
                if(!validate(inputVal)) return;
                let lonlat = inputVal.split(',').map(id => parseFloat(id.trim()));
                if(inputId == 'bd09') {
                    let gcjLonLat = BaiduMapService.baiduToGcj(lonlat[1], lonlat[0]);
                    BaiduMapService.gcjToWgs(gcjLonLat.lat, gcjLonLat.lon);
                    BaiduMapService.addOverlay(lonlat[1], lonlat[0], $scope.map);
                } else if( inputId == 'gcj02') {
                    BaiduMapService.gcjToWgs(lonlat[1], lonlat[0]);
                    let bdLonLat = BaiduMapService.gcjToBd(lonlat[1], lonlat[0]);
                    BaiduMapService.addOverlay(bdLonLat.lat, bdLonLat.lon, $scope.map);
                } else if(inputId == 'wgs84') {
                    let gcjLonLat = BaiduMapService.wgsToGcj(lonlat[1], lonlat[0]);
                    let bdLonLat = BaiduMapService.gcjToBd(gcjLonLat.lat, gcjLonLat.lon);
                    BaiduMapService.addOverlay(bdLonLat.lat, bdLonLat.lon, $scope.map);
                }
            }

        }

        /**
         * 大地坐标转经纬度
         */
        $scope.transform = function () {
            let xy = $scope.daDiCoordinate;
            if(!validate(xy)) return;
            let xyArray = xy.split(',').map(id => parseFloat(id.trim()));
            let gcjLonLat = BaiduMapService.dadiToGcj(xyArray[1], xyArray[0]);
            angular.element('#gcj02').val(gcjLonLat.lon + ',' + gcjLonLat.lat);
            BaiduMapService.gcjToWgs(gcjLonLat.lat, gcjLonLat.lon);
            let bdLonLat = BaiduMapService.gcjToBd(gcjLonLat.lat, gcjLonLat.lon);
            BaiduMapService.addOverlay(bdLonLat.lat, bdLonLat.lon, $scope.map);
        }

        /**
         * MD5加密
         */
        $scope.md5Encode = function () {
            $scope.md5MiWen = Md5Service.hex_md5($scope.md5MingWen);
        }

        /**
         *
         */
        $scope.md5Decode = function () {

        }
    }])
})(angular)
(function(){
   'use strict';
   var app = angular.module('AppModule');
   app.directive('baiduMap', ['BaiduMapService', function (BaiduMapService) {

       function initBaiduMap() {
            var map = new BMap.Map("baiduMap");
            map.enableScrollWheelZoom(true);
           let getPositionSuccessFun = function(r) {
               if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    var position = {
                        lng: r.point.lng,
                        lat: r.point.lat
                    }
                    console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
                    BaiduMapService.showLocations(position, map);
                    map.centerAndZoom(new BMap.Point(r.point.lng, r.point.lat), 13);
               }

           };
           var geolocation = new BMap.Geolocation();
           geolocation.getCurrentPosition(getPositionSuccessFun,{
               enableHighAccuracy: true
           });
           return map;
        }
       return {
            restrict: 'A',
            require: '?ngModel',
            // scope: {},
            link: function (scope, element, attrs, ngModel) {
                if (!ngModel) return;
                let map = initBaiduMap();
                scope.map = map;
            }
       }
   }])
})()
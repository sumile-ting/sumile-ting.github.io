(function () {
   'use strict';
   var app = angular.module('AppModule');
   app.service('BaiduMapService', ['TransformUtil', function (TransformUtil) {

       	//清除覆盖物
        function remove_overlay(map){
            map.clearOverlays();
        };
       return {
           showLocations: function (position, map) {
                let lonlat = position.lng + ',' + position.lat;
                angular.element('#bd09').val(lonlat);
                let gcjLonLat = TransformUtil.bd_decrypt(position.lat, position.lng);
                angular.element('#gcj02').val(gcjLonLat.lon + ',' + gcjLonLat.lat);
                let wsgLonLat = TransformUtil.gcj_decrypt_exact(position.lat, position.lng);
                angular.element('#wgs84').val(wsgLonLat.lon + ',' +wsgLonLat.lat);
                let point = new BMap.Point(position.lng, position.lat);
                remove_overlay(map);
                var mk = new BMap.Marker(point);
                map.addOverlay(mk);
                map.panTo(point);
           }
       }
   }])
})()
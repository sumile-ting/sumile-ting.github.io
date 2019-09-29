(function () {
   'use strict';
   var app = angular.module('AppModule');
   app.service('BaiduMapService', ['TransformUtil', function (TransformUtil) {

       	//清除覆盖物
        function remove_overlay(map){
            map.clearOverlays();
        };

        //baidu 转 gcj
        function baiduToGcj(lat, lon) {
            let gcjLonLat = TransformUtil.bd_decrypt(lat, lon);
            angular.element('#gcj02').val(gcjLonLat.lon + ',' + gcjLonLat.lat);
            return gcjLonLat;
        };

        //Gcj 转 wgs
        function gcjToWgs(lat ,lon) {
            let wsgLonLat = TransformUtil.gcj_decrypt_exact(lat, lon);
            angular.element('#wgs84').val(wsgLonLat.lon + ',' + wsgLonLat.lat);
            return wsgLonLat;
        };

        //wgs 转 gcj
        function wgsToGcj(lat ,lon) {
            let wsgLonLat = TransformUtil.gcj_encrypt(lat, lon);
            angular.element('#wgs84').val(wsgLonLat.lon + ',' + wsgLonLat.lat);
            return wsgLonLat;
        };

        //Gcj 转 Baidu
        function gcjToBd(lat ,lon) {
            let bdLonLat = TransformUtil.bd_encrypt(lat, lon);
            angular.element('#bd09').val(bdLonLat.lon + ',' + bdLonLat.lat);
            return bdLonLat;
        };

        function dadiToGcj(X, Y) {
            return TransformUtil.mercator_decrypt(X, Y);
        }

        function addOverlay(lat, lon, map) {
            let point = new BMap.Point(lon, lat);
            remove_overlay(map);
            var mk = new BMap.Marker(point);
            map.addOverlay(mk);
            map.panTo(point);
        }

       return {
           showLocations: function (position, map) {
                let lonlat = position.lon + ',' + position.lat;
                angular.element('#bd09').val(lonlat);
                let gcjLonLat = baiduToGcj(position.lat, position.lon);
                gcjToWgs(gcjLonLat.lat, gcjLonLat.lon);
                addOverlay(position.lat, position.lon, map);

           },
           baiduToGcj: baiduToGcj,
           gcjToWgs: gcjToWgs,
           wgsToGcj: wgsToGcj,
           gcjToBd: gcjToBd,
           dadiToGcj: dadiToGcj,
           addOverlay: addOverlay
       }
   }])
})()
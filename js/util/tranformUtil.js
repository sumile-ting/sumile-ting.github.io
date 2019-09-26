(function () {
   'use strict';
   var app = angular.module('AppModule');
   app.service('TransformUtil', [function () {

            function TransformUtil() {}

            var service = new TransformUtil();

            const PI = 3.14159265358979324;
            const x_pi = 3.14159265358979324 * 3000.0 / 180.0;

            function delta(lat, lon) {
                var a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
                var ee = 0.00669342162296594323; //  ee: 椭球的偏心率。
                var dLat = transformLat(lon - 105.0, lat - 35.0);
                var dLon = transformLon(lon - 105.0, lat - 35.0);
                var radLat = lat / 180.0 * PI;
                var magic = Math.sin(radLat);
                magic = 1 - ee * magic * magic;
                var sqrtMagic = Math.sqrt(magic);
                dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * PI);
                dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * PI);
                return {
                    'lat': dLat,
                    'lon': dLon
                };
            }
            // two point's distance
            function distance(latA, lonA, latB, lonB) {
                var earthR = 6371000.;
                var x = Math.cos(latA * PI / 180.) * Math.cos(latB * PI / 180.) * Math.cos((lonA - lonB) * PI / 180);
                var y = Math.sin(latA * PI / 180.) * Math.sin(latB * PI / 180.);
                var s = x + y;
                if (s > 1) s = 1;
                if (s < -1) s = -1;
                var alpha = Math.acos(s);
                var distance = alpha * earthR;
                return distance;
            }

            function outOfChina(lat, lon) {
                if (lon < 72.004 || lon > 137.8347)
                    return true;
                if (lat < 0.8293 || lat > 55.8271)
                    return true;
                return false;
            }

            function transformLat(x, y) {
                var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
                ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
                ret += (20.0 * Math.sin(y * PI) + 40.0 * Math.sin(y / 3.0 * PI)) * 2.0 / 3.0;
                ret += (160.0 * Math.sin(y / 12.0 * PI) + 320 * Math.sin(y * PI / 30.0)) * 2.0 / 3.0;
                return ret;
            }

            function transformLon(x, y) {
                var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
                ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
                ret += (20.0 * Math.sin(x * PI) + 40.0 * Math.sin(x / 3.0 * PI)) * 2.0 / 3.0;
                ret += (150.0 * Math.sin(x / 12.0 * PI) + 300.0 * Math.sin(x / 30.0 * PI)) * 2.0 / 3.0;
                return ret;
            }

            //WGS-84 to GCJ-02
            function gcj_encrypt(wgsLat, wgsLon) {
                if (outOfChina(wgsLat, wgsLon))
                    return {
                        'lat': wgsLat,
                        'lon': wgsLon
                    };

                var d = delta(wgsLat, wgsLon);
                return {
                    'lat': wgsLat + d.lat,
                    'lon': wgsLon + d.lon
                };
            };
            //GCJ-02 to WGS-84
            TransformUtil.prototype.gcj_decrypt = function (gcjLat, gcjLon) {
                if (outOfChina(gcjLat, gcjLon))
                    return {
                        'lat': gcjLat,
                        'lon': gcjLon
                    };

                var d = delta(gcjLat, gcjLon);
                return {
                    'lat': gcjLat - d.lat,
                    'lon': gcjLon - d.lon
                };
            };
            //GCJ-02 to WGS-84 exactly
            TransformUtil.prototype.gcj_decrypt_exact = function (gcjLat, gcjLon) {
                var initDelta = 0.01;
                var threshold = 0.000000001;
                var dLat = initDelta,
                    dLon = initDelta;
                var mLat = gcjLat - dLat,
                    mLon = gcjLon - dLon;
                var pLat = gcjLat + dLat,
                    pLon = gcjLon + dLon;
                var wgsLat, wgsLon, i = 0;
                while (1) {
                    wgsLat = (mLat + pLat) / 2;
                    wgsLon = (mLon + pLon) / 2;
                    var tmp = gcj_encrypt(wgsLat, wgsLon)
                    dLat = tmp.lat - gcjLat;
                    dLon = tmp.lon - gcjLon;
                    if ((Math.abs(dLat) < threshold) && (Math.abs(dLon) < threshold))
                        break;

                    if (dLat > 0) pLat = wgsLat;
                    else mLat = wgsLat;
                    if (dLon > 0) pLon = wgsLon;
                    else mLon = wgsLon;

                    if (++i > 10000) break;
                }
                //console.log(i);
                return {
                    'lat': wgsLat,
                    'lon': wgsLon
                };
            };
            //GCJ-02 to BD-09
            TransformUtil.prototype.bd_encrypt = function (gcjLat, gcjLon) {
                var x = gcjLon,
                    y = gcjLat;
                var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
                var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
                var bdLon = z * Math.cos(theta) + 0.0065;
                var bdLat = z * Math.sin(theta) + 0.006;
                return {
                    'lat': bdLat,
                    'lon': bdLon
                };
            };
            //BD-09 to GCJ-02
            TransformUtil.prototype.bd_decrypt = function (bdLat, bdLon) {
                var x = bdLon - 0.0065,
                    y = bdLat - 0.006;
                var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
                var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
                var gcjLon = z * Math.cos(theta);
                var gcjLat = z * Math.sin(theta);
                return {
                    'lat': gcjLat,
                    'lon': gcjLon
                };
            };
            //WGS-84 to Web mercator
            //mercatorLat -> y mercatorLon -> x
            TransformUtil.prototype.mercator_encrypt = function (wgsLat, wgsLon) {
                    var x = wgsLon * 20037508.34 / 180.;
                    var y = Math.log(Math.tan((90. + wgsLat) * PI / 360.)) / (PI / 180.);
                    y = y * 20037508.34 / 180.;
                    return {
                        'lat': y,
                        'lon': x
                    };
                },
                // Web mercator to WGS-84
                // mercatorLat -> y mercatorLon -> x
                TransformUtil.prototype.mercator_decrypt = function (X, Y) {

                    var ProjNo;
                    var ZoneWide; //// 带宽
            //        double[] output = new double[2];
                    var longitude1, latitude1, longitude0, X0, Y0, xval, yval;// latitude0,
                    var e1, e2, f, a, ee, NN, T, C, M, D, R, u, fai, iPI;
                    iPI = 0.0174532925199433; //// 3.1415926535898/180.0;
                    // a = 6378245.0; f = 1.0/298.3; //54年北京坐标系参数
                    a = 6378140.0;
                    f = 1 / 298.257; // 80年西安坐标系参数
                    ZoneWide = 6; //// 6度带宽
                    ProjNo = Math.floor(X / 1000000); // 查找带号
                    longitude0 = ((ProjNo - 1) * ZoneWide) + (ZoneWide >> 1);
                    longitude0 = longitude0 * iPI; // 中央经线

                    X0 = ProjNo * 1000000 + 500000;
                    Y0 = 0;
                    xval = X - X0;
                    yval = Y - Y0; // 带内大地坐标
                    e2 = 2 * f - f * f;
                    e1 = (1.0 - Math.sqrt(1 - e2)) / (1.0 + Math.sqrt(1 - e2));
                    ee = e2 / (1 - e2);
                    M = yval;
                    u = M / (a * (1 - e2 / 4 - 3 * e2 * e2 / 64 - 5 * e2 * e2 * e2 / 256));
                    fai = u + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * u) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * u) + (151 * e1 * e1 * e1 / 96) * Math.sin(6 * u)
                            + (1097 * e1 * e1 * e1 * e1 / 512) * Math.sin(8 * u);
                    C = ee * Math.cos(fai) * Math.cos(fai);
                    T = Math.tan(fai) * Math.tan(fai);
                    NN = a / Math.sqrt(1.0 - e2 * Math.sin(fai) * Math.sin(fai));
                    R = a * (1 - e2) / Math.sqrt((1 - e2 * Math.sin(fai) * Math.sin(fai)) * (1 - e2 * Math.sin(fai) * Math.sin(fai)) * (1 - e2 * Math.sin(fai) * Math.sin(fai)));
                    D = xval / NN;
                    // 计算经度(Longitude) 纬度(Latitude)
                    longitude1 = longitude0 + (D - (1 + 2 * T + C) * D * D * D / 6 + (5 - 2 * C + 28 * T - 3 * C * C + 8 * ee + 24 * T * T) * D * D * D * D * D / 120) / Math.cos(fai);
                    latitude1 = fai - (NN * Math.tan(fai) / R) * (D * D / 2 - (5 + 3 * T + 10 * C - 4 * C * C - 9 * ee) * D * D * D * D / 24 + (61 + 90 * T + 298 * C + 45 * T * T - 256 * ee - 3 * C * C) * D * D * D * D * D * D / 720);

                    return {
                        'lat': latitude1 / iPI ,
                        'lon': longitude1/iPI
                    };
                }

            return service;
        }])

})()
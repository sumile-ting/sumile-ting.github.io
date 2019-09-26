(function () {
    'use strict';
    var app = angular.module('AppModule');
    app.config(['$stateProvider', function ($stateProvider) {
          var onlineToolState = {
            name: 'about',
            url: '/about',
            templateUrl: 'onlineTools/tlps/'
          }

          $stateProvider.state(onlineToolState);
    }])


})(angular)

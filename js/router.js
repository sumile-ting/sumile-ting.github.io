(function () {
    'use strict';
    var app = angular.module('AppMoudle');
    app.config(['$stateProvider', function ($stateProvider) {
          var onlineToolState = {
            name: 'about',
            url: '/about',
            templateUrl: 'onlineTools/tlps/'
          }

          $stateProvider.state(onlineToolState);
    }])


})(angular)
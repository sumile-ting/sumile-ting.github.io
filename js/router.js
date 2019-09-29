(function () {
    'use strict';
    var app = angular.module('AppModule');
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/online-tool');

          var onlineToolState = {
              name: 'online-tool',
              url: '/online-tool',
              controller: 'OnlineToolCtrl',
              templateUrl: 'views/onlineTools/tlps/index.html'
          }

          $stateProvider.state(onlineToolState);

          var about = {
              name: 'about',
              url: '/about',
              templateUrl: 'views/about/tlps/index.html'
          }

          $stateProvider.state(about);
    }])


})(angular)

(function () {
    'use strict';
    var app = angular.module('AppModule');
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/online-tool'); 
        
          var onlineToolState = {
            name: 'online-tool',
            url: '/online-tool',
            templateUrl: 'onlineTools/tlps/index.html'
          }

          $stateProvider.state(onlineToolState);
    }])


})(angular)

var myApp = angular.module('app', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('/home', {
            url: '/home',
            templateUrl: 'components/homepage.html'
        })
});

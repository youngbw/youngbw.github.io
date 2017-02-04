var myApp = angular.module('app', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/bracket');

    $stateProvider
        .state('/bracket', {
            url: '/bracket',
            templateUrl: 'components/bracketpage.html'
        })
        .state('/super', {
            url: '/super',
            templateUrl: 'components/superpage.html'
        })
        // .state('/team', {
        //     url: '/team',
        //     templateUrl: 'components/teampage.html'
        // })
        // .state('/likes', {
        //     url: '/likes',
        //     templateUrl: 'components/likes.html'
        // })
});

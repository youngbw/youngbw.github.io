var myApp = angular.module('app', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/team');

    $stateProvider

        .state('/team', {
            url: '/team',
            templateUrl: 'components/teampage.html'
        })
        // .state('/likes', {
        //     url: '/likes',
        //     templateUrl: 'components/likes.html'
        // })
});

angular.module('app').controller('TeamController', function($scope, $window) {

    $scope.matchups = [
        ['broncos', 'chargers']
    ];

    $scope.teams = {

        'broncos': {
            'pic': '/images/logos/broncos.svg',
            'jon': 0,
            'brent': 1,
            'name': 'Denver Broncos'
        },
        'chargers': {
            'pic': '/images/logos/chargers.svg',
            'jon': 1,
            'brent': 1,
            'name': 'San Diego Chargers'
        }

    };


});

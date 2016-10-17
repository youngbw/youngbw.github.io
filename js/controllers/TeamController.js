angular.module('app').controller('TeamController', function($scope, $window) {

    $scope.brent = {
        'picks': {
            'broncos': 0
        }
    };

    $scope.jon = {
        'picks': {
            'broncos': 1
        }
    };

    $scope.matchups = [
        ['broncos', 'chargers']
    ];


});

angular.module('app').controller('LikesController', function($scope) {

    $scope.analysts = ['brent', 'jon'];

    $scope.likes = {

        'brent': [
            {
                'name': 'Donte Moncrief',
                'pic': '/images/players/donte_moncrief.jpg',
                'opponent': 'titans'
            },
            {
                'name': 'Eli Rogers',
                'pic': '/images/players/eli_rogers.jpg',
                'opponent': 'browns'
            },
            {
                'name': 'Tyreek Hill',
                'pic': '/images/players/tyreek_hill.jpg',
                'opponent': 'buccaneers'
            }
        ],

        'jon': [
            {
                'name': 'Sterling Shepard',
                'pic': '/images/players/sterling_shepard.jpg',
                'opponent': 'browns'
            },
            {
                'name': 'Tevin Coleman',
                'pic': '/images/players/tevin_coleman.jpg',
                'opponent': 'cardinals'
            },
            {
                'name': 'DeVante Parker',
                'pic': '/images/players/devante_parker.jpg',
                'opponent': 'ers'
            }
        ]

    };

    $scope.dislikes = {

        'brent': [
            {
                'name': 'Giovani Bernard',
                'pic': '/images/players/giovani_bernard.jpg',
                'opponent': 'bills'
            },
            {
                'name': 'Cameron Brate',
                'pic': '/images/players/cameron_brate.jpg',
                'opponent': 'chiefs'
            },
            {
                'name': 'Carlos Hyde',
                'pic': '/images/players/carlos_hyde.jpg',
                'opponent': 'patriots'
            }
        ],

        'jon': [
            {
                'name': 'T.Y. Hilton',
                'pic': '/images/players/ty_hilton.jpg',
                'opponent': 'steelers'
            },
            {
                'name': 'Jason Witten',
                'pic': '/images/players/jason_witten.jpg',
                'opponent': 'redskins'
            },
            {
                'name': 'Tyler Eifert',
                'pic': '/images/players/tyler_eifert.jpg',
                'opponent': 'ravens'
            }
        ]

    };

});

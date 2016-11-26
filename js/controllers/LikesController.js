angular.module('app').controller('LikesController', function($scope) {

    $scope.analysts = ['brent', 'jon'];

    $scope.likes = {

        'brent': [
            {
                'name': 'Todd Gurley',
                'pic': '/images/players/todd_gurley.jpg',
                'opponent': 'saints'
            },
            {
                'name': 'Thomas Rawls',
                'pic': '/images/players/thomas_rawls.jpg',
                'opponent': 'buccaneers'
            },
            {
                'name': 'Kelvin Benjamin',
                'pic': '/images/players/kelvin_benjamin.jpg',
                'opponent': 'raiders'
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
                'name': 'Emmanuel Sanders',
                'pic': '/images/players/emmanuel_sanders.jpg',
                'opponent': 'chiefs'
            },
            {
                'name': 'LeGarrette Blount',
                'pic': '/images/players/legarrette_blount.jpg',
                'opponent': 'jets'
            },
            {
                'name': 'Mohamed Sanu',
                'pic': '/images/players/mohamed_sanu.jpg',
                'opponent': 'cardinals'
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

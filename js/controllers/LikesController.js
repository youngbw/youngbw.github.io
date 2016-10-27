angular.module('app').controller('LikesController', function($scope) {

    $scope.analysts = ['brent', 'jon'];

    $scope.likes = {

        'brent': [
            {
                'name': 'Michael Crabtree',
                'pic': '/images/players/michael_crabtree.jpg',
                'opponent': 'buccaneers'
            },
            {
                'name': 'Jaquizz Rodgers',
                'pic': '/images/players/jaquizz_rodgers.jpg',
                'opponent': 'raiders'
            },
            {
                'name': 'Devonte Booker',
                'pic': '/images/players/devonte_booker.jpg',
                'opponent': 'chargers'
            }
        ],

        'jon': [
            {
                'name': 'Ty Montgomery',
                'pic': '/images/players/ty_montgomery.jpg',
                'opponent': 'falcons'
            },
            {
                'name': 'Chris Thompson',
                'pic': '/images/players/chris_thompson.jpg',
                'opponent': 'bengals'
            },
            {
                'name': 'Seahawks DEF',
                'pic': '/images/players/seahawks_defense.jpg',
                'opponent': 'saints'
            }
        ]

    };

    $scope.dislikes = {

        'brent': [
            {
                'name': 'Melvin Gordon',
                'pic': '/images/players/melvin_gordon.jpg',
                'opponent': 'broncos'
            },
            {
                'name': 'Kelvin Benjamin',
                'pic': '/images/players/kelvin_benjamin.jpg',
                'opponent': 'cardinals'
            },
            {
                'name': 'Bears Running Backs (Jordan Howard)',
                'pic': '/images/players/jordan_howard.jpg',
                'opponent': 'vikings'
            }
        ],

        'jon': [
            {
                'name': 'DeAndre Hopkins',
                'pic': '/images/players/deandre_hopkins.jpg',
                'opponent': 'lions'
            },
            {
                'name': 'Matt Jones',
                'pic': '/images/players/matt_jones.jpg',
                'opponent': 'bengals'
            },
            {
                'name': 'Allen Robinson',
                'pic': '/images/players/allen_robinson.jpg',
                'opponent': 'titans'
            }
        ]

    };

});

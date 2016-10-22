angular.module('app').controller('LikesController', function($scope) {

    $scope.analysts = ['brent', 'jon'];

    $scope.likes = {

        'brent': [
            {
                'name': 'Cheifs Running Backs (Spencer Ware)',
                'pic': '/images/players/spencer_ware.jpg',
                'opponent': 'saints'
            },
            {
                'name': 'Hunter Henry',
                'pic': '/images/players/hunter_henry.jpg',
                'opponent': 'falcons'
            },
            {
                'name': 'Demarco Murray',
                'pic': '/images/players/demarco_murray.jpg',
                'opponent': 'colts'
            }
        ],

        'jon': [
            {
                'name': 'Marcus Mariota',
                'pic': '/images/players/marcus_mariota.jpg',
                'opponent': 'colts'
            },
            {
                'name': 'Kirk Cousins',
                'pic': '/images/players/kirk_cousins.jpg',
                'opponent': 'lions'
            },
            {
                'name': 'Jimmy Graham',
                'pic': '/images/players/jimmy_graham.jpg',
                'opponent': 'cardinals'
            }
        ]

    };

    $scope.dislikes = {

        'brent': [
            {
                'name': 'DeAndre Hopkins',
                'pic': '/images/players/deandre_hopkins.jpeg',
                'opponent': 'broncos'
            },
            {
                'name': 'All Eagles',
                'pic': '/images/players/ryan_mathews.jpeg',
                'opponent': 'vikings'
            },
            {
                'name': 'Jay Ajayi',
                'pic': '/images/players/jay_ajayi.jpg',
                'opponent': 'bills'
            }
        ],

        'jon': [
            {
                'name': 'Arian Foster',
                'pic': '/images/players/arian_foster.jpg',
                'opponent': 'bills'
            },
            {
                'name': 'Jets QB (Geno Smith)',
                'pic': '/images/players/geno_smith.jpeg',
                'opponent': 'ravens'
            },
            {
                'name': 'Matt Forte',
                'pic': '/images/players/matt_forte.jpg',
                'opponent': 'ravens'
            }
        ]

    };

});

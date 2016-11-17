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
                'name': 'Rishard Matthews',
                'pic': '/images/players/rishard_matthews.jpg',
                'opponent': 'rams'
            },
            {
                'name': 'Kirk Cousins',
                'pic': '/images/players/kirk_cousins.jpg',
                'opponent': 'packers'
            },
            {
                'name': 'DeAndre Hopkins',
                'pic': '/images/players/deandre_hopkins.jpg',
                'opponent': 'raiders'
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
                'name': 'Brandin Cooks',
                'pic': '/images/players/brandin_cooks.jpg',
                'opponent': 'panthers'
            },
            {
                'name': 'Kendall Wright',
                'pic': '/images/players/kendall_wright.jpg',
                'opponent': 'colts'
            },
            {
                'name': 'Matt Asiata',
                'pic': '/images/players/matt_asiata.jpg',
                'opponent': 'cardinals'
            }
        ]

    };

});

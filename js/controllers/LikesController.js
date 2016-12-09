angular.module('app').controller('LikesController', function($scope) {

    $scope.analysts = ['brent', 'jon'];

    $scope.likes = {

        'brent': [
            {
                'name': 'Demarco Murray',
                'pic': '/images/players/demarco_murray.jpg',
                'opponent': 'broncos'
            },
            {
                'name': 'Jameis Winston',
                'pic': '/images/players/jameis_winston.jpg',
                'opponent': 'saints'
            },
            {
                'name': 'Jamison Crowder',
                'pic': '/images/players/jamison_crowder.jpg',
                'opponent': 'eagles'
            }
        ],

         // 'jon': [
         //     {
         //         'name': 'Tim Hightower',
         //         'pic': '/images/players/tim_hightower.jpg',
         //         'opponent': 'lions'
         //     },
         //     {
         //         'name': 'Jameis Winston',
         //        'pic': '/images/players/jameis_winston.jpg',
         //        'opponent': 'chargers'
         //     },
         //     {
         //         'name': 'Cameron Brate',
         //         'pic': '/images/players/cameron_brate.jpg',
         //         'opponent': 'chargers'
         //     }
         // ]

    };

    $scope.dislikes = {

        'brent': [
            {
                'name': 'Legarrette Blount',
                'pic': '/images/players/l_blount.jpg',
                'opponent': 'ravens'
            },
            {
                'name': 'Ryan Tannehill',
                'pic': '/images/players/r_tannehill.jpg',
                'opponent': 'cardinals'
            },
            {
                'name': 'Dwayne Allen',
                'pic': '/images/players/d_allen.jpg',
                'opponent': 'texans'
            }
        ],

         // 'jon': [
         //     {
         //         'name': 'Jonathan Stewart',
         //         'pic': '/images/players/jonathan_stewart.jpg',
         //         'opponent': 'seahawks'
         //     },
         //     {
         //         'name': 'Vernon Davis',
         //         'pic': '/images/players/vernon_davis.jpg',
         //         'opponent': 'cardinals'
         //     },
         //     {
         //         'name': 'Emmanuel Sanders',
         //         'pic': '/images/players/emmanuel_sanders.jpg',
         //         'opponent': 'jaguars'
         //     }
         // ]

    };

});

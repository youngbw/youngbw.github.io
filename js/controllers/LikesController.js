angular.module('app').controller('LikesController', function($scope) {

    $scope.analysts = ['brent', 'jon'];

    $scope.likes = {

        'brent': [
            {
                'name': 'Legarrette Blount',
                'pic': '/images/players/l_blount.jpg',
                'opponent': 'broncos'
            },
            {
                'name': 'Sammy Watkins',
                'pic': '/images/players/sammy_watkins.jpg',
                'opponent': 'browns'
            },
            {
                'name': 'Desean Jackson',
                'pic': '/images/players/desean_jackson.jpg',
                'opponent': 'panthers'
            },
            {
                'name': 'Ladarius Green',
                'pic': '/images/players/l_green.jpg',
                'opponent': 'bengals'
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
                'name': 'Dak Prescott',
                'pic': '/images/players/dak_prescott.jpg',
                'opponent': 'buccaneers'
            },
            {
                'name': 'Tom Brady',
                'pic': '/images/players/tom_brady.jpg',
                'opponent': 'broncos'
            },
            {
                'name': 'Spencer Ware',
                'pic': '/images/players/s_ware.jpg',
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

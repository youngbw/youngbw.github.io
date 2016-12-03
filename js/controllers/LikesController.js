angular.module('app').controller('LikesController', function($scope) {

    $scope.analysts = ['brent', 'jon'];

    $scope.likes = {

        'brent': [
            {
                'name': 'Colin Kaepernick',
                'pic': '/images/players/colin_k.jpg',
                'opponent': 'bears'
            },
            {
                'name': 'Mike Evans',
                'pic': '/images/players/mike_evans.jpg',
                'opponent': 'chargers'
            },
            {
                'name': 'Andrew Luck',
                'pic': '/images/players/andrew_luck.jpg',
                'opponent': 'jets'
            }
        ],

         'jon': [
             {
                 'name': 'Tim Hightower',
                 'pic': '/images/players/tim_hightower.jpg',
                 'opponent': 'lions'
             },
             {
                 'name': 'Jameis Winston',
                'pic': '/images/players/jameis_winston.jpg',
                'opponent': 'chargers'
             },
             {
                 'name': 'Cameron Brate',
                 'pic': '/images/players/cameron_brate.jpg',
                 'opponent': 'chargers'
             }
         ]

    };

    $scope.dislikes = {

        'brent': [
            {
                'name': 'Eli Manning',
                'pic': '/images/players/eli_manning.jpg',
                'opponent': 'steelers'
            },
            {
                'name': 'Jay Ajayi',
                'pic': '/images/players/jay_ajayi.jpg',
                'opponent': 'ravens'
            },
            {
                'name': 'Randall Cobb',
                'pic': '/images/players/randall_cobb.jpg',
                'opponent': 'texans'
            }
        ],

         'jon': [
             {
                 'name': 'Jonathan Stewart',
                 'pic': '/images/players/jonathan_stewart.jpg',
                 'opponent': 'seahawks'
             },
             {
                 'name': 'Vernon Davis',
                 'pic': '/images/players/vernon_davis.jpg',
                 'opponent': 'cardinals'
             },
             {
                 'name': 'Emmanuel Sanders',
                 'pic': '/images/players/emmanuel_sanders.jpg',
                 'opponent': 'jaguars'
             }
         ]

    };

});

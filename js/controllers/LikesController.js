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

        // 'jon': [
        //     {
        //         'name': 'Sterling Shepard',
        //         'pic': '/images/players/sterling_shepard.jpg',
        //         'opponent': 'browns'
        //     },
        //     {
        //         'name': 'Tevin Coleman',
        //         'pic': '/images/players/tevin_coleman.jpg',
        //         'opponent': 'cardinals'
        //     },
        //     {
        //         'name': 'DeVante Parker',
        //         'pic': '/images/players/devante_parker.jpg',
        //         'opponent': 'ers'
        //     }
        // ]

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

        // 'jon': [
        //     {
        //         'name': 'T.Y. Hilton',
        //         'pic': '/images/players/ty_hilton.jpg',
        //         'opponent': 'steelers'
        //     },
        //     {
        //         'name': 'Jason Witten',
        //         'pic': '/images/players/jason_witten.jpg',
        //         'opponent': 'redskins'
        //     },
        //     {
        //         'name': 'Tyler Eifert',
        //         'pic': '/images/players/tyler_eifert.jpg',
        //         'opponent': 'ravens'
        //     }
        // ]

    };

});

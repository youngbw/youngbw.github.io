angular.module('app').controller('LikesController', function($scope) {

    $scope.analysts = ['brent', 'jon'];

    $scope.likes = {

        'brent': [
            {
                'name': 'Davante Adams',
                'pic': '/images/players/davante_adams.jpg',
                'opponent': 'colts'
            },
            {
                'name': 'Charcandrick West',
                'pic': '/images/players/charcandrick_west.jpg',
                'opponent': 'jaguars'
            },
            {
                'name': 'Ryan Tannehill',
                'pic': '/images/players/ryan_tannehill.jpg',
                'opponent': 'jets'
            }
        ],

        'jon': [
            {
                'name': 'Dak Prescott',
                'pic': '/images/players/dak_prescott.jpeg',
                'opponent': 'browns'
            },
            {
                'name': 'Quincy Enunwa',
                'pic': '/images/players/quincy_enunwa.jpg',
                'opponent': 'dolphins'
            },
            {
                'name': 'Austin Hooper',
                'pic': '/images/players/austin_hooper.jpg',
                'opponent': 'buccaneers'
            }
        ]

    };

    $scope.dislikes = {

        'brent': [
            {
                'name': 'Jordan Matthews',
                'pic': '/images/players/jordan_matthews.jpg',
                'opponent': 'giants'
            },
            {
                'name': 'Frank Gore',
                'pic': '/images/players/frank_gore.jpg',
                'opponent': 'packers'
            },
            {
                'name': 'Marvin Jones',
                'pic': '/images/players/marvin_jones.jpg',
                'opponent': 'vikings'
            }
        ],

        'jon': [
            {
                'name': 'Derek Carr',
                'pic': '/images/players/derek_carr.jpg',
                'opponent': 'broncos'
            },
            {
                'name': 'Allen Robinson',
                'pic': '/images/players/allen_robinson.jpg',
                'opponent': 'chiefs'
            },
            {
                'name': 'Doug Baldwin',
                'pic': '/images/players/doug_baldwin.jpg',
                'opponent': 'bills'
            }
        ]

    };

});

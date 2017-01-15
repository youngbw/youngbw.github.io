
angular.module('app').controller('BracketController', function($scope) {

    $scope.peeps = ['Brent', 'Jon', 'David', 'Steven'];

    $scope.currentPeep = 'Brent';

    $scope.brackets = {

        'Brent': [
            { // wildcard round
                'name': 'Wildcard Round',
                'games': [
                    { // game
                        'teams': [{'name': 'seahawks', 'winner': true}, {'name': 'lions', 'winner': false}],
                        'actualWinner': 'seahawks'
                    },
                    {
                        'teams': [{'name': 'steelers', 'winner': true}, {'name': 'dolphins', 'winner': false}],
                        'actualWinner': 'steelers'
                    },
                    {
                        'teams': [{'name': 'texans', 'winner': true}, {'name': 'raiders', 'winner': false}],
                        'actualWinner': 'texans'
                    },
                    {
                        'teams': [{'name': 'packers', 'winner': true}, {'name': 'giants', 'winner': false}],
                        'actualWinner': 'packers'
                    }
                ]
            },
            { // divisional round
                'name': 'Divisional Round',
                'games': [
                    { // game
                        'teams': [{'name': 'falcons', 'winner': true}, {'name': 'seahawks', 'winner': false}],
                        'actualWinner': 'falcons'
                    },
                    {
                        'teams': [{'name': 'cowboys', 'winner': true}, {'name': 'packers', 'winner': false}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'steelers', 'winner': true}, {'name': 'chiefs', 'winner': false}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'patriots', 'winner': true}, {'name': 'texans', 'winner': false}],
                        'actualWinner': ''
                    }
                ]
            },
            { // championship round
                'name': 'Championship Round',
                'games': [
                    { // game
                        'teams': [{'name': 'falcons', 'winner': true}, {'name': 'cowboys', 'winner': false}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'steelers', 'winner': true}, {'name': 'patriots', 'winner': false}],
                        'actualWinner': ''
                    }
                ]
            },
            { // superbowl
                'name': 'Superbowl',
                'games': [
                    { // game
                        'teams': [{'name': 'falcons', 'winner': true}, {'name': 'steelers', 'winner': false}],
                        'actualWinner': ''
                    }
                ]
            }
        ],
        'Jon': [
            { // wildcard round
                'name': 'Wildcard Round',
                'games': [
                    { // game
                        'teams': [{'name': 'seahawks', 'winner': true}, {'name': 'lions', 'winner': false}],
                        'actualWinner': 'seahawks'
                    },
                    {
                        'teams': [{'name': 'steelers', 'winner': true}, {'name': 'dolphins', 'winner': false}],
                        'actualWinner': 'steelers'
                    },
                    {
                        'teams': [{'name': 'texans', 'winner': false}, {'name': 'raiders', 'winner': true}],
                        'actualWinner': 'texans'
                    },
                    {
                        'teams': [{'name': 'packers', 'winner': true}, {'name': 'giants', 'winner': false}],
                        'actualWinner': 'packers'
                    }
                ]
            },
            { // divisional round
                'name': 'Divisional Round',
                'games': [
                    { // game
                        'teams': [{'name': 'falcons', 'winner': true}, {'name': 'seahawks', 'winner': false}],
                        'actualWinner': 'falcons'
                    },
                    {
                        'teams': [{'name': 'cowboys', 'winner': false}, {'name': 'packers', 'winner': true}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'steelers', 'winner': true}, {'name': 'chiefs', 'winner': false}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'patriots', 'winner': true}, {'name': 'raiders', 'winner': false}],
                        'actualWinner': ''
                    }
                ]
            },
            { // championship round
                'name': 'Championship Round',
                'games': [
                    { // game
                        'teams': [{'name': 'falcons', 'winner': true}, {'name': 'packers', 'winner': false}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'steelers', 'winner': true}, {'name': 'patriots', 'winner': false}],
                        'actualWinner': ''
                    }
                ]
            },
            { // superbowl
                'name': 'Superbowl',
                'games': [
                    { // game
                        'teams': [{'name': 'falcons', 'winner': true}, {'name': 'steelers', 'winner': false}],
                        'actualWinner': ''
                    }
                ]
            }
        ],
        'David': [
            { // wildcard round
                'name': 'Wildcard Round',
                'games': [
                    { // game
                        'teams': [{'name': 'seahawks', 'winner': true}, {'name': 'lions', 'winner': false}],
                        'actualWinner': 'seahawks'
                    },
                    {
                        'teams': [{'name': 'steelers', 'winner': false}, {'name': 'dolphins', 'winner': true}],
                        'actualWinner': 'steelers'
                    },
                    {
                        'teams': [{'name': 'texans', 'winner': true}, {'name': 'raiders', 'winner': false}],
                        'actualWinner': 'texans'
                    },
                    {
                        'teams': [{'name': 'packers', 'winner': true}, {'name': 'giants', 'winner': false}],
                        'actualWinner': 'packers'
                    }
                ]
            },
            { // divisional round
                'name': 'Divisional Round',
                'games': [
                    { // game
                        'teams': [{'name': 'falcons', 'winner': false}, {'name': 'seahawks', 'winner': true}],
                        'actualWinner': 'falcons'
                    },
                    {
                        'teams': [{'name': 'cowboys', 'winner': true}, {'name': 'packers', 'winner': false}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'texans', 'winner': false}, {'name': 'chiefs', 'winner': true}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'patriots', 'winner': true}, {'name': 'dolphins', 'winner': false}],
                        'actualWinner': ''
                    }
                ]
            },
            { // championship round
                'name': 'Championship Round',
                'games': [
                    { // game
                        'teams': [{'name': 'seahawks', 'winner': false}, {'name': 'cowboys', 'winner': true}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'chiefs', 'winner': true}, {'name': 'patriots', 'winner': false}],
                        'actualWinner': ''
                    }
                ]
            },
            { // superbowl
                'name': 'Superbowl',
                'games': [
                    { // game
                        'teams': [{'name': 'cowboys', 'winner': true}, {'name': 'chiefs', 'winner': false}],
                        'actualWinner': ''
                    }
                ]
            }
        ],
        'Steven': [
            { // wildcard round
                'name': 'Wildcard Round',
                'games': [
                    { // game
                        'teams': [{'name': 'seahawks', 'winner': false}, {'name': 'lions', 'winner': true}],
                        'actualWinner': 'seahawks'
                    },
                    {
                        'teams': [{'name': 'steelers', 'winner': true}, {'name': 'dolphins', 'winner': false}],
                        'actualWinner': 'steelers'
                    },
                    {
                        'teams': [{'name': 'texans', 'winner': true}, {'name': 'raiders', 'winner': false}],
                        'actualWinner': 'texans'
                    },
                    {
                        'teams': [{'name': 'packers', 'winner': false}, {'name': 'giants', 'winner': true}],
                        'actualWinner': 'packers'
                    }
                ]
            },
            { // divisional round
                'name': 'Divisional Round',
                'games': [
                    { // game
                        'teams': [{'name': 'falcons', 'winner': true}, {'name': 'lions', 'winner': false}],
                        'actualWinner': 'falcons'
                    },
                    {
                        'teams': [{'name': 'cowboys', 'winner': false}, {'name': 'giants', 'winner': true}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'steelers', 'winner': true}, {'name': 'chiefs', 'winner': false}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'patriots', 'winner': true}, {'name': 'texans', 'winner': false}],
                        'actualWinner': ''
                    }
                ]
            },
            { // championship round
                'name': 'Championship Round',
                'games': [
                    { // game
                        'teams': [{'name': 'falcons', 'winner': true}, {'name': 'giants', 'winner': false}],
                        'actualWinner': ''
                    },
                    {
                        'teams': [{'name': 'steelers', 'winner': false}, {'name': 'patriots', 'winner': true}],
                        'actualWinner': ''
                    }
                ]
            },
            { // superbowl
                'name': 'Superbowl',
                'games': [
                    { // game
                        'teams': [{'name': 'falcons', 'winner': true}, {'name': 'patriots', 'winner': false}],
                        'actualWinner': ''
                    }
                ]
            }
        ]
    };


});

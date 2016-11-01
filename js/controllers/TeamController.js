angular.module('app').controller('TeamController', function($scope, $window) {

    $scope.records = [
        {
            'name': 'Brent',
            'score': [18, 8, 2], //Brent
        },
        {
            'name': 'Jon',
            'score': [16, 10, 2], //Jon
        }
    ];

    $scope.matchups = [
        ['jaguars', 'titans'],
        ['redskins', 'bengals'], 
        ['chiefs', 'colts'], 
        ['cardinals', 'panthers'], 
        ['raiders', 'buccaneers'], 
        ['seahawks', 'saints'], 
        ['lions', 'texans'], 
        ['patriots', 'bills'], 
        ['jets', 'browns'], 
        ['chargers', 'broncos'], 
        ['packers', 'falcons'],
        ['eagles', 'cowboys'],
        ['vikings', 'bears']
    ];

    $scope.finished = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // 1 means game is finished for the week, index lines up with $scope.matchups

    $scope.teams = {

        'broncos': {
            'pic': '/images/logos/broncos.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Denver Broncos',
            'win': 1
        },
        'chargers': {
            'pic': '/images/logos/chargers.svg',
            'jon': 0,
            'brent': 0,
            'name': 'San Diego Chargers',
            'win': 0
        },
        'texans': {
            'pic': '/images/logos/texans.svg',
            'jon': 1,
            'brent': 0,
            'name': 'Houston Texans',
            'win': 1
        },
        'bears': {
            'pic': '/images/logos/bears.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Chicago Bears',
            'win': 1
        },
        'packers': {
            'pic': '/images/logos/packers.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Green Bay Packers',
            'win': 0
        },
        'giants': {
            'pic': '/images/logos/giants.svg',
            'jon': 0,
            'brent': 0,
            'name': 'New York Giants',
            'win': 0
        },
        'rams': {
            'pic': '/images/logos/rams.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Las Angelas Rams',
            'win': 0
        },
        'saints': {
            'pic': '/images/logos/saints.svg',
            'jon': 0,
            'brent': 0,
            'name': 'New Orleans Saints',
            'win': 1
        },
        'chiefs': {
            'pic': '/images/logos/chiefs.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Kansas City Chiefs',
            'win': 1
        },
        'colts': {
            'pic': '/images/logos/colts.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Indianapolis Colts',
            'win': 0
        },
        'titans': {
            'pic': '/images/logos/titans.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Tennessee Titans',
            'win': 1
        },
        'vikings': {
            'pic': '/images/logos/vikings.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Minnesota Vikings',
            'win': 0
        },
        'eagles': {
            'pic': '/images/logos/eagles.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Philidelphia Eagles',
            'win': 0
        },
        'browns': {
            'pic': '/images/logos/browns.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Cleveland Browns',
            'win': 0
        },
        'bengals': {
            'pic': '/images/logos/bengals.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Cincinatti Bengals',
            'win': 0
        },
        'redskins': {
            'pic': '/images/logos/redskins.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Washington Redskins',
            'win': 0
        },
        'lions': {
            'pic': '/images/logos/lions.svg',
            'jon': 0,
            'brent': 1,
            'name': 'Detriot Lions',
            'win': 0
        },
        'raiders': {
            'pic': '/images/logos/raiders.svg',
            'jon': 0,
            'brent': 1,
            'name': 'Oakland Raiders',
            'win': 1
        },
        'jaguars': {
            'pic': '/images/logos/jaguars.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Jacksonville Jaguars',
            'win': 0
        },
        'bills': {
            'pic': '/images/logos/bills.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Buffalo Bills',
            'win': 0
        },
        'dolphins': {
            'pic': '/images/logos/dolphins.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Miami Dolphins',
            'win': 0
        },
        'ravens': {
            'pic': '/images/logos/ravens.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Baltimore Ravens',
            'win': 0
        },
        'jets': {
            'pic': '/images/logos/jets.svg',
            'jon': 1,
            'brent': 1,
            'name': 'New York Jets',
            'win': 1
        },
        'buccaneers': {
            'pic': '/images/logos/buccaneers.svg',
            'jon': 1,
            'brent': 0,
            'name': 'Tampa Bay Buccaneers',
            'win': 0
        },
        'ers': {
            'pic': '/images/logos/49ers.svg',
            'jon': 0,
            'brent': 0,
            'name': 'San Francisco 49ers',
            'win': 0
        },
        'falcons': {
            'pic': '/images/logos/falcons.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Atlanta Falcons',
            'win': 1
        },
        'patriots': {
            'pic': '/images/logos/patriots.svg',
            'jon': 1,
            'brent': 1,
            'name': 'New England Patriots',
            'win': 1
        },
        'steelers': {
            'pic': '/images/logos/steelers.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Pittsburgh Steelers',
            'win': 0
        },
        'seahawks': {
            'pic': '/images/logos/seahawks.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Seattle Seahawks',
            'win': 0
        },
        'cardinals': {
            'pic': '/images/logos/cardinals.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Arizona Cardinals',
            'win': 0
        },
        'cowboys': {
            'pic': '/images/logos/cowboys.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Dallas Cowboys',
            'win': 1
        },
        'panthers': {
            'pic': '/images/logos/panthers.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Carolina Panthers',
            'win': 1
        }

    };


});

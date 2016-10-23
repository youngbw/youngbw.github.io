angular.module('app').controller('TeamController', function($scope, $window) {

    $scope.records = [
        {
            'name': 'Brent',
            'score': [3, 0], //Brent
        },
        {
            'name': 'Jon',
            'score': [3, 0], //Jon
        }
    ];

    $scope.matchups = [
        ['bears', 'packers'], //added to tally
        ['giants', 'rams'], //added
        ['saints', 'chiefs'],
        ['colts', 'titans'],
        ['vikings', 'eagles'],
        ['browns', 'bengals'],
        ['redskins', 'lions'],
        ['raiders', 'jaguars'],
        ['bills', 'dolphins'],
        ['ravens', 'jets'],
        ['buccaneers', 'ers'],
        ['chargers', 'falcons'],
        ['patriots', 'steelers'],
        ['seahawks', 'cardinals'],
        ['texans', 'broncos']
    ];

    $scope.finished = [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 1 means game is finished for the week, index lines up with $scope.matchups

    $scope.teams = {

        'broncos': {
            'pic': '/images/logos/broncos.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Denver Broncos',
            'win': 0
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
            'jon': 0,
            'brent': 0,
            'name': 'Houston Texans',
            'win': 0
        },
        'bears': {
            'pic': '/images/logos/bears.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Chicago Bears',
            'win': 0
        },
        'packers': {
            'pic': '/images/logos/packers.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Green Bay Packers',
            'win': 1
        },
        'giants': {
            'pic': '/images/logos/giants.svg',
            'jon': 1,
            'brent': 1,
            'name': 'New York Giants',
            'win': 1
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
            'jon': 1,
            'brent': 0,
            'name': 'New Orleans Saints',
            'win': 0
        },
        'chiefs': {
            'pic': '/images/logos/chiefs.svg',
            'jon': 0,
            'brent': 1,
            'name': 'Kansas City Chiefs',
            'win': 0
        },
        'colts': {
            'pic': '/images/logos/colts.svg',
            'jon': 0,
            'brent': 1,
            'name': 'Indianapolis Colts',
            'win': 0
        },
        'titans': {
            'pic': '/images/logos/titans.svg',
            'jon': 1,
            'brent': 0,
            'name': 'Tennessee Titans',
            'win': 0
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
            'win': 1
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
            'jon': 1,
            'brent': 1,
            'name': 'Detriot Lions',
            'win': 0
        },
        'raiders': {
            'pic': '/images/logos/raiders.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Oakland Raiders',
            'win': 0
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
            'jon': 1,
            'brent': 1,
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
            'jon': 1,
            'brent': 1,
            'name': 'Baltimore Ravens',
            'win': 0
        },
        'jets': {
            'pic': '/images/logos/jets.svg',
            'jon': 0,
            'brent': 0,
            'name': 'New York Jets',
            'win': 0
        },
        'buccaneers': {
            'pic': '/images/logos/buccaneers.svg',
            'jon': 1,
            'brent': 1,
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
        'chargers': {
            'pic': '/images/logos/chargers.svg',
            'jon': 0,
            'brent': 0,
            'name': 'San Diego Chargers',
            'win': 0
        },
        'falcons': {
            'pic': '/images/logos/falcons.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Atlanta Falcons',
            'win': 0
        },
        'patriots': {
            'pic': '/images/logos/patriots.svg',
            'jon': 1,
            'brent': 1,
            'name': 'New England Patriots',
            'win': 0
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
            'jon': 0,
            'brent': 0,
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
            'win': 0
        },
        'panthers': {
            'pic': '/images/logos/panthers.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Carolina Panthers',
            'win': 0
        }

    };


});

angular.module('app').controller('TeamController', function($scope, $window) {

    $scope.records = [
        {
            'name': 'Brent',
            'score': [0, 0], //Brent
        },
        {
            'name': 'Jon',
            'score': [0, 0], //Jon
        }
    ];

    $scope.matchups = [
        ['broncos', 'texans'],
        ['bears', 'packers'],
        ['giants', 'rams'],
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
        ['seahawks', 'cardinals']
    ];

    $scope.teams = {

        'broncos': {
            'pic': '/images/logos/broncos.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Denver Broncos'
        },
        'chargers': {
            'pic': '/images/logos/chargers.svg',
            'jon': 0,
            'brent': 0,
            'name': 'San Diego Chargers'
        },
        'texans': {
            'pic': '/images/logos/texans.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Houston Texans'
        },
        'bears': {
            'pic': '/images/logos/bears.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Chicago Bears'
        },
        'packers': {
            'pic': '/images/logos/packers.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Green Bay Packers'
        },
        'giants': {
            'pic': '/images/logos/giants.svg',
            'jon': 1,
            'brent': 1,
            'name': 'New York Giants'
        },
        'rams': {
            'pic': '/images/logos/rams.svg',
            'jon': 1,
            'brent': 0,
            'name': 'Las Angelas Rams'
        },
        'saints': {
            'pic': '/images/logos/saints.svg',
            'jon': 1,
            'brent': 0,
            'name': 'New Orleans Saints'
        },
        'chiefs': {
            'pic': '/images/logos/chiefs.svg',
            'jon': 0,
            'brent': 1,
            'name': 'Kansas City Chiefs'
        },
        'colts': {
            'pic': '/images/logos/colts.svg',
            'jon': 0,
            'brent': 1,
            'name': 'Indianapolis Colts'
        },
        'titans': {
            'pic': '/images/logos/titans.svg',
            'jon': 1,
            'brent': 0,
            'name': 'Tennessee Titans'
        },
        'vikings': {
            'pic': '/images/logos/vikings.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Minnesota Vikings'
        },
        'eagles': {
            'pic': '/images/logos/eagles.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Philidelphia Eagles'
        },
        'browns': {
            'pic': '/images/logos/browns.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Cleveland Browns'
        },
        'bengals': {
            'pic': '/images/logos/bengals.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Cincinatti Bengals'
        },
        'redskins': {
            'pic': '/images/logos/redskins.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Washington Redskins'
        },
        'lions': {
            'pic': '/images/logos/lions.svg',
            'jon': 0,
            'brent': 1,
            'name': 'Detriot Lions'
        },
        'raiders': {
            'pic': '/images/logos/raiders.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Oakland Raiders'
        },
        'jaguars': {
            'pic': '/images/logos/jaguars.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Jacksonville Jaguars'
        },
        'bills': {
            'pic': '/images/logos/bills.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Buffalo Bills'
        },
        'dolphins': {
            'pic': '/images/logos/dolphins.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Miami Dolphins'
        },
        'ravens': {
            'pic': '/images/logos/ravens.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Baltimore Ravens'
        },
        'jets': {
            'pic': '/images/logos/jets.svg',
            'jon': 0,
            'brent': 1,
            'name': 'New York Jets'
        },
        'buccaneers': {
            'pic': '/images/logos/buccaneers.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Tampa Bay Buccaneers'
        },
        'ers': {
            'pic': '/images/logos/49ers.svg',
            'jon': 0,
            'brent': 0,
            'name': 'San Francisco 49ers'
        },
        'chargers': {
            'pic': '/images/logos/chargers.svg',
            'jon': 0,
            'brent': 0,
            'name': 'San Diego Chargers'
        },
        'falcons': {
            'pic': '/images/logos/falcons.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Atlanta Falcons'
        },
        'patriots': {
            'pic': '/images/logos/patriots.svg',
            'jon': 1,
            'brent': 1,
            'name': 'New England Patriots'
        },
        'steelers': {
            'pic': '/images/logos/steelers.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Pittsburgh Steelers'
        },
        'seahawks': {
            'pic': '/images/logos/seahawks.svg',
            'jon': 0,
            'brent': 0,
            'name': 'Seattle Seahawks'
        },
        'cardinals': {
            'pic': '/images/logos/cardinals.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Arizona Cardinals'
        },
        'cowboys': {
            'pic': '/images/logos/cowboys.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Dallas Cowboys'
        },
        'panthers': {
            'pic': '/images/logos/panthers.svg',
            'jon': 1,
            'brent': 1,
            'name': 'Carolina Panthers'
        }
    };


});

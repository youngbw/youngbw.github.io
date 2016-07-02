angular.module('app').controller('MainController', function($scope) {

    $scope.positions = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF'];
    $scope.analysts = ['Brent Young', 'Jon Doyen'];

    var brent_ranks, jon_ranks;

    $scope.currentPosition = 'QB';
    $scope.currentAnalyst = 'Brent Young';

    $scope.ranks = {
        "Brent Young": {
            "K": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Stephen Gostkowski", "diff": 0, "position": "K"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "Mason Crosby", "diff": 4, "position": "K"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Chris Boswell", "diff": null, "position": "K"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "Brandon McManus", "diff": 1, "position": "K"}, {"sleeper": false, "rank": 4, "watcher": false, "player": "Graham Gano", "diff": -1, "position": "K"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Steven Hauschka", "diff": -3, "position": "K"}, {"sleeper": false, "rank": 6, "watcher": false, "player": "Chandler Catanzaro", "diff": -5, "position": "K"}, {"sleeper": false, "rank": 7, "watcher": false, "player": "Justin Tucker", "diff": -1, "position": "K"}, {"sleeper": false, "rank": 8, "watcher": false, "player": "Dan Bailey", "diff": 1, "position": "K"}, {"sleeper": false, "rank": 9, "watcher": false, "player": "Blair Walsh", "diff": -2, "position": "K"}, {"sleeper": false, "rank": 10, "watcher": false, "player": "josh Brown", "diff": 0, "position": "K"}, {"sleeper": false, "rank": 11, "watcher": false, "player": "Adam Vinatieri", "diff": -3, "position": "K"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "Cairo Santos", "diff": null, "position": "K"}, {"sleeper": false, "rank": 13, "watcher": false, "player": "Robbie Gould", "diff": -2, "position": "K"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Mike Nugent", "diff": 0, "position": "K"}, {"sleeper": false, "rank": 15, "watcher": false, "player": "Roberto Aguayo", "diff": 1, "position": "K"}, {"sleeper": false, "rank": 16, "watcher": false, "player": "Jash Lambo", "diff": null, "position": "K"}, {"sleeper": false, "rank": 17, "watcher": false, "player": "Jason Myers", "diff": null, "position": "K"}, {"sleeper": false, "rank": 18, "watcher": false, "player": "Sebastian Janikowski", "diff": -6, "position": "K"}, {"sleeper": false, "rank": 19, "watcher": false, "player": "Nick Folk", "diff": null, "position": "K"}, {"sleeper": false, "rank": 20, "watcher": false, "player": "Josh Scobee", "diff": -7, "position": "K"}, {"sleeper": false, "rank": 21, "watcher": false, "player": "Dustin Hopkins", "diff": null, "position": "K"}, {"sleeper": false, "rank": 22, "watcher": false, "player": "Matt Bryant", "diff": -7, "position": "K"}, {"sleeper": false, "rank": 23, "watcher": false, "player": "Greg Zeurlein", "diff": null, "position": "K"}, {"sleeper": false, "rank": 24, "watcher": false, "player": "Dan Carpenter", "diff": null, "position": "K"}, {"sleeper": false, "rank": 25, "watcher": false, "player": "Matt Prater", "diff": null, "position": "K"}, {"sleeper": false, "rank": 26, "watcher": false, "player": "Nick Novak", "diff": null, "position": "K"}, {"sleeper": false, "rank": 27, "watcher": false, "player": "Andrew Franks", "diff": null, "position": "K"}, {"sleeper": false, "rank": 28, "watcher": false, "player": "Phil Dawson", "diff": null, "position": "K"}, {"sleeper": false, "rank": 29, "watcher": false, "player": "Ryan Succop", "diff": null, "position": "K"}, {"sleeper": false, "rank": 30, "watcher": false, "player": "Cody Parkey", "diff": null, "position": "K"}, {"sleeper": false, "rank": 31, "watcher": false, "player": "Travis Coons", "diff": null, "position": "K"}],
            "QB": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Cam Newton", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "Aaron Rodgers", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Andrew Luck", "diff": 1, "position": "QB"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "Ben Roethlisberger", "diff": -1, "position": "QB"}, {"sleeper": false, "rank": 4, "watcher": false, "player": "Drew Brees", "diff": 1, "position": "QB"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Russel Wilson", "diff": -1, "position": "QB"}, {"sleeper": false, "rank": 6, "watcher": false, "player": "Tom Brady", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 7, "watcher": false, "player": "Carson Palmer", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 8, "watcher": true, "player": "Blake Bortles", "diff": 1, "position": "QB"}, {"sleeper": false, "rank": 9, "watcher": false, "player": "Eli Manning", "diff": 3, "position": "QB"}, {"sleeper": false, "rank": 10, "watcher": false, "player": "Philip Rivers", "diff": 1, "position": "QB"}, {"sleeper": false, "rank": 11, "watcher": false, "player": "Tony Romo", "diff": 2, "position": "QB"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "Derek Carr", "diff": -2, "position": "QB"}, {"sleeper": false, "rank": 13, "watcher": true, "player": "Jameis Winston", "diff": 1, "position": "QB"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Matt Ryan", "diff": 1, "position": "QB"}, {"sleeper": false, "rank": 15, "watcher": true, "player": "Andy Dalton", "diff": -7, "position": "QB"}, {"sleeper": false, "rank": 16, "watcher": false, "player": "Jay Cutler", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 17, "watcher": false, "player": "Tyrod Taylor", "diff": 2, "position": "QB"}, {"sleeper": false, "rank": 18, "watcher": false, "player": "Matthew Stafford", "diff": 2, "position": "QB"}, {"sleeper": false, "rank": 19, "watcher": true, "player": "Marcus Mariota", "diff": -2, "position": "QB"}, {"sleeper": false, "rank": 20, "watcher": false, "player": "Alex Smith", "diff": 2, "position": "QB"}, {"sleeper": false, "rank": 21, "watcher": false, "player": "Ryan Tannehill", "diff": -3, "position": "QB"}, {"sleeper": false, "rank": 22, "watcher": false, "player": "Ryan Fitzpatrick", "diff": 1, "position": "QB"}, {"sleeper": false, "rank": 23, "watcher": false, "player": "Brock Osweiler", "diff": 1, "position": "QB"}, {"sleeper": false, "rank": 24, "watcher": false, "player": "Sam Bradford", "diff": 1, "position": "QB"}, {"sleeper": false, "rank": 25, "watcher": false, "player": "Joe Flacco", "diff": -4, "position": "QB"}, {"sleeper": false, "rank": 26, "watcher": false, "player": "Robert Griffin III", "diff": 2, "position": "QB"}, {"sleeper": false, "rank": 27, "watcher": false, "player": "Blaine Gabbert", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 28, "watcher": true, "player": "Paxton Lynch", "diff": -2, "position": "QB"}, {"sleeper": false, "rank": 29, "watcher": true, "player": "Jared Goff", "diff": 0, "position": "QB"}],
            "WR": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Antonio Brown", "diff": 0, "position": "WR"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "Julio jones", "diff": 0, "position": "WR"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Odell Beckham Jr.", "diff": 0, "position": "WR"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "DeAndre Hopkins", "diff": 1, "position": "WR"}, {"sleeper": false, "rank": 4, "watcher": false, "player": "A.J. Green", "diff": -1, "position": "WR"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Jordy Nelson", "diff": 5, "position": "WR"}, {"sleeper": false, "rank": 6, "watcher": false, "player": "Dez Bryant", "diff": -1, "position": "WR"}, {"sleeper": false, "rank": 7, "watcher": false, "player": "Allen Robinson", "diff": 0, "position": "WR"}, {"sleeper": false, "rank": 8, "watcher": false, "player": "Alshon Jeffrey", "diff": -2, "position": "WR"}, {"sleeper": false, "rank": 9, "watcher": false, "player": "T.Y. hilton", "diff": -1, "position": "WR"}, {"sleeper": false, "rank": 10, "watcher": false, "player": "Kelvin Benjamin", "diff": 5, "position": "WR"}, {"sleeper": false, "rank": 11, "watcher": false, "player": "Demaryius Thomas", "diff": 0, "position": "WR"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "Mike Evans", "diff": -3, "position": "WR"}, {"sleeper": false, "rank": 13, "watcher": false, "player": "Keenan Allen", "diff": -1, "position": "WR"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Amari Cooper", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 15, "watcher": false, "player": "Randall Cobb", "diff": 3, "position": "WR"}, {"sleeper": false, "rank": 16, "watcher": false, "player": "Michael Floyd", "diff": -2, "position": "WR"}, {"sleeper": false, "rank": 17, "watcher": false, "player": "Brandon Marshall", "diff": -4, "position": "WR"}, {"sleeper": false, "rank": 18, "watcher": false, "player": "Sammy Watkins", "diff": 3, "position": "WR"}, {"sleeper": false, "rank": 19, "watcher": false, "player": "Brandin Cooks", "diff": -3, "position": "WR"}, {"sleeper": false, "rank": 20, "watcher": false, "player": "John Brown", "diff": 4, "position": "WR"}, {"sleeper": false, "rank": 21, "watcher": false, "player": "Julian Edelman", "diff": -4, "position": "WR"}, {"sleeper": false, "rank": 22, "watcher": false, "player": "Golden Tate", "diff": -2, "position": "WR"}, {"sleeper": false, "rank": 23, "watcher": false, "player": "Jarvis Landry", "diff": -4, "position": "WR"}, {"sleeper": false, "rank": 24, "watcher": false, "player": "Jeremy Maclin", "diff": 3, "position": "WR"}, {"sleeper": false, "rank": 25, "watcher": false, "player": "Emmanuel Sanders", "diff": -2, "position": "WR"}, {"sleeper": false, "rank": 26, "watcher": false, "player": "Doug Baldwin", "diff": -4, "position": "WR"}, {"sleeper": false, "rank": 27, "watcher": false, "player": "Allen Hurns", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 28, "watcher": false, "player": "Devante Parker", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 29, "watcher": false, "player": "Donte Moncrief", "diff": -4, "position": "WR"}, {"sleeper": true, "rank": 30, "watcher": true, "player": "Kevin White", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 31, "watcher": false, "player": "Eric Decker", "diff": -5, "position": "WR"}, {"sleeper": false, "rank": 32, "watcher": false, "player": "DeSean Jackson", "diff": -3, "position": "WR"}, {"sleeper": false, "rank": 33, "watcher": false, "player": "Sterling Shepard", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 34, "watcher": false, "player": "Corey Coleman", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 35, "watcher": false, "player": "Vincent Jackson", "diff": -5, "position": "WR"}, {"sleeper": true, "rank": 36, "watcher": false, "player": "Willie Sneed", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 37, "watcher": false, "player": "Michael Crabtree", "diff": -9, "position": "WR"}, {"sleeper": false, "rank": 38, "watcher": false, "player": "LaQuon Treadwell", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 39, "watcher": false, "player": "Jordan Matthews", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 40, "watcher": false, "player": "Tyler Lockett", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 41, "watcher": false, "player": "Tavon Austin", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 42, "watcher": false, "player": "Larry Fitzgerald", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 43, "watcher": false, "player": "Marvin Jones", "diff": null, "position": "WR"}, {"sleeper": true, "rank": 44, "watcher": true, "player": "Chris Hogan", "diff": null, "position": "WR"}, {"sleeper": false, "rank": 45, "watcher": false, "player": "Torrey Smith", "diff": null, "position": "WR"}],
            "RB": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Le'Veon Bell", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "David Johnson", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Todd Gurley", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "Adrian Peterson", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 4, "watcher": true, "player": "Eddie Lacy", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Doug Martin", "diff": 2, "position": "RB"}, {"sleeper": false, "rank": 6, "watcher": false, "player": "Lamar Miller", "diff": 2, "position": "RB"}, {"sleeper": false, "rank": 7, "watcher": true, "player": "Ezekiel Elliot", "diff": -1, "position": "RB"}, {"sleeper": false, "rank": 8, "watcher": false, "player": "Jamaal Charles", "diff": -3, "position": "RB"}, {"sleeper": false, "rank": 9, "watcher": true, "player": "CJ Anderson", "diff": 4, "position": "RB"}, {"sleeper": false, "rank": 10, "watcher": false, "player": "Thomas Rawls", "diff": 1, "position": "RB"}, {"sleeper": false, "rank": 11, "watcher": false, "player": "Mark Ingram", "diff": -1, "position": "RB"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "Devonta Freeman", "diff": -3, "position": "RB"}, {"sleeper": false, "rank": 13, "watcher": false, "player": "LeSean McCoy", "diff": -1, "position": "RB"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Latavius Murray", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 15, "watcher": false, "player": "DeMarco Murray", "diff": 2, "position": "RB"}, {"sleeper": false, "rank": 16, "watcher": false, "player": "Jeremy Hill", "diff": 4, "position": "RB"}, {"sleeper": false, "rank": 17, "watcher": false, "player": "Ryan Mathews", "diff": -2, "position": "RB"}, {"sleeper": false, "rank": 18, "watcher": false, "player": "Carlos Hyde", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 19, "watcher": false, "player": "Matt Forte", "diff": -3, "position": "RB"}, {"sleeper": false, "rank": 20, "watcher": false, "player": "Dion Lewis", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 21, "watcher": true, "player": "Melvin Gordon", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 22, "watcher": false, "player": "Jonathan Stewart", "diff": -3, "position": "RB"}, {"sleeper": false, "rank": 23, "watcher": true, "player": "Ameer Abdullah", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 24, "watcher": false, "player": "Frank Gore", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 25, "watcher": false, "player": "Jeremy Langford", "diff": -4, "position": "RB"}, {"sleeper": false, "rank": 26, "watcher": false, "player": "Giovanni Bernard", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 27, "watcher": false, "player": "Matt Jones", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 28, "watcher": false, "player": "Rashaad Jennings", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 29, "watcher": false, "player": "Jay Ajayi", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 30, "watcher": false, "player": "Danny Woodhead", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 31, "watcher": false, "player": "T.J. Yeldon", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 32, "watcher": false, "player": "Karlos Williams", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 33, "watcher": false, "player": "Derrick Henry", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 34, "watcher": false, "player": "Charles Sims", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 35, "watcher": false, "player": "Duke Johnson", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 36, "watcher": false, "player": "Tevin Coleman", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 37, "watcher": false, "player": "Justin Forsett", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 38, "watcher": false, "player": "Javorius Allen", "diff": null, "position": "RB"}, {"sleeper": false, "rank": 39, "watcher": false, "player": "Devontae Booker", "diff": null, "position": "RB"}],
            "TE": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Rob Gronkowski", "diff": 0, "position": "TE"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "Jordan Reed", "diff": 0, "position": "TE"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Greg Olsen", "diff": 0, "position": "TE"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "Tyler Eiffert", "diff": 2, "position": "TE"}, {"sleeper": false, "rank": 4, "watcher": false, "player": "Ledarius Green", "diff": 3, "position": "TE"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Coby Fleener", "diff": -2, "position": "TE"}, {"sleeper": false, "rank": 6, "watcher": false, "player": "Julius Thomas", "diff": 3, "position": "TE"}, {"sleeper": false, "rank": 7, "watcher": false, "player": "Delanie Walker", "diff": -1, "position": "TE"}, {"sleeper": false, "rank": 8, "watcher": false, "player": "Zach Ertz", "diff": 0, "position": "TE"}, {"sleeper": false, "rank": 9, "watcher": false, "player": "Travis Kelce", "diff": -5, "position": "TE"}, {"sleeper": true, "rank": 10, "watcher": true, "player": "Clive Walford", "diff": null, "position": "TE"}, {"sleeper": false, "rank": 11, "watcher": false, "player": "Antonio Gates", "diff": -1, "position": "TE"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "Dwayne Allen", "diff": null, "position": "TE"}, {"sleeper": false, "rank": 13, "watcher": false, "player": "Gary Barnidge", "diff": null, "position": "TE"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Eric Ebron", "diff": -2, "position": "TE"}, {"sleeper": false, "rank": 15, "watcher": false, "player": "Austin Seferian Jenkins", "diff": -4, "position": "TE"}, {"sleeper": false, "rank": 16, "watcher": false, "player": "Jordan Cameron", "diff": null, "position": "TE"}, {"sleeper": false, "rank": 17, "watcher": false, "player": "Martellus Bennett", "diff": -2, "position": "TE"}, {"sleeper": false, "rank": 18, "watcher": true, "player": "Jimmy Graham", "diff": -4, "position": "TE"}, {"sleeper": false, "rank": 19, "watcher": false, "player": "Charles Clay", "diff": null, "position": "TE"}, {"sleeper": false, "rank": 20, "watcher": false, "player": "Jared Cook", "diff": null, "position": "TE"}],
            "DEF": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Broncos", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "Cardinals", "diff": 2, "position": "DEF"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Seahawks", "diff": -2, "position": "DEF"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "Panthers", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 4, "watcher": false, "player": "Vikings", "diff": 3, "position": "DEF"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Texans", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 6, "watcher": false, "player": "Chiefs", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 7, "watcher": false, "player": "Rams", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 8, "watcher": false, "player": "Jets", "diff": -2, "position": "DEF"}, {"sleeper": false, "rank": 9, "watcher": false, "player": "Packers", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 10, "watcher": false, "player": "Steelers", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 11, "watcher": false, "player": "Bengals", "diff": 0, "position": "DEF"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "Jaguars", "diff": 4, "position": "DEF"}, {"sleeper": false, "rank": 13, "watcher": false, "player": "Patriots", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Raiders", "diff": 0, "position": "DEF"}, {"sleeper": false, "rank": 15, "watcher": false, "player": "Bills", "diff": -2, "position": "DEF"}, {"sleeper": false, "rank": 16, "watcher": false, "player": "Ravens", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 17, "watcher": false, "player": "Eagles", "diff": 3, "position": "DEF"}, {"sleeper": false, "rank": 18, "watcher": false, "player": "Lions", "diff": 0, "position": "DEF"}, {"sleeper": false, "rank": 19, "watcher": false, "player": "Colts", "diff": -4, "position": "DEF"}, {"sleeper": false, "rank": 20, "watcher": false, "player": "Redskins", "diff": 2, "position": "DEF"}, {"sleeper": false, "rank": 21, "watcher": false, "player": "Giants", "diff": 0, "position": "DEF"}, {"sleeper": false, "rank": 22, "watcher": false, "player": "Buccaneers", "diff": -3, "position": "DEF"}, {"sleeper": false, "rank": 23, "watcher": false, "player": "Cowboys", "diff": 5, "position": "DEF"}, {"sleeper": false, "rank": 24, "watcher": false, "player": "Bears", "diff": 0, "position": "DEF"}, {"sleeper": false, "rank": 25, "watcher": false, "player": "Falcons", "diff": -2, "position": "DEF"}, {"sleeper": false, "rank": 26, "watcher": false, "player": "Dolphins", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 27, "watcher": false, "player": "Chargers", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 28, "watcher": false, "player": "49ers", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 29, "watcher": false, "player": "Titans", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 30, "watcher": false, "player": "Saints", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 31, "watcher": false, "player": "Browns", "diff": 0, "position": "DEF"}],

        },

        "Jon Doyen": {
            "K": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Stephen Gostkowski", "diff": 0, "position": "K"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "Chandler Catanzaro", "diff": 5, "position": "K"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Steven Hauschka", "diff": 3, "position": "K"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "Graham Gano", "diff": 1, "position": "K"}, {"sleeper": false, "rank": 4, "watcher": false, "player": "Brandon McManus", "diff": -1, "position": "K"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Mason Crosby", "diff": -4, "position": "K"}, {"sleeper": false, "rank": 6, "watcher": false, "player": "Justin Tucker", "diff": 1, "position": "K"}, {"sleeper": false, "rank": 7, "watcher": false, "player": "Blair Walsh", "diff": 2, "position": "K"}, {"sleeper": false, "rank": 8, "watcher": false, "player": "Adam Vinatieri", "diff": 3, "position": "K"}, {"sleeper": false, "rank": 9, "watcher": false, "player": "Dan Bailey", "diff": -1, "position": "K"}, {"sleeper": false, "rank": 10, "watcher": false, "player": "Josh Brown", "diff": 0, "position": "K"}, {"sleeper": false, "rank": 11, "watcher": false, "player": "Robbie Gould", "diff": 2, "position": "K"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "Sebastian Janikowski ", "diff": 6, "position": "K"}, {"sleeper": false, "rank": 13, "watcher": false, "player": "Josh Scobee", "diff": 7, "position": "K"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Mike Nugent", "diff": 0, "position": "K"}, {"sleeper": false, "rank": 15, "watcher": false, "player": "Matt Bryant", "diff": 7, "position": "K"}, {"sleeper": false, "rank": 16, "watcher": false, "player": "Roberto Aguayo ", "diff": -1, "position": "K"}],
            "QB": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Cam Newton", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "Aaron Rodgers", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Ben Roethlisberger", "diff": 1, "position": "QB"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "Andrew Luck", "diff": -1, "position": "QB"}, {"sleeper": false, "rank": 4, "watcher": false, "player": "Russel Wilson", "diff": 1, "position": "QB"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Drew Brees", "diff": -1, "position": "QB"}, {"sleeper": false, "rank": 6, "watcher": false, "player": "Tom Brady", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 7, "watcher": false, "player": "Carson palmer", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 8, "watcher": false, "player": "Andy Dalton", "diff": 7, "position": "QB"}, {"sleeper": false, "rank": 9, "watcher": true, "player": "Blake Bortles", "diff": -1, "position": "QB"}, {"sleeper": false, "rank": 10, "watcher": true, "player": "Derek Carr", "diff": 2, "position": "QB"}, {"sleeper": false, "rank": 11, "watcher": false, "player": "Philip Rivers", "diff": -1, "position": "QB"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "Eli Manning", "diff": -3, "position": "QB"}, {"sleeper": false, "rank": 13, "watcher": false, "player": "Tony Romo", "diff": -2, "position": "QB"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Jameis Winston", "diff": -1, "position": "QB"}, {"sleeper": false, "rank": 15, "watcher": false, "player": "Matt Ryan", "diff": -1, "position": "QB"}, {"sleeper": false, "rank": 16, "watcher": true, "player": "Jay Cutler", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 17, "watcher": false, "player": "Marcus Mariota ", "diff": 2, "position": "QB"}, {"sleeper": false, "rank": 18, "watcher": false, "player": "Ryan Tannehill", "diff": 3, "position": "QB"}, {"sleeper": false, "rank": 19, "watcher": false, "player": "Tyrod Taylor ", "diff": -2, "position": "QB"}, {"sleeper": false, "rank": 20, "watcher": false, "player": "Matthew Stafford", "diff": -2, "position": "QB"}, {"sleeper": false, "rank": 21, "watcher": false, "player": "Joe Flacco", "diff": 4, "position": "QB"}, {"sleeper": false, "rank": 22, "watcher": false, "player": "Alex Smith", "diff": -2, "position": "QB"}, {"sleeper": false, "rank": 23, "watcher": false, "player": "Ryan Fitzpatrick", "diff": -1, "position": "QB"}, {"sleeper": false, "rank": 24, "watcher": false, "player": "Brock Osweiler", "diff": -1, "position": "QB"}, {"sleeper": false, "rank": 25, "watcher": false, "player": "Sam Bradford ", "diff": -1, "position": "QB"}, {"sleeper": false, "rank": 26, "watcher": true, "player": "Paxton Lynch", "diff": 2, "position": "QB"}, {"sleeper": false, "rank": 27, "watcher": false, "player": "Blaine Gabbert", "diff": 0, "position": "QB"}, {"sleeper": false, "rank": 28, "watcher": false, "player": "Robert Griffin III", "diff": -2, "position": "QB"}, {"sleeper": false, "rank": 29, "watcher": false, "player": "Jared Goff", "diff": 0, "position": "QB"}],
            "WR": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Antonio Brown", "diff": 0, "position": "WR"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "Julio Jones", "diff": 0, "position": "WR"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Odell Beckham Jr.", "diff": 0, "position": "WR"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "AJ Green", "diff": 1, "position": "WR"}, {"sleeper": false, "rank": 4, "watcher": false, "player": "DeAndre Hopkins", "diff": -1, "position": "WR"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Dez Bryant", "diff": 1, "position": "WR"}, {"sleeper": false, "rank": 6, "watcher": true, "player": "Alshon Jeffrey", "diff": 2, "position": "WR"}, {"sleeper": false, "rank": 7, "watcher": false, "player": "Allen Robinson ", "diff": 0, "position": "WR"}, {"sleeper": false, "rank": 8, "watcher": false, "player": "T.Y. Hilton", "diff": 1, "position": "WR"}, {"sleeper": false, "rank": 9, "watcher": false, "player": "Mike Evans", "diff": 3, "position": "WR"}, {"sleeper": false, "rank": 10, "watcher": true, "player": "Jordy Nelson", "diff": -5, "position": "WR"}, {"sleeper": false, "rank": 11, "watcher": false, "player": "Demaryius Thomas", "diff": 0, "position": "WR"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "Keenan Allen", "diff": 1, "position": "WR"}, {"sleeper": false, "rank": 13, "watcher": false, "player": "Brandon Marshall", "diff": 4, "position": "WR"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Michael Floyd", "diff": 2, "position": "WR"}, {"sleeper": false, "rank": 15, "watcher": false, "player": "Kelvin Benjamin ", "diff": -5, "position": "WR"}, {"sleeper": false, "rank": 16, "watcher": false, "player": "Brandin Cooks", "diff": 3, "position": "WR"}, {"sleeper": false, "rank": 17, "watcher": false, "player": "Julian Edelman", "diff": 4, "position": "WR"}, {"sleeper": false, "rank": 18, "watcher": false, "player": "Randall Cobb", "diff": -3, "position": "WR"}, {"sleeper": false, "rank": 19, "watcher": true, "player": "Jarvis Landry", "diff": 4, "position": "WR"}, {"sleeper": false, "rank": 20, "watcher": false, "player": "Golden Tate", "diff": 2, "position": "WR"}, {"sleeper": false, "rank": 21, "watcher": false, "player": "Sammy Watkins", "diff": -3, "position": "WR"}, {"sleeper": false, "rank": 22, "watcher": false, "player": "Doug Baldwin", "diff": 4, "position": "WR"}, {"sleeper": false, "rank": 23, "watcher": false, "player": "Emmanuel Sanders", "diff": 2, "position": "WR"}, {"sleeper": false, "rank": 24, "watcher": false, "player": "John Brown", "diff": -4, "position": "WR"}, {"sleeper": false, "rank": 25, "watcher": false, "player": "Donte Moncrief", "diff": 4, "position": "WR"}, {"sleeper": false, "rank": 26, "watcher": false, "player": "Eric Decker", "diff": 5, "position": "WR"}, {"sleeper": false, "rank": 27, "watcher": false, "player": "Jeremy Maclin", "diff": -3, "position": "WR"}, {"sleeper": false, "rank": 28, "watcher": false, "player": "Michael Crabtree", "diff": 9, "position": "WR"}, {"sleeper": false, "rank": 29, "watcher": false, "player": "DeSean Jackson", "diff": 3, "position": "WR"}, {"sleeper": false, "rank": 30, "watcher": false, "player": "Vincent Jackson", "diff": 5, "position": "WR"}],
            "RB": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Le'Veon Bell", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "David Johnson", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Todd Gurley", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "Adrian Peterson", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 4, "watcher": true, "player": "Eddie Lacy", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Jamaal Charles", "diff": 3, "position": "RB"}, {"sleeper": false, "rank": 6, "watcher": false, "player": "Ezekiel Elliot", "diff": 1, "position": "RB"}, {"sleeper": false, "rank": 7, "watcher": false, "player": "Doug Martin", "diff": -2, "position": "RB"}, {"sleeper": false, "rank": 8, "watcher": false, "player": "Lamar Miller", "diff": -2, "position": "RB"}, {"sleeper": false, "rank": 9, "watcher": false, "player": "Devonta Freeman", "diff": 3, "position": "RB"}, {"sleeper": false, "rank": 10, "watcher": false, "player": "Mark Ingram", "diff": 1, "position": "RB"}, {"sleeper": false, "rank": 11, "watcher": true, "player": "Thomas Rawls", "diff": -1, "position": "RB"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "LeSean McCoy", "diff": 1, "position": "RB"}, {"sleeper": false, "rank": 13, "watcher": false, "player": "CJ Anderson", "diff": -4, "position": "RB"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Latavius Murray ", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 15, "watcher": false, "player": "Ryan Mathews", "diff": 2, "position": "RB"}, {"sleeper": false, "rank": 16, "watcher": false, "player": "Matt Forte", "diff": 3, "position": "RB"}, {"sleeper": false, "rank": 17, "watcher": false, "player": "DeMarco Murray", "diff": -2, "position": "RB"}, {"sleeper": false, "rank": 18, "watcher": false, "player": "Carlos Hyde", "diff": 0, "position": "RB"}, {"sleeper": false, "rank": 19, "watcher": false, "player": "Jonathan Stewart", "diff": 3, "position": "RB"}, {"sleeper": false, "rank": 20, "watcher": false, "player": "Jeremy Hill", "diff": -4, "position": "RB"}, {"sleeper": false, "rank": 21, "watcher": false, "player": "Jeremy Langford", "diff": 4, "position": "RB"}],
            "TE": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Rob Gronkowski ", "diff": 0, "position": "TE"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "Jordan Reed", "diff": 0, "position": "TE"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Greg Olsen", "diff": 0, "position": "TE"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "Coby Fleener", "diff": 2, "position": "TE"}, {"sleeper": false, "rank": 4, "watcher": false, "player": "Travis Kelce", "diff": 5, "position": "TE"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Tyler Eiffert", "diff": -2, "position": "TE"}, {"sleeper": false, "rank": 6, "watcher": false, "player": "Delanie Walker", "diff": 1, "position": "TE"}, {"sleeper": false, "rank": 7, "watcher": false, "player": "Ledarius Green", "diff": -3, "position": "TE"}, {"sleeper": false, "rank": 8, "watcher": false, "player": "Zach Ertz", "diff": 0, "position": "TE"}, {"sleeper": false, "rank": 9, "watcher": false, "player": "Julius Thomas", "diff": -3, "position": "TE"}, {"sleeper": false, "rank": 10, "watcher": false, "player": "Antonio Gates", "diff": 1, "position": "TE"}, {"sleeper": true, "rank": 11, "watcher": false, "player": "Austin Seferian Jenkins", "diff": 4, "position": "TE"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "Eric Ebron", "diff": 2, "position": "TE"}, {"sleeper": false, "rank": 13, "watcher": false, "player": "Jason Witten", "diff": null, "position": "TE"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Jimmy Graham", "diff": 4, "position": "TE"}, {"sleeper": false, "rank": 15, "watcher": false, "player": "Martellus Bennett", "diff": 2, "position": "TE"}],
            "DEF": [{"sleeper": false, "rank": 0, "watcher": false, "player": "Seahawks", "diff": 2, "position": "DEF"}, {"sleeper": false, "rank": 1, "watcher": false, "player": "Broncos", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 2, "watcher": false, "player": "Panthers ", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 3, "watcher": false, "player": "Cardinals", "diff": -2, "position": "DEF"}, {"sleeper": false, "rank": 4, "watcher": false, "player": "Texans ", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 5, "watcher": false, "player": "Chiefs", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 6, "watcher": false, "player": "Jets", "diff": 2, "position": "DEF"}, {"sleeper": false, "rank": 7, "watcher": false, "player": "Vikings", "diff": -3, "position": "DEF"}, {"sleeper": false, "rank": 8, "watcher": false, "player": "Rams", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 9, "watcher": false, "player": "Steelers", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 10, "watcher": false, "player": "Packers", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 11, "watcher": false, "player": "Bengals", "diff": 0, "position": "DEF"}, {"sleeper": false, "rank": 12, "watcher": false, "player": "Patriots", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 13, "watcher": false, "player": "Bills", "diff": 2, "position": "DEF"}, {"sleeper": false, "rank": 14, "watcher": false, "player": "Raiders", "diff": 0, "position": "DEF"}, {"sleeper": false, "rank": 15, "watcher": false, "player": "Colts", "diff": 4, "position": "DEF"}, {"sleeper": false, "rank": 16, "watcher": false, "player": "Jaguars", "diff": -4, "position": "DEF"}, {"sleeper": false, "rank": 17, "watcher": false, "player": "Ravens", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 18, "watcher": false, "player": "Lions", "diff": 0, "position": "DEF"}, {"sleeper": false, "rank": 19, "watcher": false, "player": "Buccaneers", "diff": 3, "position": "DEF"}, {"sleeper": false, "rank": 20, "watcher": false, "player": "Eagles", "diff": -3, "position": "DEF"}, {"sleeper": false, "rank": 21, "watcher": false, "player": "Giants", "diff": 0, "position": "DEF"}, {"sleeper": false, "rank": 22, "watcher": false, "player": "Redskins", "diff": -2, "position": "DEF"}, {"sleeper": false, "rank": 23, "watcher": false, "player": "Falcons", "diff": 2, "position": "DEF"}, {"sleeper": false, "rank": 24, "watcher": false, "player": "Bears", "diff": 0, "position": "DEF"}, {"sleeper": false, "rank": 25, "watcher": false, "player": "Dolphins", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 26, "watcher": false, "player": "Chargers", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 27, "watcher": false, "player": "49ers", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 28, "watcher": false, "player": "Cowboys", "diff": -5, "position": "DEF"}, {"sleeper": false, "rank": 29, "watcher": false, "player": "Saints", "diff": 1, "position": "DEF"}, {"sleeper": false, "rank": 30, "watcher": false, "player": "Titans", "diff": -1, "position": "DEF"}, {"sleeper": false, "rank": 31, "watcher": false, "player": "Browns", "diff": 0, "position": "DEF"}],

        }

    };


});

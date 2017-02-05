angular.module('app').controller('SuperController', function($scope) {

	var peeps = ['Dustin', 'Brent', 'Brian', 'Chase', 'Perry'];
	var colors = ['pink', 'gold', 'aqua', 'forestgreen', 'red'];

	$scope.team1 = {
		nums: [[6, 7], [3, 0], [2, 5], [8, 4], [1, 9]],
		name: 'Patriots',
		pic: 'images/patriots_super.jpg'
	};

	$scope.team2 =  {
		nums: [[2, 3], [6, 0], [1, 9], [4, 8], [5, 7]],
		name: 'Falcons',
		pic: 'images/falcons_super.jpg'
	};

	$scope.squares = [
		['Brent', 'Brian', 'Dustin', 'Perry', 'Brian'],
		['Dustin', 'Perry', 'Brent', 'Brian', 'Chase'],
		['Perry', 'Dustin', 'Brian', 'Chase', 'Brent'],
		['Perry', 'Chase', 'Chase', 'Dustin', 'Brian'],
		['Chase', 'Brent', 'Dustin', 'Brent', 'Perry']
	];

});
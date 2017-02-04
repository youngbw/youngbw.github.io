angular.module('app').controller('SuperController', function($scope) {


	$scope.team1 = {
		nums: [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]],
		name: 'Patriots',
		pic: 'images/patriots_super.jpg'
	};

	$scope.team2 =  {
		nums: [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]],
		name: 'Falcons',
		pic: 'images/falcons_super.jpg'
	};

	$scope.squares = [
		['Brent', 'Chase', 'Perry', 'Brian', 'Brent'],
		['Brent', 'Chase', 'Perry', 'Brian', 'Brent'],
		['Brent', 'Chase', 'Perry', 'Brian', 'Brent'],
		['Brent', 'Chase', 'Perry', 'Brian', 'Brent'],
		['Brent', 'Chase', 'Perry', 'Brian', 'Brent']
	];

});
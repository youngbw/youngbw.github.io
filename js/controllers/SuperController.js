angular.module('app').controller('SuperController', function($scope) {

	var peeps = ['Dustin', 'Brent', 'Brian', 'Chase', 'Perry'];

	$scope.team1 = {
		nums: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
		name: 'Patriots',
		pic: 'images/patriots_super.jpg'
	};

	$scope.team2 =  {
		nums: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
		name: 'Falcons',
		pic: 'images/falcons_super.jpg'
	};

	$scope.squares = [
		['Brent', '', '', 'Perry', 'Brian'],
		['Dustin', 'Perry', 'Brent', 'Brian', 'Chase'],
		['', 'Dustin', 'Brian', '', 'Brent'],
		['Perry', 'Chase', 'Chase', 'Dustin', 'Brian'],
		['Chase', 'Brent', 'Dustin', '', 'Perry']
	];

});
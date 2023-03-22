calcApp.controller('creatureTableCtrl', function($scope) {
    $scope.creatures = []
    $scope.newName = ''

    $scope.addCreature = function() {
        console.log($scope.newName)
        $scope.creatures.push({
            name: $scope.newName,
            number: 0,
            n_groups: 0
        });
    }

    $scope.proceed = function() {
        document.getElementById("creatureEntryTable").style.display = "none"
        document.getElementById("playerEntryTable").style.display = "block"
    }
});

calcApp.controller('playerTableCtrl', function($scope) {
    $scope.players = []
    $scope.newName = ''

    $scope.addPlayer = function() {
        $scope.players.push($scope.newName)
    }

    $scope.proceed = function() {

    }
});
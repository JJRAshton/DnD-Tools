calcApp.controller('creatureTableCtrl', function($scope) {
    $scope.creatures = []
    $scope.newName = ''

    $scope.addCreature = function() {
        $scope.creatures.push({
            name: $scope.newName,
            number: 0,
            n_groups: 0
        });
    }

    $scope.proceed = function() {
        document.getElementById("creatureEntryTable").style.display = "none"
        document.getElementById("playerEntryTable").style.display = "block"

        $scope.processCreatureGroups($scope.creatures)
    }
});

calcApp.controller('playerTableCtrl', function($scope) {
    $scope.players = []
    $scope.newName = ''

    $scope.addPlayer = function() {
        $scope.players.push($scope.newName)
    }

    $scope.proceed = function() {
        document.getElementById("playerEntryTable").style.display = "none"
        document.getElementById("creatureInitTable").style.display = "block"
        document.getElementById("playerInitTable").style.display = "block"

        $scope.processPlayers($scope.players)
    }
});
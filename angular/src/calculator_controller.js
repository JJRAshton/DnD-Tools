const calcApp = angular.module("calculator", [])

calcApp.controller('calculatorCtrl', function($scope) {
    $scope.functions = new CalculatorFunctions()

    $scope.proceed = function() {
        document.getElementById("creatureInitTable").style.display = "none"
        document.getElementById("playerInitTable").style.display = "none"
        document.getElementById("summaryScreen").style.display = "block"
    }

    $scope.processCreatureGroups = function(tableData) {
        $scope.creatureGroups = $scope.functions.allocateCreatureGroups(tableData)
    }

    $scope.processPlayers = function(names) {
        $scope.players = {}
        for (let name of names) {
            $scope.players[name] = {
                name: name,
                initRoll: 0
            }
        }
    }
});
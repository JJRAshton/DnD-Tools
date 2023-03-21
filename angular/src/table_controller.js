let entryApp = angular.module("entryTables", [])

entryApp.controller('tableCtrl', function($scope) {
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

    }
});
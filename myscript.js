angular.module('myApp', [])
    .controller('myAppController', function($scope) {
        $scope.users = [
            {"name":"taguchi", "score":52.22},
            {"name":"tanaka", "score":38.22},
            {"name":"yamada", "score":11.11}
        ];
        $scope.today = new Date();
    });

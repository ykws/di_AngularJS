angular.module('myApp', [])
    .controller('myAppController', function() {
        var myAppCtrl = this;
        myAppCtrl.users = [
            {"name":"taguchi", "score":52.22},
            {"name":"tanaka", "score":38.22},
            {"name":"yamada", "score":11.11}
        ];
    });

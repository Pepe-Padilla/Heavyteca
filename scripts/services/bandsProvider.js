
angular
    .module("heavyteca")
    .service("bandsProvider", function($http) {
        this.getBands = function() {
                return $http.get("data/bands.json");
        };
    });
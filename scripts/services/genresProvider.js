
angular
    .module("heavyteca")
    .service("genresProvider", function($http) {
        this.getGenres = function() {
            return $http.get("data/genres.json");
        };
    });
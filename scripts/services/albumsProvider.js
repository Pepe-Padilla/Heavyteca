
angular
    .module("heavyteca")
    .service("albumsProvider", function($http) {
        this.getAlbums = function() {
            return $http.get("data/albums.json");
        };
    });

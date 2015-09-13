angular
    .module("heavyteca")
    .directive("genreItem", ["favoriteManager", "literales", function(favoriteManager, literales){
        return {
            restrict: "AE",
            templateUrl: "views/genre.html",
            scope: {
                dato: "=",
                favorite: "="
                //ngClick: "&"
            },
            link: function(scope) {
                scope.toggleGenresFavorite = function (id) {
                    scope.favorite[id] = favoriteManager.toggleFavorite(literales.genresFavorite,id);
                };
            }
        }
    }]);
angular
    .module("heavyteca")
    .directive("bandItem", ["favoriteManager", "literales", function(favoriteManager, literales){
        return {
            retrict: "AE",
            templateUrl: "views/band.html",
            scope: {
                dato: "=",
                favorite: "="
                //ngClick: "&"
            },
            link: function(scope) {
                scope.toggleBandFavorite = function (id) {
                    scope.favorite[id] = favoriteManager.toggleFavorite(literales.bandsFavorite,id);
                };
            }
        }
    }]);
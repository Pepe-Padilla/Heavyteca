angular
    .module("heavyteca")
    .directive("albumItem", ["favoriteManager", "literales", function(favoriteManager, literales){
        return {
            retrict: "AE",
            templateUrl: "views/album.html",
            scope: {
                dato: "=",
                favorite: "="
                //ngClick: "&"
            },
            link: function(scope) {
                scope.toggleAlbumFavorite = function (id) {
                    scope.favorite[id] = favoriteManager.toggleFavorite(literales.albumsFavorite,id);
                };
            }
        }
    }]);
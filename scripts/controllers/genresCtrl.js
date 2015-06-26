
angular
    .module("heavyteca")
    .controller("genresCtrl",
    ["$scope", "genres", "favoriteManager", "literales", function( $scope, genres, favoriteManager, literales ) {

        $scope.genres = genres.data;

        $scope.dataFavorites = favoriteManager.dataFavorites(literales.genresFavorite,literales.genresFavoriteID,genres.data);

        $scope.toggleGenresFavorite = function (id) {
            //debugger;
            $scope.dataFavorites[id] = favoriteManager.toggleFavorite(literales.genresFavorite,id);
        };

    }]);



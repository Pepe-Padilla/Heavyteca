
angular
    .module("heavyteca")
    .controller("genresCtrl", ["$scope", "genres", "favoriteManager", function( $scope, genres, favoriteManager ) {

        $scope.genres = genres.data;

        $scope.dataFavorites = favoriteManager.dataFavorites("genres","name",genres.data);

        $scope.toggleGenresFavorite = function (id) {
            //debugger;
            $scope.dataFavorites[id] = favoriteManager.toggleFavorite("genres",id);
        };

    }]);



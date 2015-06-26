
angular
    .module("heavyteca")
    .controller("albumsCtrl",
    ["$scope", "albums", "favoriteManager","literales", function( $scope, albums, favoriteManager, literales ) {

        $scope.albums = albums.data;

        $scope.dataFavorites = favoriteManager.dataFavorites(literales.albumsFavorite, literales.albumsFavoriteID, albums.data);

        $scope.toggleAlbumFavorite = function (id) {
            $scope.dataFavorites[id] = favoriteManager.toggleFavorite(literales.albumsFavorite,id);
        };

    }]);



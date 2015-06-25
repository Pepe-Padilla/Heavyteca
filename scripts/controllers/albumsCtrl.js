
angular
    .module("heavyteca")
    .controller("albumsCtrl", ["$scope", "albums", "favoriteManager", function( $scope, albums, favoriteManager ) {

        $scope.albums = albums.data;

        $scope.dataFavorites = favoriteManager.dataFavorites("albums","id",albums.data);

        $scope.toggleAlbumFavorite = function (id) {
            $scope.dataFavorites[id] = favoriteManager.toggleFavorite("albums",id);
        };

    }]);



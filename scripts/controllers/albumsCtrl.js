
angular
    .module("heavyteca")
    .controller("albumsCtrl", ["$scope", "albums", "favoriteManager", function( $scope, albums, favoriteManager ) {

        $scope.albums = albums.data;

        $scope.toggleAlbumFavorite = function (id) {
            return favoriteManager.toggleFavorite("albums",id);
        };

        $scope.albumIsFavorite = function (id) {
            return favoriteManager.isFavorite("albums",id);
        };


    }]);



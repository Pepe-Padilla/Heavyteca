
angular
    .module("heavyteca")
    .controller("albumsCtrl", ["$scope", "albums", function( $scope, albums ) {

        $scope.albums = albums.data;

    }]);



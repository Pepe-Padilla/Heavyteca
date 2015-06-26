
angular
    .module("heavyteca")
    .controller("bandsCtrl",
    ["$scope", "bands", "favoriteManager", "literales", function( $scope, bands, favoriteManager, literales) {

        $scope.bands = bands.data;

        $scope.dataFavorites = favoriteManager.dataFavorites(literales.bandsFavorite,literales.bandsFavoriteID,bands.data);

        $scope.toggleBandsFavorite = function (id) {
            //debugger;
            $scope.dataFavorites[id] = favoriteManager.toggleFavorite(literales.bandsFavorite,id);
        };

    }]);



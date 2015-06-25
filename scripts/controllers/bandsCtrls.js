
angular
    .module("heavyteca")
    .controller("bandsCtrl", ["$scope", "bands", "favoriteManager", function( $scope, bands, favoriteManager) {

        $scope.bands = bands.data;

        $scope.dataFavorites = favoriteManager.dataFavorites("bands","name",bands.data);

        $scope.toggleBandsFavorite = function (id) {
            //debugger;
            $scope.dataFavorites[id] = favoriteManager.toggleFavorite("bands",id);
        };

    }]);



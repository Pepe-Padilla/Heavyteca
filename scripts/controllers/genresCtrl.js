
angular
    .module("heavyteca")
    .controller("genresCtrl", ["$scope", "genres", function( $scope, genres ) {

        $scope.genres = genres.data;

    }]);



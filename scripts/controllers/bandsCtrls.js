
angular
    .module("heavyteca")
    .controller("bandsCtrl", ["$scope", "bands", function( $scope, bands ) {

        $scope.bands = bands.data;

    }]);



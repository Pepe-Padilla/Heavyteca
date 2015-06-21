
angular
    .module("heavyteca")
    .controller("albumsCtrl", ["$scope", function( $scope ) {

        $scope.album = "Soy un album... Comprame!!!";

        $scope.$watch(
            function(){
                return $scope.name;
            },
            function(valorNuevo, valorAntiguo){
                //Do somthing
            }
        );

    }]);



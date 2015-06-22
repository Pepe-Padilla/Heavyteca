

angular
    .module("heavyteca")
    .controller("navegationCtrl",["$scope", "$routeSegment", function($scope,$routeSegment){
        $scope.routeNavIs = function (navSect) {
            return $routeSegment.startsWith(navSect);
        };
    }]);



// setter Definición de un módulo
angular.module( "heavyteca", ["ngRoute", "route-segment", "view-segment"] );

angular
    .module( "heavyteca" )
    .config(["$routeSegmentProvider", "$routeProvider", function( $routeSegmentProvider, $routeProvider ) {

        $routeSegmentProvider.when( "/albums", "albums" );
        $routeSegmentProvider.when( "/bands", "bands" );
        $routeSegmentProvider.when( "/genders", "genders" );
        //$routeSegmentProvider.when( "/peliculas/:id/detalles", "detalle_pelicula" )

        $routeSegmentProvider.segment( "albums", {
            controller: "albumsCtrl",
            templateUrl: "views/albums.html"
            //resolve: {
            //    Peliculas: ["ApiService", function(ApiService) {
            //        return ApiService.obtenerDatos("movie/upcoming");
            //    }]
            //}
        });
        $routeSegmentProvider.segment( "bands", {
            controller: "bandsCtrl",
            templateUrl: "views/bands.html"
        });
        $routeSegmentProvider.segment( "genders", {
            controller: "gendersCtrl",
            templateUrl: "views/genders.html"
        });

        /*$routeSegmentProvider.segment( "detalle_pelicula", {
            controller: "DetallePelicula",
            templateUrl: "views/DetallePelicula.html",
            resolve: {
                Pelicula: ["ApiService", "$routeParams", function(ApiService, $routeParams) {
                    return ApiService.obtenerDatos( "movie/" + $routeParams.id );
                }]
            }
        });*/

        $routeProvider.otherwise({
            redirectTo: "/albums"
        });

    }]);

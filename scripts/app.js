
// setter Definición de un módulo
angular.module( "heavyteca", ["ngRoute", "route-segment", "view-segment"] );

angular
    .module( "heavyteca" )
    .config(["$routeSegmentProvider", "$routeProvider", function( $routeSegmentProvider, $routeProvider ) {

        $routeSegmentProvider.when( "/albums", "albums" );
        $routeSegmentProvider.when( "/bands", "bands" );
        $routeSegmentProvider.when( "/genres", "genres" );
        //$routeSegmentProvider.when( "/peliculas/:id/detalles", "detalle_pelicula" )

        $routeSegmentProvider.segment( "albums", {
            controller: "albumsCtrl",
            templateUrl: "views/albums.html",
            resolve:  {
                albums:
                    ["albumsProvider", function(albumsProvider) {
                        return albumsProvider.getAlbums();
                    }]
            }

        });
        $routeSegmentProvider.segment( "bands", {
            controller: "bandsCtrl",
            templateUrl: "views/bands.html",
            resolve:  {
                bands:
                    ["bandsProvider", function(bandsProvider) {
                        return bandsProvider.getBands();
                    }]
            }
        });
        $routeSegmentProvider.segment( "genres", {
            controller: "genresCtrl",
            templateUrl: "views/genres.html",
            resolve:  {
                genres:
                    ["genresProvider", function(genresProvider) {
                        return genresProvider.getGenres();
                    }]
            }
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

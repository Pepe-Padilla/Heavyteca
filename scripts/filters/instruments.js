angular
    .module("heavyteca")
    .filter("instruments", function() {
        return function(collection) {
            return "Instrumentos: " + collection.join(", ");
        };
    });
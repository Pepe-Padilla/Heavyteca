angular
    .module("heavyteca")
    .service("favoriteManager", function() {
        this.toggleFavorite = function(section, id) {
            if(typeof(Storage) !== "undefined") {

                var data = JSON.parse(localStorage.getItem(section));
                if(data[id] == "true") {
                    data[id] = "false"
                }
                else {
                    data[id] = "true"
                }

                localStorage.setItem(section, JSON.stringify(data));

                return true;
            } else {
                return false;
            }
        };

        this.isFavorite = function(section, id) {
            if(typeof(Storage) !== "undefined") {
                var data = JSON.parse(localStorage.getItem(section));
                return data[id] == "true";
            } else {
                return false;
            }
        };

    });


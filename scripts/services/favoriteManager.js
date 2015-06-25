angular
    .module("heavyteca")
    .service("favoriteManager", function() {

        this.toggleFavorite = function(section, id) {
            //debugger;
            //localStorage.clear();
            if(typeof(Storage) !== "undefined") {
                id = id + "";
                var data = JSON.parse(localStorage.getItem(section));
                if(data == null) {
                    data = {};
                    data[id] = "true";
                } else if(data[id] == "true") {
                    data[id] = "false"
                }
                else {
                    data[id] = "true"
                }

                var viewJson = JSON.stringify(data);
                localStorage.setItem(section, JSON.stringify(data));

                return data[id] == "true";
            } else {
                return false;
            }
        };

        this.isFavorite = function(section, id) {
            if(typeof(Storage) !== "undefined") {
                //debugger;
                id = id + "";
                var data = JSON.parse(localStorage.getItem(section));
                if(data == null) return false;
                return data[id] == "true";
            } else {
                return false;
            }
        };

        this.dataFavorites = function (section, idAtribute, arrData) {
            //debugger;
            var data = [];
            for(i=0;i<arrData.length;i++) {
                var id = arrData[i][idAtribute];
                data[id] = this.isFavorite(section,id);
            }

            return data;
        };

    });


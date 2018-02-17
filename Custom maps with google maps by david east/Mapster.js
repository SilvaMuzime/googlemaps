(function (window, google) {
    'use strict';
    var Mapster = (function() {
        function Mapster(element, options) {
            this.googleMaps = new google.maps.Map(element, options);
        }

        Mapster.prototype = {

        };


        return Mapster;
    }());

    Mapster.create = function(element, options) {
        return new Mapster(element, options);
    };

    window.Mapster = Mapster;
}(window, google));
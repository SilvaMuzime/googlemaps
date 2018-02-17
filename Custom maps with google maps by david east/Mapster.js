(function (window, google) {
    'use strict';
    var Mapster = (function() {
        function Mapster(element, options) {
            this.googleMaps = new google.maps.Map(element, options);
        }

        Mapster.prototype = {
            zoom: function (level) {
                if(level){
                    this.googleMaps.setZoom(level);
                }
                else{
                    return this.googleMaps;
                }
            },
            _on: function (markerOptions) {
                var self = this;
                google.maps.event.addListener(markerOptions.object,markerOptions.event,function (e) {
                    markerOptions.callback.call(self, e);
                });
            },
            _createMarker: function (markerOptions) {
              markerOptions.map = this.googleMaps;
              return new google.maps.Marker(markerOptions);
            },
            addMarker: function (markerOptions) {
                var marker;
                markerOptions.position = {
                    lat: markerOptions.lat,
                    lng: markerOptions.lng
                };
                marker = this._createMarker(markerOptions);

                if(markerOptions.event){
                    this._on({
                        object: marker,
                        event: markerOptions.event.name,
                        callback: markerOptions.event.callback
                    });
                }

            }
        };


        return Mapster;
    }());

    Mapster.create = function(element, options) {
        return new Mapster(element, options);
    };

    window.Mapster = Mapster;
}(window, google));
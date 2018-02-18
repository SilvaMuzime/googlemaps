(function (window, google, List) {
    'use strict';
    var infoWindow = new google.maps.InfoWindow();
    var Mapster = (function() {
        function Mapster(element, options) {
            this.googleMaps = new google.maps.Map(element, options);
            this.markers = List.create();
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
                this.markers.add(marker);

                if(markerOptions.event){
                    this._on({
                        object: marker,
                        event: markerOptions.event.name,
                        callback: markerOptions.event.callback
                    });
                }

                if(markerOptions.content){
                    this._on({
                        object: marker,
                        event: 'click',
                        callback: function() {
                            infoWindow.setContent(markerOptions.content);
                            infoWindow.open(this.googleMaps, marker);
                        }
                    });
                }
                return marker;
            },
            findMarkerByLat: function (lat) {
                for (var i = 0; i < this.markers.length; i++){
                    var marker = this.markers[i];

                    if(marker.position.lat() === lat)
                        return marker;
                }
            },
            findBy: function (callback) {
                return this.markers.find(callback);
            },
            removeBy: function (callback) {
                this.markers.find(callback, function (markers) {
                    markers.forEach(function (marker) {
                        marker.setMap(null);
                    });
                })
            }
        };


        return Mapster;
    }());

    Mapster.create = function(element, options) {
        return new Mapster(element, options);
    };

    window.Mapster = Mapster;
}(window, google, List));
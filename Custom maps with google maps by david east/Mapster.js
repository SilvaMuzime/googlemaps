(function (window, google, List) {
    'use strict';
    var infoWindow = new google.maps.InfoWindow();
    var Mapster = (function() {
        function Mapster(element, options) {
            this.googleMaps = new google.maps.Map(element, options);
            this.markers = List.create();

            if(options.cluster){
                this.markerClusterer = new MarkerClusterer(this.googleMaps, [], options.cluster.options);
            }

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
                google.maps.event.addListener(markerOptions.object, markerOptions.event, function (e) {
                    markerOptions.callback.call(self, e, markerOptions.object);
                });
            },
            addMarker: function (markerOptions) {
                var marker,
                    self = this;

                markerOptions.position = {
                    lat: markerOptions.lat,
                    lng: markerOptions.lng
                };
                marker = this._createMarker(markerOptions);

                if(this.markerClusterer){
                    this.markerClusterer.addMarker(marker);
                }
                this._addmarker(marker);

                if(markerOptions.events){
                    this._attachEvents(marker, markerOptions.events)
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
            _createMarker: function (markerOptions) {
              markerOptions.map = this.googleMaps;
              return new google.maps.Marker(markerOptions);
            },
            _attachEvents: function (object, events) {
                var self = this;

                events.forEach(function (event) {
                    self._on({
                        object: object,
                        event: event.name,
                        callback: event.callback
                    })
                })
            },
            _addmarker: function (marker) {
                this.markers.add(marker);
            },
            findMarkerByLat: function (lat) {
                for (var i = 0; i < this.markers.length; i++){
                    var marker = this.markers[i];

                    if(marker.position.lat() === lat)
                        return marker;
                }
            },
            findBy:  function (callback) {
                return this.markers.find(callback);
            },
            removeBy: function (callback) {
                var self = this;

                this.markers.find(callback, function (markers) {
                    markers.forEach(function (marker) {
                        if(self.markerClusterer){
                            self.markerClusterer.removeMarker(marker);
                        }
                        else {
                            marker.setMap(null);
                        }

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
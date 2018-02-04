(function(window, google, List) {
    
    var Mapster = (function() {
        function Mapster(element, opts) {
            this.gMap = new google.maps.Map(element, opts);
            this.markers = List.create();
            this.markerClusterer = new MarkerClusterer(this.gMap, []);
        }

        Mapster.prototype = {
            _on: function(opts) {
                var self = this;
                google.maps.event.addListener(opts.obj, opts.event, function(e) {
                    opts.callback.call(self, e);
                });    
            },

            addMarker: function (opts) {
                var marker,
                    self = this;

                opts.position = {
                    lat: opts.lat,
                    lng: opts.lng
                };

                marker = this._createMarker(opts);
                this.markerClusterer.addMarker(marker);
                this.markers.add(marker);
                if(opts.events){
                    opts.events.forEach(function(event) {
                       self._on({
                          obj: marker,
                          event: event.name,
                          callback: event.callback
                       })
                    });
                }
                if(opts.content){
                    this._on({
                        obj: marker,
                        event: 'click',
                        callback: function() {
                            var infoWindow = new google.maps.InfoWindow({
                                content: opts.content
                            });

                            infoWindow.open(this.gMap, marker);
                        }
                    });
                }
                return marker;
            },
            findBy: function(callback) {
                this.markers.find(callback);
            },
            removeBy: function(callback) {
                var self = this;
                self.markers.find(callback, function(markers) {
                    markers.forEach(function(marker) {
                        (self.markerClusterer) ? self.markerClusterer.removeMarker(marker) : marker.setMap(null);
                    });
                });   
            },
             _createMarker: function (opts) {
                opts.map = this.gMap;
                return new google.maps.Marker(opts);
            }
            
        };
        return Mapster;    
    }());
    
    Mapster.create = function(element, opts) {
        return new Mapster(element, opts);
    };

    window.Mapster = Mapster;
    

}(window, google, List));

(function(window, mapster) {
    'use strict';


    mapster.MAP_OPTIONS = {
        center: {
            lat: 37.791350,
            lng: -122.435883
        },
        zoom: 10,
        disableDefaultUI: false,
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        cluster: {
            options: {
                styles: [{
                    url: 'http://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png',
                    height: 56,
                    textColor: '#f00',
                    textSize: 18
                },{
                    url: 'http://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png',
                    height: 56,
                    textColor: '#f00',
                    textSize: 18
                },{
                    url: 'http://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png',
                    height: 56,
                    textColor: '#f00',
                    textSize: 18
                }]
            }
        }
    }


}(window, window.Mapster || (window.Mapster = {})));
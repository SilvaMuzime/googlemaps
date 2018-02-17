
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
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }


}(window, window.Mapster || (window.Mapster = {})));
(function(window,google, mapster) {
    
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
        maxZoom: 9,
        minZoom: 5
        // cluster: {
        //     options: {
        //         styles: [{
        //             url: 'https://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/src/markerclusterer.js',
        //             height: 56,
        //             width: 55,
        //             textColor: '#FFF',
        //             textSize: 18
        //         },{
        //             url: 'https://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/src/markerclusterer.js',
        //             height: 56,
        //             width: 55
        //         }]
        //     }
        // }
        // zoomControlOptions : {
        //     position: google.maps.ControlPosition.TOP_LEFT,
        //     style: google.maps.ZoomControlStyle.DEFAULT
        // },

        // panControlOptions: {
        //     position: google.maps.ControlPosition.LEFT_BOTTOM
        // }
        
    };

}(window,google,window.Mapster || (window.Mapster = {})));
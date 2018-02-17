(function(window, mapster) {
    'use strict';
    // aula 9

    var options = mapster.MAP_OPTIONS,
        element = document.getElementById('map'),
        map = mapster.create(element, options);

    map.addMarker({
        lat: 37.791350,
        lng: -122.435883,
        visible: true,
        id: 18,
        event: {
            name: 'click',
            callback: function () {
                console.log('i like');
            }
        }
    });



}(window, window.Mapster));
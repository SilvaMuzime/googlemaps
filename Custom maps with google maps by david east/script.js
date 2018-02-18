(function(window, mapster) {
    'use strict';


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
        },
        content: 'ce la conteudo'
    });

   map.addMarker({
        lat: 37.891854,
        lng: -122.435887,
        visible: true,
        id: 1,
        event: {
            name: 'click',
            callback: function () {

            }
        },
        content: 'ce la conteudos'
    });

   var found = map.findBy(function (marker) {
        return marker.id === 1;
   });


   map.removeBy(function (marker) {
       return marker.id === 1;
   })

}(window, window.Mapster));
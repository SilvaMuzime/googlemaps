(function(window, mapster) {
    'use strict';


    var options = mapster.MAP_OPTIONS,
        element = document.getElementById('map'),
        map = mapster.create(element, options);

    map.addMarker({
        lat: 37.891854,
        lng: -122.435887,
        visible: true,
        id: 3,
        events:[{
            name: 'dragend',
            callback: function (e, marker) {
                console.log(e);
            }
        },{
            name: 'click',
            callback: function (e, marker) {
                console.log(e);
            }
        }, {
            name: 'mouseover',
            callback: function (e, marker) {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        },{
            name: 'mouseout',
            callback: function (e, marker) {
                marker.setAnimation(null);
            }

        }],
        content: 'ce la conteudos',
        draggable: true
    });

   var found = map.findBy(function (marker) {
        return marker.id === 1;
   });


   map.removeBy(function (marker) {
       return marker.id === 1;
   })

}(window, window.Mapster));
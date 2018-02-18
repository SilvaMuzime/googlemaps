(function(window, mapster) {
    'use strict';


    var options = mapster.MAP_OPTIONS,
        element = document.getElementById('map'),
        map = mapster.create(element, options);

    map.addMarker({
        lat: 37.891854,
        lng: -122.435887,
        visible: true,
        id: 1,
        events:[{
            name: 'dragend',
            callback: function () {
                console.log('drag me')
            }
        },{
            name: 'click',
            callback: function () {
                console.log('click me')
            }
        }],
        content: 'ce la conteudos',
        draggable: true
    });
    map.addMarker({
        lat: 37.891854,
        lng: -122.435887,
        visible: true,
        id: 3,
        events:[{
            name: 'dragend',
            callback: function () {
                console.log('drag me')
            }
        },{
            name: 'click',
            callback: function () {
                console.log('click me')
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
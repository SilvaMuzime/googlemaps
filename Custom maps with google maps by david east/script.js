(function(window, mapster, firebase) {
    'use strict';


    var options = mapster.MAP_OPTIONS,
        element = document.getElementById('map'),
        map = mapster.create(element, options);

    var config = {
            apiKey: "AIzaSyAmplRymWDI6re-CADdUU-cusooKgkumN4",
            authDomain: "psi-mozambique.firebaseapp.com",
            databaseURL: "https://psi-mozambique.firebaseio.com",
            projectId: "psi-mozambique",
            storageBucket: "psi-mozambique.appspot.com",
            messagingSenderId: "161813301285"
        },
        child = 'agentes';

    var db = firebase.create(config, child);
    var locations = db.fetchAll();

    locations.forEach(function (data) {
        map.addMarker({
            lat: data.latitude,
            lng: data.longitude,
            visible: true
        });

    });

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
   });

    console.log(locations);
}(window, window.Mapster, window.Firebase));
/**
 * Self invoking anonymous function
 * is a way of controlling scope in a project
 * Everything done inside of an anonymous
 * function will be contained inside of it's scope
 * We can also import another libraries into
 * the anonymous function
 */

(function (window, mapster) {

    var options = mapster.MAP_OPTIONS,

    element = document.getElementById("map"),

    map = mapster.create(element, options);

    for(var i = 0; i < 5; i++) {
        map.addMarker({
            visible: true,
            lat: 37.78135 + Math.random(),
            lng: -122.485883 + Math.random(),
            content: 'I miss you',
            events: [{
                name: 'click',
                callback: function(e, marker) {
                    console.log("i'm clicked" + this + e + marker);
                }
            // }, {
            //     name: 'drag',
            //     callback: function (e, marker) {
            //         console.log('drag me more'+ e.name + marker);
            //     }
            // }, {
            //     name: 'mouseover',
            //     callback: function(e, marker) {
            //         console.log('ulalala'+ e + marker);
            //     }
            // },{
            //     name: 'mouseout',
            //     callback: function(e, marker) {
            //         console.log('out'+ e + marker);
            //     }
            }],
            animation: google.maps.Animation.DROP
        });
    }


     // map.removeBy(function(marker) {
     //     return marker.content === 'i like pizza';
     // });
}(window, window.Mapster || (window.Mapster = {})));
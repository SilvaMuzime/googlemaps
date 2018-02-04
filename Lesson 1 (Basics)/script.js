/**
 * Self invoking anonymous function
 * is a way of controlling scope in a project
 * Everything done inside of an anonymous
 * function will be contained inside of it's scope
 * We can also import another libraries into
 * the anonymous function
 */

(function (window, mapster) {

    //map options
    var options = mapster.MAP_OPTIONS,

    element = document.getElementById("map"),

    map = mapster.create(element, options);


    for(var i = 0; i < 10; i++) {
        map.addMarker({
            lat: 37.78135 + Math.random(),
            lng: -122.485883 + Math.random(),
            content: 'I miss you',
            events: [{
                name: 'click',
                callback: function () {
                    console.log("i'm clicked");
                }
            }, {
                name: 'drag',
                callback: function () {
                    console.log('drag me more');
                }
            }, {
                name: 'mouseover',
                callback: function() {

                }
            }],
            animation: google.maps.Animation.DROP
        });
    }


     // map.removeBy(function(marker) {
     //     return marker.content === 'i like pizza';
     // });
    
    console.log(map.markers);

}(window, window.Mapster || (window.Mapster = {})));
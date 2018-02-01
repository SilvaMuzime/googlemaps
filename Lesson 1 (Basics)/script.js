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
    
    map._on('click', function(e) {
            console.log(e);
    });

    map.addMarker({
        lat: 37.791350,
        lng: -122.435883,
        visible: true,
        draggable: true,
        id: 100,
        name: 'ivan'
    });

}(window, window.Mapster || (window.Mapster = {})));
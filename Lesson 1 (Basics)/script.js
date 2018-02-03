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
    
    var marker = map.addMarker({
        lat: 37.791350,
        lng: -122.435883,
        visible: true,
        draggable: true,
        id: 21,
        content: 'I miss you',
        event: {
            name: 'click',
            callback: function(marker) {
                console.log("i'm clicked");
            }
        }
    });

    var marker1 = map.addMarker({
        lat: 37.791352,
        lng: -122.435885,
        visible: true,
        draggable: true,
        id: 2,
        content: 'I miss you',
        event: {
            name: 'click',
            callback: function (marker) {
                console.log("i'm clicked");
            }
        }
    });
    
    map.removeBy(function(marker) {
        return marker.id === 2; 
    });
    
    console.log(map.markers);

}(window, window.Mapster || (window.Mapster = {})));

function initMap() {

    var map = new google.maps.Map(document.getElementById('first_map'), {
        zoom: 14,
        center: {lat: 55.752, lng: 37.615}
    });
    var marker = new google.maps.Marker({
        position: {lat: 55.752, lng: 37.615},
        map: map
    });
}


function initMap2() {

    var map = new google.maps.Map(document.getElementById('second_map'), {
        zoom: 14,
        center: {lat: 55.752, lng: 37.615}
    });
    var marker = new google.maps.Marker({
        position: {lat: 55.752, lng: 37.615},
        map: map
    });
}
window.onload=function () {
   initMap();
    initMap2();

};
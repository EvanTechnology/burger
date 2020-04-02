ymaps.ready(init);

var placemarks = [
    {
        coords: [-34.845001, 138.494719],
        latitude: -34.845001,
        longitude: 138.494719,
        hintContent: '<div class="map__hint">1-2 Tarni Court, New Port 5015</div>',
    },
    {
        coords: [-34.932788, 138.593340],
        latitude: -34.932788,
        longitude: 138.593340,
        hintContent: '<div class="map__hint">9 Whitmore Square, Adelaide 5000</div>',
    },
    {
        coords: [-34.920504, 138.493679],
        latitude: -34.920504,
        longitude: 138.493679,
    }
],
    geoObjects= [];

function init() {
    let myMap = new ymaps.Map('map', {
        center: [-34.887739, 138.588293],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
     for (let i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark(placemarks[i].coords,
            {
                hintContent: placemarks[i].hintContent,
            },
            {
                iconLayout: 'default#image',
                iconImageHref: '/images/map_marker.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
            });
            myMap.geoObjects.add(geoObjects[i]);
    }


}
var map;
function initialize() {
    map = new GMaps({
      div: '#map_canvas',
      zoom: 10,
      lat: 39.08,
      lng: -94.80
    });
    map.loadFromKML({
      url: 'https://raw.github.com/jiko/evcskcmo/gh-pages/EVCSKCMO.kml',
      //preserveViewport: true,
      /*
      events: {
        status_changed: function() { 
          GMaps.geolocate({
            success: function(position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                map.setCenter(lat, lng);
                map.addMarker({
                    lat: lat,
                    lng: lng,
                    title: 'You Are Here',
                    click: function(e) {
                        alert('You clicked on yourself.');
                    }
                });
                map.setZoom(14);
            },
            error: function(error) {
                alert('Geolocation failed: '+error.message);
            },
            not_supported: function() {
                alert("Your browser does not support geolocation");
                map.setZoom(12);
            },
            always: function() {
                console.log("Geolocation done!");
            }
          });  
        }
      }
      */
    });
}


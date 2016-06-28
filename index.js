var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var showLocation = require('./views/location.hbs')

console.log('this is the newest page')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'
var target = document.getElementsByTagName('main')[0]

var myLong = 25
var myLat = 133

/* Set up map */
var mapPos = {
    lat: myLat,
    lng: myLong
};
var mapProp = {
    center: mapPos,
    zoom: 6,
    mapTypeId: google.maps.MapTypeId
        .ROADMAP
};
// _______________ Initialize map function _______________
function initialize() {
    var map = new google.maps.Map(
        document.getElementById(
            "googleMap"),
        mapProp);
// _______________ Map styles _______________
    var mapStyle = [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 13
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#144b53"
        }, {
            "lightness": 14
        }, {
            "weight": 1.4
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "color": "#08304b"
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#0c4152"
        }, {
            "lightness": 5
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#0b434f"
        }, {
            "lightness": 25
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#0b3d51"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }]
    }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
            "color": "#146474"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#021019"
        }]
    }];
    map.setOptions({
        styles: mapStyle
    });
    // _______________ Add map marker _______________
    var marker = new google.maps
        .Marker({
            position: mapPos,
            map: map,
            title: 'Server / Person Located Here!'
        });
}

target.innerHTML = showLocation()
initialize();


function updateISS() {

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }
  console.log("Button was pressed") 
  // In case you're curious
  console.log(data.body) // FYI: data.body is a string
  var myData = JSON.parse(data.body)

  console.log('This is before ', myLat, myLong)
  myLat = myData.latitude
  myLong = myData.longitude
  console.log('This is after ', myLat, myLong)

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = showLocation(myData)
	initialize();


  var findISS = document.getElementById('iss')
	findISS.addEventListener('click', updateISS)
})
}

var findISS = document.getElementById('iss')

findISS.addEventListener('click', updateISS)

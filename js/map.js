google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(37.787318, -122.399401), 

        // Style settings (from Snazzy Maps: Lunar)
        styles: [	
        {	stylers:[			{hue:'#ff1a00'},			{invert_lightness:true},			{saturation:-100},			{lightness:33},			{gamma:0.5}	]	},
        {		featureType:'water',		elementType:'geometry',		stylers:[			{color:'#2D333C'}		]	},
        {"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
        ]

    };

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var pinColor = "C4455F";

    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(37.787318, -122.399401),
      map: map,
      icon: pinImage,
      title: '111 Minna'
    });

    var contentString = '111 Minna'

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

}


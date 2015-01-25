
window.onload = function(){

var map = L.map('map');


	L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ',
		id: 'examples.map-i875mjb7'
	}).addTo(map);


	function onLocationFound(e){
		var radius = e.accuracy/2;
		var marker = L.marker(e.latlng);
		marker.addTo(map);
		marker.on('click', function onClick(e){
			$('#slideup').slideToggle("slow");
		});
		L.circle(e.latlng, radius).addTo(map);
		
	};



	
	map.on("locationfound", onLocationFound);
	map.locate({setView: true, maxZoom: 16});
};


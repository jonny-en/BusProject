
var pos = [50.356696, 7.599617];

var map = L.map('map');

		L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ', {
			maxZoom: 18
		}).addTo(map);


		map.setView(pos,15,true);

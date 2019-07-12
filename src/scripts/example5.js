/**
 * Created by bdraper on 8/19/2015.
 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////
////Example 5: sandy sensors from plain json, unclustered, symbolized by type (235 sites, symbolized by category in attributes)
//// this example demonstrates display of 235 points, with multiple, attribute-dependent symbols, presented as a single layer
/////////////////////////////////////////////////////////////////////////////////////////////////////////
$( document ).ready(function() {

	//for jshint
	'use strict';

	/* create map */
	var map = L.map('mapDiv').setView([39.833333, -98.583333], 4);
	var layer = L.esri.basemapLayer('Gray').addTo(map);
	var layerLabels;

	$('#mapDiv').height($('body').height());
	map.invalidateSize();

	$.ajax({
		dataType: "json",
		url: "../data/data.json",
		success: function (json) {

			console.log(json);

			//var markers = L.markerClusterGroup({disableClusteringAtZoom: 12});

			for (var i = 0; i < json.items.length; i++) {
				var a = json.items[i];

				var marker = L.marker(new L.LatLng(a['LATDD'], a['LONGDD']), {
					radius: 3,
					fillOpacity: 0.95
				});

				//Baro
				/* if (a.pt_symbol == 'symbol0') {
					marker.color()
					marker.setStyle({color: '#FFFF00'});
				} */
				/* //meteorological
				if (a.SENSOR_TYPE_ID == 2) {
					marker.setStyle({color: '#FFC0CB'});
				}
				//rapid deploy gage
				if (a.SENSOR_TYPE_ID == 5) {
					marker.setStyle({color: '#32BF32'});
				}
				//storm tide
				if (a.SENSOR_TYPE_ID == 1 && a.DEPLOYMENT_TYPE_ID == 1 || a.DEPLOYMENT_TYPE_ID == 2) {
					marker.setStyle({color: '#FF0000'});
				}
				//wave height
				if (a.SENSOR_TYPE_ID == 1 && a.DEPLOYMENT_TYPE_ID == 1) {
					marker.setStyle({color: '#800080'});
				} */

				marker.bindPopup("Site ID: " + a.site_no);
				map.addLayer(marker);

			}

		}
	});
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////end sandy sensors from plain json, unclustered, symbolized by type
//////////////////////////////////////////////////////////////////////////////////////////////////////////

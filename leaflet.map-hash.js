/*
 * leaflet.map-hash.js
 *
 * Leaflet map and document URL hash ("#lng=<lng>;lat=<lat>;zoom=<zoom>") interface.
 */

L.Map.mergeOptions({
	urlHash: false
});

L.Map.include({
	_onHashChange: function () {
		var center = this.getCenter(),
		    zoom = this.getZoom(),
		    hash = L.Util.parseParamString(window.location.hash.slice(1));

		function isNum(n) {
			return typeof n === 'number';
		}

		if (isNum(hash.lng) && isNum(hash.lat)) {
			center = L.latLng([hash.lat, hash.lng]);
		} else if (isNum(hash.lon) && isNum(hash.lat)) { // lon as lng
			center = L.latLng([hash.lat, hash.lon]);
		} else if (isNum(hash.x) && isNum(hash.y)) { // cartesian coordinates
			center = this.options.crs.unproject(L.point(hash.x, hash.y));
		}
		if (isNum(hash.zoom)) {
			zoom = hash.zoom;
		}
		this.setView(center, zoom);
	}
});

L.Map.addInitHook(function () {
	if (this.options.urlHash) {
		this.whenReady(function () {
			L.DomEvent.on(window, 'hashchange', this._onHashChange, this);

			this.on('moveend', function () {
				var center = this.getCenter(),
				    zoom = this.getZoom(),
				    decimals = 5;

				window.history.replaceState(null, '', '#' + [ // no history
					'lng='  + center.lng.toFixed(decimals),
					'lat='  + center.lat.toFixed(decimals),
					'zoom=' + zoom
				].join(';'));
			});

			if (window.location.hash) {
				this._onHashChange();
			}
		});
	}
});

/* L.Util helper method */

L.Util.parseParamString = function (str) { // key=value;k2=v2&k3=v3
	function parse(s) {
		switch (s) {
			case 'null':
				return null;
			case 'false':
				return false;
			case 'true':
				return true;
			default:
				var n = parseFloat(s);
				return !isNaN(n) && isFinite(s) ? n : decodeURIComponent(s.replace(/\+/g, ' '));
		}
	}

	var result = {};
	str.replace(/([^&;=]+)=([^&;]*)/gi, function (match, key, value) {
		result[decodeURIComponent(key)] = parse(value);
	});

	return result;
};

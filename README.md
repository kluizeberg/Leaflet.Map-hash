# Leaflet.Map-hash

Plugin for [Leaflet](http://leafletjs.com) adding a *basic* URL hash (fragment identifier) interface to [`L.Map`](http://leafletjs.com/reference-1.0.2.html#map).

Panning and/or zooming the map results in a hash transparently formatted as `#lng=<lng>;lat=<lat>;zoom=<zoom>`. And vice versa, altering the hash allows (re)setting the map view; recognized parameters (separated by either `;` or `&`) are:
- `lng` (or `lon`) *and* `lat` as a pair of geographical coordinates or
- `x` *and* `y` as a pair of cartesian coordinates (dependent on CRS) and
- optional `zoom`

Tested with Leaflet 0.7.7 and 1.0.2.

## Demo

See https://kluizeberg.github.io/Leaflet.Map-hash/demo.html#lng=-5.71496;lat=50.06582;zoom=10 (map centered on Land's End).

## Installation and usage

1. load `leaflet.js`
2. load `leaflet.map-hash.js`
3. create a `L.Map` instance with option `urlHash` set to `true`.

See also [`demo.html`](https://github.com/kluizeberg/Leaflet.Map-hash/blob/master/demo.html). Linking several maps in one document to the hash may result in unexpected behaviour.

## API Reference

This plugin alters, albeit slightly, Leaflet's main class `L.Map` and adds a function to utility class `L.Util`.

[`L.Map`](http://leafletjs.com/reference-1.0.2.html#map)-**additions**:

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `urlHash` | `Boolean` | `false` | Set to `true` to enable URL hash interaction. |

[`L.Util`](http://leafletjs.com/reference-1.0.2.html#util)-**additions**:

| Function | Returns | Description |
| --- | --- | --- |
| `parseParamString(<String> str)` | `Object` | Inverse of [`getParamString`](http://leafletjs.com/reference-1.0.2.html#util-getparamstring) where parameters are separated by `;` or `&` |

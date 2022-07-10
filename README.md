# Leaflet.Map-hash

Plugin for [Leaflet](https://leafletjs.com) adding a *basic* URL hash (fragment identifier) interface to [`L.Map`](https://leafletjs.com/reference#map).

Panning and/or zooming the map results in a hash transparently formatted as `#lng=<lng>;lat=<lat>;zoom=<zoom>`. And vice versa, altering the hash allows (re)setting the map view; recognized parameters (separated by either `;` or `&`) are:
- `lng` (or `lon`) *and* `lat` as a pair of geographical coordinates or
- `x` *and* `y` as a pair of cartesian coordinates (dependent on CRS) and
- optional `zoom`

Tested with Leaflet 1.7.0. Caution: versions 1.7.1 and 1.8.0 have an [issue](https://github.com/Leaflet/Leaflet/issues/8159) that affects the URL hash.

Demo: https://kluizeberg.github.io/Leaflet.Map-hash/demo.html#lng=-5.71496;lat=50.06582;zoom=10 (map centered on Land's End).

## Installation and usage

1. load `leaflet.js`
2. load `leaflet.map-hash.js`
3. create a `L.Map` instance with option `urlHash` set to `true`.

See also [`demo.html`](https://github.com/kluizeberg/Leaflet.Map-hash/blob/master/demo.html). Linking several maps in one document to the hash may result in unexpected behaviour.

## API Reference

This plugin alters, albeit slightly, Leaflet's main class `L.Map` and adds a utility function to the `L` namespace.

### [`L.Map`](https://leafletjs.com/reference.html#map) *additions*:

| Option | Type | Default | Description |
| :----- | :--- | :------ | :---------- |
| `urlHash` | `Boolean` | `false` | Set to `true` to enable URL hash interaction. |

### `L` *additions*:

| Function | Returns | Description |
| :------- | :------ | :---------- |
| `parseParamString(<String> str, <Object> result?)` | `Object` | Inverse of [`L.Util.getParamString`](https://leafletjs.com/reference#util-getparamstring), parameters to be separated by `;` or `&`. |

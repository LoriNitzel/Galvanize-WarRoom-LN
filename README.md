# War Room Client

## Installation

Download `warroom-client.js` to your project.

Install `axios` with `npm`.

## Documentation

### warroom(callback)

Calling `warroom` will fetch server status and return data every 500ms.
If there is an error, it will call the `callback` like `callback(error, null)`.
If it is successful, it will call the `callback` like `callback(null, data)`.

### Usage

```js
const warroom = require("./warroom-client")
warroom((error, data) => console.log(data))
```


name: 'WOPR',
       responseTime: 0.1,
       id: 1776,
       os: 'Red Hat',
       memory: '8GB',
       cpu: 'Intel i7',
       temp: '83C' },
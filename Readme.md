
# sane-fetch

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

A sane fetch wrapper - deserialized body and better error handling.

## Installation

    $ npm install sane-fetch

## Usage

```js
import fetch from 'sane-fetch'

fetch('https://www.google.com').then((res) => res)
// =>
// {
//  url: https://www.google.com,
//  status: 200,
//  statusText: 'OK',
//  headers: ...,
//  body: ...
// }
```

## API

### fetch(url, params)

- `url` - url to fetch
- `params` - parameters of fetch

**Returns:** promise that resolves response

### response

- `url` - The url of the endpoint you requested (as returned by the request)
- `status` - The numerical status code of the response (e.g. 200)
- `statusText` - The text version of the status (e.g. 'OK')
- `headers` - A [Headers object](https://developer.mozilla.org/en-US/docs/Web/API/Headers)
- `body` - The deserialized response body.  This may be an object, string, or buffer, depending on the type of response.

## License

MIT

[travis-image]: https://img.shields.io/travis/joshrtay/sane-fetch.svg?style=flat-square
[travis-url]: https://travis-ci.org/joshrtay/sane-fetch
[git-image]: https://img.shields.io/github/tag/joshrtay/sane-fetch.svg
[git-url]: https://github.com/joshrtay/sane-fetch
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/sane-fetch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sane-fetch

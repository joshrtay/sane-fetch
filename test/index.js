/**
 * Imports
 */

import test from 'tape'
import fetch from '../src'

/**
 * Tests
 */

test('should work', t => {
  fetch('https://www.google.com').then(({url, headers, body, status, statusText}) => {
    t.equal(url, 'https://www.google.com')
    t.equal(status, 200)
    t.equal(statusText, 'OK')
    t.ok(headers.get('content-type').indexOf('text/html') !== -1)
    t.end()
  })
})

test('should reject on invalid response', t => {
  t.plan(1)
  fetch('https://www.google.com/notAValidUrl').then(() => t.fail(), (res) => t.pass())
})

/**
 * Imports
 */

import fetch from 'isomorphic-fetch'

/**
 * sane-fetch
 */

function saneFetch(url, params) {
  return fetch(url, params).then(checkStatus).then(createResponse, createErrorResponse)
}

/**
 * Check the status and reject the promise if it's not in the 200 range
 *
 * @param {Object} res
 * @return {Object} res
 */

function checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    throw res
  }
}

/**
 * Create a plain JS response object.  Note that 'headers' is still a Headers
 * object (https://developer.mozilla.org/en-US/docs/Web/API/Headers), and must be
 * read using that API.
 *
 * @param {Object} res
 * @return {Promise} "sanitized "response
 */

function createResponse (res) {
  return deserialize(res).then(value => ({
    url: res.url,
    status: res.status,
    statusText: res.statusText,
    headers: res.headers,
    body: value
  }))
}

/**
 * Create the response, then return a new rejected
 * promise so the failure chain stays failed.
 *
 * @param {Object} res
 * @return {Promise}
 */

function createErrorResponse (res) {
  return createResponse(res).then(function (res) {
    throw res
  })
}

/**
 * Deserialize the response body
 *
 * @param {Object} res
 * @return {Object|Buffer|String} response body
 */

function deserialize (res) {
  const header = res.headers.get('Content-Type') || ''
  if (header.indexOf('application/json') > -1) return res.json()
  if (header.indexOf('application/octet-stream') > -1) return res.arrayBuffer()
  return res.text()
}

/**
 * Exports
 */

export default saneFetch

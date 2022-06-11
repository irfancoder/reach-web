import axios from 'axios'
import { redirect } from '@/routes/utils'
import Form from './class/Form'

/**
 * Default request config
 */
const REQUEST_CONFIG = {
    withCredentials: true
}

/**
 * Performs a GET request and return the result.
 * @param {string} url Request URL      *** Use relative path with '/' at the start
 * @param {Object} config Request config
 * @returns {any} Request result
 */
export const get = (url, config = REQUEST_CONFIG) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url, config)
            .then(({ data }) => {
                // if (response.data?.toast) {}
                resolve(data)
                if (data?.redirect) redirect(data.redirect)
            })
            .catch(({ response: { data }, message }) => {
                // if (data?.toast) {}
                if (data?.redirect) redirect(data?.redirect)
                reject(new Error(message))
            })
    })
}

/**
 * Performs a POST request and return the result
 * @param {string} url Request URL      *** Use relative path with '/' at the start
 * @param {Object} payload Request payload
 * @param {Object} config Request config
 * @returns {any} Request result
 */
export const post = (url, payload, callback, config = REQUEST_CONFIG) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, payload, config)
            .then(({ data }) => {
                // if (response.data?.toast) {}
                if (typeof callback === 'function') callback(data)
                resolve(data)
                if (data?.redirect) redirect(data.redirect)
            })
            .catch(({ response: { data }, message }) => {
                if (payload instanceof Form) {
                    const exceptions = window._.uniqBy(data?.errors, 'field')
                    payload?.exceptions.add(exceptions)
                }

                // if (data?.toast) {}
                if (data?.redirect) redirect(data?.redirect)
                reject(new Error(message))
            })
    })
}

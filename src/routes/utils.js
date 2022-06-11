import router from '@/routes'

/**
 * Returns formatted route object for vue-router
 * @param {string} path URL path
 * @param {VueElement} component Page component
 * @param {string} name Route namespace
 * @param {VueElement} layout Layout component
 * @returns
 */
export const makeRoute = (path, name, component, layout) => {
    if (!path || !component || !name) throw new Error('Path, component and name are required')
    return {
        path: path,
        component: component,
        name: name,
        meta: {
            layout: layout
        }
    }
}

/**
 * Returns a formatted route string
 * @param {string} name Named route
 * @param {Object} params Params eg. :id
 * @param {Object} query Query eg. ?page=2
 * @returns {string} Resolved path
 */
export const route = (name, params, query) => {
    const path = router.resolve({ name: name, params: params, query: query })
    return path.path
}

/**
 * Redirect user to the given path. Path MUST be resolved beforehand
 * @param {string} path Resolved path
 */
export const redirect = (path) => {
    router.push(path)
}

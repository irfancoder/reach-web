/**
 * Global Mixin
 */
import { get, post } from '@/utils'
import { route, redirect } from '@/routes/utils'

export default {
    methods: {
        route: route,
        redirect: redirect,
        post: post,
        get: get
    }
}

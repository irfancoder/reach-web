import { defineStore } from 'pinia'

/* Use this template if you need to access Vue app instance */
export const userStore = (app) => {
    return defineStore('user', {

        /* State */
        state: () => {
            return {
                key: 'value'
            }
        },

        /* Getters */
        getters: {
            getMethod (value) {
                return value
            }
        },

        /* Actions */
        actions: {
            init () {
                return this
            },

            signIn () {},

            signOut () {}
        }
    })()
}

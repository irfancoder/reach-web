import { defineStore } from 'pinia'

/* Default Pinia store template */
export const userStore = defineStore('user', {

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
})

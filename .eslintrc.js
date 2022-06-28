/** @format */

module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
    parserOptions: {
        sourceType: 'module'
    },

    plugins: ['vue'],

    rules: {
        'vue/multi-word-component-names': 'off'
    }
}

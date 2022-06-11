module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    extends: ['plugin:vue/vue3-essential', 'standard', 'eslint:recommended'],
    parserOptions: {
    // parser: '@babel/eslint-parser'
        sourceType: 'module'
    },

    plugins: ['vue'],

    rules: {
        'vue/multi-word-component-names': 'off',
        indent: ['error', 4]
    }
}

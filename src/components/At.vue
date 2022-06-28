<!-- @format -->

<template>
    <router-link :class="style" :to="href">
        <slot></slot>
        <span>{{ $attrs.class }}</span>
    </router-link>
</template>

<script>
    export default {
        props: {
            typeof: { type: String, default: 'link', validator: (type) => ['btn-primary', 'btn-default', 'btn-danger', 'link'].includes(type) },
            href: { type: String, default: '#' }
        },
        computed: {
            style() {
                if (this.typeof === 'link') return 'text-green-800 font-medium hover:underline'
                return `btn ${this.typeof}`
            }
        }
    }
</script>

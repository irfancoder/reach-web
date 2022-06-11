<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script>
import { useLayout } from '@irfanismail/vue-layout'
import { useRoute } from 'vue-router'

export default {
    setup () {
        const { layout } = useLayout(useRoute())
        return { layout }
    }
}
</script>

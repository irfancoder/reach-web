<!-- @format -->

<template>
    <div class="container h-20 mx-auto flex justify-between items-center">
        <p class="bg-gray-200 p-2 rounded">logo goes here</p>
        <menus></menus>
        <at typeof="btn-primary">Donate</at>
    </div>
</template>

<script>
    import { At, Menus } from '@/components'
    export default {
        components: { At, Menus },
        setup() {
            return {}
        }
    }
</script>

<style lang="scss" scoped></style>

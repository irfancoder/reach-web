<!-- @format -->

<template>
    <div class="flex flex-col min-h-screen mx-auto">
        <navbar></navbar>

        <main class="flex-grow">
            <slot></slot>
        </main>

        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from './_partials/footer.vue'
    import navbar from './_partials/navbar.vue'

    export default {
        components: { navbar, Footer }
    }
</script>

<style lang="scss" scoped></style>

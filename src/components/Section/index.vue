<!-- @format -->

<template>
    <section class="relative h-screen-70">
        <img v-if="map" src="/assets/malaysia-dot-map.svg" class="absolute pointer-events-none lg:px-24" />
        <div class="text-center pt-24 pb-7">
            <h6 class="pb-4">Our Plan Involves You</h6>
            <h3>What We're Doing</h3>

            <p class="pt-7">We aim to provide groceries and appliances to low income families and we need your help.</p>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            map: { type: Boolean, default: false }
        }
    }
</script>

<style lang="scss" scoped></style>

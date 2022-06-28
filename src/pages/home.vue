<!-- @format -->

<template>
    <div>
        <Hero></Hero>
        <div class="p-24 bg-primary-700">stats go here</div>

        <Section></Section>
        <Slider></Slider>
        <Section :map="true"></Section>
    </div>
</template>

<script>
    import { Section, Hero, Slider } from '@/components'

    export default {
        components: {
            Section,
            Hero,
            Slider
        }
    }
</script>

<style>
    div {
        @apply bg-yellow-50;
    }
</style>

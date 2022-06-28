<!-- @format -->

<template>
    <div class="grid grid-cols-2 gap-24 py-16 px-24 h-screen-90">
        <div class="flex flex-col justify-center gap-7">
            <h1 class="capitalize">Education is a privilege for all.</h1>
            <h5>
                We helped over 10,000 underprivileged children gain access to
                <h5 class="underline inline">quality education</h5>
                just like yourself to create a better future for Malaysia. Join our cause!
            </h5>
            <div class="flex gap-7">
                <at typeof="link">> Be a patron</at>
                <at typeof="link">> Join our volunteer corp</at>
            </div>

            <!-- <div class="flex gap-7 items-center">
                <h5>Follow us on</h5>
                <at typeof="link">Facebook</at>
                <at typeof="link">Instagram</at>
            </div> -->
        </div>
        <div class="w-full bg-gray-500 rounded-xl"></div>
    </div>
</template>

<script>
    import { At } from '@/components'
    export default {
        components: {
            At
        }
    }
</script>

<style lang="scss" scoped></style>

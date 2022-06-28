<!-- @format -->

<template>
    <nav class="menu">
        <div class="menu-item">
            <at>Home</at>
        </div>
        <div class="menu-item">
            <at>About Us</at>
        </div>
        <div class="menu-item">
            <at>Campaigns</at>

            <div class="menu-mega">hello</div>
        </div>
        <div class="menu-item">
            <at>Community News</at>
        </div>
    </nav>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .menu {
        @apply flex gap-7 relative;

        &-item:hover &-mega {
            @apply block;
        }

        &-mega {
            @apply hidden bg-white border absolute top-full pt-4 transform -translate-x-1/2 w-[700px] z-50 rounded shadow-lg p-2;
        }
    }
</style>

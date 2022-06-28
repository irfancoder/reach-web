<!-- @format -->

<template>
    <div class="overflow-hidden">
        <div class="slider">
            <div class="slider-item" v-for="i in images" :key="i">
                <img :src="i" class="rounded-xl" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Slider',
        data() {
            return {
                images: [
                    'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
                    'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
                    'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg',
                    'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
                    'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg',
                    'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
                    'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg'
                ],
                timer: null,
                currentIndex: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes slide-left {
        from {
            transform: translate3d(0, 0, 0);
        }
        to {
            transform: translate3d(-22%, 0, 0); /* The image width */
        }
    }

    .slider {
        @apply flex scroll-smooth gap-7 m-auto w-full flex-nowrap px-7;
        animation: slide-left 10s ease-in-out infinite alternate;

        &:hover {
            animation-play-state: paused;
        }

        &-item {
            @apply inline-block min-w-[300px] relative;

            & .slider:hover {
                animation-play-state: paused;
            }
        }
    }
</style>

<template>
    <div class="swiper-container">
        <v-container>
            <h1 class="title text-red-darken-1">Top Destinantions</h1>
            <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
                clickable: true,
            }" :breakpoints="{
    '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    '@0.75': {

        slidesPerView: 2,
        spaceBetween: 20,
    },
    '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    '@1.50': {
        slidesPerView: 4,
        spaceBetween: 50,
    },
}" :modules="modules" class="mySwiper">
                <swiper-slide v-for="image in images" :key="image.id">
                    <img :src="image.imageUrl" class="swiper-images" />
                </swiper-slide>
            </swiper>
        </v-container>
    </div>
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";


import { Pagination } from "swiper";

export default {
    data() {
        return {
            images: [
                { id: 1, imageUrl: require("../assets/ibis.jpg") },
                { id: 2, imageUrl: require("../assets/social.jpg") },
                { id: 3, imageUrl: require("../assets/prideinn.jpg") },
                { id: 4, imageUrl: require("../assets/elewana.jpeg") },
                { id: 5, imageUrl: require("../assets/nakuru.jpg") },

            ],
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>
<style>
.swiper-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background: #fff;
    border-radius: 50px;
}


.swiper-images {
    height: 280px;
    width: 280px;
    margin-right: 1.5rem;
    border-radius: 50px;
    object-fit: cover;
}
</style>

    // 

    <!-- <swiper-slide v-for="image in images" :key="image.id">
        <img :src="image.imageurl" />
    </swiper-slide> -->

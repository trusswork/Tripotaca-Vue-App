<template>
    <div id="packages">
        <v-container>
            <h1 class=" title text-red-darken-1">Our Top Packages</h1>
            <div class="swiper-wrapper">
                <swiper :slidesPerView="2" :spaceBetween="10" :grabCursor="true" :speed="600" :effect="slide"
                    :parallax="true" :breakpoints="{
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

                    <swiper-slide v-for="image in images" :key="image.id" class="swiper-container">
                        <CarouselComponent :image="image.imageUrl" :title="image.title" />
                    </swiper-slide>
                </swiper>
            </div>
        </v-container>
    </div>
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";


import { Pagination, Parallax } from "swiper";
import CarouselComponent from "./carouselPackage.vue";

export default {

    computed: {
        images() {
            return this.$store.state.packages
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        CarouselComponent
    },
    setup() {
        return {
            modules: [Pagination, Parallax],
        };
    },
};
</script>
<style>
#packages {
    height: "600px";
    background: #fff;
    margin: 1.5rem 0;

}

.swiper-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 50px;

}

.swiper-container {
    display: flex;
    flex-direction: column;
}
</style>
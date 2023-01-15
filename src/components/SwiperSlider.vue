<template>
    <div id="hotels">
        <v-container>
            <h1 class=" title text-red-darken-1">Top Destinantions</h1>
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
                        <img :src="image.imageUrl" class="swiper-images" />
                        <h4>{{ image.hotel }}</h4>
                        <p>{{ image.location }}</p>
                        <div class="star-cont">
                            <div v-for="star in image.rating" :key="star.id" >
                                <v-img src="../assets/Star-icon.svg" class="star"/>
                            </div>
                        </div>
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

export default {
    data() {
        return {
            images: [
                {
                    id: 1, imageUrl: require("../assets/ibis.jpg"),
                    hotel: "Ibis Styles",
                    location: "Nairobi",
                    rating: [1, 2, 3, 4, 5]
                },

                {
                    id: 2, imageUrl: require("../assets/social.jpg"),
                    hotel: "The Social House",
                    location: "Nairobi",
                    rating: [
                        { id: 1, rate: 1 },
                        { id: 2, rate: 2 },
                        { id: 3, rate: 3 },
                        { id: 4, rate: 4 },
                        { id: 5, rate: 5 },
                    ]
                },
                {
                    id: 3, imageUrl: require("../assets/prideinn.jpg"),
                    hotel: "Pride inn",
                    location: "Nairobi",
                    rating: [
                        { id: 1, rate: 1 },
                        { id: 2, rate: 2 },
                        { id: 3, rate: 3 },
                        { id: 4, rate: 4 },]
                },
                {
                    id: 4, imageUrl: require("../assets/elewana.jpeg"),
                    hotel: "elewana elsa’s kopje",
                    location: "Meru",
                    rating: [
                        { id: 1, rate: 1 },
                        { id: 2, rate: 2 },
                        { id: 3, rate: 3 },
                    ]
                },
                {
                    id: 5, imageUrl: require("../assets/nakuru.jpg"),
                    hotel: "lake Nakuru lodge",
                    location: "Nakuru",
                    rating: [
                        { id: 1, rate: 1 },
                        { id: 2, rate: 2 },
                        { id: 3, rate: 3 },
                        { id: 4, rate: 4 },
                    ]
                },

            ],
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Parallax],
        };
    },
};
</script>
<style>
#hotels {
    height: "600px";
    background: #fff;
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

.swiper-container h4 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: .5px;
    margin: .5rem 0;
    text-transform: capitalize;
}

.swiper-container p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.065em;
    color: #434343;
}


.swiper-images {
    height: 300px;
    width: 250px;
    margin-right: 1.5rem;
    border-radius: 50px;
    object-fit: cover;
}

.star-cont {
    display: flex;
    flex-direction: row;
    height: 30px;
    margin-top: .75rem;
}
.star{
    height: 20px;
    width: 20px;
    padding-right: .3rem;
    
}
</style>

    // 

    <!-- <swiper-slide v-for="image in images" :key="image.id">
        <img :src="image.imageurl" />
    </swiper-slide> -->

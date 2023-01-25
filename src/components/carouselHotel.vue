<template>
    <div className="">
        <img :src="image" class="swiper-images" />
        <v-row class="justifyspace">
            <h4>{{ title }}</h4>
            <v-h4> {{ price }}</v-h4>
        </v-row>
        <v-row class="justifyspace ">
            <p align="center">
                <Icon icon="material-symbols:location-on-outline-rounded" color="#c1040c" width="20" height="20"
                    class="icon" />{{
                        location
                    }}
            </p>
            <v-p>{{ people }}</v-p>
        </v-row>
        <v-row class="justifyspace">
            <div class="star-cont">
                <div v-for="star in rating" :key="star.id">
                    <v-img src="../assets/Star-icon.svg" class="star" />
                </div>
            </div>
            <v-btn x-small color="red-darken-1">Learn more</v-btn>

        </v-row>

    </div>
</template>
<script>
import { Icon } from '@iconify/vue';



export default {
    components: {
        Icon,
    },
    props: ["image", 'title', 'location', 'rating', 'people', 'price']
}
</script>
<style>
.justifyspace {
    margin: .5rem 0;
    justify-content: space-around;
}

.swiper-container h4 {

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: .02px;
    color: #434343;

    text-transform: capitalize;
}

.swiper-container p {

    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.02em;
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

.star {
    height: 10px;
    width: 10px;
    padding-right: .3rem;

}

.icon {
    padding: 0 .2rem;
}
</style>
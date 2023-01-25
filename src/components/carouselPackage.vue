<template>
    <div className="">
        <img :src="image" class="swiper-images" />
        <v-col class="justifyspace">
            <h4>{{ title }}</h4>
            <v-btn class="btn" x-small color="red-darken-1">See More</v-btn>

        </v-col>

    </div>
</template>
<script>




export default {

    props: ["image", 'title',]
}
</script>
<style>
.btn {
    margin-top: .5rem;
}

.swiper-container h4 {

    font-weight: 600;
    font-size: 21px;
    line-height: 24px;
    letter-spacing: .02px;
    color: #434343;
    text-transform: capitalize;
}


.swiper-images {
    height: 300px;
    width: 250px;
    margin-right: 1.5rem;
    border-radius: 50px;
    object-fit: cover;
}
</style>
<template>
  <v-app id="home">
    <NavBar />
    <Header />
    <AboutUs />
    <SwiperSlider />
    <ListWithUs />
    <SwiperPackages />
    <Footer />


  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Header from './components/HeaderComp.vue';
import AboutUs from './components/AboutUs.vue';
import ListWithUs from './components/listWithUs.vue';
import SwiperSlider from './components/SwiperHotels.vue';
import SwiperPackages from "./components/SwiperPackages.vue"
import Footer from './components/FooterComp.vue'


export default {
  name: 'App',

  components: {
    NavBar,
    Header,
    AboutUs,
    ListWithUs,
    Footer,
    SwiperSlider,
    SwiperPackages
  },

  data: () => ({
    //
  }),
}
</script>
<style>
#home {
  background-color: #FFEEEE;
}
</style>

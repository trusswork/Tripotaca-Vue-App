<template>
  <v-app-bar color="white lighten-1" app>
    <v-img src="../assets/logoRed.png" contain max-width="130" class="ml-5"></v-img>
    <v-spacer></v-spacer>
    <div class="date_range">
      <p>Anywhere</p>
      <div class="line-diveder" />
      <p>Anyplace</p>
      <div class="line-diveder" />
      <p>Everyone</p>

    </div>
    <v-spacer></v-spacer>
    <span class="text-red-darken-1 d-none d-sm-flex mr-5">
      <strong>Login</strong> | Register
    </span>
    <v-btn icon dark>
      <v-icon x-small color="red lighten-4"></v-icon>
    </v-btn>
  </v-app-bar>
</template>
  
<script>

export default {
  name: "NavBar",
};
</script>
<style>
.date_range {
  display: flex;
  flex-direction: row;
  width: '400px';
  background: #FEDCDC;
  /* background-color: #C1040C;*/
  box-shadow: 0px 4px 5px rgba(231, 4, 6, 0.2);
  border-radius: 50px;
}

.date_range p {
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  margin: .5rem 1.5rem;
  color: #C1040C;
  cursor: pointer;
}

.line-diveder {
  margin-top: .5rem;
  height: 30px;
  width: 1px;
  background-color: #C1040C;
}
</style>
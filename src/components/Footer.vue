<template>
  <v-container id="footer" class="mt-4">
    <div
      class="d-flex flex-wrap justify-center align-content-center"
      width="100%"
    >
      <div v-for="logo in logos" :key="logo.id" class="logo">
        <a :href="logo.website_link">
          <img :src="`${host}${logo.image_url}`" width="40%" />
        </a>
      </div>
    </div>
    <v-footer class="justify-center mt-3" color="#05222f">
      <small class="white--text">&#169; 2021 by BUDD ROGERS</small>
    </v-footer>
  </v-container>
</template>

<script>
import api from "@/api/api.js";

export default {
  name: "Footer",
  data() {
    return {
      host: process.env.API_ROOT,
      logos: []
    };
  },

  created() {
    this.axios.get(api.logos).then(response => {
      this.logos = response.data.data.results;
    });
  }
};
</script>

<style scoped>
/* .container {
  position: fixed;
  bottom: 0;
} */
.logo {
  width: 20%;
}
small {
  font-size: 12px;
}
</style>

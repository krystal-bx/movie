<template>
  <v-container class="mt-12" style="height:100%;">
    <div style="height:100%;margin-bottom: -40px;">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, i) in artists" :key="i">
            <img :src="`${host}${item.image_url}`" class="people" />
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <p style="font-weight: bold;">
              {{ item.name }}
            </p>
            <p style="text-indent: 20pt;">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </v-container>
</template>

<script>
import api from "@/api/api.js";
import Footer from "@/components/Footer";

export default {
  name: "Executive Biography",

  data() {
    return {
      artists: {},
      host: process.env.API_ROOT,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        dynamicBullets: false,
      },
    };
  },
  components: {
    Footer,
  },
  created() {
    this.getArtists();
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  methods: {
    getArtists() {
      this.axios.get(api.artists).then((response) => {
        this.artists = response.data.data.results;
      });
    },
  },
};
</script>

<style scoped>
.people {
  width: 100%;
}
p {
  padding: 7px;
  text-align: justify;
  font-size: 14px;
}
.swiper-button-prev,
.swiper-button-next {
  top: 23%;
}
</style>

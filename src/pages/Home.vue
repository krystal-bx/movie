<template>
  <v-container class="mt-12" id="home">
    <div class="swiper-content">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) of movies" :key="index">
          <!-- <img class="swiper-img" :src="url + item.img" /> -->
          <div style="height: 85%;">
            <video :poster="`${host}${item.image_url}`" controls="controls">
              <source :src="`${host}${item.video_url}`" type="video/mp4" />
              <source :src="`${host}${item.video_url}`" type="video/ogg" />
            </video>
          </div>
          <div class="name">{{ item.title }}</div>
        </swiper-slide>
      </swiper>
    </div>
    <swiper
      :options="swiperOptionThumbs"
      class="gallery-thumbs"
      ref="swiperThumbs"
    >
      <swiper-slide
        class="slide-1"
        style="{width:100px;height:154px;}"
        v-for="itemImg of movies"
        :key="itemImg.id"
      >
        <div class="imgItem">
          <img :src="`${host}${itemImg.image_url}`" />
        </div>
      </swiper-slide>
    </swiper>
  </v-container>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import store from "@/store.js";
import api from "@/api/api.js";

export default {
  name: "Home",
  data() {
    return {
      host: process.env.API_ROOT,
      movies: [],
      movie_name: "",
      swiperOption: {
        loop: false,
        initialSlide: 1,
        spaceBetween: -2,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.3,
        watchSlidesProgress: true,
        coverflowEffect: {
          //修改其中的数值，即可
          rotate: 0, //旋转
          stretch: -200, //拉伸
          depth: 150, //深度
          modifier: 1,
          slideShadows: true
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      },
      swiperOptionThumbs: {
        initialSlide: 1,
        spaceBetween: 18,
        loop: false,
        slidesPerView: 5,
        slideToClickedSlide: true,
        watchSlidesVisibility: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  watch: {},
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.mySwiper.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.params.control = swiperThumbs;
      swiperThumbs.params.control = swiperTop;
    });
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.axios.get(api.movies).then(response => {
        this.movies = response.data.data.results;
      });
    }
  }
};
</script>
<style deep>
#home .swiper-content {
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
}
#home .swiper-container {
  width: 90%;
  height: 400px;
}
#home .name {
  width: 75%;
  height: 35px;
  margin: auto;
  background: #052635;
  line-height: 35px;
  margin-top: 20px;
  font-weight: bold;
  overflow: hidden;
}
#home video {
  width: 100%;
  /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  height: 100%;
  object-fit: fill;
}
#home .gallery-thumbs {
  height: 104px !important;
  box-sizing: border-box;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 32px;
}
#home .gallery-thumbs .swiper-slide {
  width: 73px !important;
  height: 100px !important;
  cursor: pointer;
  opacity: 0.6;
}
#home .gallery-thumbs .swiper-slide img {
  width: 100%;
  height: 100px;
}
#home .gallery-thumbs .swiper-slide-active {
  opacity: 1;
  border: 2px solid #fff;
}
.swiper-container-3d .swiper-slide-shadow-left {
  height: 80% !important;
}
.swiper-container-3d .swiper-slide-shadow-right {
  height: 80% !important;
}
</style>

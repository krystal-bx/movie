<template>
  <div id="header">
    <v-toolbar
      color="#032636"
      dark
      style="position:fixed;top:0;z-index:111;"
      width="100%"
      height="48px"
    >
      <img
        src="../assets/buddrogers .png"
        alt=""
        style="margin: auto;padding-left:36px;"
      />
      <v-app-bar-nav-icon
        color="white"
        @click="handelclick()"
      ></v-app-bar-nav-icon>
      <ul v-show="show" class="top">
        <li @click="changeRouter('home')">Home</li>
        <li @click="changeRouter('about')">About us</li>
        <li @click="changeRouter('executives')">Executives Biography</li>
        <li @click="changeRouter('pojects')">Our Projects</li>
        <li @click="changeRouter('portfolio')">Investment Portfolio</li>
        <li @click="changeRouter('contact')">Contact Us</li>
      </ul>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: false
    };
  },
  methods: {
    handelclick: function() {
      this.show = !this.show;
    },
    changeRouter: function(val) {
      if (val === "home") {
        this.$router.push({ path: "/" });
      } else if (val === "about") {
        this.$router.push({ path: "/about" });
      } else if (val === "executives") {
        this.$router.push({ path: "/Executives" });
      } else if (val === "pojects") {
        this.$router.push({ path: "/Projects" });
      } else if (val === "portfolio") {
        this.$router.push({ path: "/Portfolio" });
      } else if (val === "contact") {
        this.$router.push({ path: "/Contact" });
      }
      this.show = false;
    }
  }
};
</script>

<style scoped>
#herder {
  width: 100%;
  height: 75px;
  background: #05222f;
}
.top {
  position: absolute;
  top: 48px;
  z-index: 999;
  width: 100%;
  background: rgb(3, 38, 54);
  list-style-type: none;
  left: 0px;
}
.top li {
  line-height: 50px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
</style>

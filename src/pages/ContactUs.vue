<template>
  <v-container class="mt-12">
    <div style="height:100%;margin-bottom: -40px;">
      <v-row>
        <img src="../assets/images/c1.png" alt="" class="map" />
      </v-row>
      <div class="mt-10 contact">
        <v-row>
          <v-col cols="2">
            <img src="../assets/images/cl1.png" />
          </v-col>
          <v-col cols="10">
            <span>Call: ：020-400-400-40</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <img src="../assets/images/cl2.png" />
          </v-col>
          <v-col cols="10">
            <span>Email：1234567@163.com</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <img src="../assets/images/cl3.png" />
          </v-col>
          <v-col cols="10">
            <span class="white--text">WhatsApp：上海市XXXX区XXX街道XXX号F</span>
          </v-col>
        </v-row>
      </div>
    </div>
    <Footer />
  </v-container>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "Contact Us",
  components: {
    Footer
  }
};
</script>

<style scoped>
.container {
  width: 95%;
  margin: auto;
}
.map {
  margin-top: 16px;
  width: 100%;
}
.contact {
  width: 100%;
  background: #052635;
  color: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 25px 5px;
}
.col-10 {
  text-align: left;
}
</style>

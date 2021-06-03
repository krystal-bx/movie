<template>
  <v-container class="mt-12" style="height:100%;">
    <div style="height:100%;margin-bottom: -40px;">
      <v-row class="about">
        <v-col cols="6" sm="2" v-for="i in images" :key="i.id" class="box">
          <v-img :src="require(`../assets/images/a${i.id}.jpg`)"> </v-img>
          <p class="p1 text-center align-center ">{{ i.name }}</p>
        </v-col>
      </v-row>
      <v-layout>
        <div
          align="justify"
          class="box2"
          style="font-style: SourceHanSansCN-Regular !important;"
        >
          <p style="text-indent: 20pt;">
            Budd Rogers Releasing Corporation was founded in 1949 as Rogers &
            Unger, by Budd Rogers, a motion picture executive for 51 years, who
            was better known as executive vice president of Embassy Pictures
            Corporation and president of the Pathe - America Distributing
            Company Inc. in the 50s.
          </p>
          <p style="text-indent: 20pt;">
            During the 50s, Budd Rogers Releasing Corporation had released
            several movies including The Dark Mirror, Magic Town, A Double Life,
            Secret Beyond the Door and Mr. Peabody and the Mermaid.
          </p>
          <p style="text-indent: 20pt;">
            In 1962, Budd Rogers organized the Ultra Pictures Corporation and
            Budd Rogers Releasing Corporation was then merged into Melange
            Pictuures, subsidiary of Paramount Pictures, who was later merged
            into ViacomCBS group.
          </p>
          <p style="text-indent: 20pt;">
            From 1994, Budd Rogers Releasing Corporation reformed its business
            into investmment. That strategic impulse is a common thread among
            the transformation in the film industry. in late 20th century.
          </p>
          <p style="text-indent: 20pt;">
            Budd Rogers Releasing Corporation has till now invested in 23
            movies, among which is life of Pi and Mission: Impossible are on top
            of the highest-grossing films. With average Return of investment of
            37%, Budd Rogers releasing Corporation is still now one of the most
            transformative company in the film industry.
          </p>
        </div>
      </v-layout>
    </div>
    <Footer />
  </v-container>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "About Us",
  data() {
    return {
      images: [
        {
          id: 1,
          name: "Budd Rogers"
        },
        {
          id: 2,
          name: "Titanic (1997)"
        },
        {
          id: 3,
          name: "Mission: Impossible (1996)"
        },
        {
          id: 4,
          name: "Irrfan Khan of Life of Pi (2012)"
        }
      ]
    };
  },
  components: {
    Footer
  }
};
</script>

<style scoped>
.about img {
  width: 318px;
  height: 399px;
}
.box {
  position: relative;
}
.box .p1 {
  position: absolute;
  bottom: 13px;
  width: 88%;
  background: rgba(0, 0, 0, 0.7);
  font-size: 12px;
  line-height: 25px;
}
.box p {
  margin-bottom: 0;
}
.box2 {
  font-size: 14px;
}
.box2 p {
  margin-top: 20px;
}
</style>

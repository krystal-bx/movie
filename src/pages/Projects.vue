<template>
  <v-container class="mt-12" style="height:100%;">
    <div style="height:100%;margin-bottom: -60px;">
      <v-row>
        <v-col cols="6" sm="2">
          <div
            :class="['btn', flag === 1 ? 'active' : '']"
            @click="handleclick('ongoing')"
          >
            Ongoing Projects
          </div>
        </v-col>
        <v-col cols="6" sm="6">
          <div
            :class="['btn', flag === 2 ? 'active' : '']"
            @click="handleclick('Previous')"
          >
            Previous Projects
          </div>
        </v-col>
      </v-row>

      <div class="list list_on" v-if="flag === 1">
        <div
          style="font-size: 16px;line-height: 400px;"
          v-if="ongoing.length < 1"
        >
          No record
        </div>
        <v-row class="list_item" v-for="(item, index) in ongoing" :key="index">
          <div class="maskIt" v-if="item.confidential">Confidential item</div>
          <v-row class="line">
            <v-col cols="3">
              <img
                :src="`${host}${item.image_url}`"
                alt=""
                style="width:100%"
              />
            </v-col>
            <v-col cols="9" class="information">
              <p>
                {{ item.title }} <span>{{ item.year }}</span>
              </p>
              <p>
                Budget/Revenue(in million USD):{{
                  item.investment / 1000000
                }}/{{ item.return / 1000000 }}
              </p>
              <p>Investment Returned in (month):{{ item.payback }}</p>
              <p>
                Annualized Return on Investment (ROI):{{ item.return_rate }}
              </p>
            </v-col>
          </v-row>
          <v-row class="download">
            Project Details：<a
              :download="`${item.title}`"
              :href="`${item.file_content_url}`"
            >
              <v-btn color="05222f">Download（pdf）</v-btn></a
            >
          </v-row>
        </v-row>
        <v-pagination
          v-if="totalPage > 1"
          v-model="currentPage"
          :total-visible="10"
          class="mt-6"
          :length="totalPage"
          color="#05222f"
        ></v-pagination>
      </div>
      <div class="list list_on" v-if="flag === 2">
        <div
          style="font-size: 16px;line-height: 450px;"
          v-if="previous.length < 1"
        >
          No record
        </div>
        <v-row class="list_item" v-for="(item, index) in previous" :key="index">
          <v-row class="line">
            <v-col cols="3">
              <img
                :src="`${host}${item.image_url}`"
                alt=""
                style="width:100%"
              />
            </v-col>
            <v-col cols="9" class="information">
              <p>
                {{ item.title }} <span>{{ item.year }}</span>
              </p>
              <p>Director:{{ item.director }}</p>
              <p class="actors">Artists:{{ item.actors }}</p>
              <p>
                Budget/Revenue(in million USD):{{
                  item.investment / 1000000
                }}/{{ item.return / 1000000 }}
              </p>
              <p>Investment Returned in (month):{{ item.payback }}</p>
              <p>
                Annualized Return on Investment (ROI):{{ item.return_rate }}
              </p>
            </v-col>
          </v-row>
          <v-row class="download score">
            <v-col style="padding: 5px;">
              Awards：
              <img
                v-for="i in 4"
                :key="i"
                :src="require(`../assets/images/a${i}.png`)"
                height="15"
                class="Awards"
              />
            </v-col>
            <v-col>IMDB:{{ item.imdb_score }}</v-col>
          </v-row>
        </v-row>
        <v-pagination
          v-if="totalPage > 1"
          v-model="currentPage"
          :total-visible="10"
          class="mt-6"
          :length="totalPage"
          color="#05222f"
        ></v-pagination>
      </div>
    </div>
    <Footer v-if="show" />
  </v-container>
</template>

<script>
import api from "@/api/api.js";
import Footer from "@/components/Footer";

export default {
  name: "Projects",
  data() {
    return {
      host: process.env.API_ROOT,
      active: 1,
      ongoing: [],
      previous: [],
      flag: 1,
      offset: 0,
      limit: 10,
      count: "",
      currentPage: this.$route.params.page
        ? parseInt(this.$route.params.page)
        : 1,
      show: "ture"
    };
  },
  components: {
    Footer
  },
  computed: {
    totalPage() {
      return Math.ceil(this.count / this.limit);
    }
  },
  watch: {
    currentPage(val) {
      this.offset = val * 10 - 10;
      if (this.flag === 1) {
        getList();
      } else {
        this.getPrevious();
      }
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.flag = 1;
      this.axios
        .get(
          api.movies +
            "?offset=" +
            this.offset +
            "&limit=" +
            this.limit +
            "&type=ongoing"
        )
        .then(response => {
          this.ongoing = response.data.data.results;
          this.count = response.data.data.count;
          if (this.ongoing.length < 1) {
            this.show = false;
          } else {
            this.show = true;
          }
        });
    },
    getPrevious() {
      this.list = [];
      this.axios
        .get(
          api.movies +
            "?offset=" +
            this.offset +
            "&limit=" +
            this.limit +
            "&type=previous"
        )
        .then(response => {
          this.previous = response.data.data.results;
          this.count = response.data.data.count;
          if (this.previous.length < 1) {
            this.show = false;
          } else {
            this.show = true;
          }
        });
      this.flag = 2;
    },
    handleclick(val) {
      this.offset = 0;
      if (val === "ongoing") {
        this.getList();
      } else {
        this.getPrevious();
      }
      this.currentPage = 1;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.contanier {
  width: 95%;
  margin: auto;
}
.btn {
  width: 100%;
  height: 35px;
  margin: auto;
  background: rgb(2, 44, 63);
  font-size: 14px;
  margin-top: 20px;
  line-height: 35px;
  color: #868686;
  font-weight: bold;
}
.btn.active {
  color: #fff;
}
.list {
  font-size: 12px;
}
.list_item {
  background: rgb(2, 44, 63);
  font-size: 12px;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  position: relative;
}
.maskIt {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #05222f;
  background-color: rgba(9, 34, 47, 0.9);
  line-height: 150px;
  font-size: 14px;
}
.line {
  width: 100%;
  margin: auto;
  border-bottom: 2px solid #0f4259;
}
.information {
  text-align: left;
}
.information p:first-child {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}
.information p {
  margin-bottom: 0;
}
.download {
  width: 100%;
  margin: auto;
  height: 45px;
  line-height: 45px;
}
.download .v-btn {
  background: #05222f;
  color: #fff;
  font-size: 12px;
  height: 23px;
}
.score {
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
}
.score .col {
  padding: 0;
}
.Awards {
  margin-right: 4px;
}
.actors {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

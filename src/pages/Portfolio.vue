<template>
  <div class="bg">
    <img src="../assets/images/pdf.png" alt="" class="pdf" /><br />
    <a download="investment.png" href="../assets/images/bg111.png">
      <v-btn class="mt-3 white--text" color="#000" width="60%"
        >download pdf</v-btn
      >
    </a>
  </div>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.bg {
  width: 100%;
  height: 100%;
  background: url("../assets/images/n2.png") top no-repeat;
  background-size: 100% 100%;
}
.pdf {
  width: 20%;
  margin: auto;
  margin-top: 200px;
}
</style>

<template>
  <div class="d-flex flex-column">
    <p class="textHeading">show coin in table</p>
    <div class="blookChains w-100 d-flex flex-wrap align-items-center">
      <div class="d-flex justify-content-center">

        <div v-for="item in Object.keys(Blookchins)" :key="item.id"
             class="d-flex currencyBlock w-100">
          <table class="table d-flex flex-column">
            <thead class="titleCurrency">
              <th scope="col">{{item}}</th>
            </thead>
            <tbody class="amount d-flex flex-column">
            <template v-if="Blookchins[item]">
              <template v-if="Blookchins[item].data">
                <td> {{Blookchins[item].data.market_price_usd}}</td>
              </template>
              <template v-if="Blookchins[item].data">
                <td>{{Blookchins[item].data.transactions}}</td>
              </template>
              <template v-if="Blookchins[item].data">
                <td>{{Blookchins[item].data.circulation}}</td>
              </template>
              <template v-if="Blookchins[item].data">
                <td>{{Blookchins[item].data.transactions_24h}}</td>
              </template>
              <template v-if="Blookchins[item].data">
                <td>{{Blookchins[item].data.best_block_time}}</td>
              </template>
              <template v-if="Blookchins[item].data">
                <td>{{Blookchins[item].data.blockchain_size}}</td>
              </template>
            </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

import {mapGetters} from "vuex";

export default {
  name: "HomePage",
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      'Blookchins': 'getBlookchins'
    })
  },
  mounted() {
    this.$store.dispatch('getDigitalCurrency')
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/Main";
@import "../assets/css/Size";
@import "../assets/css/ReUsable";
@import "../assets/css/Transition";
@import "../assets/scss/Color";
.currencyBlock {
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
tbody.amount {
  display: flex;
  flex-direction: column;
  padding: 9px;
  text-align: left;
}
.textHeading{
  display: flex;
  justify-content: center;
  padding: 5px;
  font-weight: bold;
}
</style>

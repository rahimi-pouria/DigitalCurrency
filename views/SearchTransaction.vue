<template>
  <div class="d-flex flex-column">
    <p class="textHeading">this is Search transactions</p>
    <!--    <b-table striped hover :bitcoins="bitcoins"></b-table>-->
    <div class="w-100 px-5">
<!--      <b-form-input type="search" v-model="text" placeholder="Enter your name"></b-form-input>-->
      <input type="text" placeholder="search for transaction" v-model="searches" @input="Searches" class="form-control">
    </div>
    <div class="px-5">
      <table class="table">
        <thead>
        <tr>
          <th>Hash</th>
          <th>Block</th>
          <th>Input count</th>
          <th>Output count</th>
          <th>Time (UTC)</th>
          <th>Output (BTC)</th>
          <th>Output (USD)</th>
          <th>Transaction fee (USD)</th>
        </tr>
        </thead>
        <template v-for="(bitcoin, i) in bitcoins.data">
          <tbody v-if="showTransAction"  :key="i">
          <tr class="text-center">
            <td>{{ bitcoin.hash }}</td>
            <td>{{ bitcoin.block_id }}</td>
            <td>{{ bitcoin.input_count }}</td>
            <td>{{ bitcoin.output_count }}</td>
            <td>{{ bitcoin.time }}</td>
            <td>{{ bitcoin.output_total }}</td>
            <td>{{ bitcoin.output_total_usd }}</td>
            <td>{{ bitcoin.fee }}</td>
          </tr>
          </tbody>
        </template>
        <tbody v-for="(bitcoin, i) in transActions" :key="i">
        <tr class="text-center">
          <td>{{ bitcoin.hash }}</td>
          <td>{{ bitcoin.block_id }}</td>
          <td>{{ bitcoin.input_count }}</td>
          <td>{{ bitcoin.output_count }}</td>
          <td>{{ bitcoin.time }}</td>
          <td>{{ bitcoin.output_total }}</td>
          <td>{{ bitcoin.output_total_usd }}</td>
          <td>{{ bitcoin.fee }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "SearchTransaction",
  data () {
    return{
      searches: null,
      showTransAction: true,
      transActions: []

    }
  },
  computed: {
    ...mapGetters({
      'bitcoins': 'getTransAction'
    })
  },
  mounted() {
    this.$store.dispatch('transActionCoin')
  },
  methods: {
    Searches () {
      console.log(this.bitcoins)
      this.transActions = this.bitcoins.data.filter(bitcoin => bitcoin.hash.includes(this.searches))
      this.showTransAction = false
    }
  }
}
</script>

<style scoped lang="scss">
.textHeading{
  display: flex;
  justify-content: center;
  padding: 5px;
  font-weight: bold;
}
</style>

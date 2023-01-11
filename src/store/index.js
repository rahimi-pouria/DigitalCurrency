import Vuex from 'vuex'
import axios from "axios";
/*eslint-disable*/

export default new Vuex.Store({
    state: {
        Blookchins: {},
        bitcoins: []
    },
    getters:{
      getBlookchins : state => state.Blookchins,
      getTransAction : state => state.bitcoins
    },
    mutations: {
        setBlockchin(state, Blookchins) {
            state.Blookchins = Blookchins
        },
        setTransaction(state, bitcoins) {
            state.bitcoins = bitcoins
        }
    },
    actions: {
        getDigitalCurrency({commit}) {
            return axios.get('https://api.blockchair.com/stats')
                .then((resp) => {
                    let blookchin = resp.data.data
                    commit('setBlockchin', blookchin)
                })
        },
        //transaction
        transActionCoin({commit}) {
           return axios.get('https://api.blockchair.com/bitcoin/dashboards/transaction/50a49d721e54da03caf07a2cd36ed77cea7f4cdba60bddbcf0ba43eed0064ab8')
                .then((transaction )  => {
                    let dataTransaction = transaction.data
                    commit('setTransaction', dataTransaction)
                })
        }
    }
})

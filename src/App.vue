<template>
  <div id="app" class="container">

    <div class="row">
      <div class="col-12">
        <h1>Dashboard</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <CoinPrice/>
      </div>
      <div class="col-sm-6">
        <PercentChange/>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            Bitcoin Pricing History
          </div>
          <ul class="list-group list-group-flush">
            <PriceItem  v-for="(price,index) in prices" v-bind:price="price" v-bind:key="index"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoinPrice from './components/CoinPrice'
import PercentChange from './components/PercentChange'
import PriceItem from './components/PriceItem'
import store,{actions} from './store.js'
export default {
  name: 'app',
  components: {
    CoinPrice,PercentChange,PriceItem
  },
  store,
  computed:{
    prices(){
      return store.state.prices
    }
  },
  created: function(){
    setInterval(this.triggersNewPrice, 3000)
  },
  methods:{
    triggersNewPrice:() =>{
      const diff=(Math.random() - Math.random()) * 10
      const randomNewPrice=store.getters.currentPrice.amount + diff
      store.commit(actions.UPDATE_PRICE,{
        amount:randomNewPrice,
        timestamp: Date.now()
      })

    }
  }
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
   #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

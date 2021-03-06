import Vue from 'vue'
import Vuex from 'vuex'
import prices from './prices'

Vue.use(Vuex)

const store= new Vuex.Store({
    state:{
        prices: prices
    },
    getters:{
        currentPrice:(state)=>{
           return  state.prices[0]
        },
        previousPrice: (state) =>{
            return state.prices[1]
        },
        percentageIncrease: (state, getters) =>{
            const currentAmount= getters.currentPrice.amount
            const PreviousAmount=getters.previousPrice.amount
            return (
                ((
                (currentAmount - PreviousAmount)/PreviousAmount) * 100 ).toFixed(2))
        },
        differcne: (state, getters) =>{
            const currentAmount= getters.currentPrice.amount
            const PreviousAmount=getters.previousPrice.amount
            return (currentAmount - PreviousAmount).toFixed(2)
        }
    },
    mutations:{
        UPDATE_PRICE(state, newPricing){
            state.prices.pop()
            state.prices= [newPricing,...state.prices]
        }

    },
    actions: {

    }
})

export default store

export { default as actions } from './actions'
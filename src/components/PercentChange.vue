<template>
    <div id="counter" class="bg-primary text-white">
        <div class="row p-3">
            <div class="col-2">
                <i class="fas fa-percent fa-4x"></i>
            </div>
            <div class="col-10 text-right">
                <h2>
                    {{ percentageIncrease}}
                    <small>%</small>
                </h2>
                {{ currentPrice.timestamp | moment("dddd, MMMM Do YYYY,h:mm:ss a")}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'PercentChnage',
    computed:{
        percentageIncrease: function(){
            return this.$store.getters.percentageIncrease
        },
        currentPrice: function(){
            return this.$store.getters.currentPrice
        }
    },
    methods:{
        formatTimeStamp: timestamp =>{
            const currentDate= new Date(timestamp)
            return currentDate.toString().substr(16,24)
        }
    }
}
</script>

<style>

</style>

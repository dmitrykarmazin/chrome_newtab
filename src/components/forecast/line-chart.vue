<template>
  <div>
    <chart v-if="!loading" :chartData="chartData" :height="200"></chart>
  </div>
</template>
<script>
import chart from './chart.js'
import { mapGetters } from 'vuex'
export default {
  name:'lineChart',
  data(){
    return {
      chartData:{
        labels:[0],
        datasets:[{data:[0]},{data:[0]}]
        },
      options:{},
      loaging:true
    }
  },
  created(){
    this.handleData(this.forecast10day)
  },
  computed:{
    ...mapGetters('forecast',['forecast10day'])
  },
  methods:{
    handleData:function({simpleforecast:{forecastday}}){
            var data = {labels:[],datasets:[{data:[]},{data:[]}]}
            forecastday.forEach(day=>{
              data.labels.push(`${day.date.day}.${day.date.month}`)
              data.datasets[0].data.push(`${day.high.celsius}`)
              data.datasets[1].data.push(`${day.low.celsius}`)
            }) 
            data.datasets[0].borderColor = "rgba(243, 232, 255, 0.7)" 
            data.datasets[1].borderColor = "rgba(197, 100, 224, 1)"
            data.datasets[1].pointBackgroundColor="rgba(197, 100, 224, 1)" 
            this.chartData = data
            this.loading = false
        }
  },
  components:{
    chart
  }
}
</script>
<style lang="sass">

</style>

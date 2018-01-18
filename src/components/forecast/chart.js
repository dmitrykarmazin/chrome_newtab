import { Line, mixins  } from 'vue-chartjs'
import Chartjs from 'chart.js'

Chartjs.defaults.global.defaultFontFamily = 'Roboto';
Chartjs.defaults.global.defaultFontColor = 'white';

 export default ({
    extends: Line,
    props:['chartData'],
    mixins: [mixins.reactiveProp],
    data(){
        return{
            //data:'hello',
            datacollection:null,
            options:{}
        }
    },
    created(){
        this.assign()
    },
    methods:{
        assign:function(){    
            this.datacollection = Object.assign({},this.chartData)
            this.options =  Object.assign({},options)
        }
    },
    mounted() {
         this.renderChart(this.datacollection, this.options)
    }     
})
const datasets = {
    labels: [],
    datasets: [
        {
            label: "Day",
            data: [],
            backgroundColor:"rgba(243, 232, 255, 0.7)",  
            borderColor:"rgba(243, 232, 255, 0.7)"
           
        },
        {
            label: "Night",
            data: [],           
            borderColor:"rgba(197, 100, 224, 0.7)",
            pointBackgroundColor:"rgba(197, 100, 224, 1)"                       
        }                   
    ]
}
const options = {
    responsive: true, 
    maintainAspectRatio: false,
    color:["whire","red"],
    legend:{
         display:false
    },
    title:{
        display:true,
        text:'10 Day Weather',
        fontSize:19,
        fontStyle:300,
        padding:20     
    },
    tooltips:{
        titleFontFamily:'Roboto',
        titleFontSize:16,
        titleFontStyle:300,
        caretSize:4
    },
    scales: {
        xAxes: [{   
            gridLines: {
                display: true,
                color: 'transparent',
                //drawTicks:false,
                //zeroLineWidth:1,
                //zeroLineColor:'transparent',
                ///zeroLineBorderDash:[5,5]
            }     
        }],
        yAxes: [{
            //display: true,
            gridLines: {
                display: true,
                color: 'transparent',
                drawTicks:false,
                zeroLineWidth:1,
                zeroLineColor:'rgba(216, 216, 216,.9)',
                zeroLineBorderDash:[5,5]
            },
            ticks: {
                padding:5,      
                stepSize :5              
            }
        }]
    },
    elements:{
        point:{
            borderWidth:0,
            radius:2,
            hoverRadius:5,
            backgroundColor:"white"
        },
        line:{
            borderWidth:2,
            fill:false,
            backgroundColor:"white"   
        }
    },
    animation: {
        duration: 0, 
    }
}

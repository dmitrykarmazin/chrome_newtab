<template>
    <div class="hourly-container">
        <ul class="hourly-list">
            <li class="hourly-item" v-for="item in hourly" :key="item.id">
                <div class="item-container">
                    <div class="temp">
                    <span>{{item.temp}}<sup>&#176;</sup></span>
                    </div>
                    <div class="weather__icon__wrap">
                        <svg class="weather__icon">
                            <use :xlink:href="'#icon-'+ item.icon"></use>
                        </svg>
                    </div>
                    <div class="time">
                        <span>{{item.time_h}}</span>
                    </div>
                </div>
                
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name:'hourlyForecast',
        computed:mapGetters('forecast',['hourly']),
        filters:{
            data:(data)=>{
                return data
            }
        }
    }
</script>
<style lang="scss">
    .hourly-container{
        margin:10px;
    }
    .item-container{
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        font-weight:200;
        font-size:0.9em;
    }
    .hourly-list { 
        height: 120px;
        //overflow-x: scroll;
        overflow-x: hidden;
        overflow-y: hidden;
        white-space: nowrap;
        width: auto;
        .hourly-item {
            width: 40px;
            height: 100%;
            //margin-left: 10px;
            display: inline-block;
            .weather__icon__wrap{
                width:30px;
                height:30px;
                .weather__icon{
                    width:100%;
                    height:100%;
                }
            }
        }
    }

</style>
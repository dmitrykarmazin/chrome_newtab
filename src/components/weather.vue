<template>
    <div class="weather_forecast">
        <div class="forecast__nowaday__main">
            <div class="location__title">
                    <span class="title">{{today.display_location.full}}</span>
            </div>     
            <div class="current_temp">
                <div class="weather__icon__wrap">
                    <svg class="weather__icon">
                        <use :xlink:href="'#icon-'+ today.icon"></use>
                    </svg>
                </div>
                <div class="temp">
                    <div class="forecast__desc">
                        <span>{{today.weather}}</span>
                    </div>
                    <div class="temp_c">
                        <span>{{today.temp_c}}<sup>&#176;</sup></span>
                    </div>
                    <div class="feelslike_c">
                        <span>Feels like {{today.feelslike_c}}<sup>&#176;</sup></span>
                    </div>
                    
                </div>
            </div>
            <div class="last_update">
                <span>{{today.observation_time}} 15:57</span> 
            </div>
            <div class="forecast_details">
                <div class="details_item">
                    <svg class="details__icon">
                        <use :xlink:href="'#icon-'"></use>
                    </svg> 
                    humidity
                    <div class="details_desc">
                        <h4>{{today.relative_humidity}}</h4>
                    </div>
                </div>
                <div class="details_item">
                    <svg class="details__icon">
                        <use :xlink:href="'#icon-wind'"></use>
                    </svg> 
                    pressure
                    <div class="details_desc">
                        <h4>{{today.pressure_mb}}<span>mb</span></h4>
                    </div>
                </div>
                <div class="details_item">
                    <svg class="details__icon">
                        <use :xlink:href="'#icon-wind'"></use>
                    </svg> 
                    <div class="details_desc">
                        <h3>{{today.wind_dir}}</h3>
                        <h4 class="litegray">{{today.wind_kph}}<span>km/h</span></h4>
                    </div>
                </div>
                <div class="details_item">
                    <svg class="details__icon">
                        <use :xlink:href="'#icon-'"></use>
                    </svg>
                    visibility 
                    <div class="details_desc">
                        <h4>{{today.visibility_km}}<span>km/h</span></h4>
                    </div>
                </div>   
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapState } from 'vuex'
    export default {
        name:'weather',
        computed:{
            ...mapGetters(['today','hourly','astronomy','forecast']),
            ...mapState(['currentLocation'])
        }

    }
</script>
<style lang="scss">
    .litegray{
        color:lightgray;
        font-size:0.8em;
    }
    .weather_forecast{
        width: 25%;
        background-color: rgba(53, 31, 68, 0.3);
        text-align: center;
        color:white;
        font-family: Roboto,sans-serif;

        .location__title{
            margin:20px;
            .title{
                text-align: center;
                font-family: Roboto,sans-serif;
                font-size:2em;
                font-weight: 200;
                color: white;
            }
        }
        .current_temp{
            display:flex;
            .weather__icon__wrap{
                flex:0 1 60%;
                .weather__icon{
                    width:100%;
                }
            }
            .temp{
                padding: 10px;
                .forecast__desc{
                    font-size:1.25em;
                    font-weight: 200;
                    margin-bottom: 5px;
                }
                .temp_c{
                    font-size:3em;
                    font-weight: 100;
                
                }
                .feelslike_c{
                    color:lightgray;
                    font-size:0.8em;
                    
                }
            }
        }
        .last_update{
            font-size:0.8em;
            color:lightgrey;
        }
        .forecast_details{

            display: flex;
            flex-wrap: wrap;
            margin: 10px;

            .details_item{
                max-width:50%;
                box-sizing: border-box;
                min-height: 40px;
                border-radius: 5px;
                padding:10px;
                
                display: flex;
                justify-content: center;
                *{
                    align-self: center;
                    margin: 5px;
                    font-weight: 300;
                }
                svg{
                    height: 40px;
                    max-width: 35%;
                }
            }
        }
    }
    
        
</style>

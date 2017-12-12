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
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHESURBVEhL7Za7SgNBFIYj3sBOsDDNXmIQTOW9FbGwESwUH8DKR9BCrBTtvOxOEhsL0SJPYCeInZVY2NiIoIUIyeymErKes/kxuzGuK2FCinxwmDnn/JN/L7NDEh3agmTeG8C0dWiiOGgIec8jSq3BFM4phccjSupJ5crTpi0rvjGNnKOlFjK7wt1Wg3K0YqPbcgzTeJjZ4mzI9Nu8PAPJn7CpIZzSv8zJ5OCHaTX2IYnG87oM27nhNTxyjk40dKV7dYZ+0I/sQhKJkXXWQusoRysa7cSdpM/oM7SYcl24E5D8TsHrNm3nMbiWc65DEY1pyVXaUK/VhTzKFbQiMSy5HDJFcB2SeIzm5RCmsaALPG5kTPVDSNRAT2erkXFKyE1I1KBb7jC904+gKW3Kd65D0iQRmyWdK47QZrw0bPlAccE5Ws1Dd3KmZWUGaWswhLuIR3gb+3Bolqm810uGT7V3WFpHSy109m7UTPmu5XP6qNKPthrmdrwe2jQvQWMOvhhI1KDbzny9qR+2vIZEDfQ+lxoZ0+O+g0QN/N+r/nDwjYXchkQdKctZoHP3LWB6nil4fWirhT8pOgLHtZybRKlDO5NIfAHXBHtdzatw2gAAAABJRU5ErkJggg==">
                    <div class="details_desc">
                        <h4>{{today.relative_humidity}}</h4>
                    </div>
                </div>
                <div class="details_item">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARcSURBVEhLrVdtT1NZEG70T7i6JrvrT9B/sCpmTVYoGpf9YjCKuoSi2fiaCBjZoK4WaoAPUMD4UrH4xurqB+NLBKT0FiGUlhcxGpF7K0h9waBC27PznHuOtvTW3rI8yaQn98zMc++cmTlTS6bY5HYvXn28fenaCs9KCNZ4JrYXFj9XeH/KsStHck93B/Jqe7QdTQPqn5dGXkOw/r22V8VezimlbM3fnh+F2fyx9qh3ubWq+/pWZyDkuD8RbR2KsFsjMUO5PjjLHA8molvrAxps1pc/WibcZIZfT3oL82p6Xjk976LxBLdJ7j6PsY5RXe4+05/F68CGohDKtis7hbv0wHlZK32NxReHwzeeRL84U9QYG5tibCbKOEIfdAHwDHvQkfqwtbmGwzkOn9NUDuQ6fI1lN0enpIN2+qrwR50gHu0vaI9kLqALG2lfdmN0ylrlaxDujZFj9xYWu55MSqOeUIxFkn2nBWxgK/3YLgxPWiuVXYImEUgknMvNYT28MJz6zNhIeB7MAo8FOXzm1fZqhglH4Wit73wbgyJChbcG6eWgOFSTGKNYX1M0voaPNjoO+CTfUauj+6qg07HuRPsKlAwUIEZnagYgLT7r578Sk9OM+4TkO/tDCXWOwkedYhOZmQ4DlMJuj8oFa8CIVEJmu+P+eHSDXTksaCmTqeugAWBT+DHEh08Rtq95gB28/JRVt01y2U/r3ecCrOhMnyEp8PK9/tXg2Hi6u5+TosbQ8rCBRiDr1AggrSEy6Epx9U6z32p6OHkqwKdsMnk1vWppKVtkySpXvitoDGp4iC6UCkF67QP0ddD7l8R+b5yV3xpjW+r8nHx/y1M2pKYOF3zDdntjQPvlRNcSy+rjXauo2U/gIVogupFRY8B5IrTQA2nWsU4uIMcz7Lm7VKH9FfAFn/ANPXDhVksifmWCGGSSuJJeIh0xfCYRmw01sheJhLAivH8ROUgRdtiaDfW2poDKQ202ufBKBc4+Rr2ck0NfChLuQPOgrmiA+OSiRNR4cgHfKqd307OshcL8R5Of5VYpbGdDH/+66odUTiRYH3IP8lJLBVlOrfHlBGRX+kpSNZA95/pZszLOguOzrJDIsYuQ4sxbvOo3wyshG0jVg4lIQgPBaJPv9Bu2zGIifvY2xslBlilez2mZWRWdPwhaHRhX5LQhLwmg9s5zttcVZHsvBnnYM0H8JVHX8SZmdfiuCLqvWHfM8/3ca/H/IuFarH4cwkQq6BKBy9oWNwjAMJLZrcgBG0kKKaJBINvuLRA0xsCYgnFFGiFUuNrMAroyvJCSfzD6KPXCfWqgrjGg2VxDScMeysKozmeokrDnFdkLQXht54fCRFpnatiTwGhK420ISSGdQdAI0IXQAiFYy+YgBTabyTb7ZJrwpgJmJGQ7lZqGGpRNxkjQHKCTX+/XkL1oxcLN/IHaQ5NB16GhTd0e9xcGa7pjNeyhOSTV6UIBfRZfI/+0Yf2l95qGxfIf7GtIZGEW5MkAAAAASUVORK5CYII=">
                    <div class="details_desc">
                        <h4>{{today.pressure_mb}}<span>mb</span></h4>
                    </div>
                </div>
                <div class="details_item">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOASURBVEhL1ZZLTBNBGMfX6MFEgpp4MZ6Mnk08GPVkfNBtghGNJy/GaIIKiu9I1AAG6G6ttca3KAVaBKsVBQuiYIpRtgVEHm0pYGHbgiIElZei0PZzpo6KOtiXJPpPfunuzDf/b95bJlhdLXk174zBFScvFXepHrhZoxFmkKqp0SmDuC1JY32VpLV5OYMIqocuyCjpgN05lvHDBXaLwtC1nIT+Hd0CmH5U1yocu90Gte5REAd8v1HROgi71c2ejGKHkjSLXMm61vqsqm5qwok43nrhuL7dx5eKPGkavpRlzhRFmZOaiAZOnqSxjV+q6F5KLMLTXo1tuK3fQ00yGY/sA3Ck0N5ALEKXqty9UXa/k2oeiO1ZTeNcaefW0+XO9alGcSaxDE4n777M1dX2UY0Dcb7SDXjn447HZzd5Ttxp0wPANGL9Z6UUvTSUWd9TjUOh450Xzla4IUXf/oBY06UyinNQUn2cstZTiY4JzSwcDha0+M5Wdi0haX6Wosy9LD67eURregPtb0PbVIG4iZZtx/XGLmWpczNJ91Waxp5ZiXmWIZP4gdowUux943DnRT+kFTlgT56l58pj1yJ/4vR7HbpwN1OoVNgHITHPOqg190cz6M4ddKCNQAucCm7V9UF6saOYSci1emkBU0XHey/sUltGmMRcq4cWEAz4yOCrFd10aP1soCx3QTCzh6bbyyTkNA/gu5YWEAjVQzfko5Pw7V0j9MAFdIlMjKGBNtlnBn1bCwpqeqkBgThUaP+tDI/+17KJ1HePwn6t1ek/TqgHQ886R6iBoYKnnFaOweubrLP7Lle5N/mP1EV0s8Srm4fVT19DqF+lieRV98DFx13UuhrXRzh0o8WXWdx5zZ/0my4Ye6PS7jl0O9WWgYbu0WFr7xjsz2+BfUGCR4r/FuHN1fD60486rQ0Scixje7U212mDuIWk+8fEcuZYicx0NCJ482Epb15BLIOTRCYsZjlhXSQgDynLC3r8S2wn16pU44wYzryGZvQrUrmwah3/fDZp+l1sRt188sjEck/nSnhTEXmdXNJUczQKzEQ95QMh4UxyFCvEZggLSHO/WN50TiI3r8bPUnn1WtRJhb8iUsUozAtRUv+3lZWbNsRwwgF/BRGeBZS8BPEEj5Y2K2EJLUeUhBeMUk7YxHKmu1JZ9TJSNfXCo8YjZWXPVpKi/0UM8wUFozhiGFQ/SgAAAABJRU5ErkJggg==">
                    <div class="details_desc">
                        <h3>{{today.wind_dir}}</h3>
                        <h4 class="litegray">{{today.wind_kph}}<span>km/h</span></h4>
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
                    height: 115px;
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
            margin: 10px 5px;
            justify-content: space-between;

            .details_item{
                max-width:33%;
                box-sizing: border-box;
                min-height: 40px;
                border-radius: 5px;
                padding:5px;
                
                display: flex;
                justify-content: center;
                *{
                    align-self: center;
                    margin-right: 5px;
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

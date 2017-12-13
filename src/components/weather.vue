<template>
    <div class="weather_forecast">
        <button class="location" @click="getPosition"></button>
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
                        <h4>{{today.pressure_mb|convertTommHg}}</h4>
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
            <hourly-forecast></hourly-forecast> 
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapState , mapActions } from 'vuex'
    import hourlyForecast from './hourly-forecast.vue'
    export default {
        name:'weather',
        computed:{
            ...mapGetters(['today','forecast']),
            ...mapState(['currentLocation'])
        },
        filters:{
            convertTommHg: value => {
                return `${(value*0.75006375).toFixed(2)} mmHg`;
            }
        },
        methods:{  
            ...mapActions({
                getPosition:'GET_POSITION'
                })
        },
        components:{
            hourlyForecast
        }
        

    }
</script>
<style lang="scss">
    .litegray{
        color:lightgray;
        font-size:0.8em;
    }
    .weather_forecast{
        position:relative;
        top:0;
        left:0;
        width: 25%;
        background-color: rgba(53, 31, 68, 0.3);
        text-align: center;
        color:white;
        font-family: Roboto,sans-serif;
        .location{
            position:absolute;
            top:20px;
            right:10px;
            width:30px;
            height:30px;
            border:0;
            background-image: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU5LjUxIDU5LjUxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OS41MSA1OS41MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjUzLjA1NywyNC43NiA0My4wNTcsMjQuNzYgMTcuMDU3LDI0Ljc2IDcuMDU3LDI0Ljc2IDMuNDAyLDUzLjc2IDU2LjE3MSw1My43NiAiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik01My4wNTcsMjQuNzZsMy4xMTQsMjlIMy40MDJsMy42NTUtMjloMTBoMjZINTMuMDU3IE01NS43NTIsMjEuNzZoLTIuNjk1aC0xMGgtMjZoLTEwSDQuNDExICBMNC4wOCwyNC4zODVsLTMuNjU1LDI5TDAsNTYuNzZoMy40MDJoNTIuNzY5aDMuMzM5bC0wLjM1Ny0zLjMybC0zLjExNC0yOUw1NS43NTIsMjEuNzZMNTUuNzUyLDIxLjc2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRUJCQTE2OyIgZD0iTTEzLjY4NCw0OS43NmMtMC4yNTcsMC0wLjUxMy0wLjAxNi0wLjc2OS0wLjA0N2MtMC4yMTgtMC4wMjYtMC40MzgtMC4wNjctMC42NTMtMC4xMjQgIGMtMC41MzUtMC4xMzgtMC44NTYtMC42ODQtMC43MTgtMS4yMThjMC4xMzgtMC41MzUsMC42ODMtMC44NiwxLjIxOC0wLjcxOGMwLjEzMiwwLjAzMywwLjI2NCwwLjA1OSwwLjM5NiwwLjA3NSAgYzAuNDAzLDAuMDUsMC44MTEsMC4wMzcsMS4yMTUtMC4wMTVjMC41NTItMC4wNjUsMS4wNDksMC4zMTksMS4xMTcsMC44NjdjMC4wNjksMC41NDgtMC4zMTksMS4wNDgtMC44NjcsMS4xMTcgIEMxNC4zMSw0OS43MzgsMTMuOTk1LDQ5Ljc2LDEzLjY4NCw0OS43NnogTTE4LjMzNCw0OC42MDJjLTAuNDAxLDAtMC43NzktMC4yNDMtMC45MzMtMC42NGMtMC4xOTktMC41MTYsMC4wNTgtMS4wOTUsMC41NzItMS4yOTMgIGMwLjU5Mi0wLjIyOSwxLjE4OC0wLjQ4MywxLjc3NC0wLjc1OWMwLjUwMy0wLjIzNSwxLjA5Ni0wLjAxOSwxLjMzLDAuNDhjMC4yMzQsMC41LDAuMDIsMS4wOTYtMC40OCwxLjMzICBjLTAuNjI4LDAuMjk1LTEuMjY5LDAuNTY4LTEuOTAzLDAuODEzQzE4LjU3Niw0OC41ODEsMTguNDU0LDQ4LjYwMiwxOC4zMzQsNDguNjAyeiBNOS45ODcsNDYuODdjLTAuNTA3LDAtMC45NDEtMC4zODQtMC45OTQtMC44OTggIGMtMC4wMi0wLjE5Ny0wLjAyOC0wLjM5NS0wLjAyOC0wLjU5MmMwLTAuMTE2LDAuMDAzLTAuMjMyLDAuMDA5LTAuMzQ3YzAuMDIzLTAuNDY5LDAuMDk5LTAuOTQyLDAuMjI1LTEuNDA2ICBjMC4xNDQtMC41MzUsMC42OTctMC44NTMsMS4yMjYtMC43MDRjMC41MzMsMC4xNDQsMC44NDksMC42OTIsMC43MDQsMS4yMjZjLTAuMDg4LDAuMzI2LTAuMTQxLDAuNjU3LTAuMTU2LDAuOTgzICBjLTAuMDA0LDAuMDgyLTAuMDA3LDAuMTY1LTAuMDA3LDAuMjQ4YzAsMC4xMjksMC4wMDUsMC4yNiwwLjAxOSwwLjM4OWMwLjA1NiwwLjU1LTAuMzQ1LDEuMDQtMC44OTQsMS4wOTcgIEMxMC4wNTUsNDYuODY4LDEwLjAyMSw0Ni44Nyw5Ljk4Nyw0Ni44N3ogTTIzLjY2Niw0NS44NzFjLTAuMzI3LDAtMC42NDgtMC4xNi0wLjg0LTAuNDU1Yy0wLjMwMS0wLjQ2NC0wLjE2OS0xLjA4MywwLjI5NC0xLjM4NCAgYzAuNTM1LTAuMzQ3LDEuMDY2LTAuNzIsMS41OC0xLjEwN2MwLjQ0NC0wLjMzMiwxLjA2OC0wLjI0MSwxLjQwMSwwLjE5NmMwLjMzMiwwLjQ0MSwwLjI0NCwxLjA2OC0wLjE5NiwxLjQwMSAgYy0wLjU1MiwwLjQxNS0xLjEyMiwwLjgxNS0xLjY5NSwxLjE4OEMyNC4wNDEsNDUuODE5LDIzLjg1Myw0NS44NzEsMjMuNjY2LDQ1Ljg3MXogTTI4LjQyNSw0Mi4yMjFjLTAuMzA5LDAtMC42MTMtMC4xNDMtMC44MS0wLjQxMSAgYy0wLjMyNS0wLjQ0Ni0wLjIyNy0xLjA3MiwwLjIyLTEuMzk3YzAuMjA5LTAuMTUxLDAuNDIyLTAuMywwLjY0MS0wLjQ0MWMwLjM3Ny0wLjI0NSwwLjc4MS0wLjQ3NywxLjItMC42ODggIGMwLjQ5Ni0wLjI0NywxLjA5NS0wLjA0OCwxLjM0MywwLjQ0NGMwLjI0OCwwLjQ5MywwLjA0OSwxLjA5NS0wLjQ0NCwxLjM0M2MtMC4zNTQsMC4xNzgtMC42OTMsMC4zNzItMS4wMSwwLjU3NyAgYy0wLjE4OCwwLjEyMy0wLjM3MiwwLjI1LTAuNTUyLDAuMzgyQzI4LjgzNSw0Mi4xNTksMjguNjI5LDQyLjIyMSwyOC40MjUsNDIuMjIxeiBNMTIuNDY5LDQxLjc0OGMtMC4zNTUsMC0wLjY5OS0wLjE4OS0wLjg4LTAuNTIzICBjLTAuMjY0LTAuNDg1LTAuMDgzLTEuMDkyLDAuNDAyLTEuMzU1YzAuNTE4LTAuMjgxLDEuMDcxLTAuNDU2LDEuNjQ0LTAuNTJjMC4yOS0wLjAzMywwLjU5My0wLjAzMiwwLjg5MSwwLjAwOCAgYzAuNTQ3LDAuMDcyLDAuOTMzLDAuNTc0LDAuODYsMS4xMjJjLTAuMDcyLDAuNTQ2LTAuNTYxLDAuOTMxLTEuMTIyLDAuODZjLTAuMTMzLTAuMDE4LTAuMjcxLTAuMDE4LTAuNDA2LTAuMDAyICBjLTAuMzE2LDAuMDM0LTAuNjIzLDAuMTMyLTAuOTEzLDAuMjg5QzEyLjc5Myw0MS43MDksMTIuNjMsNDEuNzQ4LDEyLjQ2OSw0MS43NDh6IE0zMy45MDMsMzkuODk2Yy0wLjQ2MiwwLTAuODc3LTAuMzIxLTAuOTc3LTAuNzkxICBjLTAuMTE1LTAuNTQxLDAuMjI5LTEuMDcyLDAuNzY5LTEuMTg3YzAuNjQzLTAuMTM4LDEuMzM1LTAuMjUyLDIuMDU4LTAuMzQyYzAuNTUzLTAuMDgxLDEuMDQ3LDAuMzIsMS4xMTUsMC44NjkgIGMwLjA2OCwwLjU0OC0wLjMyMSwxLjA0OC0wLjg2OSwxLjExNWMtMC42NjUsMC4wODMtMS4zLDAuMTg4LTEuODg2LDAuMzEzQzM0LjA0MiwzOS44ODksMzMuOTcyLDM5Ljg5NiwzMy45MDMsMzkuODk2eiAgIE0zOS44NjMsMzkuMjc5Yy0wLjUzMywwLTAuOTc3LTAuNDIxLTAuOTk4LTAuOTU5Yy0wLjAyMi0wLjU1MiwwLjQwNi0xLjAxOCwwLjk1OC0xLjA0bDEuOTkzLTAuMDgyICBjMC41NS0wLjA1LDEuMDIsMC40MDEsMS4wNDUsMC45NTRjMC4wMjUsMC41NTEtMC40MDIsMS4wMTktMC45NTQsMS4wNDRsLTIuMDAyLDAuMDgyQzM5Ljg5MiwzOS4yNzksMzkuODc3LDM5LjI3OSwzOS44NjMsMzkuMjc5eiAgIE00NS44NDIsMzguODM2Yy0wLjQ2NSwwLTAuODgxLTAuMzI1LTAuOTc5LTAuNzk4Yy0wLjExMS0wLjU0MSwwLjIzNi0xLjA3LDAuNzc3LTEuMTgyYzAuNTc4LTAuMTE5LDEuMDA2LTAuMjg2LDEuMzQ3LTAuNTI1ICBjMC40MzctMC4zNDEsMS4xMDItMC4yODUsMS40MzgsMC4xNDljMC4zMzksMC40MzcsMC4yOTYsMS4wMzktMC4xNCwxLjM3OGMtMC4wNTUsMC4wNDItMC4xMSwwLjA4My0wLjE2OSwwLjEyMiAgYy0wLjU0NCwwLjM4NC0xLjIyOSwwLjY2MS0yLjA3MiwwLjgzNUM0NS45NzcsMzguODI5LDQ1LjkwOCwzOC44MzYsNDUuODQyLDM4LjgzNnogTTQ5LjkxMSwzNC44MDYgIGMtMC4wOTgsMC0wLjE5Ny0wLjAxNS0wLjI5Ni0wLjA0NWMtMC41MjctMC4xNjMtMC44MjMtMC43MjQtMC42NTktMS4yNTFjMC4wNTMtMC4xNzEsMC4wODYtMC4zNDEsMC4wOTctMC41MDZsMC4wMDQtMC4xMTYgIGMwLTAuMjI5LTAuMDQ0LTAuNDYyLTAuMTMtMC42OTRjLTAuMTkyLTAuNTE4LDAuMDcxLTEuMDkzLDAuNTktMS4yODVjMC41MTQtMC4xOTEsMS4wOTQsMC4wNzEsMS4yODUsMC41OSAgYzAuMTY5LDAuNDU1LDAuMjU1LDAuOTIzLDAuMjU1LDEuMzljMCwwLjA4NC0wLjAwMywwLjE2Ny0wLjAwOCwwLjI1Yy0wLjAyMiwwLjMyNC0wLjA4NCwwLjY0Ni0wLjE4MywwLjk2NCAgQzUwLjczNCwzNC41MzEsNTAuMzM4LDM0LjgwNiw0OS45MTEsMzQuODA2eiBNNDQuODUxLDMwLjY5OWMtMC40MzYsMC0wLjgzNy0wLjI4Ny0wLjk2MS0wLjcyOWMtMC4xNS0wLjUzMSwwLjE1OC0xLjA4NCwwLjY5LTEuMjMzICBjMC43NzktMC4yMiwxLjU5Ny0wLjI4NiwyLjM4Ni0wLjE4YzAuNTQ3LDAuMDc0LDAuOTMxLDAuNTc3LDAuODU3LDEuMTI1Yy0wLjA3MywwLjU0Ny0wLjU2NiwwLjkzMS0xLjEyNSwwLjg1NyAgYy0wLjUyMS0wLjA2OS0xLjA1OC0wLjAyMy0xLjU3NSwwLjEyMUM0NS4wMzIsMzAuNjg3LDQ0Ljk0MiwzMC42OTksNDQuODUxLDMwLjY5OXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0REMzUyRTsiIGQ9Ik00MC44NDQsMTEuOTMxQzQwLjMyLDcuOTMyLDM4LjIzLDIuNzUsMzAuMDIyLDIuNzVjLTguMjA3LDAtMTAuMjk4LDUuMTgyLTEwLjgyMiw5LjE4MSAgYy0wLjI4NywyLjE5Mi0wLjEyNiw0LjQxOSwwLjMzLDYuNTgyYzIuNTA5LDExLjg5Myw4LjcxLDE5LjAyMiwxMC4xNzcsMjAuNTc3YzAuMTcyLDAuMTgyLDAuNDU4LDAuMTgyLDAuNjMsMCAgYzEuNDY3LTEuNTU1LDcuNjY4LTguNjg0LDEwLjE3Ny0yMC41NzdDNDAuOTcxLDE2LjM1LDQxLjEzMiwxNC4xMjMsNDAuODQ0LDExLjkzMXogTTMwLjAyMiwxOS42NzIgIGMtMy41MDUsMC02LjM0Ni0yLjg0MS02LjM0Ni02LjM0NmMwLTMuNTA1LDIuODQxLTYuMzQ1LDYuMzQ2LTYuMzQ1YzMuNTA1LDAsNi4zNDYsMi44NDEsNi4zNDYsNi4zNDUgIEMzNi4zNjgsMTYuODMxLDMzLjUyNywxOS42NzIsMzAuMDIyLDE5LjY3MnoiLz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojQjAyNzIxOyIgZD0iTTMwLjAyMyw1Ljk4MWMtNC4wNTEsMC03LjM0NiwzLjI5NS03LjM0Niw3LjM0NWMwLDQuMDUxLDMuMjk1LDcuMzQ2LDcuMzQ2LDcuMzQ2ICAgczcuMzQ2LTMuMjk1LDcuMzQ2LTcuMzQ2QzM3LjM2OCw5LjI3NiwzNC4wNzMsNS45ODEsMzAuMDIzLDUuOTgxeiBNMzAuMDIzLDE4LjY3MmMtMi45NDcsMC01LjM0Ni0yLjM5OC01LjM0Ni01LjM0NiAgIHMyLjM5OC01LjM0NSw1LjM0Ni01LjM0NXM1LjM0NiwyLjM5Nyw1LjM0Niw1LjM0NVMzMi45NywxOC42NzIsMzAuMDIzLDE4LjY3MnoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K');
            background-size:30px 30px;
            background-repeat-x: no-repeat;    
            background-color:transparent; 
            cursor:pointer;   
            outline:none;
        }
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

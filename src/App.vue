<template>
  <div class="container">
      <transition name="slide">
          <loading-spinner v-if="!isLoaded || !photo_data_load"></loading-spinner> 
      </transition>
      
      <transition name="fade">
          <background-layout v-if="photo_data_load"></background-layout>
      </transition>
      <overlay v-if="isLoaded && photo_data_load"></overlay>
      
  </div>
</template>
<script>
    import { mapState, mapActions, mapGetters } from 'vuex'

    import backgroundLayout from './components/bg/background-layout.vue'
    import loadingSpinner from './components/loading-spinner.vue'
    import overlay from './components/overlay.vue'

    export default {
        name:'app',
        data(){
            return{
                isLoaded: false
            }
        },
        components:{
            backgroundLayout,
            loadingSpinner,
            overlay
        },
        computed:{
            ...mapState({
                'photo_data_load': state => state.photo.photo_data_load,
                'location': state => state.forecast.currentLocation//,
                //'data_isloading': state => state.forecast.isloading
            })
        },
        mounted(){
            this.init()
            console.log(this.store);
        },
        methods:{
            ...mapActions({
              GET_DATA: 'forecast/GET_DATA',
              GET_PHOTO: 'photo/GET_PHOTO'
            }),
            init() {
                this.GET_PHOTO()
                this.checkForecast()
            },
            checkForecast(){
                this.GET_DATA(this.location)
                    .then(()=> {
                        console.log(Date.now())
                        setTimeout(()=>{
                            console.log(Date.now())
                            this.isLoaded = true
                        },700)
                })   
            }
        }
    }

</script>
<style lang="scss">
    @import './assets/_mq.scss';   
    *{
        padding: 0;
        margin: 0;
        user-select: none;
    }
    .container{
        position: relative;
        top: 0;
        left: 0;
        //display:flex;
        width: 100vw;
        min-height: 560px;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: #EFF0F1;
        overflow: hidden;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
    transition: opacity 2s
    }

    .slide-enter{
        opacity: 0;
    }
    .slide-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }
    .slide-enter-active,.slide-leave-active{
        transition: all 0.3s;
    }
</style>

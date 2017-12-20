<template>
  <div class="container">
      <loading-spinner v-if="!isLoaded"></loading-spinner> 
      <transition name="fade">
          <background-layout v-if="isLoaded"></background-layout>
      </transition>
      
      <overlay></overlay>
      
  </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'

    import backgroundLayout from './components/background-layout.vue'
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
        computed:mapState(['currentLocation']),
        methods:{
            ...mapActions(['GET_DATA','GET_PHOTO'])
        },
        created(){
            this.GET_PHOTO()
            this.GET_DATA(this.currentLocation)
                        .then(()=> {
                                setTimeout(()=>this.isLoaded = true,500)
                            })
        },
        
    }
</script>
<style lang="scss">
    @import './assets/_mq.scss';   
    *{
        padding: 0;
        margin: 0;
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


        
        ///@include mobile-only(){
        //}
       // @include desktop(){
             //background: #355C7D;  /* fallback for old browsers */
             //background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
             //background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);
        //}
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
    }
</style>

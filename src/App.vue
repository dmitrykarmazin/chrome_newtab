<template>
  <div class="image-container">
      <lazy-image></lazy-image>
      
  </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    import lazyImage from './components/lazy-image.vue'
    import weather from './components/weather.vue'

    
    export default {
        name:'app',
        data(){
            return{
                name: 'Bob'
            }
        },
        components:{
            lazyImage,
            weather
        },
        computed:mapState(['currentLocation'])
        ,
        methods:mapActions(['GET_DATA'])
        ,
        mounted(){
            //this.$store.dispatch('GET_DATA',this.currentLocation).then(data=>{
            //    console.log(data)
            ///})
            console.log(this.currentLocation)
            this.GET_DATA(this.currentLocation).then(data=>console.log(data))
        },
        beforeCreate() {
            //this.GET_DATA(this.currentLocation).then(data=>console.log(data))
        }
    }

</script>
<style lang="scss">
    @import './assets/_mq.scss';
    body{
        background-color: #423030;
    }
    *{
        padding: 0;
        margin: 0;
    }
    .image-container{
        display:flex;
        background-color: #1c1c1c;
        width: 100vw;
        height: 100vh;
        @include mobile-only(){
             background: #355C7D; 
        }
        @include desktop(){
             background: #355C7D;  /* fallback for old browsers */
             background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
             background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);
        }
        .overlay-image{
            width: 100%;
        }

    }

    p{
        color:white
    }
</style>

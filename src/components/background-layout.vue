<template>
   <div class="image">
       <weather></weather> 
   </div>
</template>
<script>

    import config from '../app.config'
    import weather from './weather.vue'

    export default {
        name:'imageLayout',
        data(){
            return {
                imgsrc:'#'
            }
        },
        mounted(){
            this.getPhoto() 
        },
        methods:{
            getPhoto(){
                return fetch(config.unsplash.randomPhoto)
                        .then(res => res.json())
                        .then(data => {
                            this.imgsrc = data.urls.regular;
                            this.$el.style.backgroundImage = `url('${this.imgsrc}')`;
                        });
            }
        },
        components:{
            weather
        }
    }
</script>
<style lang="scss">
    .image{
        display: flex;
        width:100%;
        height: 100%;
        background-size: cover;
    }

</style>

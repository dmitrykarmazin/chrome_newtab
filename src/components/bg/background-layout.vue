<template>
   <div class="image-container">
       <clazy-load :src="imgsrc">
        <transition name="fade" slot="image">
            <figure class="image-wrapper">
                <img :src="imgsrc">
            </figure>
        </transition>
        </clazy-load>
   </div>
</template>
<script>
    import { mapGetters } from 'vuex' 

    export default {
        name:'imageLayout',
        data(){
            return {
                imgsrc:'https://images.unsplash.com/photo-1512956273586-cce4805e9c63?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=e025bf7d691c52942d75f6aba82bf376'
            }
        },
        created(){    
            this.imgsrc = this.photo.urls.regular
        },
        computed:{
            ...mapGetters({
                photo:'photo/photo'})
        } 
    }
</script>
<style lang="scss">
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
    }

    .image-container{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;  
    }
    .loaded{
        height: 100%;
        figure{
             height: 100%;
            margin:0;
        }
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }    
    }
</style>

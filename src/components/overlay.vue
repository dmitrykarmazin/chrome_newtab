<template>
  <div class="overlay">
    <photo-info></photo-info>
    <page-grid></page-grid>
    <forecast></forecast>
  </div>
</template>
<script>
///http://.+\.\[a-z]\/favicon.ico
//chrome://favicon/http...
import photoInfo from './photo-info.vue';
import forecast from './forecast.vue'
import pageGrid from './page-grid.vue'

  
export default {
  name:'overlay',
  components:{
    photoInfo,
    forecast,
    pageGrid
  }

}
</script>
<style lang="scss">
  .overlay{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9998;
  }
  .bookmars{
    width: 25%;
    height: 45%;
  }
  .photo_deteils{
    width: 25%;
    height: 100%;
  }
</style>

<template>
<div class="overlay">
 <div class="bookmars"></div>
 <div class="photo_deteils"></div>
 <weather></weather>
</div>
</template>
<script>
import weather from './weather.vue'
export default {
  name:'overlay',
  components:{
    weather
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
    z-index: 9999;
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

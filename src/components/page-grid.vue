<template>
   <div class="page-wrap">
      <page-item v-for="page in defaultPageCoun" :key="page"></page-item>
   </div>
    
</template>
<script>
import pageItem from './page-item.vue'

export default {
  name:'pageGrid',
  data(){
    return{
      defaultPageCoun:9
    }
  },
  components:{
    pageItem
  }
}
</script>
<style lang="scss">
  .page-wrap{
    display: flex;
    width: 25%;
    height: 45%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    //background-color: rgba(53, 31, 68, 0.3);
  }
</style>

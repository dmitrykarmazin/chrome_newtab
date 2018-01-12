<template>
  <div class="page">
    <div v-if="page_icon" class="page_close">
      <svg class="close">
            <use xlink:href="#close"></use>
        </svg>
    </div>
    <a :href="page_url" class="page_link">
        <img v-if="page_icon" :src="page_icon" alt="" class="page_icon">
        <svg v-if="!page_icon" class="add_page">
            <use :xlink:href="'#'+ default_icon"></use>
        </svg>
    </a>
    <div v-if="page_icon" class="page_title">
      <span class="title">{{title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'pageItem',
  data(){
    return{
      page_url:"#",
      title:"page_title",
      page_icon:'',
      default_icon:'plus'
    }
  }
}
</script>
  <style lang="scss" scoped>
    .page{
      //border:1px solid red;
      width: 30%;
      height: 25%;
      background-color: rgba(232, 232, 232, 0.8);
      position: relative;
      border-radius:3px;
      transition:all 0.24s;
      &:hover{
        background-color: rgba(53, 31, 68, 0.5);
        box-shadow: 0 0 3px rgba(53, 31, 68, 0.8);
        .page_close{
          opacity:1;
        }
      }
      .page_close{
          opacity: 0;
          position: absolute;
          right: 0;
          top:0;
          width:15px;
          height: 15px;
          cursor: pointer;
          .close{
            width: 100%;
            height: 100%;
          }
      }
      .page_link{
        display: block;
        width:100%;
        height: 100%;
        .add_page{
            width: 100%;
            height: 100%;
        }
      }
      //.page_close{
      //  position: absolute;
      //  top:0;
      //  left: 0;
      //  width:15px;
      //  height: 15px;;
      //  cursor: pointer; 
      //}
      .page_title{
        position: absolute;
        left:0;
        bottom: 0;
        width:100%;
      }
    }
  </style>
  
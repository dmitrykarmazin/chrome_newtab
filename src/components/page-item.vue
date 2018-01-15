<template>
  <div class="page">
    <div v-if="page.link" @click="remove" class="page-close">
      <svg class="close">
            <use xlink:href="#close"></use>
        </svg>
    </div>
    <div class="add-page-wrapper" v-if="!page.page_icon">
      <svg class="add-page">
            <use :xlink:href="'#'+ default_icon"></use>
      </svg>
    </div>
    <a :href="page.link" class="page-link">
        <img v-if="page.page_icon" :src="page.page_icon" alt="" class="page-icon">
    </a>
    <div v-if="page.title" class="page-title">
      <span class="title">{{page.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'pageItem',
  props:{
    page:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
      page_url:"#",
      title:"page_title",
      page_icon:'',
      default_icon:'plus'
    }
  },
  methods:{
    remove(){
      this.$emit('remove', this.page)
    }
  }
}
</script>
  <style lang="scss" scoped>
    .page{
      //border:1px solid red;
      width: 60px;
      height: 60px;
      background-color: rgba(232, 232, 232, 0.8);
      position: relative;
      border-radius:50%;
      transition:all 0.24s;
      margin:calc((100% - (3 * 60px)) / 6);
      &:hover{
        background-color: rgba(53, 31, 68, 0.5);
        box-shadow: 0 0 3px rgba(53, 31, 68, 0.8);
        .page-close{
          opacity:1;
        }
      }
      .add-page-wrapper{
        width:100%;
        height: 100%;
        cursor: pointer;
        .add-page{
            width: 100%;
            height: 100%;
        }
      }
      .page-close{
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
      .page-link{
        display: block;
        width:100%;
        height: 100%;
        .page-icon{
          width:100%;
        }
      }
      .page-title{
        position: absolute;
        left:0;
        bottom: -20px;
        width:100%;
        color:white;
        text-align: center;
      }
    }
  </style>
  
<template>
  <div class="tab"
    v-show="isActive">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'tab',
    data(){
      return {
        isActive:false,
      }
    },
    props:{
      name:{
        required:true
      },
      active:{
        type:Boolean,
        default:false
      }
    },
    computed:{
        href(){
          return '#' + this.name.toLowerCase().replace(/ /g,'-');
        }
    },
    mounted(){
        this.isActive = this.active
      }
  }
</script>
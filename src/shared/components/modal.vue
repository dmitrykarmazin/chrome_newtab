<template>
<transition name="modal">
  <div v-if="isActive" class="modal">
    <div class="modal-mask" @click="cancel('outsite')"></div>
    <div class="modal-close" @click="cancel('x')">
        <svg class="close-icon">
          <use xlink:href="#close"></use>
        </svg>
    </div>
    <div class="modal-content"
      :style="{'width':newWidth}">
      <component 
        :is="component"
        v-if="component"
        :compProps="props"
        @close="cancel('done')">
      </component>
      <div v-else class="modal-body">
        <slot></slot>
      </div>     
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name:'modal',
  data(){
    return{
      isActive : this.active || false,
      newWidth : this.width+"px",
      closeType : ['done','x','outsite','esc']
    }
  },
  props:{
    component:{
      type:[String]
    },
    width:{
      type:Number,
      default:300
    },
    active:{
      type:Boolean,
      required:true
    },
    props:{
      type:[Object,String,Number]
    }
  },
  methods:{
    cancel(type){
      if(this.closeType.includes(type)){
        this.isActive = false
        this.$emit('close')
      }   
    },
    remove(el){
      el.parentNode.removeChild(el);
    } 
  },
  watch:{
    active(value){
      this.isActive = value
    }
  }
}
</script>
<style lang="scss">
.modal{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  z-index: 9999;
  
  .modal-mask{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;  
    background-color: rgba(11, 6, 12, 0.9);
  }
  .modal-close{
      position: absolute;
      top:50px;
      right: 50px;
      width:24px;
      height: 24px;
      cursor: pointer;
      .close-icon{
        width: 100%;
        height: 100%;
      }
    }
  .modal-content{
    min-height: 200px;
    max-height: calc(100vh - 50px);
    border-radius:5px;
    background-color:#fff;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(251, 223, 255, 0.7);
    z-index:2;
  }
}
.modal-enter{
  opacity:0;
  .modal-content{
    opacity: 0;
    transform:translateY(10px) scale(0.9);
  }
}
.modal-leave-to{
  opacity:0;
  .modal-content{
    opacity: 0;
    transform:translateY(10px) scale(0.9);
  }

} 
.modal-enter-active,
.modal-leave-active{
  //opacity: 1;
  transition:all 0.5s ease-in-out;
  .modal-content{
    opacity: 1;
    transition:all 0.3s ease-in-out;
  }
}
</style>


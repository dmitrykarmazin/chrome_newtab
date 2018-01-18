<template>
  <div class="new-page-wrapper">
    <div class="cart-head">
      <p class="cart-title">NEW BOOKMARK</p>
    </div>
    <div class="cart-body">
      <form class="bookmark">
      <input type="text" name="title" placeholder="Title">
      <input type="text" name="link" placeholder="link">
    </form>
      <tabs>
        <tab name="Bookmarks" :active="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ipsa.</tab>
        <tab name="Active tabs">Lorem ipsum dolor sit amet.</tab>
        <tab name="Sky">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sed officia totam? Est quo necessitatibus unde eius quisquam repellendus totam.
        </tab>
      </tabs>
    </div>
    <div class="cart-foot">
       <button class="done" @click="addNewPage">OK</button>
    </div>
    <h3 class="title">NEW BOOKMARK</h3>
    
   
  </div>
</template>
<script>
export default {
  name:'addPage',
  props:{
    type:Object
  },
  data(){
    return{
      newPage:{
        title:'',
        link:''
      }
    }
  },
  methods:{
    addNewPage(){
      this.$emit('close')
    }
  },
  created(){
    console.log(this.$store)
  }
}
</script>


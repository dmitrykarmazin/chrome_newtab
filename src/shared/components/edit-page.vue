<template>
  <div class="edit-page wrapper">
    <ul>
      <li v-for ="(prop, index) in compProps" :key="index">
        {{prop}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'editPage',
  props:{
    compProps:{
      type:Object,
      default:()=>{}
    } 
  }
}
</script>

<template>
  <div class="spinner">
      <div class="cube"></div>
      <div class="cube"></div>
  </div>
</template>
<script>
export default {
  name:'loadingSpinner'
}
</script>
<style lang="scss" scoped>
  .spinner{
    position: absolute;
    top:50%;
    left:50%;
    width:55px;
    height: 55px;
    //transform: translate(-50%,-50%);
    margin:-22px 0 0 -22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50%;
    animation: spin .7s ease-in-out infinite ;
    animation: rotate .8s ease-in-out infinite ;
  
    animation-fill-mode: forwards;
  
    .cube{
      background-color:#517;
      width: 10px;
      height: 10px;
    }
    @keyframes spin {
      50%{
        transform: scale(1.5);
      }
      100%{
        transform: scale(1.5);
      }
    }
    @keyframes rotate {
      100%{
        transform: rotate(360deg);
      }
    }
  }
</style>

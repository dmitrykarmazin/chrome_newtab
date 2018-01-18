<template>
  <div class="info-wrapper" v-if="photo_data_load">
    <div>
      <a title="Download photo" :href="photo_data.links.download" class="link download-photo" target="_blank"> 
        <svg class="icon-download" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"    x="0px" y="0px" viewBox="0 0 56 56">
          <path d="M28,44c-0.552,0-1-0.447-1-1V5c0-0.553,0.448-1,1-1s1,0.447,1,1v38C29,43.553,28.552,44,28,44z"/>
          <path d="M28,44c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l12-12
            c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-12,12C28.512,43.902,28.256,44,28,44z"/>
          <path d="M28,44c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414
            s1.023-0.391,1.414,0l12,12c0.391,0.391,0.391,1.023,0,1.414C28.512,43.902,28.256,44,28,44z"/>
          <path d="M28,44c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414
            s1.023-0.391,1.414,0l12,12c0.391,0.391,0.391,1.023,0,1.414C28.512,43.902,28.256,44,28,44z"/>
          <path d="M56,52H0V39c0-0.553,0.448-1,1-1s1,0.447,1,1v11h52V39c0-0.553,0.448-1,1-1s1,0.447,1,1V52z"/>
        </svg>
        <span>Download</span>
      </a>
    </div>   

    <div class="photo-info">
      <a :href="photo_data.user.links.html" class="user-link">
        <img class="user-avatar" :src="photo_data.user.profile_image.small" alt="avatar">
      </a>
      <div class="user-info">
        <a :href="photo_data.user.links.html" class="link user-link-name">
          <span>{{photo_data.user.name}}</span>
        </a>
        <p v-if="photo_data.location" class="photo-location">
          <span>{{photo_data.location.title}}</span>
        </p>
      </div>
    </div>
  </div>  
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    name:'photoInfo',
    computed:mapState('photo',['photo_data','photo_data_load']),
    created(){
      console.log(this.photo);
    }
  }
</script>
<style lang="scss">
 @import '../../assets/_variables.scss';

  .info-wrapper{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    width: 15%;
    height: 100%;
    padding:20px 20px;
    .download-photo{ 
      display:inline-block;
      margin-top:10px;
      padding:7px 15px;
      background-color: rgba(45, 29, 61,0.7);
      border-radius:4px;
      transition: all 0.3s ease-in-out;
      //border:1px solid lightgray;
      &:hover{
        border: 0;
        background-color: rgba(45, 29, 61,1);  
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    
        .icon-download{
          transform: translateY(2px);
        }

      }
      .icon-download{
        width:18px;
        fill:rgb(240, 255, 255);
        transition: all 0.3s ease-in-out;
        margin-right: 2px;
      }
    }
    .photo-info{
      display: flex;
      justify-content: flex-start;
      align-content: center;
      padding-bottom: 20px;

    }
    .user-avatar{
      width:32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 10px;
      background-color: rgb(73, 73, 73);
      transition:all 0.4s ease-in-out;
      &:hover{
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      }
    }
    .photo-location{
      color:$text-color;
      font-size:0.8em;
    }
  }
  .link{
    color:$text-color-main;
    text-decoration: none
  }
</style>


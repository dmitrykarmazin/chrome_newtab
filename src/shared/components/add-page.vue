<template>
  <div class="new-page-wrapper">
    <div class="cart-head">
      <p class="cart-title">NEW BOOKMARK</p>
    </div>
    <div class="cart-body">
      <form class="bookmark-form">
        <div class="control">
          <input class="input" type="text" name="title" placeholder="Title">
          <span class="icon left">
            <svg>
              <use xlink:href="#drawingline"></use>
            </svg>
          </span>
        </div>
        <div class="control">
          <input class="input" type="text" name="link" placeholder="link">
          <span class="icon left">
            <svg>
              <use xlink:href="#link"></use>
            </svg>
          </span>
        </div>
      </form>
      <tabs>
        <tab name="Bookmarks" :active="true">
          <bookmark-tree 
            v-for="bookmarkNode in bookmarks"
            :node="bookmarkNode"
            :deep="0"
            :key="bookmarkNode.id"
            >
          </bookmark-tree>
        </tab>
        <tab name="Active tabs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat nisi nam temporibus tempora dolores tempore non atque alias ratione assumenda cupiditate debitis necessitatibus error, ipsam explicabo expedita maiores. Animi accusantium itaque sequi deserunt officia aut sit, maiores qui neque!</tab>
      </tabs>
    </div>
    <div class="cart-foot">
       <button class="add-page-btn" @click="addNewPage">ADD PAGE</button>
    </div>
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
      },
      bookmarks:[]
    }
  },
  methods:{
    addNewPage(){
      this.$emit('close')
    }
  },
  mounted(){
    //console.log(this.$store)
    chrome.bookmarks.getTree((nodes) =>{
      
      this.bookmarks = nodes
      console.log(this.bookmarks);
    })
    
  }
}
</script>

<style lang="scss">
.new-page-wrapper{
  .cart-head,.cart-foot{
    padding: 20px;
    .cart-title{
      color:lightgray;
      font-family: Roboto,sans-serif;
      font-weight: 300;
      font-size:1.75em;
    }
  }
  .cart-body{
    padding:0 15px;
  }
  .control{
    position: relative;
    .input{
      box-sizing: border-box;
      width:100%;
      height: 2em;
      max-width: 100%;
      margin-bottom: 10px;
      background-color:#fff;
      font-family: Roboto,sans-serif;
      font-size:1.25em;
      font-weight: 100;
      padding: 0.35em 0.7em 0.35em 2em;   
      line-height: 1.55;
      color:#484848;
      border-radius: 3px;
      border:1px solid rgba(48, 48, 48, 0.5);

      &:hover{
        box-shadow: 0 0 2px rgba(48, 48, 48, 0.9);
      
      }
      &:active{
        border-color:rgba(59, 28, 68, 0.9);
        
      }
      &:focus{
        outline: none;
        border-color:rgba(79, 47, 87, 1);
        box-shadow: 0 0 7px rgba(53, 31, 68, 0.8);
      }
    }
  }
  .cart-foot{
    text-align: right;
    
    .add-page-btn{
      padding:5px 12px;
      border:1px solid rgb(79, 47, 87);
      font-family: Roboto,sans-serif;
      font-size:1.2em;
      font-weight: 300;
      border-radius: 3px;
      background: white;
      transition:all 0.35s ease-in-out;
      
      &:hover{
        color:white;
        background-color: rgb(79, 47, 87);
      }
    }
  }
}

.icon{
    position: absolute;
    top: calc( (2.5em - 1.25em) / 2 );
    width:1.25em;
    height: 1.25em; 
}
.left{
  left: calc( (2.5em - 1.25em) / 2 );

} 
svg{
  fill:rgba(79, 47, 87, 1);
  width:100%;
  height: 100%;
}
</style>

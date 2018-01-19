<template>
  <div class="bookmarks-node" >
      <div class="bookmarks-node title" :style="{'padding-left':deepTree}" >
        <div v-if="node.children" @click="toggleChildren"
        class="folder-icon">
            <svg class="bookmark-icon">
              <use :xlink:href="'#'+ folderIcon"></use>
            </svg>
          <span class="title">{{node.title}}</span>  
        </div>
        <div v-if="!node.children && node.url" class="bookmark-details">
          <img class="bookmark-icon" :src="favicon">
          <span class="bookmark-title">{{node.title}}</span>
        </div>
      </div>

      <bookmark-tree 
            v-if="showChildrenNode&&node.children"
            v-for="bookmarkNode in node.children"
            :node="bookmarkNode"
            :deep="deep+1"
            :key="bookmarkNode.id">
      </bookmark-tree>
  </div>
</template>
<script>

export default {
  name:'bookmarkTree',
  props:{
    node:{
      type:Object  
    },
    deep:{
      type:Number
    }
  },
  data(){
    return {
      showChildrenNode: false
    }
  },
  computed:{
    folderIcon() {
     return this.showChildrenNode ? 'folder-open': 'folder-close';
    },
    title(){ 
      return this.node.title == '' ? this.node.id == 0 
                              ? "Bookmarks" : 'unknown'
                                            : this.node.title;
    },
    favicon(){
      return `chrome://favicon/${this.node.url}`;
    },
    deepTree(){
      if(this.deep == 0) return "5px"
      return `${this.deep * 16}px`;
    }
  },
  methods:{
    toggleChildren(){
      return this.showChildrenNode = !this.showChildrenNode;
    }
  }
}
</script>
<style lang="scss">
  .bookmarks-node{
    min-height: 24px;
    .folder-icon{
      display: flex;
      height: 24px;
      align-items: center;
      cursor: pointer;
      .bookmark-icon{
          margin-right: 5px;
          width:1.4em;
          height: 1.4em; 
      }  
    }
    .bookmark-details{
      display:flex;
      align-items: center;
      height: 24px;
      &:hover{
        .bookmark-title{
          color:#484848;
        }
      }
      cursor: pointer;
      .bookmark-icon{
        height: 16px;
        margin-right: 5px;
      }
      .bookmark-title{
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      } 
    }    
  }
</style>
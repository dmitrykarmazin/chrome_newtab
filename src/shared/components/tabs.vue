<template>
  <div class="tabs">
    <ul class="tabs-list">
      <li class="tabs-options-tab"
        v-for="(tab, index) in tabs" 
        :key="index"
        :class="{'tab-active':tab.isActive}">
          <a class="option-link"
            :href="tab.href"
            @click.prevent="selectTab(tab)">
            
              <svg>
                <use :xlink:href="'#'+tab.name">
                </use>
              </svg>
            
            <span>{{tab.name}}</span>
            
          </a>
      </li>
    </ul>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>

export default {
  name:'tabs',
  data() {
    return {
      tabs: []
    }
  },
  created(){
    this.tabs = this.$children;
  },
  methods:{
    selectTab(selectedTab){
      this.tabs.map((tab) => {
         tab.isActive = (tab.href == selectedTab.href)   
      })
    }
  }
}
</script>
<style lang="scss">
.tabs-list{
  list-style:none;
  display:flex;
  justify-content: flex-start;
  align-content: center;
  margin:10px 0 0;
  .tabs-options-tab{
    flex:1;
    display:flex;
    padding: 5px;
    justify-content: center;
    color:black;
    transition:all 0.3s easy-in-out;
    .option-link{
      text-decoration: none;
      display:block;
      font-family: Roboto,sans-serif;
      font-size:1em;
      color:inherit;
      border:2px solid transparent;
      transition:all 0.3s ease-in-out;
      &:hover{
          color:gray;
      }
      svg{
        width:1em;
        height: 1em; 
      }
    }
    
  }
}
.tab-content{
  background-color:rgb(230, 224, 231);

  height: 250px;
  overflow-y: scroll;
  &::-webkit-scrollbar-track{
    //box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    //background-color: #F5F5F5;
  }
  &::-webkit-scrollbar{
    width: 6px;
    background-color:rgb(230, 224, 231);
    border-radius: 1px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #4f2f57;
    border: 1px solid #727272;
    border-radius: 2px;
  }
}
.tab-active{
  color:#4f2f57 !important;
  background-color:rgb(230, 224, 231);
  .option-link{
    
  }
  //border:1px solid rgb(79, 47, 87);
  //border-bottom:rgba(243, 197, 255, 0.5)
}

</style>


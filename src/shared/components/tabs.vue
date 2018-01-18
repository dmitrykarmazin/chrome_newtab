<template>
  <div class="tabs">
    <ul class="tabs-list">
      <li class="tabs-options-tab"
        v-for="(tab, index) in tabs" 
        :key="index">
          <a class="option-link"
            :href="tab.href" 
            @click.prevent="selectTab(tab)">
            {{tab.name}}
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

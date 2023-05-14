<template>
    <div>
      <div class="tabs">
        <div v-for="(tab, index) in tabs" :key="index" @click="selectedTab = index" :class="{ active: selectedTab === index }">
          {{ tab.label }}
        </div>
      </div>
      <div class="tab-content">
        <component :is="tabs[selectedTab].component" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  
  interface Tab {
    label: string;
    component: string;
  }
  
  export default({
    name: "TabNavigation",
    props: {
      tabs: {
        type: Array as () => Tab[],
        required: true,
      },
    },
    data() {
      return {
        selectedTab: 0,
      };
    },
  });
  </script>
  
  <style>
  .tabs {
    display: flex;
  }
  
  .tabs div {
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
  
  .tabs div.active {
    background-color: #eee;
  }
  
  .tab-content {
    margin-top: 10px;
  }
  </style>
  
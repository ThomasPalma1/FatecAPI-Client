<template>
  <div class="tabs">
    <div class="tab-list">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { active: activeTab === index }]"
        @click="changeTab(index)"
      >
        {{ tab.title }}
      </button>
    </div>
    <div>
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-pane', { active: activeTab === index }]"
      >
        <slot name="tab-content" :tab="tab" :activeTab="activeTab"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { title: 'LOGIN' },
        { title: 'CADASTRO' },
      ],
    };
  },
  methods: {
    changeTab(index: number) {
      this.activeTab = index;
    },
  },
};
</script>

<style>
.tabs {
  margin-top: 40px;
  flex-direction: column;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  border-radius: 4px;
  overflow: hidden;
}

.tab-list {
  display: flex;
}

.tab-button {
  padding: 12px 20px;
  font-size: 16px;
  color: #fff;
  background-color: hsla(41, 62%, 51%, 1);
  cursor: pointer;
  transition: background-color 0.3s;
  border: none;
  outline: none;
  width: 250px;
}

.tab-button:hover {
  background-color: #e8e8e8;
}

.tab-button.active {
  color: #333;
  background-color: #fff;
  border-bottom: 3px solid hsla(41, 62%, 51%, 1);
  position: relative;
  z-index: 1;
}

.tab-pane {
  display: none;
}

.tab-pane.active {
  display: flex;
}
</style>

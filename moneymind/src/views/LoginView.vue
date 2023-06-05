<template>
  <div>
    <Tab>
      <template v-slot:tab-content="{ tab }">
        <div v-if="tab.title === 'LOGIN'">
          <SingIn/>
        </div>
        <div v-if="tab.title === 'CADASTRO'">
         <SingUp/>
        </div>
      </template>
    </Tab>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tab from '../components/TabNavigation.vue';
import SingIn from '@/components/SingIn.vue';
import SingUp from '@/components/SingUp.vue';

export default defineComponent({
  name: 'App',
  components: {
    Tab,
    SingIn,
    SingUp,
},
});
</script>

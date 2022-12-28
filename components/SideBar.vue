<template>
  <div class="container">
    <div v-for="(element, index) in sidebarElements" :key="index">
      {{ element }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SideBar',
  props: {
    sidebarElements: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  background-color: white;
  gap: 15px;
  min-height: 100vh;
  padding: 16px 0px 16px;
  font-family: 'Outfit';
  text-align: center;
  font-size: 1em;
}
</style>

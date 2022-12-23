<template>
  <div class="container" :style="cssVars">
    <img class="" :src="imageSource" :height="imageHeight" />
    <h2 class="subtitle-text">{{ subtitle }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SmallCard',
  props: {
    imageSource: {
      type: String,
      default: '',
      required: false,
    },
    subtitle: {
      type: String,
      default: '',
      required: false,
    },
    width: {
      type: Number,
      default: 200,
      required: false,
    },
    height: {
      type: Number,
      default: 200,
      required: false,
    },
  },
  computed: {
    cssVars() {
      return {
        '--box-width': this.width + 'px',
        '--box-height': this.height + 'px',
      }
    },
    imageHeight() {
      return 0.7 * this.height
    },
  },
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Outfit';
  font-weight: normal;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  text-align: center;
  width: var(--box-width);
  height: var(--box-height);
  border: #432371 solid 3px;
}

.subtitle-text {
  font-family: 'Outfit';
  font-weight: normal;
}
</style>

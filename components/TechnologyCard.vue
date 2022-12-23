<template>
  <div class="container" :style="cssVars">
    <img class="image" :src="imageSource" />
    <h2 class="subtitle-text">{{ subtitle }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TechnologyCard',
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
      type: String,
      default: '200px',
      required: false,
    },
    height: {
      type: String,
      default: '200px',
      required: false,
    },
  },
  computed: {
    cssVars() {
      return {
        '--box-width': this.width,
        '--box-height': this.height,
      }
    },
  },
})
</script>

<style scoped>
.image {
  height: calc(0.7 * var(--box-height));
}
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

@media screen and (max-width: 500px) {
  .container {
    display: flex;
    flex: 1;
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
}
.subtitle-text {
  font-family: 'Outfit';
  font-weight: normal;
}
</style>

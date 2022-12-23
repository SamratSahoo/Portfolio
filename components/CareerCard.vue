<template>
  <div class="container">
    <div class="left-subcontainer">
      <img class="logo" :src="imageSource" :height="imageHeight" />
      <h3 class="subtitle">
        {{ jobTitle }}
      </h3>
    </div>
    <div class="right-subcontainer">
      {{ jobDescription }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CareerCard',
  props: {
    imageSource: {
      type: String,
      default: '',
      required: false,
    },
    cardHeight: {
      type: Number,
      default: 200,
      required: false,
    },
    jobTitle: {
      type: String,
      default: '',
      required: false,
    },
    jobDescription: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    imageHeight() {
      return 0.7 * (this.cardHeight as number)
    },
  },
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  border: #432371 solid 3px;
  background-color: white;
  font-family: 'Outfit';
  font-weight: normal;
  border-radius: 10px;
  padding: 10px;
  gap: 15px;
}
@media screen and (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    border: #432371 solid 3px;
    background-color: white;
    font-family: 'Outfit';
    font-weight: normal;
    border-radius: 10px;
    padding: 10px;
    gap: 15px;
  }
}

.subtitle {
  margin: 5px 0px 0px 0px;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
}

.left-subcontainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-subcontainer {
  flex: 2;
}

.logo {
  border-radius: 10px;
}
</style>

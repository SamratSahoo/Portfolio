<template>
  <div>
    <div v-for="(technology, index) in technologies" :key="index">
      <TechnologyCard
        :subtitle="technology.technologyName"
        :image-source="technology.imagePath"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAllTechnologies } from '../actions/Technology'
import TechnologyCard from './TechnologyCard.vue'
import { Technology } from '~/utils/Types'

export default Vue.extend({
  name: 'TechnologyEditor',
  components: {
    TechnologyCard,
  },
  data() {
    return {
      technologies: [] as Technology[],
    }
  },

  async mounted() {
    this.technologies = await getAllTechnologies()
  },
})
</script>

<style></style>

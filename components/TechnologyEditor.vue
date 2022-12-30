<template>
  <div class="card-container">
    <div v-for="(technology, index) in technologies" :key="index">
      <TechnologyCard
        :subtitle="technology.technologyName"
        :image-source="technology.imagePath"
      />
    </div>
    <button class="add-button" @click="showPopUp">
      <span class="plus-sign">+</span>
      <span>Add Technology</span>
    </button>
    <AddModal @addCallback="addTechnology"></AddModal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAllTechnologies } from '../actions/Technology'
import TechnologyCard from './TechnologyCard.vue'
import AddModal from './AddModal.vue'
import { Technology } from '~/utils/Types'

export default Vue.extend({
  name: 'TechnologyEditor',
  components: {
    TechnologyCard,
    AddModal,
  },
  data() {
    return {
      technologies: [] as Technology[],
    }
  },
  async mounted() {
    this.technologies = await getAllTechnologies()
  },
  methods: {
    showPopUp() {
      this.$modal.show('AddModal')
    },
    addTechnology() {},
  },
})
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;
  flex-wrap: wrap;
  margin: 15px;
}

.add-button {
  display: flex;
  flex-direction: column;
  font-family: 'Outfit';
  font-size: 1.4em;
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
  justify-content: center;
  cursor: pointer;
  width: 200px;
  border: #432371 solid 3px;
}

.plus-sign {
  font-size: 6em;
}
</style>

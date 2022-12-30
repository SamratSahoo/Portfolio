<template>
  <modal
    class="modal-container"
    name="AddModal"
    :adaptive="true"
    :scrollable="true"
    :draggable="true"
  >
    <div class="content-container">
      <label class="entry-label">Technology / Career Name</label>
      <input v-model="entryData" class="entry-input" type="text" />
      <label class="entry-label">Image (If Applicable)</label>
      <UploadCard @uploadImage="processImage" />
      <button class="entry-submit" @click="addCallback">Submit</button>
    </div>
  </modal>
</template>

<script>
import Vue from 'vue'
import UploadCard from './UploadCard.vue'

export default Vue.extend({
  name: 'AddModal',
  components: {
    UploadCard,
  },
  data() {
    return {
      imageData: '',
      entryData: '',
    }
  },
  methods: {
    addCallback() {
      this.$emit('addCallback', this.entryData, this.imageData)
    },
    processImage(imageData) {
      this.imageData = imageData
    },
  },
})
</script>

<style scoped>
.modal-container {
  width: 80vw;
}
.content-container {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.entry-label {
  font-family: 'Outfit';
  font-weight: 400;
  font-size: 1.1em;
}

.entry-input {
  flex: 1 1 0;
  align-self: center;
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.entry-submit {
  flex: 1 1 0;
  align-self: center;
  width: 100%;
  background-color: #391e5f;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Outfit';
  font-weight: 400;
  font-size: 1.1em;
}
</style>

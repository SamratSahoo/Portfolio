<template>
  <div class="upload-container">
    <file-pond
      ref="pond"
      name="image-uploader"
      label-idle="Drag a File or Browse to Upload an Image"
      accepted-file-types="image/jpeg, image/png"
      :allow-multiple="false"
      :init="handleFilePondInit"
      credits="false"
      :server="imageProcessServer"
      :instant-upload="true"
      :allow-revert="true"
      :image-preview-height="height"
    />
  </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
/*eslint-disable */
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
/* eslint-enable */
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
)
export default {
  name: 'UploadCard',
  components: {
    FilePond,
  },
  props: {
    height: {
      type: String,
      default: '300px',
      required: false,
    },
  },
  data() {
    return {
      /*eslint-disable */
      imageProcessServer: {
        process: (fieldName, file, metadata, load) => {
          const reader = new FileReader()
          reader.readAsBinaryString(file)
          reader.onload = () => {
            const b64Encoded = window.btoa(reader.result)
            this.$emit('uploadImage', b64Encoded)
          }
          load()
        },
        load: () => {},
      },
      /* eslint-enable */
    }
  },
}
</script>

<style scoped>
.upload-container {
  cursor: pointer;
  /* Height of container + Margin */
  max-height: calc(v-bind('height') + 32px);
}
</style>
<style>
.filepond--panel-root {
  cursor: pointer;
  background-color: white;
  border: #432371 solid 3px;
}
.filepond--drop-label label {
  color: gray;
  cursor: pointer !important;
  font-family: 'Outfit';
  font-size: 1.25em;
}
</style>

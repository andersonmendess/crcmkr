<template>
  <div class="input">
    <div class="input-container">
      <label for="select">ROM:</label>
      <select v-model="selectedRom" id="select">
        <option v-for="rom in roms" :key="rom">{{rom}}</option>
      </select>

      <label for="select">Template:</label>
      <select v-model="selectedTemplate" id="select">
        <option v-for="template in templates" :key="template">{{template}}</option>
      </select>

      <label for="changelog">Changelog:</label>
      <textarea rows="9" id="changelog" v-model="changelog"></textarea>

      <button v-on:click="download">Download</button>
    </div>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image';

export default {
  name: 'InputBox',
  data() {
    return {
      selectedRom: 'LineageOS',
      selectedTemplate: 'Default',
      changelog: '',
    };
  },
  updated() {
    this.$store.dispatch('changeChangelog', this.changelog);
    this.$store.dispatch('changeRom', this.selectedRom);
    this.$store.dispatch('changeTemplate', this.selectedTemplate);
    this.$store.dispatch('loadRomData');
  },
  methods: {
    download() {
      domtoimage
        .toPng(document.getElementById('preview-node'), { quality: 1 })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = `${this.selected}-changelog-crcmkr.png`;
          link.href = dataUrl;
          link.click();
        });
    },
  },
  props: {
    roms: Array,
    templates: Array,
  },
};
</script>

<style scoped>
.input {
  width: 450px;
  background-color: #fafafa;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
}
.input-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.input-container textarea {
  width: 90%;
  min-height: 100px;
  font-size: 10px;
  resize: none;
}
</style>

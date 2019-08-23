<template>
  <div class="body">
    <div id="preview-node" class="preview">
      <div class="preview-container">
        <component
        :is="template"
        :changelog="this.$store.state.changelog"
        :data="this.$store.state.romData" />
      </div>
    </div>
  </div>
</template>

<script>
import templates from '../templates';

export default {
  name: 'PreviewBox',
  data(){
    return {
      template: templates[this.$store.state.template]
    }
  },
  watch:{
  '$store.state.template'(value, oldValue) {
    this.template = templates[value]
  }
}
};
</script>

<style scoped>
.body {
  padding: 10px;
}
.preview {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  background-color: #fff;
  padding: 10px;
  width: 750px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>

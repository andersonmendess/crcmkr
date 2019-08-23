<template>
  <div class="body">
    <div id="preview-node" class="preview">
      <div class="preview-container">
        <DefaultTemplate
        :changelog="this.$store.state.changelog"
        :data="this.$store.state.romData" />
      </div>
    </div>
  </div>
</template>

<script>
import DefaultTemplate from '../templates/Default.vue';

export default {
  name: 'PreviewBox',
  components: {
    DefaultTemplate,
  },
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

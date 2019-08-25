<template>
  <div class="template background">
    <div class="limited-container">
      <div class="header">
        <img :src="data.img" alt="logo" class="logo" />
        <h1 class="rom-color">{{data.name}}</h1>
      </div>

      <div class="sub-header">
        <h2 class="rom-color">Changelog</h2>
      </div>

      <div class="changelog">
        <pre class="text">
{{changelog}}</pre>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Zeda',
  props: {
    changelog: String,
    data: Object,
  },
};
</script>

<style scoped>
.template {
  width: 100%;
  margin: auto;
  padding-bottom: 50px;
  padding-top: 20px;
  background-color: var(--background);
}
.limited-container {
  width: 560px;
  margin: auto;
}
.preview img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 12px;
}
.preview .header {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.preview .header h1 {
  font-weight: 300;
  font-size: 33px;
}

.preview .sub-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.preview .sub-header h2 {
  margin-bottom: 5px;
  margin-left: 5px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
}

.preview .changelog {
  background-color: var(--foreground);
  border-radius: 8px;
  max-height: 250px;
  overflow: hidden;
  padding: 10px;
}
pre,
.sub-header,
.header {
  font-family: "Product Sans";
}
pre {
  font-size: 16px;
  margin-top: 1px;
  margin-bottom: 1px;
}
</style>

<template>
  <div class="template">
    <div class="limited-container">
      <div class="header">
        <img :src="data.img" alt="logo" class="logo" />
        <h1 class="rom-color">{{data.name}}</h1>
      </div>

      <div class="sub-header">
        <h2 class="rom-color">Changelog</h2>
        <h3 class="rom-color date">{{date}}</h3>
      </div>

      <div class="changelog">
        <pre>
{{changelog}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { getTodayDay, getMonthString } from '../helpers/date';

export default {
  name: 'Default',
  data() {
    return {
      date: `${getTodayDay()} ${getMonthString()}`,
    };
  },
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
  padding-bottom: 30px;
  padding-top: 10px;
  background-color: #fafafa;
}
.limited-container {
  width: 550px;
  margin: auto;
}
.preview img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
}
.preview .header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.preview .header h1 {
  font-weight: 300;
  font-size: 35px;
  white-space: nowrap;
}

.preview .sub-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.preview .sub-header h2,
.preview .sub-header h3 {
  margin-bottom: 2px;
  text-transform: uppercase;
  font-weight: 500;
}

.date {
  white-space: nowrap;
}

.preview .changelog {
  border: 1px solid #d3d3d3;
  border-radius: 2px;
  max-height: 200px;
  overflow: hidden;
  padding: 5px;
}
pre,
.sub-header,
.header {
  font-family: "Product Sans";
}
pre {
  font-size: 17px;
  color: #666;
  margin-top: 1px;
  margin-bottom: 1px;
}
</style>

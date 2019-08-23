<template>
  <div class="template">
    <div class="header">
      <img :src="data.img" alt="logo" class="logo" />
      <h1 :style="'color: '+ data.primaryTextColor">{{data.name}}</h1>
    </div>
    <h1>this is the clean template</h1>

    <div class="sub-header">
      <h2 :style="'color: '+ data.primaryTextColor">Changelog</h2>
      <h3 class="date" :style="'color: '+ data.primaryTextColor">{{date}}</h3>
    </div>

    <div class="changelog">
      <pre>
{{changelog}}</pre>
    </div>
  </div>
</template>

<script>
import { getTodayDay, getMonthString } from '../helpers/date';

export default {
  name: 'Clean',
  data(){
    return {
      date: `${getTodayDay()} ${getMonthString()}`
    }
  },
  props: {
    changelog: String,
    data: Object,
  },
};
</script>

<style scoped>
.template {
  width: 600px;
  margin: auto;
  padding-bottom: 30px;
  padding-top: 10px;
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
  width: 100px;
}

.preview .changelog {
  border: 1px solid #d3d3d3;
  border-radius: 2px;
  max-height: 190px;
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

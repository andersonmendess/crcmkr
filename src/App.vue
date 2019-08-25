<template>
  <div id="app">
    <div class="title">
      <h3>CRC MAKER</h3>
    </div>
    <div class="boxs">
      <PreviewBox />
      <InputBox :roms="romsAvailable" :templates="templatesAvailable" :themes="themesAvailable" />
    </div>
  </div>
</template>

<script>
import InputBox from './components/InputBox.vue';
import PreviewBox from './components/PreviewBox.vue';

import roms from './roms';
import templates from './templates';
import themes from './themes';

export default {
  name: 'app',
  data() {
    return {
      romsAvailable: Object.keys(roms),
      templatesAvailable: Object.keys(templates),
      themesAvailable: Object.keys(themes),
    };
  },
  mounted() {
    this.$store.dispatch('loadRomData');
  },
  components: {
    InputBox,
    PreviewBox,
  },
};
</script>

<style>
:root {
  --romColor: #000;
  --background: #fafafa;
  --foreground: #d3d3d3;
  --text: #666666;
}
.rom-color {
  color: var(--romColor);
}
.background {
  background-color: var(--background);
}
.foreground {
  background-color: var(--foreground);
}
.text {
  color: var(--text);
}

body {
  background-color: #653abc;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.title {
  display: block;
  color: #fafafa;
  text-align: center;
  font-size: 30px;
}
.boxs {
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
  margin-top: 40px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
b,
a,
div {
  white-space: nowrap;
}

pre {
  white-space:pre-wrap;
  word-wrap: break-word;
}
</style>

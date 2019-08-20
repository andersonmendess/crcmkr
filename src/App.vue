<template>
  <div id="app">
    <div class="title">
      <h3>CRC MAKER</h3>
    </div>
    <div class="boxs">
      <PreviewBox />
      <InputBox :romsAvailable="romsAvailable" />
    </div>
  </div>
</template>

<script>
import InputBox from './components/InputBox.vue';
import PreviewBox from './components/PreviewBox.vue';

import roms from './roms';

export default {
  name: 'app',
  data() {
    return {
      romsAvailable: roms.list,
    };
  },
  mounted() {
    this.$store.dispatch('loadRomData');
    console.log(this.$store.state.romData);
  },
  components: {
    InputBox,
    PreviewBox,
  },
};
</script>

<style>
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
</style>

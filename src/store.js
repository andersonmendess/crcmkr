import Vue from 'vue';
import Vuex from 'vuex';

import roms from './roms';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    template: 'Default',
    rom: 'LineageOS',
    romData: {},
    changelog: '',
  },
  mutations: {
    setTemplate(state, template) {
      state.template = template;
    },
    setRom(state, rom) {
      state.rom = rom;
    },
    setRomData(state, romData) {
      state.romData = romData;
    },
    setChangelog(state, changelog) {
      state.changelog = changelog;
    },
  },
  actions: {
    loadRomData({ commit }) {
      commit('setRomData', roms[this.state.rom]);
    },
    changeRom({ commit }, props) {
      commit('setRom', props);
    },
    changeChangelog({ commit }, props) {
      commit('setChangelog', props);
    },
  },
});

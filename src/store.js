import Vue from 'vue';
import Vuex from 'vuex';

import roms from './roms';
import { setRomColor, changeTheme } from './helpers/css';
import themes from './themes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    template: 'Default',
    theme: 'light',
    rom: 'LineageOS',
    romData: {},
    changelog: '',
  },
  mutations: {
    setTemplate(state, template) {
      state.template = template;
    },
    setTheme(state, theme) {
      state.theme = theme;
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
      setRomColor(this.state.romData.primaryTextColor);
    },
    changeRom({ commit }, props) {
      commit('setRom', props);
    },
    changeTemplate({ commit }, props) {
      commit('setTemplate', props);
    },
    changeTheme({ commit }, theme) {
      commit('setTheme', theme);
      changeTheme(themes[theme]);
    },
    changeChangelog({ commit }, props) {
      commit('setChangelog', props);
    },
  },
});

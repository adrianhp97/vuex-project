import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import modules from './moduels';
import states from './state';

const store = new Vuex.Store({
  modules,
  state,
  actions,
  mutations,
  getters,
});

export default store
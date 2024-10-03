import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grid: [
      [1, 2, 3, 4, 2],
      [4, 3, 2, 1, 3],
      [1, 2, 3, 4, 4],
      [4, 3, 2, 1, 1],
    ],
  },
  getters: {
    grid: (state) => state.grid,
  },
  mutations: {
    updateCell(state, { row, col, cellType }) {
      state.grid[row][col] = cellType;
    },
  },
  actions: {
    updateCell({ commit }, payload) {
      commit("updateCell", payload);
    },
  },
  modules: {},
});

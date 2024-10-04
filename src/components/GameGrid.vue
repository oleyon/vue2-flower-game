<template>
  <div class="game_grid">
    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="game_grid__row">
      <GameCell
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        :cellType="cell"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GameCell from "./GameCell.vue";

export default {
  components: {
    GameCell,
  },
  computed: {
    ...mapState({
      grid: (state) => state.grid,
    }),
  },
  methods: {
    handleCellClick(row, col) {
      console.log(`Cell clicked at row ${row}, col ${col}`);
    },
  },
};
</script>

<style scoped lang="less">
.game_grid {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__row {
    display: flex;
  }
}
</style>

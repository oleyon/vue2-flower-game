<template>
  <div class="editor_grid">
    <div
      v-for="(row, rowIndex) in grid"
      :key="rowIndex"
      class="editor_grid__row"
    >
      <EditorCellWrapper
        v-for="(cell, cellIndex) in row"
        :key="`${rowIndex}-${cellIndex}`"
        :isSelected="selectedGrid[rowIndex][cellIndex]"
        @onClick="() => handleCellClick(rowIndex, cellIndex)"
      >
        <GameCell :cellType="cell" />
      </EditorCellWrapper>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GameCell from "./GameCell.vue";
import EditorCellWrapper from "./EditorCellWrapper.vue";

export default {
  components: {
    GameCell,
    EditorCellWrapper,
  },
  computed: {
    ...mapState({
      grid: (state) => state.grid,
      selectedGrid: (state) => state.selectedGrid,
    }),
  },
  methods: {
    handleCellClick(row, col) {
      this.$store.dispatch("toggleSelectedCell", { row, col });
      console.log(`Cell clicked at row ${row}, col ${col}`);
    },
  },
};
</script>

<style scoped lang="less">
.editor_grid {
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
  }
}
</style>

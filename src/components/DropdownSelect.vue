<template>
  <div class="dropdown-container">
    <select
      class="dropdown"
      :disabled="!isActive"
      v-model="selectedCellType"
      @change="updateSelectedCells"
    >
      <option v-for="type in cellTypes" :key="type" :value="type">
        {{ type }}
      </option>
    </select>
    <span v-if="isActive" class="dropdown-text">
      {{ displayText }}
    </span>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      selectedCellType: null, // Тип клетки, выбранный из списка
    };
  },
  computed: {
    ...mapState({
      selectedGrid: (state) => state.selectedGrid, // Получаем выделенные ячейки
    }),
    ...mapGetters({
      cellTypes: "cellTypes", // Получаем массив типов клеток
    }),
    isActive() {
      return this.selectedCount > 0; // Проверяем, активен ли список
    },
    selectedCount() {
      return this.selectedGrid.flat().filter((cell) => cell).length; // Подсчитываем количество выделенных ячеек
    },
    displayText() {
      const selectedValues = this.selectedGrid
        .flat()
        .map((cell, index) => {
          if (cell) {
            const rowIndex = Math.floor(index / this.selectedGrid[0].length);
            const colIndex = index % this.selectedGrid[0].length;
            return this.$store.state.grid[rowIndex][colIndex]; // Получаем значение клетки
          }
          return null;
        })
        .filter(Boolean);

      return selectedValues.length === 1 ? selectedValues[0] : "Разные"; // Если выбраны разные клетки, выводим "Разные"
    },
  },
  methods: {
    ...mapActions({
      toggleSelectedCell: "toggleSelectedCell", // Диспатчим действие для обновления состояния
      updateCell: "updateCell", // Диспатчим действие для обновления клетки
    }),
    updateSelectedCells() {
      // Обновляем состояния выделенных ячеек
      this.selectedGrid.forEach((row, rowIndex) => {
        row.forEach((isSelected, colIndex) => {
          if (isSelected) {
            this.updateCell({
              row: rowIndex,
              col: colIndex,
              cellType: this.selectedCellType,
            });
          }
        });
      });
      // Сбрасываем выделение
      this.resetSelection();
    },
    resetSelection() {
      this.selectedGrid.forEach((row, rowIndex) => {
        row.forEach((_, colIndex) => {
          if (this.selectedGrid[rowIndex][colIndex]) {
            this.toggleSelectedCell({ row: rowIndex, col: colIndex });
          }
        });
      });
    },
  },
};
</script>

<style scoped lang="less">
/* Контейнер для выпадающего списка и текста */
.dropdown-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
}

/* Стили для селекта */
.dropdown {
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:disabled {
    background-color: #f1f1f1;
    cursor: not-allowed;
  }
  &:hover {
    border-color: #888;
  }
}

/* Стили для текста рядом с селектом */
.dropdown-text {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}
</style>

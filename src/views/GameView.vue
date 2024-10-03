<template>
  <div>
    <GameCell :cell-type="1" />
    <GameGrid />
  </div>
</template>

<script>
import GameCell from "@/components/GameCell.vue";
import GameGrid from "@/components/GameGrid.vue";

export default {
  components: {
    GameCell,
    GameGrid,
  },
};
</script>

<template>
  <div class="game_cell" @click="onClick">
    <div class="game_cell__body" :class="'game_cell__body--' + cellType"></div>
  </div>
</template>

<script>
export default {
  emits: ["onClick"],
  props: {
    cellType: Number,
  },
  methods: {
    onClick() {
      this.$emit("onClick");
      console.log("onClick");
    },
  },
};
</script>

<style scoped lang="less">
.game_cell {
  &__body {
    width: 50px;
    height: 50px;

    &--1 {
      background-color: red;
    }

    &--2 {
      background-color: rgb(0, 0, 255);
    }

    &--3 {
      background-color: rgb(230, 0, 255);
    }

    &--4 {
      background-color: rgb(13, 255, 0);
    }
  }
}
</style>

<template>
  <div
    :class="{ 'wrapper--selected': isSelected }"
    @click="() => toggleSelection()"
    class="wrapper"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleSelection() {
      this.$emit("onClick");
      console.log(`I am wrapper`);
    },
  },
};
</script>

<style scoped lang="less">
.wrapper {
  border: 2px solid transparent;
  cursor: pointer;
  &--selected {
    border-color: black;
  }
}
</style>

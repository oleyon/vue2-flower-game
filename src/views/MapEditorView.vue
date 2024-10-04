<template>
  <div>
    <EditorGrid />
    <DropdownSelect />
  </div>
</template>

<script>
import EditorGrid from "@/components/EditorGrid.vue";
import DropdownSelect from "@/components/DropdownSelect.vue";

export default {
  components: {
    EditorGrid,
    DropdownSelect,
  },
};
</script>

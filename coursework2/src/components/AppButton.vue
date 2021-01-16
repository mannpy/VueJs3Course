<template>
  <button
    class="btn"
    :class="classType"
    @click.prevent="$emit('action')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  emits: ["action"],
  props: ["classType"]
};
</script>

<style scoped>

</style>
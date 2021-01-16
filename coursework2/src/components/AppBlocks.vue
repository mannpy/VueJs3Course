<template>
  <div v-if="blocks.length">
    <component
      :is="block.componentName"
      v-for="block in blocks"
      :value="block.value"
      :key="block.id"
    ></component>
  </div>
  <div v-else>
    <h3>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import AppAvatarBlock from "@/components/blocks/AppAvatarBlock";
import AppTextBlock from "@/components/blocks/AppTextBlock";
import AppSubtitleBlock from "@/components/blocks/AppSubtitleBlock";
import AppTitleBlock from "@/components/blocks/AppTitleBlock";

export default {
  name: "AppBlocks",
  props: {
    blocks: {
      type: Array,
      required: false
    }
  },
  components: {
    AppAvatarBlock,
    AppTextBlock,
    AppSubtitleBlock,
    AppTitleBlock
  }
};
</script>
\
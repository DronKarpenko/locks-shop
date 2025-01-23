<script setup lang="ts">
import ProgressSectionItem from '@/modules/progress/ProgressSectionItem.vue'
import { progressItems } from '@/mixins/progress-section-items.ts'

interface Props {
  theme?: 'dark' | 'light',
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'light',
})
</script>

<template>
  <section :class="['progress', `progress_${props.theme}`]">
    <div class="container progress__container">
      <ProgressSectionItem
        v-for="(item, index) in progressItems"
        :key="index"
        :item="item"
        :theme="props.theme"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use 'progress-section';
</style>

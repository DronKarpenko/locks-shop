<script setup lang="ts">
import type { ProgressSectionItem } from '@/types'

const props = defineProps<{
  item: ProgressSectionItem,
  theme: 'dark' | 'light'
}>()
</script>

<template>
  <div :class="['progress-item', `progress-item_${props.theme}`]">
    <div class="progress-item__count">{{ props.item.count }}</div>

    <div class="progress-item__text">{{ props.item.text }}</div>
  </div>
</template>

<style scoped lang="scss">
@use 'progress-section';
</style>

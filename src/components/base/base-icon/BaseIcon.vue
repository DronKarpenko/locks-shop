<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  icon: string
}>()

const icon = computed(() => `#icon-${props.icon}`)
</script>

<template>
  <svg class="icon" v-bind="$attrs">
    <use :href="icon" />
  </svg>
</template>

<style scoped lang="scss">

</style>

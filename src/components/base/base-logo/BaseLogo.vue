<script setup lang="ts">
interface Props {
  theme?: 'dark' | 'light',
  size?: 'medium' | 'large',
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'dark',
  size: 'medium',
})
</script>

<template>
  <RouterLink to="/" class="base-logo" :class="{ [`base-logo_${props.size}`]: true }">
    <img v-if="props.theme === 'dark'" src="@/assets/images/dark-logo.svg" alt="logo">

    <img v-else src="@/assets/images/light-logo.svg" alt="logo">
  </RouterLink>
</template>

<style scoped lang="scss">
@use 'base-logo';
</style>

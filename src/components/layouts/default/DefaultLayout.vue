<script setup lang="ts">
import TheHeader from '@/components/general/header/TheHeader.vue'
import TheFooter from '@/components/general/footer/TheFooter.vue'
import IconsManager from '@/components/general/IconsManager.vue'
</script>

<template>
  <div class="default-layout">
    <TheHeader />

    <div class="default-layout__page">
      <RouterView />
    </div>

    <TheFooter />
  </div>

  <IconsManager />
</template>

<style scoped lang="scss">
@use'default-layout';
</style>

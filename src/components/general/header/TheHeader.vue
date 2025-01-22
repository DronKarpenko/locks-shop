<script setup lang="ts">
import BaseLogo from '@/components/base/base-logo/BaseLogo.vue'
import BaseIcon from '@/components/base/base-icon/BaseIcon.vue'
import { navLinks } from '@/mixins/nav-links.ts'
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <BaseLogo />

      <nav class="header__nav">
        <RouterLink v-for="link in navLinks" :key="link.link" :to="link.link">
          {{ link.title }}
        </RouterLink>
      </nav>

      <a href="tel:+380972289922" class="header__phone">
        <BaseIcon icon="phone" />

        <span>+38 (097) 22 89 922</span>
      </a>

      <div class="header__actions">
        <BaseIcon icon="heart" class="header__icon" />

        <BaseIcon icon="cart" class="header__icon" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use 'header';
</style>

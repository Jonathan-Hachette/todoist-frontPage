<script setup>
// Icon imports
import TodoistIcon from './icons/TodoistIcon.vue'
import RessourcesNavigation from './RessourcesNavigation.vue'

// UI components imports
import Button from './ui/button/Button.vue'
import Separator from './ui/separator/Separator.vue'

// Vue imports
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container sticky top-0 mb-16 bg-white z-50">
    <header
      class="flex lg:w-full max-w-7xl top-0 left-0 items-center justify-between lg:mb-16 lg:h-[72px]"
    >
      <TodoistIcon :size="128" />

      <nav
        class="flex justify-end items-center gap-2 h-6 font-inter font-regular text-gray-900 text-[14.5px]"
      >
        <Button variant="ghost" class="rounded-xl">Fonctionnalités</Button>
        <Button variant="ghost" class="rounded-xl">Équipes</Button>
        <RessourcesNavigation />
        <Button variant="ghost" class="rounded-xl">Tarifs</Button>
        <Separator orientation="vertical" />
        <RouterLink :to="{ name: 'app' }">
          <Button variant="ghost" class="rounded-xl">Connexion</Button>
        </RouterLink>
        <Button class="rounded-xl hover:bg-red-600">
          <a href="" class="font-bold text-[14.5px]">S'inscrire</a>
        </Button>
      </nav>
    </header>
  </div>
</template>

<style scoped></style>

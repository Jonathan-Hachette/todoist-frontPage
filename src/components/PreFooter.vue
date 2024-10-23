<script setup>
import DownloadIcon from './icons/DownloadIcon.vue'
import BigButton from './ui/button/BigButton.vue'
</script>

<template>
  <div
    class="container flex flex-col gap-3 items-center justify-center text-center bg-secondary-background pt-48 mt-20"
  >
    <h2 class="font-poppins font-semibold text-[44px] text-balance">
      Gagnez en sérénité avec l'application de productivité préférée des utilisateurs
    </h2>
    <p class="font-inter text-xl text-muted-foreground">
      374000+ ★★★★★ sur Google Play et l'App Store
    </p>
    <div class="flex flex-col items-center gap-3">
      <BigButton class="w-2/3" />
      <div class="flex items-center text-muted-foreground">
        <DownloadIcon class="" />
        <a href="" class="px-[5px] py-1.5">Télécharger les applications</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

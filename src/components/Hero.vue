<script setup>
import AndroidIcon from './icons/AndroidIcon.vue'
import AppleIcon from './icons/AppleIcon.vue'
import BigButton from './ui/button/BigButton.vue'
</script>

<template>
  <div class="container flex gap-12 pt-12 lg:max-w-[82rem]">
    <!-- LEFT SIDE COLUMN -->
    <div class="lg:ml-[66px]">
      <h1 class="font-poppins font-semibold lg:text-[55px] lg:mb-6 leading-snug text-balance">
        Organisez enfin votre vie et votre travail.
      </h1>

      <p class="font-inter font-regular text-xl text-muted-foreground/85 leading-7">
        Simplifiez votre vie et celle de votre équipe avec l'application de task manager et de to do
        list la plus utilisée au monde.
      </p>

      <div class="flex gap-2 items-center my-3 pb-8 text-muted-foreground">
        <p class="flex items-center font-semibold">374 000+ ★★★★★ avis</p>
        <div class="flex gap-1 items-center">
          <AppleIcon />
          <AndroidIcon />
        </div>
      </div>
      <BigButton label="S'inscrire" />
    </div>

    <!--RIGHT SIDE COLUMN-->
    <div>
      <div
        class="w-[45.5rem] h-[408px] bg-hero-frame-background bg-no-repeat bg-cover rounded-2xl inset-0"
      >
        <img
          src="../assets/images/https___todoist.com_static_home-teams_intro_wide_headerui.fr.avif"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import TodoistIconBlack from './icons/TodoistIconBlack.vue'
</script>

<template>
  <footer class="flex pt-20 bg-secondary-background">
    <!-- MAIN CONTAINER -->
    <div class="container pt-12 border-t flex justify-between items-start">
      <!-- LEFT COLUMN -->
      <div class="flex flex-col gap-6 w-1/3">
        <TodoistIconBlack :size="128" />
        <p class="text-inter text-lg">
          20 millions d'utilisateurs organisent leur travail et leur quotidien avec Todoist.
        </p>
      </div>

      <!-- RIGHT COLUMNS -->
      <div class="flex justify-between w-3/5">
        <!-- First col -->
        <div class="flex flex-col gap-6">
          <p class="font-semibold">Fonctionnalités</p>
          <ol>
            <li><a class="py-3.5 px-2.5 radius-lgbis text-left">Fonctionnalités</a></li>
            <li><a>Équipes</a></li>
            <li><a>Tarifs</a></li>
            <li><a>Modèles</a></li>
          </ol>
        </div>

        <div class="flex flex-col gap-6">
          <p class="font-semibold">Ressources</p>
          <ol>
            <li><a>Application</a></li>
            <li><a>Centre d'aide</a></li>
            <li><a>Méthodes de productivité</a></li>
            <li><a>Intégrations</a></li>
            <li><a>Channel Partners</a></li>
            <li><a>API</a></li>
            <li><a>Statut</a></li>
          </ol>
        </div>
        <div class="flex flex-col gap-6">
          <p class="font-semibold">Doist</p>
          <ol>
            <li><a>À propos</a></li>
            <li><a>Emplois</a></li>
            <li><a>Inspiration</a></li>
            <li><a>Presse</a></li>
            <li><a>Twist</a></li>
          </ol>
        </div>
        <div>
          <ul class="flex flex-col gap-0.5">
            <li><a>Twitter</a></li>
            <li><a>Yt</a></li>
            <li><a>Fb</a></li>
            <li><a>Insta</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>

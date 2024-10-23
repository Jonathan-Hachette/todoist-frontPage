<script setup>
import { ref } from 'vue'

const isHovered = ref(false)

// Icon import
import { ChevronDown, PanelLeft } from 'lucide-vue-next'
import BellIcon from './icons/BellIcon.vue'
import CalendarAltIcon from './icons/CalendarAltIcon.vue'
import CalendarIcon from './icons/CalendarIcon.vue'
import InboxIcon from './icons/InboxIcon.vue'
import MagnifyingGlassIcon from './icons/MagnifyingGlassIcon.vue'
import PlusCircleIcon from './icons/PlusCircleIcon.vue'
import PlusIcon from './icons/PlusIcon.vue'
import SquaresIcon from './icons/SquaresIcon.vue'
import TagsIcon from './icons/TagsIcon.vue'
</script>

<template>
  <main>
    <aside class="flex flex-col bg-aside h-dvh w-[280px]">
      <nav
        class="flex flex-col justify-between h-full font-apple"
        @mouseover="isHovered = true"
        @mouseout="isHovered = false"
      >
        <div>
          <!-- Profile bloc -->
          <div class="flex items-center gap-2 w-full h-[58px] mx-3 px-1.5 text-sm">
            <!-- Left Part -->
            <div>
              <button>
                <div class="flex gap-2">
                  <div
                    class="flex items-center justify-center rounded-full w-[26px] h-[26px] bg-[#00579E]"
                  >
                    <p class="text-background">J</p>
                  </div>

                  <div class="flex gap-1 items-center">
                    <span
                      class="font-semibold max-w-[116.51px] whitespace-nowrap text-ellipsis overflow-hidden"
                      >jonathan.hachette</span
                    >
                    <ChevronDown stroke-width="1" size="18" />
                  </div>
                </div>
              </button>
            </div>

            <!-- Right Part -->
            <div class="flex gap-4 text-muted-foreground">
              <div class="flex items-center">
                <a>
                  <BellIcon />
                </a>
              </div>

              <div class="flex items-center">
                <a>
                  <PanelLeft :stroke-width="1" height="21" width="21" />
                </a>
              </div>
            </div>
          </div>

          <!-- Bloc ajout de tâche -->
          <div class="flex items-center gap-2 mx-3">
            <button class="w-full h-8 rounded-lg hover:bg-aside-accent px-1.5">
              <div class="flex items-center gap-2">
                <PlusCircleIcon class="text-actionable" size="24" />
                <span class="text-selectable text-sm font-semibold">Ajouter une tâche</span>
              </div>
            </button>
          </div>

          <!-- Bloc Links -->
          <div
            class="flex flex-col gap-4 px-3 py-1.5 text-sm text-aside-foreground/90 text-semibold"
          >
            <div>
              <ul>
                <div
                  class="flex items-center gap-2 h-8 px-1.5 rounded-lg cursor-pointer hover:bg-aside-accent"
                >
                  <MagnifyingGlassIcon class="text-muted-foreground" size="24" />
                  <li>
                    <a>Recherche</a>
                  </li>
                </div>

                <div
                  class="flex items-center gap-2 h-8 p-1.5 rounded-lg cursor-pointer hover:bg-aside-accent"
                >
                  <InboxIcon class="text-muted-foreground" size="24" />
                  <li>Boîte de réception</li>
                </div>

                <div
                  class="flex items-center gap-2 h-8 p-1.5 rounded-lg cursor-pointer hover:bg-aside-accent"
                >
                  <CalendarIcon class="text-muted-foreground" />
                  <li>Aujourd'hui</li>
                </div>

                <div
                  class="flex items-center gap-2 h-8 p-1.5 rounded-lg cursor-pointer hover:bg-aside-accent"
                >
                  <CalendarAltIcon class="text-muted-foreground" />
                  <li>Prochainement</li>
                </div>

                <div
                  class="flex items-center gap-2 h-8 p-1.5 rounded-lg cursor-pointer hover:bg-aside-accent"
                >
                  <SquaresIcon class="text-muted-foreground" />
                  <li>Filtres et étiquettes</li>
                </div>
              </ul>
            </div>

            <!-- Bloc projets -->
            <div
              class="flex justify-between items-center h-9 py-1 pl-1 rounded-lg text-sm text-muted-foreground hover:bg-aside-accent"
            >
              <a href="" class="pl-1 font-semibold">Mes projets</a>
              <!-- Apparition de ces éléments au hover -->
              <transition name="fade">
                <div class="flex gap-3" v-if="isHovered">
                  <div class="flex items-center">
                    <PlusIcon />
                  </div>
                  <div><ChevronDown stroke-width="1" /></div>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2 mx-4 my-2 text-muted-foreground">
          <button class="flex gap-2 items-center h-8 cursor-pointer">
            <div class="flex items-center justify-center w-6 h-6">
              <PlusIcon />
            </div>
            <span>Ajouter une équipe</span>
          </button>

          <div class="flex gap-2 items-center h-8 cursor-pointer">
            <TagsIcon />
            <span>Parcourir les modèles</span>
          </div>
        </div>
      </nav>
    </aside>
  </main>
</template>

<style scoped>
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>

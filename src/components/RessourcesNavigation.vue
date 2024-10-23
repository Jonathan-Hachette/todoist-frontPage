<!-- This component renders the dropdown menu when hovering 'ressources' in the header -->

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'

import BulbIcon from './icons/BulbIcon.vue'
import BuoyIcon from './icons/BuoyIcon.vue'
import DownloadIcon from './icons/DownloadIcon.vue'
import LightningIcon from './icons/LightningIcon.vue'
import PuzzleIcon from './icons/PuzzleIcon.vue'
import QuestionMarkIcon from './icons/QuestionMarkIcon.vue'
import TagsIcon from './icons/TagsIcon.vue'

// Object representing the differents items in the dropdown menu
const items: { title: string; icon: any }[] = [
  {
    title: 'Intégrations',
    icon: PuzzleIcon
  },
  {
    title: 'Modèles',
    icon: TagsIcon
  },
  {
    title: 'Guide de démarrage',
    icon: LightningIcon
  },
  {
    title: "Centre d'aide",
    icon: BuoyIcon
  },
  {
    title: 'Méthode de productivité + Quiz',
    icon: QuestionMarkIcon
  },

  {
    title: 'Inspirations',
    icon: BulbIcon
  },
  {
    title: 'Téléchargements',
    icon: DownloadIcon
  }
]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <!-- Déclencheur du menu -->
        <NavigationMenuTrigger
          class="font-inter font-regular text-gray-900 text-[14.5px] rounded-xl"
          >Ressources</NavigationMenuTrigger
        >
        <NavigationMenuContent>
          <ul class="p-1.5 md:w-[200px] lg:w-[300px]">
            <li v-for="item in items" :key="item.title" class="">
              <div
                class="flex items-center gap-1 transition-colors rounded-xl px-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div class="text-muted-foreground/75">
                  <!-- text-muted-foreground est appliqué à l'élément parent, lors du rendu d'un composant dynamique tailwind purge les classes  -->
                  <component :is="item.icon" :size="18" />
                </div>
                <NavigationMenuLink as-child>
                  <a
                    href=""
                    class="block select-none px-3 py-4 rounded-xl leading-none no-underline outline-none"
                  >
                    <div class="text-sm font-medium leading-none">{{ item.title }}</div>
                  </a>
                </NavigationMenuLink>
              </div>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

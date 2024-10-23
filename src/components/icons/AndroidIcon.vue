<template>
  <svg fill="none" :height="size" viewBox="0 0 16 17" :width="size">
    <path
      clip-rule="evenodd"
      d="M0 12.017h16c-.22-2.618-1.661-4.85-3.789-6.127l1.223-2.14a.5.5 0 0 0-.868-.497L11.322 5.43A8.23 8.23 0 0 0 8 4.743a8.234 8.234 0 0 0-3.322.687L3.434 3.253a.5.5 0 1 0-.868.497l1.223 2.14C1.66 7.167.219 9.4 0 12.017zm11.312-2.392a.667.667 0 1 0 .74-1.109.667.667 0 0 0-.74 1.109zm-7.364 0a.666.666 0 1 0 .74-1.108.666.666 0 0 0-.74 1.108z"
      fill="currentColor"
      fill-rule="evenodd"
    ></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'AndroidIcon',
  props: {
    size: {
      type: Number as PropType<number>,
      default: 16
    },
    theme: {
      type: String as PropType<'light' | 'dark'>,
      default: 'light'
    }
  }
})
</script>

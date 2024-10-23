<template>
  <svg viewBox="0 0 16 16" fill="currentColor" :width="size" :height="size">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m4.856 3.795 1.317 1.317a3.417 3.417 0 0 1 3.654 0l1.317-1.317a5.25 5.25 0 0 0-6.288 0Zm7.349 1.06-1.318 1.318a3.417 3.417 0 0 1 0 3.653l1.318 1.317a5.252 5.252 0 0 0 0-6.287Zm-1.061 7.35-1.317-1.318a3.417 3.417 0 0 1-3.654 0l-1.317 1.317a5.254 5.254 0 0 0 6.288 0Zm-7.349-1.062a5.248 5.248 0 0 1 0-6.287l1.318 1.317a3.417 3.417 0 0 0 0 3.653l-1.318 1.317ZM6.63 6.66a1.917 1.917 0 1 0 2.74 2.68 1.917 1.917 0 0 0-2.74-2.68Zm-3.409 6.108a1.504 1.504 0 0 0 .012.011 6.75 6.75 0 0 0 9.534 0l.006-.005.006-.006a6.75 6.75 0 1 0-9.558 0Z"
    ></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'BuoyIcon',
  props: {
    size: {
      type: Number as PropType<number>,
      default: 18
    },
    theme: {
      type: String as PropType<'light' | 'dark'>,
      default: 'light'
    }
  }
})
</script>

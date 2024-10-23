<template>
  <svg fill="none" :height="size" :width="size" viewBox="0 0 16 17">
    <path
      clip-rule="evenodd"
      d="M1.25 4c0-.967.783-1.75 1.75-1.75h7c.967 0 1.75.783 1.75 1.75v2.001a2.5 2.5 0 1 1 0 4V12A1.75 1.75 0 0 1 10 13.75H3A1.75 1.75 0 0 1 1.25 12V9.534c0-.71.575-1.284 1.284-1.284.437 0 .78.22.996.445a1 1 0 1 0 .001-1.389 1.395 1.395 0 0 1-.996.444c-.71 0-1.285-.576-1.285-1.285zM3 3.75a.25.25 0 0 0-.25.25v2.001a2.5 2.5 0 1 1 0 4V12c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25V9.534c0-.71.575-1.284 1.284-1.284.437 0 .78.22.996.445a1 1 0 1 0 .001-1.389 1.395 1.395 0 0 1-.996.444c-.71 0-1.285-.576-1.285-1.285V4a.25.25 0 0 0-.25-.25z"
      fill="currentColor"
      fill-rule="evenodd"
    ></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'PuzzleIcon',
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

<template>
  <svg viewBox="0 0 16 16" fill="currentColor" :width="size" :height="size">
    <path
      d="M7.897 3.751c-1.323 0-2.35.703-2.707 1.543a.75.75 0 0 1-1.38-.586c.632-1.49 2.273-2.457 4.087-2.457 2.27 0 4.353 1.556 4.353 3.75 0 1.848-1.5 3.256-3.301 3.64a.379.379 0 0 0-.302.36.75.75 0 0 1-1.5 0c0-.938.687-1.655 1.49-1.826C9.946 7.895 10.75 6.953 10.75 6c0-1.12-1.142-2.25-2.853-2.25Zm-.75 9.25a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75Z"
    ></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'QuestionMarkIcon',
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

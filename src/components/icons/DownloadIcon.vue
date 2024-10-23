<template>
  <svg viewBox="0 0 16 16" fill="currentColor" :width="size" :height="size">
    <path
      d="M7.47 10.53c.3.3.77.3 1.06 0l3-3a.75.75 0 1 0-1.06-1.06L8.75 8.2V2a.75.75 0 1 0-1.5 0v6.2L5.53 6.46a.75.75 0 0 0-1.06 1.06l3 3Z"
    ></path>
    <path
      d="M1 10.25c.41 0 .75.34.75.75v1c0 .7.56 1.25 1.25 1.25h10c.7 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 1.5 0v1A2.75 2.75 0 0 1 13 14.75H3A2.75 2.75 0 0 1 .25 12v-1c0-.41.34-.75.75-.75Z"
    ></path>
  </svg>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'DownloadIcon',
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

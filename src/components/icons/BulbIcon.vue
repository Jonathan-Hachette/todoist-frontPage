<template>
  <svg fill="none" :height="size" viewBox="0 0 16 17" :width="size">
    <path
      clip-rule="evenodd"
      d="M8 1.251a.75.75 0 0 1 .75.75v.667a.75.75 0 1 1-1.5 0v-.667a.75.75 0 0 1 .75-.75zM3.227 3.23a.75.75 0 0 1 1.06 0l.472.47A.75.75 0 0 1 3.7 4.762l-.472-.472a.75.75 0 0 1 0-1.06zm9.546 0a.75.75 0 0 1 0 1.06l-.47.472A.75.75 0 1 1 11.241 3.7l.47-.471a.75.75 0 0 1 1.062 0zM8 5.419a2.584 2.584 0 0 0-1.827 4.41l.365.364c.122.122.232.253.33.392h2.264c.099-.14.209-.27.33-.391l.365-.365A2.585 2.585 0 0 0 8 5.419zm.592 6.666H7.408c.006.076.009.153.009.23v.354a.583.583 0 0 0 1.167 0v-.354c0-.077.003-.154.008-.23zm-2.834-.443a1.5 1.5 0 0 1 .16.673v.354a2.083 2.083 0 1 0 4.166 0v-.354a1.499 1.499 0 0 1 .438-1.06l.366-.365a4.087 4.087 0 0 0 .885-4.45 4.083 4.083 0 1 0-6.66 4.45l.365.364c.114.115.208.246.28.388zM1.25 8.002a.75.75 0 0 1 .75-.75h.667a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75zm11.334 0a.75.75 0 0 1 .75-.75H14a.75.75 0 1 1 0 1.5h-.667a.75.75 0 0 1-.75-.75z"
      fill="currentColor"
      fill-rule="evenodd"
    ></path>
  </svg>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'BulbIcon',
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

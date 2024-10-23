<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M16.29 15.584a7 7 0 1 0-.707.707l3.563 3.563a.5.5 0 0 0 .708-.707l-3.563-3.563ZM11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      clip-rule="evenodd"
    ></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'MagnifyingGlassIcon',
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

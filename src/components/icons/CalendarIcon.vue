<template>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <g fill="currentColor" fill-rule="evenodd">
      <path
        fill-rule="nonzero"
        d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
      ></path>
      <text
        font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
        font-size="9"
        transform="translate(4 2)"
        font-weight="500"
      >
        <tspan x="8" y="15" text-anchor="middle">18</tspan>
      </text>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'CalendarIcon',
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

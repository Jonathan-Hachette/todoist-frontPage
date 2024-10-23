<template>
  <svg fill="none" :height="size" viewBox="0 0 16 17" :width="size">
    <clipPath id="lightning-bolt-base_svg__a"><path d="M0 .001h16v16H0z"></path></clipPath>
    <g clip-path="url(#lightning-bolt-base_svg__a)">
      <path
        clip-rule="evenodd"
        d="M8.996.292a.75.75 0 0 1 .504.709v4.694H14a.75.75 0 0 1 .552 1.258L6.677 15.51a.75.75 0 0 1-1.286-.66l.938-4.543H2a.75.75 0 0 1-.589-1.214L8.161.536a.75.75 0 0 1 .835-.244zM3.547 8.806H7.25a.75.75 0 0 1 .734.902L7.408 12.5l4.882-5.305H8.75a.75.75 0 0 1-.75-.75V3.162z"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'LightningIcon',
  props: {
    size: {
      type: Number as PropType<number>,
      default: 18
    },
    theme: {
      type: String as PropType<'light | dark'>,
      default: 'light'
    }
  }
})
</script>

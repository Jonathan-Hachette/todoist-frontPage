<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10.241 4.004h3.513c.554 0 1.004.448 1.004 1v9.638l-5.52-7.855V5.004c0-.552.449-1 1.003-1Zm4.844 15.4.048-.074a3.772 3.772 0 0 1-6.218.074L1.863 9.37a1.995 1.995 0 0 1 .493-2.786l2.878-2.007a2.012 2.012 0 0 1 2.795.49l.205.292v-.355c0-1.105.899-2 2.007-2h3.513c1.109 0 2.007.895 2.007 2v.361l.21-.298a2.012 2.012 0 0 1 2.796-.492l2.877 2.008a1.995 1.995 0 0 1 .493 2.785l-7.052 10.035Zm.676-12.295v9.589l5.554-7.903a.998.998 0 0 0-.247-1.393l-2.877-2.007a1.006 1.006 0 0 0-1.398.245L15.761 7.11ZM5.81 5.396 2.932 7.403a.998.998 0 0 0-.247 1.393L9.737 18.83a2.766 2.766 0 0 0 3.844.675 2.744 2.744 0 0 0 .678-3.83L7.207 5.64a1.006 1.006 0 0 0-1.398-.245Zm6.189 12.983a1.002 1.002 0 0 1-1.004-1c0-.552.45-1 1.004-1s1.003.448 1.003 1-.45 1-1.003 1Z"
      clip-rule="evenodd"
    ></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'TagsIcon',
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

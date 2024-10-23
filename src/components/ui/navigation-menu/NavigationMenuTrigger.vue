<script setup>
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-vue-next'
import { NavigationMenuTrigger, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { navigationMenuTriggerStyle } from '.'

const props = defineProps({
  disabled: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false }
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwardedProps"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
  >
    <slot />
    <ChevronDown class="relative top-px ml-1 h-4 w-4" aria-hidden="true" stroke-width="3" />
  </NavigationMenuTrigger>
</template>

<template>
  <button @click="inc">{{ count }} * 2 = {{ doubled }}</button>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup(){
    const count = ref(0)
    const doubled = computed(() => count.value * 2)

    const inc = () => count.value++
    const { log } = console

    return {
      count,
      inc,
      doubled,
      log
    }
  }
}
</script>
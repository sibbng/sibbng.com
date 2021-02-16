<template>
  <div>
    <Header v-if="$route.path !== '/'" class="text-on-primary" />
    <router-view />
  </div>
</template>

<script>
import Header from "/~/components/Header.vue"

export default {
  components: { Header },
}
</script>
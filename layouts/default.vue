<template>
  <v-app style="background-color: #fffefc;">
    <v-container>
      <Navbar />
      <transition name="page">
        <nuxt />
      </transition>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.page-enter {
  opacity: 0;
}
.page-enter-active {
  transition: opacity 1s;
}
</style>

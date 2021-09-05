<template>
  <div class="text-center my-10">
    <v-icon v-if="hasPrev()" @click="changePage(prevPage)">chevron_left</v-icon>
    <v-chip
      v-for="n in totalPages"
      :key="n"
      dark
      tag
      :class="{ 'orange darken-3': n === current }"
      style="margin: 0 3px;"
      @click="changePage(n)"
    >
      {{ n }}
    </v-chip>
    <v-icon v-if="hasNext()" @click="changePage(nextPage)"
      >chevron_right</v-icon
    >
  </div>
</template>

<script>
export default {
  props: {
    totalCount: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      current: parseInt(this.$route.params.id) || 1,
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalCount / 10)
    },
    nextPage() {
      return this.current + 1
    },
    prevPage() {
      return this.current - 1
    },
  },
  methods: {
    hasPrev() {
      return this.current > 1
    },
    hasNext() {
      return this.current < this.totalPages
    },
    changePage(page) {
      this.$router.push(`/articles/${page}`)
    },
  },
}
</script>

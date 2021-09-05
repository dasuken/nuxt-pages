<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card
        nuxt-link
        :to="`/posts/${id}`"
        :elevation="hover ? 13 : 3"
        class="rounded-lg mb-5"
      >
        <v-img :src="thumbnail" aspect-ratio="2"></v-img>
        <v-card-text class="py-1">{{ updatedAt }}</v-card-text>
        <v-card-title
          class="text-h6 py-2 pb-4 font-weight-bold card--title"
          style="height: 80px;"
          >{{ title | shortenText }}</v-card-title
        >
        <div class="ml-2 pb-2" style="height: 40px;">
          <v-chip
            v-for="tag in tags"
            :key="tag.sys.id"
            class="ma-1"
            color="basil"
            tag
            small
            outlined
            n-link
            :to="`/tags/${tag.sys.id}`"
          >
            {{ tag.fields.name }}
          </v-chip>
        </div>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: null,
    },
    updatedAt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      n: 2,
    }
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 600px) and (max-width: 960px) {
  .card--title {
    font-size: 1rem !important;
  }
}
</style>

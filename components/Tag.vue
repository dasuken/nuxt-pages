<template>
  <v-chip
    class="ma-1"
    tag
    small
    color="pink"
    label
    text-color="white"
    nuxt-link
    :to="`/tags/${tag.sys.id}?name=${tag.fields.name}`"
  >
    <v-icon left small>label</v-icon>
    {{ tag.fields.name }}
  </v-chip>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>

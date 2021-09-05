<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="9">
        <div class="mb-6 text-center">
          <span class="font-weight-bold border--bottom-slight">{{
            this.$route.query.name
          }}</span>
        </div>
        <v-row>
          <v-col v-for="post in posts" :key="post.sys.id" cols="12" sm="6">
            <Card
              :id="post.sys.id"
              :title="post.fields.title"
              :thumbnail="post.fields.thumbnail.fields.file.url"
              :tags="post.fields.tags"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-6 text-center">
          <span class="font-weight-bold border--bottom-slight">タグ 一覧</span>
        </div>
        <Tag v-for="tag in tags" :key="tag.sys.id" :tag="tag" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/Card.vue'
import Tag from '@/components/Tag.vue'
import client from '@/plugins/contentful.js'

export default {
  components: {
    Card,
    Tag,
  },
  async asyncData({ params }) {
    const promisePosts = client.getEntries({
      content_type: 'post',
      'fields.tags.sys.id': params.id,
    })
    const promiseTags = client.getEntries({
      content_type: 'tags',
    })
    const [entryPosts, entryTags] = await Promise.all([
      promisePosts,
      promiseTags,
    ])
    return {
      posts: entryPosts.items,
      tags: entryTags.items,
    }
  },
}
</script>

<style scoped lang="scss">
.border--bottom {
  border-bottom: 5px solid #356859;

  &-slight {
    border-bottom: 3px solid #356859;
  }
}
</style>

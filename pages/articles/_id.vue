<template>
  <section>
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <v-row>
          <v-col v-for="post in posts" :key="post.sys.id" cols="12" sm="6">
            <Card
              :id="post.sys.id"
              :title="post.fields.title"
              :thumbnail="post.fields.thumbnail.fields.file.url"
              :tags="post.fields.tags"
              :updated-at="post.fields.updatedAt"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="2">
        <div class="mb-6 text-center">
          <span class="font-weight-bold border--bottom-slight">タグ 一覧</span>
        </div>
        <Tag v-for="tag in tags" :key="tag.sys.id" :tag="tag" />
      </v-col>
    </v-row>
    <Pagination :total-count="totalCount" />
  </section>
</template>

<script>
import client from '@/plugins/contentful.js'
import Card from '@/components/Card.vue'
import Tag from '@/components/Tag.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Card,
    Tag,
    Pagination,
  },
  async asyncData({ params }) {
    console.log(params.id)
    const promisePosts = client.getEntries({
      content_type: 'post',
      order: '-sys.createdAt',
      skip: 10 * (params.id - 1),
      limit: 10,
    })
    const promiseTags = client.getEntries({
      content_type: 'tags',
    })

    const [entryPosts, entryTags] = await Promise.all([
      promisePosts,
      promiseTags,
    ])

    const totalCount = entryPosts.total

    return {
      totalCount,
      posts: entryPosts.items,
      tags: entryTags.items,
    }
  },
}
</script>

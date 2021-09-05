<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
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

      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <v-card class="mb-5 rounded-lg">
              <v-card-title class="align-center font-weight-black">
                <v-avatar size="25" class="mr-2">
                  <v-img src="/g.png"></v-img>
                </v-avatar>
                ぐえ
              </v-card-title>
              <v-card-text>
                <div>NBAとラジオ好き。</div>
                <div>個人開発やってます。</div>
                <v-btn outlined small class="mt-4" to="/works">WORKS</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <div class="mb-6 text-center">
          <span class="font-weight-bold border--bottom-slight">タグ 一覧</span>
        </div>
        <Tag v-for="tag in tags" :key="tag.sys.id" :tag="tag" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <Pagination :total-count="totalCount" />
    </v-row>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Tag from '@/components/Tag.vue'
import client from '@/plugins/contentful.js'
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Card,
    Tag,
    Pagination,
  },
  async asyncData({ query }) {
    const promisePosts = client.getEntries({
      content_type: 'post',
      order: '-sys.createdAt',
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
      posts: entryPosts.items,
      tags: entryTags.items,
      totalCount,
    }
  },
}
</script>

<style scoped lang="scss">
.margin--pagination {
  margin: 0px 1px;
}

.border--bottom {
  border-bottom: 5px solid #356859;

  &-slight {
    border-bottom: 3px solid #356859;
  }
}
</style>

<template>
  <v-row justify="center">
    <v-col cols="12" sm="8">
      <div class="mb-2 font-weight-bold grey--text">
        <span>
          {{ updatedAt }}
        </span>
      </div>
      <v-img :src="post.fields.thumbnail.fields.file.url"></v-img>
      <h1 class="text-h4 font-weight-bold mt-2" style="word-wrap: break-word;">
        {{ post.fields.title }}
      </h1>
      <v-chip
        v-for="tag in post.fields.tags"
        :key="tag.sys.id"
        tag
        small
        dark
        class="mt-2 mr-1"
      >
        {{ tag.fields.name }}
      </v-chip>
      <div class="blog-contents">
        <markdown-it-vue :content="post.fields.content" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'

import client from '@/plugins/contentful.js'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  components: {
    MarkdownItVue,
  },
  async asyncData({ params }) {
    const post = await client.getEntry(params.id)
    return {
      post,
    }
  },
  head() {
    return {
      title: this.post && this.post.fields.title,
    }
  },
  computed: {
    updatedAt() {
      const date = this.post.fields.updatedAt
      return this.$dayjs(date).format('YYYY/MM/DD')
    },
  },
}
</script>

<style lang="scss">
.blog-contents {
  margin-top: 30px;

  a {
    color: orange !important;
  }

  a:hover {
    border-bottom: darkorange 1px;
  }

  img {
    max-width: 100%;
    max-height: 400px;
    display: block;
    margin: 1rem 0;
  }

  strong {
    font-size: 18px;
    font-weight: 700;
  }

  pre {
    position: relative;
    margin: 1.3rem 0;
    background: #333333;
    border-radius: 3px;
  }

  pre code {
    margin: 0;
    font-size: 0.9em;
    color: #e3e3e3;
  }

  code {
    background-color: #eee;
    color: #555555;
    padding: 5px;

    .hljs-literal {
      color: #ff8e8e;
    }

    .hljs-built_in {
      color: greenyellow;
    }

    .hljs-title {
      color: skyblue;
    }

    .hljs-keyword {
      color: orange;
    }

    .hljs-number {
      color: #a980f5;
    }
  }

  h2 {
    margin-top: 3rem;
    border-bottom: double 5px #ef6c00;
    padding: 0.5em 0 0.5em 0; /*文字周りの余白*/
  }

  h3 {
    padding: 0.15em 0.5em; /*上下 左右の余白*/
    color: #494949; /*文字色*/
    background: transparent; /*背景透明に*/
    border-left: solid 5px #494949; /*左線*/
    margin-top: 2rem;
  }

  ul,
  ol {
    font-family: NotoSansJP-Medium !important;
  }
}
</style>

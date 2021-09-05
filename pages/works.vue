<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <div class="font-weight-black text-h5 mb-5">作ったもの</div>
        <v-card
          v-for="work in works"
          :key="work.title"
          class="mb-10 rounded-xl"
        >
          <v-card-title class="font-weight-black">
            <a :href="work.link">
              {{ work.title }}
            </a>
          </v-card-title>
          <v-card-text>
            <v-img :src="work.img" aspect-ratio="2"></v-img>
          </v-card-text>

          <v-card-text>
            <div>詳細</div>
            {{ work.description }}
          </v-card-text>

          <v-card-text>
            使った技術:
            <div>
              <v-chip
                v-for="tech in work.techs"
                :key="tech"
                tag
                small
                color="pink"
                label
                text-color="white"
                class="mr-1"
              >
                {{ tech }}
              </v-chip>
            </div>
          </v-card-text>
          <v-card-text v-if="work.article">
            <v-btn outlined :to="`/articles/${work.article}`">関連記事</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          title: 'NUXTEC',
          link: 'https://d21iuqrezm3div.cloudfront.net',
          description:
            'Nuxtで作った初めてのサイト。ServerlessでECサイトを作ってみたかった。',
          img: 'https://i.gyazo.com/6de28f5cfbf3973f4aebf898a6706b05.png',
          techs: ['Nuxt', 'Express', 'Serverless', 'Aws'],
          article: '',
        },
        {
          title: 'KUYOU',
          link: 'https://haraichi-chat.tk/',
          description:
            '読まれなかったコーナーメールを供養するために作ったサービス。Apollo-composable composition-apiの挙動にかなり悩まされた',
          img: 'https://i.gyazo.com/2e40f44f5156ab0e3f97fabd4937828d.jpg',
          techs: ['Vue2', 'Graphql', 'Express'],
          article: '',
        },
        {
          title: 'これ',
          link: 'https://gue-tech-blog.ga/',
          description: '自作ブログ。Contentfulがマジ便利',
          img: 'https://i.gyazo.com/d36a17a8d779e01feeba99bd73e30a14.png',
          techs: ['Nuxt', 'Contentful'],
          article: '',
        },
        {
          title: 'Gnavi',
          link: 'https://gue-tech-blog.ga/',
          description:
            'Airbnbとぐるなびを合体して見たかった。RDS, ECSインスタンスがお高いので基本動かいてないです()',
          img: 'https://i.gyazo.com/3d5bef0f5322b520deabb562dfc534c5.jpg',
          techs: ['rails', 'ECS', 'CircleCI'],
          article: '',
        },
      ],
    }
  },
}
</script>

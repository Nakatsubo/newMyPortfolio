<template>
  <div class="child">
    <div class="childMainVisual">
      <div class="container container--lg">
        <h1 class="childMainVisual__title">Works</h1>
        <p>成果物をご紹介します。</p>
      </div>
    </div>

    <div class="container">
      <!-- <ol class="row works">
        <li class="works__item">
          <nuxt-link to="/works/111" class="works__inner">
            <figure class="works__image">
              <img src="https://placehold.jp/370x229.png" alt="" />
            </figure>
            <div class="works__text">
              <p class="works__name">作品名</p>
              <p class="works__date">
                <time datetime="2021-12-16">2021.12.16</time>
              </p>
            </div>
          </nuxt-link>
        </li>
        <li class="works__item">
          <nuxt-link to="#!" class="works__inner">
            <figure class="works__image">
              <img src="https://placehold.jp/370x229.png" alt="" />
            </figure>
            <div class="works__text">
              <p class="works__name">作品名</p>
              <p class="works__date">
                <time datetime="2021-12-16">2021.12.16</time>
              </p>
            </div>
          </nuxt-link>
        </li>
      </ol> -->
      <ol class="row works">
          <li v-for="work in works.contents" :key="work.id" class="works__item">
            <nuxt-link :to="`/works/${work.id}/`" class="works__inner">
              <figure class="works__image">
                <img
                  :width="work.thumbnail.width"
                  :height="work.thumbnail.height"
                  :src="work.thumbnail.url"
                  :alt="work.title"
                />
              </figure>
              <div class="works__text">
                <p class="works__name">{{ work.title }}</p>
                <p class="works__date">
                  <time :datetime="work.release">{{ work.release }}</time>
                </p>
              </div>
            </nuxt-link>
          </li>
        </ol>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const works = await $microcms.get({
      endpoint: 'works',
      queries: { limit: 2 },
    })
    return {
      works,
    }
  },
}
</script>
<template>
  <div class="">
    <Header />
    <section class="max-w-xl font-code text-lg">
      <p>
        ⌘KZ. It's a kind of evil organization. Our main purpose is to bring
        "Zen" to the coding life of the developers.
      </p>
    </section>
    <section class="container py-16 mt-10 ">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16"
      >
        <article class="relative" v-for="post in posts" :key="post.date">
          <blockquote>
            <svg
              class="w-8 h-8 absolute text-gray-400 fill-current z-0 transform rotate-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 123.961 123.961"
            >
              <defs />
              <path
                d="M49.8 29.032c3.1-1.3 4.4-5 3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899-8.5 3.6-15.8 8.3-21.6 14C11.4 28.532 6.6 36.232 4 44.732c-2.6 8.601-4 20.3-4 35.2v30.7c0 3.3 2.7 6 6 6h39.3c3.3 0 6-2.7 6-6v-39.3c0-3.301-2.7-6-6-6H26.5c.2-10.101 2.6-18.2 7-24.301 3.6-4.898 9-8.898 16.3-11.999zM120.4 29.032c3.1-1.3 4.399-5 3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9-8.4 3.6-15.601 8.3-21.5 13.9-7.101 6.8-12 14.5-14.601 23-2.6 8.399-3.899 20.1-3.899 35.1v30.7c0 3.3 2.7 6 6 6H116c3.3 0 6-2.7 6-6v-39.3c0-3.301-2.7-6-6-6H97.1c.2-10.101 2.601-18.2 7-24.301 3.6-4.899 9-8.899 16.3-12z"
              />
            </svg>
            <p class="font-type mb-2 z-10 relative leading-7">
              {{ post.fields.content }}
            </p>
            <cite class="font-code not-italic text-sm"
              >-

              <span class="inline-block tracking-wider">
                <div
                  class="w-full h-4 bg-yellow-400 -mb-5 transform -rotate-3"
                ></div>
                <span class="z-10 relative px-2">{{ post.fields.source }}</span>
              </span>
            </cite>
          </blockquote>
        </article>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $config: { apiKey } }) {
    const tables = await $axios.$get(
      "/posts/?sort%5B0%5D%5Bfield%5D=date&sort%5B0%5D%5Bdirection%5D=desc",
      {
        headers: { Authorization: `Bearer key${apiKey}` }
      }
    );

    const posts = tables.records;
    return { posts };
  },
  head() {
    return {
      title: "CMDKZ",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            '⌘KZ. It\'s a kind of evil organization. Our main purpose is to bring "Zen" to the coding life of the developer.'
        }
      ]
    };
  }
};
</script>

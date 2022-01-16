<template>
  <header
    class="w-screen h-screen bg-mountains-hiking bg-fixed bg-cover bg-center bg-no-repeat"
  >
    <!--<div class="h-screen w-screen backdrop-blur-md absolute -z-10"></div>-->
    <div
      class="bg-opacity-5 bg-white w-[140%] h-screen rotate-12 absolute top-[-15%] left-[-10%]"
    ></div>
    <div
      class="4 mx-auto px-8 py-4 md:px-12 md:py-10 flex z-10 items-center min-h-screen max-w-8xl"
    >
      <div class="grid gap-4 grid-cols-8 w-screen">
        <div
          class="items-center col-span-8 lg:col-span-3 align-middle text-center lg:text-left justify-center"
        >
          <div class="relative w-72 h-72 rounded-full mx-auto mb-4">
            <img
              :src="`/images/profile/${about.image}`"
              :alt="about.name"
              class="w-full h-full object-cover rounded-full after:bg-gradient-to-r from-cyan-500 to-blue-500 after:absolute after:-top-1 after:-right-1 after:-left-1 after:-bottom-1 after:rounded-full after:-z-10"
            />
          </div>
        </div>
        <main
          v-if="about"
          class="col-span-8 text-center lg:text-left lg:col-span-5 items-center"
        >
          <p class="mb-4 font-sourcecode text-cyan-400">
            Hi! Thanks for stopping by, I'm a
          </p>
          <h2
            class="text-3xl md:text-6xl lg:text-7xl font-bold text-zinc-400 block"
          >
            <vue-typer
              class="text-zinc-400"
              :text="replace"
              erase-style="backspace"
              :erase-delay="70"
            ></vue-typer>
          </h2>
          <p
            class="mt-4 max-w-full lg:max-w-lg text-zinc-400 leading-1 text-center lg:text-left block"
          >
            {{ about.bio }}
          </p>
          <nuxt-link
            to="/#contact"
            class="animate-pulse mt-8 px-6 py-3 font-sourcecode text-cyan-400 inline-block border-2 border-cyan-400 rounded-md transition hover:bg-cyan-400 hover:bg-opacity-20 focus:bg-cyan-400 focus:bg-opacity-20"
          >
            Get In Touch
          </nuxt-link>
        </main>
      </div>
    </div>
  </header>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'NavigationHeader',

  components: {
    VueTyper,
  },

  data() {
    return {
      about: {},
      replace: [],
    }
  },

  created() {
    this.getAbout()
  },

  methods: {
    async getAbout() {
      const about = await this.$content('about').fetch()

      this.about = about
      this.replace = about.replace
    },
  },
}
</script>

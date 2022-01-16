<template>
  <section id="about">
    <div class="container mx-auto px-8 py-8 md:px-20 md:py-28 max-w-full">
      <div
        class="mb-5 lg:mb-10 flex text-center justify-center align-middle items-center"
      >
        <h2
          class="text-7xl md:text-9xl md:p-0 w-full text-zinc-900 leading-snug uppercase font-bold mb-0 whitespace-nowrap"
        >
          About Me
        </h2>
        <p
          class="text-center font-semibold text-white leading-normal text-3xl md:text-4xl p-0 m-0 self-center w-full absolute"
        >
          Get to know me
          <span
            class="w-20 border-b-4 border-cyan-500 m-0 p-0 md:pt-2 block mx-auto"
          ></span>
        </p>
      </div>
      <div
        v-if="about"
        class="md:grid md:grid-cols-4 items-center align-middle"
      >
        <div class="col-span-4 md:col-span-3 md:mr-3">
          <h2 class="text-white mb-3 text-3xl font-semibold">
            I'm <span class="text-cyan-400">Reno Philibert,</span> a Software
            Developer
          </h2>
          <p
            v-for="(desc, index) in description"
            :key="(index + 1) * Math.random()"
            class="mb-4 text-white-opacity-50 text-left text-base font-normal mt-0 leading-relaxed"
          >
            {{ desc }}
          </p>
        </div>
        <div
          class="mt-6 col-span-4 md:col-span-1 md:mt-0 flex text-center align-middle items-center justify-center"
        >
          <div
            class="mx-auto shadow-cyan-500/50 relative h-72 w-full max-w-md flex lg:w-72 lg:max-w-full rounded-xl shadow-even overflow-hidden"
          >
            <div class="absolute inset-0"></div>
            <img
              :src="`/images/profile/${about.image}`"
              :alt="about.name"
              class="h-full w-full flex object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',

  data() {
    return {
      about: null,
    }
  },

  computed: {
    description() {
      const about = this.about
      let description

      if (about !== null) {
        description = about.description.split('\n')
      }

      return description
    },
  },

  created() {
    this.getAbout()
  },

  methods: {
    async getAbout() {
      const about = await this.$content('about').fetch()

      this.about = about
    },
  },
}
</script>

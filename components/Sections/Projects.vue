<template>
  <section id="projects">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-full">
      <div
        class="mb-5 lg:mb-10 flex text-center justify-center align-middle items-center"
      >
        <h2
          class="text-7xl md:text-9xl md:p-0 w-full text-zinc-900 leading-snug uppercase font-bold mb-0 whitespace-nowrap"
        >
          Projects
        </h2>
        <p
          class="text-center font-semibold text-white leading-normal text-3xl md:text-4xl p-0 m-0 self-center w-full absolute"
        >
          Things I've worked on
          <span
            class="w-20 border-b-4 border-cyan-500 m-0 p-0 md:pt-2 block mx-auto"
          ></span>
        </p>
      </div>
      <div class="max-w-full mx-auto p-5 sm:p-10 md:p-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            v-for="(project, index) in projects"
            :key="(index + 1) * Math.random()"
            class="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
            :style="`background-image: url('${project.detail_screenshots[0]}');`"
          >
            <div>
              <a
                class="group absolute top-0 right-0 bottom-0 left-0 bg-transparent hover:backdrop-blur-sm hover:bg-zinc-900/50 transition-all hover:cursor-pointer"
                @click="openModal(project)"
              >
                <div class="relative h-full w-full">
                  <div
                    class="absolute bottom-0 right-0 left-0 flex justify-center align-bottom items-center w-full h-full"
                  >
                    <div
                      class="text-xl font-bold tracking-tight leading-7 font-regular text-white opacity-0 whitespace-pre-wrap group-hover:opacity-100 transition-all text-center"
                    >
                      <span class="p-2">{{ project.name }}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Projects',

  data() {
    return {
      projects: [],
    }
  },

  created() {
    this.getProjects()
  },
  methods: {
    ...mapActions({
      openModal: 'openModal',
    }),

    async getProjects() {
      const projects = await this.$content('projects')
        .sortBy('createdAt')
        .fetch()

      this.projects = projects
    },
  },
}
</script>

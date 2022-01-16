<template>
  <section id="skills">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <div
        class="mb-5 lg:mb-10 flex text-center justify-center align-middle items-center"
      >
        <h2
          class="text-7xl md:text-9xl md:p-0 w-full text-zinc-900 leading-snug uppercase font-bold mb-0 whitespace-nowrap"
        >
          Skillset
        </h2>
        <p
          class="text-center font-semibold text-white leading-normal text-3xl md:text-4xl p-0 m-0 self-center w-full absolute"
        >
          Areas of Expertise
          <span
            class="w-20 border-b-4 border-cyan-500 m-0 p-0 md:pt-2 block mx-auto"
          ></span>
        </p>
      </div>
      <div v-if="skills" class="md:hidden grid grid-cols-3 gap-4">
        <div
          v-for="(skill, index) in skills.skills"
          :key="(index + 1) * Math.random()"
          class="text-left rounded-md flex mt-7 p-10 bg-skill transition-all hover:shadow-even focus:shadow-even active:shadow-even hover:shadow-cyan-500/50 active:shadow-cyan-500/50 focus:shadow-cyan-500/50"
        >
          <div
            class="justify-center items-center mx-auto sm:mx-0 text-center w-12 h-12 sm:h-6 sm:w-6 sm:relative"
          >
            <img
              :src="`/images/skills/${skill.icon}`"
              :alt="skill.name"
              class="w-full h-full object-contain"
            />
          </div>
          <div class="hidden sm:block pl-4 text-zinc-400">
            <h6 class="leading-relaxed capitalize text-lg">{{ skill.name }}</h6>
          </div>
        </div>
      </div>
      <div v-if="skills" class="hidden md:block">
        <ul
          class="mx-auto flex items-center justify-center flex-wrap max-w-4xl"
        >
          <li
            v-for="(skill, index) in skills.skills"
            :key="(index + 1) * Math.random()"
            :class="{ hidden: !skill.mobile }"
            class="m-1 md:m-2 cursor-pointer flex items-center text-zinc-400 border border-zinc-700 hover:text-cyan-400 hover:border-cyan-400 transition-all rounded-xl overflow-hidden"
          >
            <div class="p-4 h-14 w-14 overflow-hidden">
              <img
                :src="`/images/skills/${skill.icon}`"
                :alt="skill.name"
                class="w-full h-full object-contain"
              />
            </div>
            <p class="pr-4 text-sm md:text-base">
              {{ skill.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',

  data() {
    return {
      skills: null,
    }
  },

  created() {
    this.getSkills()
  },

  methods: {
    async getSkills() {
      const skills = await this.$content('skills').fetch()

      this.skills = skills
    },
  },
}
</script>

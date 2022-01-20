<template>
  <div>
    <ul
      class="hidden static font-sourcecode text-sm md:flex justify-start items-center"
    >
      <li>
        <nuxt-link
          to="/#about"
          class="px-4 py-2 text-center block w-full transition hover:text-cyan-400 focus:text-cyan-400"
          >About</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#skills"
          class="px-4 py-2 text-center block w-full transition hover:text-cyan-400 focus:text-cyan-400"
          >Skills</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#projects"
          class="px-4 py-2 text-center block w-full transition hover:text-cyan-400 focus:text-cyan-400"
          >Projects</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#contact"
          class="px-4 py-2 text-center block w-full transition hover:text-cyan-400 focus:text-cyan-400"
          >Contact</nuxt-link
        >
      </li>
    </ul>
    <MenuToggle />
  </div>
</template>

<script>
import MenuToggle from '@/components/Navigation/MenuToggle.vue'

export default {
  name: 'NavbarMenu',

  components: {
    MenuToggle,
  },
}
</script>

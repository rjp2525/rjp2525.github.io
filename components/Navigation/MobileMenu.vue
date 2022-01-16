<template>
  <div>
    <div
      class="fixed inset-0 md:hidden bg-blur bg-zinc-900 bg-opacity-50 transition-all duration-300 z-20"
      :class="{ 'opacity-0 invisible': !menu, 'opacity-100 visible': menu }"
    ></div>
    <ul
      class="p-8 fixed transform inset-y-0 md:hidden font-sourcecode text-sm right-0 w-56 bg-zinc-900 flex flex-col justify-center transition-all duration-300 z-20 overflow-hidden"
      :class="{
        'translate-x-56 invisible': !menu,
        'translate-x-0 visible shadow-lg': menu,
      }"
    >
      <li class="absolute top-4 right-8">
        <menu-toggle />
      </li>
      <li>
        <nuxt-link
          to="/#about"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-cyan-400 focus:text-cyan-400"
          @click.native="closeMenu"
          >About</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#skills"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-cyan-400 focus:text-cyan-400"
          @click.native="closeMenu"
          >Skills</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#projects"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-cyan-400 focus:text-cyan-400"
          @click.native="closeMenu"
          >Projects</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#contact"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-cyan-400 focus:text-cyan-400"
          @click.native="closeMenu"
          >Contact</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MenuToggle from '@/components/Navigation/MenuToggle.vue'

export default {
  name: 'MobileNavbar',

  components: {
    MenuToggle,
  },

  computed: mapGetters({
    menu: 'menu',
  }),

  methods: mapActions({
    closeMenu: 'closeMenu',
  }),
}
</script>

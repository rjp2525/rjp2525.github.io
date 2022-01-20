<template>
  <div>
    <button
      class="px-2 h-10 w-10 md:hidden transition hover:bg-zinc-700 outline-none rounded-full z-20"
      :class="{ 'bg-zinc-800': menu }"
      @click="toggleMenu"
    >
      <span
        class="ml-auto transform h-0.5 w-6 block bg-cyan-400 rounded-full transition duration-300"
        :class="{ 'my-2': !menu, 'rotate-45': menu }"
      ></span>
      <span
        class="ml-auto my-2 h-0.5 w-4 block bg-cyan-400 rounded-full transition duration-300"
        :class="{ hidden: menu }"
      ></span>
      <span
        class="ml-auto transform h-0.5 block bg-cyan-400 rounded-full transition duration-300"
        :class="{ 'my-2 w-2': !menu, '-my-0.5 w-6 -rotate-45': menu }"
      ></span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MenuToggle',

  computed: mapGetters({
    menu: 'menu',
  }),

  methods: mapActions({
    toggleMenu: 'toggleMenu',
  }),
}
</script>

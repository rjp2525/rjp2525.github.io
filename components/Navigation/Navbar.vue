<template>
  <nav
    ref="navbar"
    class="px-8 py-4 flex items-center justify-between fixed top-0 w-full bg-blur transition-all duration-300 z-20"
    :class="{
      'bg-transparent': navbar_transparent,
      'backdrop-blur-sm bg-zinc-800/80': !navbar_transparent,
    }"
  >
    <Logo />
    <navbar-menu />
    <menu-toggle />
  </nav>
</template>

<script>
import Logo from '@/components/Icons/Logo.vue'
import NavbarMenu from '@/components/Navigation/NavbarMenu.vue'
import MenuToggle from '@/components/Navigation/MenuToggle.vue'

export default {
  name: 'Navbar',

  components: {
    Logo,
    NavbarMenu,
    MenuToggle,
  },

  data() {
    return {
      navbar_transparent: true,
    }
  },

  mounted() {
    this.animateNav()
  },

  methods: {
    animateNav() {
      let prevScrollpos = window.pageYOffset

      window.onscroll = () => {
        const currentScrollPos =
          window.pageYOffset || document.documentElement.scrollTop

        // For mobile devices, since momentum scrolling can cause it to go negative
        if (currentScrollPos < 0) {
          return
        }

        if (currentScrollPos > 0) {
          this.navbar_transparent = false
        } else {
          this.navbar_transparent = true
        }

        if (prevScrollpos > currentScrollPos) {
          this.$refs.navbar.style.top = '0'
        } else {
          this.$refs.navbar.style.top = '-6rem'
        }

        prevScrollpos = currentScrollPos
      }
    },
  },
}
</script>

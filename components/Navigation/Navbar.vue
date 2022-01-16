<template>
  <nav
    ref="navbar"
    class="px-8 py-4 flex items-center justify-between fixed top-0 w-full bg-blur bg-transparent bg-opacity-80 transition-all duration-300 z-20"
  >
    <Logo />
    <navbar-menu />
  </nav>
</template>

<script>
import Logo from '@/components/Icons/Logo.vue'
import NavbarMenu from '@/components/Navigation/NavbarMenu.vue'

export default {
  name: 'Navbar',

  components: {
    Logo,
    NavbarMenu,
  },

  mounted() {
    this.animateNav()
  },
  methods: {
    animateNav() {
      let prevScrollpos = window.pageYOffset

      window.onscroll = () => {
        const currentScrollPos = window.pageYOffset

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

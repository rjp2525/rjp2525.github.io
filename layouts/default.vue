<template>
  <div
    class="font-sourcesans relative overflow-hidden h-full text-gray-200 bg-body-gray leading-6 transition-all"
    after-content=" "
  >
    <Navbar />
    <MobileMenu />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar'
import MobileMenu from '@/components/Navigation/MobileMenu'

export default {
  components: {
    Navbar,
    MobileMenu,
  },
}
</script>

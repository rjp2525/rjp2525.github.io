<template>
  <div
    class="font-sourcesans relative overflow-hidden h-full text-gray-200 bg-body-gray leading-6 transition-all"
    after-content=" "
  >
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>

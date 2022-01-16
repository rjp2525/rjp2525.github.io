<template>
  <div>
    <Header />
    <About />
    <Skills />
    <Modal />
    <Projects />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/Sections/Header'
import About from '@/components/Sections/About'
import Skills from '@/components/Sections/Skills'
import Projects from '@/components/Sections/Projects'
import Modal from '@/components/Modals/Modal'

export default {
  name: 'IndexPage',

  components: {
    Header,
    About,
    Skills,
    Projects,
    Modal,
  },

  mounted() {
    this.closeMenu()
  },

  methods: mapActions({
    closeMenu: 'closeMenu',
  }),
}
</script>

<template>
  <div>
    <Header />
    <About />
    <Skills />
    <Modal />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/Sections/Header'
import About from '@/components/Sections/About'
import Skills from '@/components/Sections/Skills'
import Projects from '@/components/Sections/Projects'
import Modal from '@/components/Modals/Modal'
import Contact from '@/components/Sections/Contact'
import Footer from '@/components/Sections/Footer'

export default {
  name: 'IndexPage',

  components: {
    Header,
    About,
    Skills,
    Projects,
    Modal,
    Contact,
    Footer,
  },

  mounted() {
    this.closeMenu()
  },

  methods: mapActions({
    closeMenu: 'closeMenu',
  }),
}
</script>

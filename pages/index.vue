<template>
  <div>
    <Header data-aos="fade" data-aos-duration="800" />
    <About data-aos="fade-up" data-aos-duration="800" />
    <Skills data-aos="fade-up" data-aos-duration="800" />
    <Modal data-aos="fade-up" data-aos-duration="800" />
    <Projects data-aos="fade-up" data-aos-duration="800" />
    <Contact data-aos="fade-up" data-aos-duration="800" />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AOS from 'aos'
import Header from '@/components/Sections/Header'
import About from '@/components/Sections/About'
import Skills from '@/components/Sections/Skills'
import Projects from '@/components/Sections/Projects'
import Modal from '@/components/Modals/Modal'
import Contact from '@/components/Sections/Contact'
import Footer from '@/components/Sections/Footer'

// AOS CSS
import 'aos/dist/aos.css'

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

  created() {
    AOS.init()
  },

  mounted() {
    this.closeMenu()
  },

  methods: mapActions({
    closeMenu: 'closeMenu',
  }),
}
</script>

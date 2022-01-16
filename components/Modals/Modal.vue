<template>
  <div
    class="fixed inset-0 bg-blur bg-gray-900 bg-opacity-50 transition-all duration-300 z-30"
    :class="{
      'opacity-0 invisible': !modal.active,
      'opacity-100 visible': modal.active,
    }"
  >
    <article
      v-if="modal.active"
      class="bg-zinc-800 w-full max-w-4xl absolute top-0 md:top-1/2 left-0 md:left-1/2 bottom-0 md:bottom-auto md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl shadow-xl overflow-x-hidden overflow-y-auto"
    >
      <div
        class="px-8 py-4 bg-blur bg-zinc-800 bg-opacity-90 sticky top-0 w-full flex items-center justify-between z-10"
      >
        <p class="text-xl text-zinc-400">{{ modal.content.name }}</p>
        <button
          class="h-8 w-8 grid place-items-center rounded-full transform transition text-zinc-500 hover:bg-zinc-700 focus:bg-zinc-700 outline-none"
          @click="closeModal"
        >
          <close-icon class="h-2/3 w-2/3" />
        </button>
      </div>
      <div class="px-8 py-4 md:pb-8 md:grid md:gap-8 md:grid-cols-2">
        <div class="md:mb-0 h-60 md:h-80 rounded-xl overflow-hidden">
          <img
            :src="modal.content.screenshot"
            :alt="modal.content.name"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="py-4 md:py-0 relative md:max-h-96 overflow-x-hidden overflow-y-auto text-zinc-400"
        >
          <p class="mt-6 leading-6">
            {{ modal.content.description }}
          </p>
          <div
            class="mt-6 sticky top-full text-lg text-zinc-500 flex items-center"
          >
            <a
              v-if="modal.content.github_link !== 'private'"
              :href="modal.content.github_link"
              target="_blank"
              rel="noreferrer"
              class="flex items-center transition hover:text-cyan-400 focus:text-cyan-400"
            >
              <div class="flex-shrink-0 h-8 w-8 grid place-items-center">
                <github-icon class="h-2/3 w-2/3" />
              </div>
              GitHub
            </a>
            <a
              v-if="modal.content.live_link !== 'notactive'"
              :href="modal.content.live_link"
              target="_blank"
              rel="noreferrer"
              class="ml-6 flex items-center transition hover:text-cyan-400 focus:text-cyan-400"
            >
              <div class="flex-shrink-0 h-8 w-8 grid place-items-center">
                <external-link class="h-2/3 w-2/3" />
              </div>
              Live Website
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CloseIcon from '@/components/Icons/Close.vue'
import ExternalLink from '@/components/Icons/ExternalLink.vue'
import GithubIcon from '@/components/Icons/Github.vue'

export default {
  name: 'Modal',

  components: {
    CloseIcon,
    GithubIcon,
    ExternalLink,
  },

  computed: mapGetters({
    modal: 'modal',
  }),

  methods: mapActions({
    closeModal: 'closeModal',
  }),
}
</script>

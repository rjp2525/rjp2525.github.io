<template>
  <div
    class="fixed inset-0 backdrop-blur-sm bg-zinc-900/50 transition-all duration-300 z-30"
    :class="{
      'opacity-0 invisible': !modal.active,
      'opacity-100 visible': modal.active,
    }"
  >
    <article
      v-if="modal.active"
      v-on-clickaway="closeModal"
      class="bg-zinc-900 w-full max-w-6xl absolute top-0 md:top-1/2 left-0 md:left-1/2 bottom-0 md:bottom-auto md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-sm shadow-xl overflow-x-hidden overflow-y-auto"
    >
      <div
        class="px-8 py-4 bg-blur bg-zinc-800 bg-opacity-90 sticky top-0 w-full flex items-center justify-between z-10"
      >
        <p class="text-xl text-white-opacity-60">{{ modal.content.name }}</p>
        <button
          class="h-8 w-8 grid place-items-center rounded-full hover:text-zinc-200 transform transition text-zinc-500 hover:bg-zinc-700 focus:bg-zinc-700 outline-none"
          @click="closeModal"
        >
          <close-icon class="h-2/3 w-2/3" />
        </button>
      </div>
      <div class="px-8 py-4 md:pb-8 md:grid md:gap-8 md:grid-cols-2">
        <div class="flex justify-center align-middle items-center">
          <div class="md:mb-0 h-60 md:h-80 flex overflow-hidden">
            <img
              :src="modal.content.detail_screenshots[1]"
              :alt="modal.content.name"
              class="h-full w-auto object-cover"
            />
          </div>
        </div>
        <div
          class="py-4 md:py-0 relative md:max-h-full overflow-x-hidden overflow-y-auto"
        >
          <h4
            class="text-white-opacity-80 text-lg font-medium leading-tight mb-2"
          >
            Project Info
          </h4>
          <p class="text-white-opacity-50 leading-relaxed mt-0 mb-4">
            {{ modal.content.description }}
          </p>
          <h4
            class="text-white-opacity-80 text-lg font-medium leading-tight mb-2"
          >
            Project Details
          </h4>
          <ul class="p-0 text-white-opacity-50">
            <li class="list-none border-b border-b-white-opacity-10 py-3">
              <span class="text-white-opacity-70 font-semibold mr-2"
                >Type:</span
              >
              {{ modal.content.type }}
            </li>
            <li class="list-none border-b border-b-white-opacity-10 py-3">
              <span class="text-white-opacity-70 font-semibold mr-2"
                >Technologies:</span
              >
              {{ modal.content.languages.join(', ') }}
            </li>
            <li class="list-none border-b border-b-white-opacity-10 py-3">
              <span class="text-white-opacity-70 font-semibold mr-2"
                >Date:</span
              >
              {{ modal.content.date }}
            </li>
            <li
              class="flex items-center list-none border-b border-b-white-opacity-10 py-3"
            >
              <span
                class="inline-flex items-center text-white-opacity-70 font-semibold mr-2"
                >Link:</span
              >
              <a
                v-if="modal.content.live_link !== 'notactive'"
                :href="modal.content.live_link"
                class="inline-flex transition items-center hover:text-cyan-400 focus:text-cyan-400 active:text-cyan-400"
                ><div class="flex-shrink-0 h-8 w-8 grid place-items-center">
                  <external-link class="h-2/3 w-2/3" />
                </div>
                {{ modal.content.live_link.split('https://').pop() }}</a
              >
              <span
                v-else
                style="padding-top: 0.1em; padding-bottom: 0.1rem"
                class="text-xs font-sourcecode px-3 bg-red-600/20 rounded-full"
                >No longer live</span
              >
            </li>
            <li class="list-none flex items-center py-3">
              <span class="text-white-opacity-70 inline-flex font-semibold mr-2"
                >GitHub:</span
              >
              <span
                v-if="modal.content.github_link == 'private'"
                style="padding-top: 0.1em; padding-bottom: 0.1rem"
                class="text-xs font-sourcecode px-3 bg-red-600/20 rounded-full"
                >Private/Proprietary</span
              >
              <span
                v-else-if="modal.content.github_link !== 'notfound'"
                style="padding-top: 0.1em; padding-bottom: 0.1rem"
                class="text-xs font-sourcecode px-3 bg-orange-600/20 rounded-full"
                >Not published</span
              >
              <span
                v-else
                style="padding-top: 0.1em; padding-bottom: 0.1rem"
                class="text-xs font-sourcecode px-3 bg-red-600/20 rounded-full"
                >Proprietary</span
              >
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
import CloseIcon from '@/components/Icons/Close.vue'
import ExternalLink from '@/components/Icons/ExternalLink.vue'

export default {
  name: 'Modal',

  components: {
    CloseIcon,
    ExternalLink,
  },

  mixins: [clickaway],

  computed: mapGetters({
    modal: 'modal',
  }),

  methods: mapActions({
    closeModal: 'closeModal',
  }),
}
</script>

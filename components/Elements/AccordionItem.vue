<template>
  <div
    :id="groupId + '-' + item.id"
    class="relative border-b border-white-opacity-20 last:border-transparent"
    :class="{ 'is-active': item.active }"
  >
    <dt class="w-full px-8 py-6 text-left">
      <button
        class="flex relative items-center justify-between w-full text-left text-cyan-700 transition-all hover:text-cyan-400 group"
        @click="toggle"
      >
        <h4 class="font-semibold font-sourcecode pr-2 md:pr-0">
          {{ item.title }}
        </h4>
        <span
          class="w-2 h-2 p-0 border-r-2 absolute top-[50%] right-0 bottom-0 border-r-cyan-700 border-b-2 border-b-cyan-700 -translate-y-1 rotate-45 transition-transform duration-200 group-hover:border-b-cyan-400 group-hover:border-r-cyan-400"
          :class="{
            'translate-y-1 rotate-225': item.active,
          }"
        ></span>
      </button>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <dd v-if="item.active" class="px-8 overflow-hidden">
        <div v-html="item.content"></div>
      </dd>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'AccordionItem',

  props: {
    accordionItem: {
      type: Object,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    groupId: {
      type: String,
      default: 'accordion',
    },
  },

  data() {
    return {
      item: null,
    }
  },

  created() {
    this.item = this.accordionItem
  },

  methods: {
    toggle(event) {
      if (this.multiple) {
        this.item.active = !this.item.active
      } else {
        this.$parent.$children.forEach((item, index) => {
          if (
            item.$el.id === event.currentTarget.parentElement.parentElement.id
          )
            item.item.active = !item.item.active
          else item.item.active = false
        })
      }
    },

    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },

    endTransition(el) {
      el.style.height = ''
    },
  },
}
</script>

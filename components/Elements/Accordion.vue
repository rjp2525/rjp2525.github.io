<template>
  <dl class="accordion box" role="presentation">
    <accordion-item
      v-for="item in content"
      :key="item.id"
      :multiple="multiple"
      :accordion-item="item"
      :group-id="groupId"
    >
    </accordion-item>
  </dl>
</template>
<script>
import AccordionItem from '@/components/Elements/AccordionItem'

export default {
  name: 'Accordion',

  components: {
    AccordionItem,
  },

  props: {
    content: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      groupId: null,
    }
  },

  mounted() {
    this.groupId = this.$el.id
  },
}
</script>

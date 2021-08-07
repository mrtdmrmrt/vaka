<template>
  <div class="grid__wrapper">
    <div class="title__wrapper">
      <div v-for="(item, key) in columns" :key="key">{{ item.field }}</div>
    </div>
    <div
      class="items__wrapper"
      :class="{'items__wrapper--stripe':stripe}"
      v-for="(item, key) in items"
      :key="'A' + key"
      @click="itemSelected(item)"
    >
      <div v-for="(column, key) in columns" :key="'B' + key">
        {{ item[column.field] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',

  props: {
    /**
     * Grid Columns field data props
     */
    columns: {
      required: true,
      type: Array,
    },
    /**
     * Grid item data props
     */
    items: {
      required: true,
      type: Array,
    },
    /**
     * Grid try to zebra stripe
     */
    stripe:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * Grid item click function
     * @param {Object} item item-data
     * @return {Object} value
     */
    itemSelected(val) {
      this.$emit("itemSelected", {...val});
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/grid.scss';
</style>

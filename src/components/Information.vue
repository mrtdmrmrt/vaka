<template>
  <div class="info__wrapper">
    <div v-for="(value, name, key) in info" :key="key">
      <span class="info__wrapper--key">{{ name }}</span> : <span class="info__wrapper--value">{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Informattion',
  props: {
    /**
     * Information data props
     */
    info: {
      required: false,
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/info.scss';
</style>

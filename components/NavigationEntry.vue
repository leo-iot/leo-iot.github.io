<template>
  <div id="navigation-entry">
    <a :href="data.url ? data.url : data.element">
      <img v-if="data.img" :src="image" alt="Logo" />
      <div v-else>{{ data.text }}</div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavigationDataEntry from '~/src/typings/NavigationDataEntry'

export default Vue.extend({
  name: 'NavigationEntry',
  props: {
    data: {
      type: Object as () => NavigationDataEntry,
      required: true,
    },
  },
  computed: {
    image() {
      return require('~/assets/' + this.data.img)
    },
  },
})
</script>

<style scoped>
#navigation-entry {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#navigation-entry a {
  height: 100%;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

#navigation-entry a img {
  height: 80px;
  aspect-ratio: 19/16;
}
</style>

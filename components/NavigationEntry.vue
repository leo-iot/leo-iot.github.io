<template>
  <div id="navigation-entry">
    <img v-if="data.img" :src="image"  alt="Logo">
    <div v-else>{{data.text}}</div>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import NavigationDataEntry from "~/src/typings/NavigationDataEntry";

export default Vue.extend({
  name: "NavigationEntry",
  props: {
    data: {
      type: Object as () => NavigationDataEntry,
      required: true,
    }
  },
  computed: {
    image() {
      return require('~/assets/' + this.data.img)
    }
  }
})
</script>

<style scoped>
#navigation-entry {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#navigation-entry img {
  height: 8vh;
}
</style>

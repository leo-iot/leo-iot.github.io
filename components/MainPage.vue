<template>
  <div id="container">
    <p>hello world</p>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Context} from "@nuxt/types";

export default Vue.extend({
  asyncData(_: Context): Promise<object | void> | object | void {
    return {
      text: "something"
    }
  },
  data() {
    return {
      title: 'Some Title'
    }
  },
})
</script>

<style scoped>
#container {
  width: 100vh;
  height: 100vh;
}
</style>

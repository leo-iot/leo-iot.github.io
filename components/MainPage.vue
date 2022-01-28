<template>
  <div id="main-page">
    <Navigation/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";

@Component
export default class MainPage extends Vue{
  content: any = {}

  async created() {
    this.content = await this.$nuxt
      .context.$content('index').fetch()
  }

}
</script>

<style scoped>
#main-page {
  width: 100vw;
  height: 100vh;
}
</style>

<template>
  <div id="container">
    <p>{{ text }}</p>
    <div v-if="content">
      <nuxt-content :document="content"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";

@Component
export default class MainPage extends Vue{
  text: string = "something"
  content: any = {}

  async created() {
    this.content = await this.$nuxt
      .context.$content('index').fetch()
  }

}
</script>

<style scoped>
#container {
  width: 100vh;
  height: 100vh;
}
</style>

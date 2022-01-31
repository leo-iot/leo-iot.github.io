<template>
<div v-if="homeData" id="home-segment" class="full-content" :style="{backgroundImage: `url('${coverImage}')`}">
</div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HomeData from "~/src/typings/HomeData";

@Component
export default class HomeSegment extends Vue{

  homeData: HomeData | null = null

  async created() {
    const context = this.$nuxt.context
    const fetchResult = await context.$content('home/home-data').fetch()

    this.homeData = fetchResult as any
  }

  get coverImage() {
    if (this.homeData) {
      return require('~/assets/' + this.homeData.homeCover)
    } else {
      return ''
    }
  }
}
</script>

<style scoped>
#home-segment {
  height: 1000px;
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

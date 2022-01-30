<template>
  <div id="main-page">
    <Navigation/>
    <HomeSegment/>
    <AboutSegment/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";
import HomeSegment from "~/components/HomeSegment.vue";
import AboutSegment from "~/components/AboutSegment.vue";
@Component({
  components: {AboutSegment, HomeSegment}
})
export default class MainPage extends Vue{}
</script>

<style scoped>
#main-page {
  width: 100vw;
  height: 100vh;
}
</style>

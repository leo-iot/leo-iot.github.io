<template>
  <div id="main-page">
    <Navigation/>
    <div id="home" class="anchor"/><HomeSegment/>
    <div id="wrapper-container">
      <div id="wrapper">
        <div id="about" class="anchor"/><AboutSegment/>
        <div id="preview" class="anchor"/><PreviewSegment/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";
import HomeSegment from "~/components/HomeSegment.vue";
import AboutSegment from "~/components/AboutSegment.vue";
import PreviewSegment from "~/components/PreviewSegment.vue";
@Component({
  components: {PreviewSegment, AboutSegment, HomeSegment}
})
export default class MainPage extends Vue{}
</script>

<style scoped>
#main-page {
  width: 100vw;
  height: 100vh;
}

#wrapper-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#wrapper {
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.anchor {
  height: 100px;
}
</style>

<template>
  <div id="preview-segment"></div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import PreviewData from "~/src/typings/PreviewData";

@Component
export default class PreviewSegment extends Vue{
  data: PreviewData | null = null

  created() {
    this.data = this.$nuxt.context
      .$content('preview/preview-data.json')
      .fetch() as any
  }
}
</script>

<style scoped>
#preview-segment {
  height: 50vh;
  width: 100%;
}
</style>

<template>
  <div id="preview-segment">
    <div id="dashboard-preview" class="preview">
      <div class="text">

      </div>
      <div class="image" :style="{backgroundImage: `url('')`}">

      </div>
    </div>

    <div id="model3d-preview" class="preview">
      <div class="text">

      </div>

      <div class="image">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import PreviewData from "~/src/typings/PreviewData";

@Component
export default class PreviewSegment extends Vue{
  data: PreviewData | null = null

  created() {
    this.data = this.$nuxt.context
      .$content('preview/preview-data')
      .fetch() as any
  }
}
</script>

<style scoped>
#preview-segment {
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#preview-segment .preview {
  width: 40%;
  height: 80%;
  background-color: white;
  box-shadow: 0 0 12px -4px #000;
  border-radius: 20px;
}
</style>

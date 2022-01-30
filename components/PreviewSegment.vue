<template>
  <div id="preview-segment">
    <div id="dashboard-preview" class="preview">
      <div v-if="dashboardText" class="text">
        <div class="text-container">
          <nuxt-content class="dingens" :document="dashboardText"/>
        </div>
        <a :href="data.dashboard.url" class="button">
          Try it out !
        </a>
      </div>

      <div  class="image" :style="{backgroundImage: `url('${imageDashBoard}')`}">
      </div>
    </div>

    <div id="model3d-preview" class="preview">
      <div v-if="model3dText" class="text">
        <div class="text-container">
          <nuxt-content :document="model3dText" />
        </div>
        <a :href="data.model3d.url" class="button">
          Try it out !
        </a>
      </div>

      <div class="image" :style="{backgroundImage: `url('${image3dModel}')`}">
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
  model3dText: any = null
  dashboardText: any = null

  async created() {
    this.data = await this.$nuxt.context
      .$content('preview/preview-data')
      .fetch() as any

    this.model3dText = await this.$nuxt.context
      .$content('preview/preview-text-model3d')
      .fetch()

    this.dashboardText = await this.$nuxt.context
      .$content('preview/preview-text-dashboard')
      .fetch()
  }

  get imageDashBoard() {
    if (this.data) {
      return require(`~/assets/${this.data.dashboard.img}`)
    }
  }

  get image3dModel() {
    if (this.data) {
      return require(`~/assets/${this.data.model3d.img}`)
    }
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.preview .image {
  border-radius: 0 20px 20px 0;
  background-size: cover;
  background-position: center center;
}

.preview .text {
  padding: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.preview .text .text-container {
  height: 80%;
  width: 100%;
}

.preview .text .button {
  position: relative;
  font-size: 3vw;
  padding: 0.5vw;
  border-radius: 7px;
  line-height: 3vw;
  display: flex;
  justify-content: center;
  align-items: baseline;
  cursor: pointer;
  box-shadow: 0 0 7px -4px #000;
  background: rgb(233 78 27);
  background: linear-gradient(90deg, rgba(233 78 27 / 80%) 0%, rgba(191 23 34 / 80%) 100%);
  color: white;
  z-index: 0;
  transition: 0.4s all;
  user-select: none;
}

.preview .text .button:hover {
  box-shadow: 0 0 12px -4px #000;
  transform: scale(1.1);
  background: rgb(233 78 27);
  background: linear-gradient(90deg, rgba(233 78 27 / 100%) 0%, rgba(191 23 34 / 100%) 100%);
}

</style>

<style>

.nuxt-content {
  font-size: 1px;
}

.text h1 {
  font-size: 3vw;
}

.text p {
  line-height: 3vh;
}

</style>

<template>
  <div v-if="datax" id="preview-segment" class="wrapped-content">
    <PreviewSectionEntry :data="datax.dashboard" :text="dashboardText" />
    <PreviewSectionEntry :data="datax.model3d" :text="model3dText" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PreviewData from '~/src/typings/PreviewData'
import PreviewSectionEntry from '~/components/PreviewSectionEntry.vue'

@Component({
  components: { PreviewSectionEntry },
})
export default class PreviewSegment extends Vue {
  datax: PreviewData | null = null
  model3dText: any = null
  dashboardText: any = null

  async created() {
    this.datax = (await this.$nuxt.context
      .$content('preview/preview-data')
      .fetch()) as any

    this.model3dText = await this.$nuxt.context
      .$content('preview/preview-text-model3d')
      .fetch()

    this.dashboardText = await this.$nuxt.context
      .$content('preview/preview-text-dashboard')
      .fetch()
  }

  get imageDashBoard() {
    if (this.datax) {
      return require(`~/assets/${this.datax.dashboard.img}`)
    }
  }

  get image3dModel() {
    if (this.datax) {
      return require(`~/assets/${this.datax.model3d.img}`)
    }
  }
}
</script>

<style scoped>
#preview-segment {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<style>
.text h1 {
  font-size: 3vw;
  line-height: 1vw;
}

.text p {
  line-height: 1.4vw;
  font-size: 1.4vw;
}
</style>

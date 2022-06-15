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
}
</script>

<style scoped>
#preview-segment {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

@media (max-width: 812px) {
  #preview-segment {
    flex-direction: column;
  }

  #preview-segment > * {
    width: 100%;
  }
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

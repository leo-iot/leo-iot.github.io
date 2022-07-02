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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 1400px) {
  #preview-segment {
    grid-template-columns: 1fr;
  }

  #preview-segment > * {
    width: 100%;
  }
}
</style>

<style>
.text {
  --font-size: 30px;
}

.text h1 {
  font-size: calc(var(--font-size) * 2);
  line-height: calc(var(--font-size) * 2);
}

.text p {
  font-size: var(--font-size);
  line-height: var(--font-size);
}
</style>

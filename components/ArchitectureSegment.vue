<template>
  <div v-if="architectureData" id="architecture-segment">
    <img :src="image" alt="architecture" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ArchitectureData from '~/src/typings/ArchitectureData'

@Component
export default class ArchitectureSegment extends Vue {
  architectureData: ArchitectureData | null = null

  async created() {
    this.architectureData = (await this.$nuxt.context
      .$content('architecture/architecture-data')
      .fetch()) as any
  }

  get image() {
    if (this.architectureData) {
      return require(`~/assets/${this.architectureData.architectureImageLocation}`)
    } else {
      return ''
    }
  }
}
</script>

<style scoped>
#architecture-segment {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#architecture-segment img {
  width: 80%;
}
</style>

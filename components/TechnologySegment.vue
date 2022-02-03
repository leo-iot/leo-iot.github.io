<template>
  <div v-if="technologyData" id="technologies-segment">
    <TechnologyEntry v-for="(technology, index) in technologyData.technologies" :key="index" :technology="technology" :technology-data="technologyData"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import TechnologyEntry from "~/components/TechnologyEntry.vue"
import TechnologyData from "~/src/typings/TechnologyData";
import TechnologyEntryData from "~/src/typings/TechnologyEntryData";

@Component({components: {TechnologyEntry}})
export default class TechnologySegment extends Vue {

  technologyData: TechnologyData | null = null
  technologiesRows: Array<TechnologyEntryData[]> = []

  async created() {
    this.technologyData = await this.$nuxt
      .context.$content('technology/technology-data').fetch() as any
  }

}

</script>

<style scoped>

#technologies-segment {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>

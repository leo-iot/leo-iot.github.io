<template>
<div class="technology-entry">
  <div class="image" :style="{backgroundImage: `url('${image}')`}">

  </div>
  <div class="name">
    {{ technology.name }}
  </div>
</div>
</template>

<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";
import TechnologyEntryData from "~/src/typings/TechnologyEntryData";
import TechnologyData from "~/src/typings/TechnologyData";

@Component
export default class TechnologyEntry extends Vue{

  @Prop({required: true})
  technology!: TechnologyEntryData

  @Prop({required: true})
  technologyData!: TechnologyData

  get image() {
    if (this.technology) {
      return require(`~/assets/${this.technologyData.imageDirectory}${this.technology.img}`)
    } else {
      return ''
    }
  }

}

</script>

<style scoped>

.technology-entry {
  width: 20%;
  height: 100px;
}

.technology-entry .image {
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  border-radius: 100%;
  box-shadow: 0 0 12px -4px #000;
}

</style>

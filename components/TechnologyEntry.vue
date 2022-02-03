<template>
<div class="technology-entry">
    <div class="image">
      <img :src="image" :alt="technology.name">
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
  height: 13vw;
  width: 13vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}

.technology-entry .image {
  width: 80%;
  height: 80%;
  background-size: cover;
  border-radius: 100%;
  box-shadow: 0 0 12px -4px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.technology-entry .image img {
  width: 50%;
}

</style>

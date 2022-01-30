<template>
  <div v-if="data && text" class="preview">
    <div v-if="text" class="text">
      <div class="text-container">
        <nuxt-content :document="text"/>
      </div>
      <a :href="data.url" class="button">
        Try it out !
      </a>
    </div>

    <div  class="image" :style="{backgroundImage: `url('${image}')`}">
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import PreviewEntryData from "~/src/typings/PreviewEntryData";

@Component
export default class PreviewSectionEntry extends Vue {

  @Prop({required: true})
  public data!: PreviewEntryData

  @Prop({required: true})
  public text!: any

  get image() {
    if (this.data.img) {
      return require(`~/assets/${this.data.img}`)
    } else {
      return ''
    }
  }

}
</script>

<style scoped>
.preview {
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

<template>
  <div id="video-segment">
    <div id="background"></div>
    <div v-if="videoData" id="content">
      <iframe
        width="1120"
        height="660"
        loading="lazy"
        :src="videoData.url"
        title="LeoIOT Vidoe"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VideoData from '@/src/typings/VideoData'

@Component
export default class VideoSegment extends Vue {
  videoData: VideoData | null = null

  async created() {
    this.videoData = (await this.$nuxt.context
      .$content('video/video-data')
      .fetch()) as any
  }
}
</script>

<style scoped>
#video-segment {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

#background {
  position: absolute;
  top: 0;
  background: rgb(233 78 27);
  background: linear-gradient(
    90deg,
    rgba(233 78 27 / 100%) 0%,
    rgba(191 23 34 / 100%) 100%
  );
  box-shadow: 0 0 12px -4px #000;
  border-radius: 50px;
  width: 100vw;
  height: 100%;
}

#content {
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
}
</style>

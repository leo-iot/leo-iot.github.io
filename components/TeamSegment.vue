<template>
<div v-if="data" id="team-segment" >
  <div id="background"></div>

  <div id="content">
    <TeamGroup v-for="(group, index) in data.groups" :key="index" :data="group"/>
  </div>
</div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import TeamGroup from "~/components/TeamGroupEntry.vue"
import TeamData from "~/src/typings/TeamData";

@Component({
  components: {TeamGroup}
})
export default class TeamSegment extends Vue {

  data: TeamData | null = null

  async created() {
    this.data = await this.$nuxt.context
      .$content('team/team-data').fetch() as any
  }

}

</script>

<style scoped>

#team-segment {
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
  background: linear-gradient(90deg, rgba(233 78 27 / 100%) 0%, rgba(191 23 34 / 100%) 100%);
  box-shadow: 0 0 12px -4px #000;
  border-radius: 50px;
  width: 100vw;
  height: 100%;
}

#content {
  position: relative;
  top: 0;
  width: 100%;
}

</style>

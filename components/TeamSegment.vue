<template>
<div id="team-segment">
  <div id="background"></div>

  <div id="content">
    <TeamGroup/>
  </div>
</div>
</template>

<script>

import {Component, Vue} from "vue-property-decorator";
import TeamGroup from "~/components/TeamGroup.vue"

@Component({
  components: {TeamGroup}
})
export default class TeamSegment extends Vue {

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

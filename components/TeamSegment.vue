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
  display: flex;
  justify-content: center;
  align-items: center;
}

#background {
  position: absolute;
  top: 0;
  background: rgb(233 78 27);
  background: linear-gradient(90deg, rgba(233 78 27 / 100%) 0%, rgba(191 23 34 / 100%) 100%);
  border-radius: 50px 50px 0 0;
  height: 500px;
  width: 100vw;
}

#content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 500px;
}

</style>

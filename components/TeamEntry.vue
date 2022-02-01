<template>
  <div class="team-entry">
    <div class="foto"></div>
    <div class="name">Quirin Ecker</div>
    <div class="role">Backend Developer</div>
  </div>
</template>

<script>

import {Component, Vue} from "vue-property-decorator";

@Component
export default class TeamEntry extends Vue {

}
</script>

<style scoped>
.team-entry {
  width: 20%;
  height: 100%;
}
</style>

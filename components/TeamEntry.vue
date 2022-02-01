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
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.team-entry .foto {
  position: relative;
  width: 80%;
  height: 0;
  border-radius: 80%;
  background-image: url("~/assets/img/img3dModel.png");
  background-size: cover;
  padding-bottom: 80%;
}
</style>

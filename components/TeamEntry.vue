<template>
  <div class="team-entry">
    <div class="foto"></div>
    <div class="name">{{data.name}}</div>
    <div v-for="(role, index) in data.role" :key="index" class="role">{{ role }}</div>
  </div>
</template>

<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";
import TeamMemberData from "~/src/typings/TeamMemberData";

@Component
export default class TeamEntry extends Vue {

  @Prop({required: true})
  data!: TeamMemberData

}
</script>

<style scoped>
.team-entry {
  width: 20%;
  height: 20vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.team-entry .foto {
  position: relative;
  width: 80%;
  height: 0;
  border-radius: 80%;
  box-shadow: 0 0 12px -4px #000;
  background-image: url("~/assets/img/img3dModel.png");
  background-size: cover;
  padding-bottom: 80%;
}

.team-entry .name {
  font-size: 2vw
}

.team-entry .role {
  font-size: 1.5vw;
  line-height: 1.2vw;
  transform: translateY(-0.8vw);
  color: gray;
}
</style>

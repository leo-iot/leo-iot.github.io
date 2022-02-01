<template>
  <div class="team-entry">
    <div class="foto" :style="{backgroundImage: `url('${image}')`}"></div>
    <div class="name">{{ member.name }}</div>
    <div v-for="(role, index) in member.roles" :key="index" class="role">{{ role }}</div>
  </div>
</template>

<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";
import TeamMemberData from "~/src/typings/TeamMemberData";
import TeamData from "~/src/typings/TeamData";

@Component
export default class TeamMemberEntry extends Vue {

  @Prop({required: true})
  member!: TeamMemberData

  @Prop({required: true})
  team?: TeamData | null

  get image() {
    if (this.team) {
      try {
        if (this.member.image) {
          return require(`~/assets/${this.team.imageDirectory}${this.member.image}`)
        } else {
          throw new Error('not found')
        }
      } catch (e) {
        return require(`~/assets/${this.team.imageDirectory}${this.team.defaultImage}`)
      }
    } else {
      return ''
    }
  }
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

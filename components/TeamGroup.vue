<template>
  <div class="team-group">
    <div class="team-group-title">5AHITM</div>
    <div class="team-entries">
      <TeamEntry/>
      <TeamEntry/>
      <TeamEntry/>
    </div>
  </div>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";
import TeamEntry from '~/components/TeamEntry.vue'

@Component({
  components: {TeamEntry}
})
export default class TeamGroup extends Vue {

}
</script>

<style scoped>
.team-group {
  position: relative;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 12px -4px #000;
  border-radius: 20px;
  margin: 100px 0;
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.team-group .team-group-title {
  font-size: 2vw;
  height: 30px;
}

.team-group .team-entries {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}
</style>

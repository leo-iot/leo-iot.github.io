<template>
  <div class="team-group">
    <div class="team-group-title">5AHITM</div>
    <div class="team-entries">
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
  width: 100%;
  background: rgb(233 78 27);
  background: linear-gradient(90deg, rgba(233 78 27 / 80%) 0%, rgba(191 23 34 / 80%) 100%);
  border-radius: 20px;
  margin: 100px 0;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.team-group .team-group-title {
  font-size: 2vw;
  height: 20%;
}

.team-group .team-entries {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}
</style>

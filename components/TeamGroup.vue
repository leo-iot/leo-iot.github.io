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
}
</style>

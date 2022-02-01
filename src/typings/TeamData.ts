import TeamGroup from "~/components/TeamGroupEntry.vue";

export default interface TeamData {
  imageDirectory: string
  defaultImage: string
  groups: TeamGroup[]
}

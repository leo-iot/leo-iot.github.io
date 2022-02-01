import TeamGroupData from "~/src/typings/TeamGroupData";

export default interface TeamData {
  imageDirectory: string
  defaultImage: string
  groups: TeamGroupData[]
}

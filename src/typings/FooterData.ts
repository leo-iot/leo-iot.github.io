import FooterLink from "~/src/typings/FooterLink";
import NavigationDataEntry from "~/src/typings/NavigationDataEntry";
import LanguageEntryData from "~/src/typings/LanguageEntryData";

export default interface FooterData {
  logo: string
  links: FooterLink[]
  navigation: NavigationDataEntry[]
  languages: LanguageEntryData[]
}

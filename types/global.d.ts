import { TComponents } from "models/components";

type TVersion = `${number}.${number}.${number}`;

type ICrazyTeaPartyInfo = {
  version: TVersion;
  components: TComponents;
};

declare global {
  interface Window {
    CrazyTeaParty: ICrazyTeaPartyInfo;
  }
}
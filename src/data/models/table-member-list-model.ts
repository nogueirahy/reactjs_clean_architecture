import { Member } from "./member-model";

export interface tableMembeListModel extends Member {}

export namespace tableMembeListModel {
  export type Response = tableMembeListModel[];
}

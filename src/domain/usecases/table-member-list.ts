import { MemberEntity } from "../entities";

export interface LoadMemberList {
  execute: () => Promise<MemberEntity[]>;
}

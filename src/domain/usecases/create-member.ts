import { MemberEntity } from "../entities";

export interface CreateMember {
  execute: (params: CreateMember.Params) => Promise<MemberEntity>;
}

export namespace CreateMember {
  export type Params = MemberEntity;
}

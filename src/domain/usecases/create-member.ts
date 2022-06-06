import { CreateMemberModel, MemberModel } from "../models";

export interface CreateMember {
  create: (params: CreateMember.Params) => Promise<CreateMember.Model>;
}

export namespace CreateMember {
  export type Params = CreateMemberModel;
  export type Model = MemberModel;
}

import { MemberModel, PaginationMemberModel } from "../models";

export interface LoadMemberList {
  get: () => Promise<LoadTableList.Model>;
}

export namespace LoadTableList {
  export type Model = PaginationMemberModel;
  export type TableModel = Pick<
    MemberModel,
    | "memberId"
    | "firstName"
    | "lastName"
    | "birthDate"
    | "registrationDate"
    | "registrationDueDate"
    | "subscriptionType"
    | "subscriptionPeriod"
    | "paymentStatus"
  >;
}

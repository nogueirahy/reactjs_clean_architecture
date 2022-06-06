import { LoadMemberList } from "../../../domain/usecases";
import { RemoteTableMemberList } from "../../../data/usecases";
import { makeAxiosHttpClient } from "../http";

export const makeRemoteTableMemberList = (): LoadMemberList =>
  new RemoteTableMemberList("/members/", makeAxiosHttpClient());

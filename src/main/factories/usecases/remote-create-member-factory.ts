import { CreateMember } from "../../../domain/usecases";
import { RemoteCreateMember } from "../../../data/usecases";
import { makeAxiosHttpClient } from "../http";

export const makeRemoteCreateMember = (): CreateMember =>
  new RemoteCreateMember("/members/", makeAxiosHttpClient());

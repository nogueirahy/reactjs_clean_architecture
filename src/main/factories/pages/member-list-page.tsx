import { makeRemoteTableMemberList } from "../usecases";
import { MembersPage } from "../../../presentation/ui/pages";

export const MakeMemberList = () => {
  return <MembersPage loadMemberList={makeRemoteTableMemberList()} />
}


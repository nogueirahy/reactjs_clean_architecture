import { makeRemoteCreateMember } from "../usecases";
import { MembersRegisterPage } from "../../../presentation/ui/pages";
import { useControllerMemberRegister } from "../../../presentation/controllers";

export const MakeMemberRegister = () => {
  const createMembmer = makeRemoteCreateMember();

  const controller = useControllerMemberRegister({ createMembmer });

  return <MembersRegisterPage controller={controller} />;
};

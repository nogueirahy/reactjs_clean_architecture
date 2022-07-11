import { useState } from "react";
import { CreateMember } from "../../domain/usecases";
import { createMemberModel } from "../../data/models";
import { mask } from "../utils";

type onChageEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

type Props = {
  createMembmer: CreateMember;
};

type Params = Partial<
  Omit<
    CreateMember.Params,
    "mobileNumber" | "amount" | "birthDate" | "registrationDate"
  >
>;

export type ControllerMemberRegister = {
  submit: () => Promise<void>;
  onChangeParams: (e: onChageEvent) => void;
  onChangeAmount: (e: onChageEvent) => void;
  onChangePhone: (e: onChageEvent) => void;
  setBirthDate: (e: Date) => void;
  setRegistrationDate: (e: Date) => void;
  params: Params & {
    mobileNumber: { value: string; rawValue: string };
    amount: string;
    birthDate: Date;
    registrationDate: Date;
  };
};

export const useControllerMemberRegister = ({
  createMembmer,
}: Props): ControllerMemberRegister => {
  const [params, setParams] = useState<Params>();
  const [birthDate, setBirthDate] = useState<Date>(new Date());
  const [registrationDate, setRegistrationDate] = useState<Date>(new Date());
  const [mobileNumber, setMobileNumber] = useState({ value: "", rawValue: "" });
  const [amount, setAmount] = useState("");

  const onChangePhone = (e: onChageEvent) => {
    const { value, rawValue } = mask.phone(e.target);
    setMobileNumber({ value, rawValue });
  };

  const onChangeAmount = (e: onChageEvent) => {
    const value = mask.amount.masking(e.target.value);
    setAmount(value);
  };

  const onChangeParams = (e: onChageEvent) => {
    const { id: key, value } = e.target;

    const newParams: Record<string, string> = {};
    newParams[key] = value;

    setParams({ ...params, ...newParams });
  };

  const submit = async () => {
    const newParams = {
      ...params,
      mobileNumber: mobileNumber.rawValue,
      birthDate: birthDate,
      registrationDate: registrationDate,
      amount: mask.amount.unmask(amount),
    };

    try {
      //TODO: create translator fromEntity and toEntity
      const payload = newParams as createMemberModel.Response;
      const response = await createMembmer.execute(payload);
      console.log("response", response);
    } catch (err) {
      console.error("ERROR >>>", err);
    }
  };

  return {
    submit,
    onChangeParams,
    onChangeAmount,
    onChangePhone,
    setBirthDate,
    setRegistrationDate,
    params: {
      ...params,
      mobileNumber,
      birthDate,
      registrationDate,
      amount,
    },
  };
};

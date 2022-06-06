import IMask from "imask";
import Currency from "@tadashi/currency";

type Element = IMask.MaskElement | HTMLElement;

type MaskReturnPhone = {
  value: string;
  rawValue: string;
};

const PHONE_MASK = "(00) 00000-0000";

const phone = (el: Element): MaskReturnPhone => {
  const masked = IMask(el, {
    mask: PHONE_MASK,
  });

  return {
    value: masked.value,
    rawValue: masked.unmaskedValue,
  };
};

type Amount = {
  masking: (value: string) => string;
  unmask: (value: string) => number;
};

const amount: Amount = {
  masking: (value: string): string => Currency.masking(value),
  unmask: (value: string): number =>
    parseFloat(value.replace(".", "").replace(",", ".")),
};

export const mask = {
  phone,
  amount,
};

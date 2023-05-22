import { expect, it } from "vitest";

type PropType = number | { amount: number };

const coerceAmount = (prop: PropType): number => {
  if (typeof prop === "object") return prop.amount;
  return prop;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});

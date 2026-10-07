import { classRanges } from "./classRanges.ts";
import type { ClassRange } from "./classRanges.ts";

export type FindClassResult =
  | { status: "found"; range: ClassRange }
  | { status: "error"; message: string };

export const MESSAGES = {
  empty: "Please enter your index number.",
  notNumeric: "Index number must contain numbers only.",
  invalid: "Invalid index number.",
  notFound: "Index number not found. Please check your index number and try again.",
} as const;

/** Validates the raw input and looks up the matching class range. */
export function findClass(
  rawInput: string,
  ranges: ClassRange[] = classRanges,
): FindClassResult {
  const value = rawInput.trim();

  if (value === "") {
    return { status: "error", message: MESSAGES.empty };
  }

  // Digits only: rejects letters, inner spaces, signs, and decimals.
  if (!/^\d+$/.test(value)) {
    return { status: "error", message: MESSAGES.notNumeric };
  }

  let index: bigint;
  try {
    index = BigInt(value);
  } catch {
    return { status: "error", message: MESSAGES.invalid };
  }

  const range = ranges.find((r) => index >= r.start && index <= r.end);
  if (!range) {
    return { status: "error", message: MESSAGES.notFound };
  }

  return { status: "found", range };
}

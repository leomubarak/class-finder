// Run with: npm test  (Node 22.6+)
import { test } from "node:test";
import assert from "node:assert/strict";
import { findClass, MESSAGES } from "./findClass.ts";
import type { ClassRange } from "./classRanges.ts";

const ranges: ClassRange[] = [
  { start: BigInt("5260100000"), end: BigInt("5260109999"), className: "Class A", whatsappLink: "a" },
  { start: BigInt("5260110000"), end: BigInt("5260119999"), className: "Class B", whatsappLink: "b" },
  { start: BigInt("5260170000"), end: BigInt("5260179999"), className: "Class E", whatsappLink: "e" },
];

const cls = (input: string) => {
  const r = findClass(input, ranges);
  return r.status === "found" ? r.range.className : r.message;
};

test("matches ranges, including boundaries", () => {
  assert.equal(cls("5260100000"), "Class A");
  assert.equal(cls("5260100050"), "Class A");
  assert.equal(cls("5260109999"), "Class A");
  assert.equal(cls("5260110000"), "Class B");
  assert.equal(cls("5260110050"), "Class B");
  assert.equal(cls("5260119999"), "Class B");
  assert.equal(cls("5260170000"), "Class E");
});

test("trims surrounding whitespace", () => {
  assert.equal(cls("  5260100050  "), "Class A");
});

test("rejects bad input", () => {
  assert.equal(cls(""), MESSAGES.empty);
  assert.equal(cls("   "), MESSAGES.empty);
  assert.equal(cls("abc"), MESSAGES.notNumeric);
  assert.equal(cls("52601 00050"), MESSAGES.notNumeric);
  assert.equal(cls("-5260100050"), MESSAGES.notNumeric);
  assert.equal(cls("5260100050.5"), MESSAGES.notNumeric);
});

test("numbers outside all ranges", () => {
  assert.equal(cls("5260099999"), MESSAGES.notFound);
  assert.equal(cls("5260120000"), MESSAGES.notFound);
  assert.equal(cls("9999999999999999999999"), MESSAGES.notFound);
});

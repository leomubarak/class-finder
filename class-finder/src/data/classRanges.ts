export interface ClassRange {
  /** First index number in the range (inclusive). */
  start: bigint;
  /** Last index number in the range (inclusive). */
  end: bigint;
  className: string;
  whatsappLink: string;
}

/**
 * ADMINISTRATOR / DEVELOPER: EDIT THIS LIST.
 *
 * The ranges and WhatsApp links below are SAMPLE DATA for testing only.
 * Replace them with the real class allocations and real group invite links.
 *
 * Rules:
 *  - Always write range values as BigInt("...") strings, never plain numbers.
 *  - `start` and `end` are both inclusive.
 *  - Ranges must not overlap. The first matching range wins.
 */
export const classRanges: ClassRange[] = [
  {
    start: BigInt("5260170000"),
    end: BigInt("5260170100"),
    className: "BSc IT 1A Class",
    whatsappLink: "https://chat.whatsapp.com/BBvmDFBGWtaIX09FiFQaeQ",
  },
  {
    start: BigInt("5260170101"),
    end: BigInt("5260170200"),
    className: "BSc IT 1B Class",
    whatsappLink: "https://chat.whatsapp.com/DP5D7SOzoim00VlYhfVBg5",
  },
  {
    start: BigInt("5260170201"),
    end: BigInt("5260170300"),
    className: "BSc IT 1C Class",
    whatsappLink: "https://chat.whatsapp.com/DhDW5nn74Z63zVmM8vVBY7",
  },
  {
    start: BigInt("52601702301"),
    end: BigInt("5260170400"),
    className: "BSc IT 1D Class",
    whatsappLink: "https://chat.whatsapp.com/FgLJtnGepuY9EsDzWeUGiJ",
  },
  {
    start: BigInt("5260170401"),
    end: BigInt("5260170500"),
    className: "BSc IT 1E Class",
    whatsappLink: "https://chat.whatsapp.com/L5MczEFEY0l21OdgtfU6uH",
  },
  {
    start: BigInt("5260160000"),
    end: BigInt("5260160100"),
    className: "BSc Cyber 1A Class",
    whatsappLink: "https://chat.whatsapp.com/JtqCfj2k8pY9GQDRX391TO",
  },
  {
    start: BigInt("5260160101"),
    end: BigInt("5260160200"),
    className: "BSc Cyber 1B Class",
    whatsappLink: "https://chat.whatsapp.com/BETGQNEI9t17VPK9jX8OTy",
  },
  {
    start: BigInt("5260160201"),
    end: BigInt("5260160300"),
    className: "BSc Cyber 1C Class",
    whatsappLink: "https://chat.whatsapp.com/KnJT4I8YnNfKV9lKmhgTuH",
  },
  {
    start: BigInt("5260160301"),
    end: BigInt("5260160400"),
    className: "BSc Cyber 1D Class",
    whatsappLink: "https://chat.whatsapp.com/DiHneSqdhO2Ek23tXOWoxm",
  },
  {
    start: BigInt("5260110000"),
    end: BigInt("5260110100"),
    className: "BEd IT 1A Class",
    whatsappLink: "https://chat.whatsapp.com/IAaep7rgiC6BmoGQZVjvM5",
  },
  {
    start: BigInt("5260110101"),
    end: BigInt("5260110200"),
    className: "BEd IT 1B Class",
    whatsappLink: "https://chat.whatsapp.com/Ggi7w7c18xB6lF5Twva0DS",
  },
  {
    start: BigInt("5260110201"),
    end: BigInt("5260110300"),
    className: "BEd IT 1C Class",
    whatsappLink: "https://chat.whatsapp.com/H8DG9IlT0meHm42BG7nB4v",
  },
  {
    start: BigInt("52601102301"),
    end: BigInt("5260110400"),
    className: "BEd IT 1D Class",
    whatsappLink: "https://chat.whatsapp.com/CFsURyTcj837ELW9MPKtLX",
  },
  {
    start: BigInt("5260110401"),
    end: BigInt("5260110500"),
    className: "BEd IT 1E Class",
    whatsappLink: "https://chat.whatsapp.com/J2utzaXZM2xJ5VzuM6aKeY",
  },
  {
    start: BigInt("3260160000"),
    end: BigInt("3260160100"),
    className: "Diploma Cyber 1A Class",
    whatsappLink: "https://chat.whatsapp.com/CC2JuRvCgZVKp8NebbpeEG",
  },
  {
    start: BigInt("3260160101"),
    end: BigInt("3260160200"),
    className: "Diploma Cyber 1B Class",
    whatsappLink: "https://chat.whatsapp.com/DchI8m9cFtu3UWNUK7dx4Q",
  },
  {
    start: BigInt("3260170000"),
    end: BigInt("3260170100"),
    className: "Diploma IT 1A Class",
    whatsappLink: "https://chat.whatsapp.com/G9aNfoks9C9GrT98V6td1J",
  },
  {
    start: BigInt("3260170101"),
    end: BigInt("3260170200"),
    className: "Diploma IT 1B Class",
    whatsappLink: "https://chat.whatsapp.com/H81e1VBO2rN8IDPIlUbckF",
  },
  {
    start: BigInt("5260120001"),
    end: BigInt("5260120100"),
    className: "BEd Computing With Ai",
    whatsappLink: "https://chat.whatsapp.com/K3z3F8tHBSv7lkI3dsHBcO",
  },
  {
    start: BigInt("5260130001"),
    end: BigInt("5260130100"),
    className: "BSc Computing With Ai",
    whatsappLink: "https://chat.whatsapp.com/I0a3CVAamuS8SmQgLrlaHN",
  },
  {
    start: BigInt("5260250000"),
    end: BigInt("5260250100"),
    className: "BEd IT Weekend 1A Class",
    whatsappLink: "https://chat.whatsapp.com/CtTecRxChwq6gI0Uv6iBrI",
  },
  {
    start: BigInt("5260220000"),
    end: BigInt("5260220100"),
    className: "BSc IT Weekend 1A Class",
    whatsappLink: "https://chat.whatsapp.com/FQw0bmtoksC7qqeN6DXzPk",
  },
];

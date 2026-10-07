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
    start: BigInt("5260100000"),
    end: BigInt("5260109999"),
    className: "Class A",
    whatsappLink: "https://chat.whatsapp.com/CLASS_A_LINK",
  },
  {
    start: BigInt("5260110000"),
    end: BigInt("5260119999"),
    className: "Class B",
    whatsappLink: "https://chat.whatsapp.com/CLASS_B_LINK",
  },
  {
    start: BigInt("5260120000"),
    end: BigInt("5260139999"),
    className: "Class C",
    whatsappLink: "https://chat.whatsapp.com/CLASS_C_LINK",
  },
  {
    start: BigInt("5260140000"),
    end: BigInt("5260169999"),
    className: "Class D",
    whatsappLink: "https://chat.whatsapp.com/CLASS_D_LINK",
  },
  {
    start: BigInt("5260170000"),
    end: BigInt("5260179999"),
    className: "Class E",
    whatsappLink: "https://chat.whatsapp.com/CLASS_E_LINK",
  },
];

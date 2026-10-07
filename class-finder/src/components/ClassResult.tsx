import type { ClassRange } from "../data/classRanges.ts";

interface ClassResultProps {
  range: ClassRange;
  onReset: () => void;
}

export default function ClassResult({ range, onReset }: ClassResultProps) {
  return (
    <section aria-labelledby="result-heading" className="space-y-4">
      <div role="status" className="rounded-md border border-brand/30 bg-brand-light px-4 py-5 text-center">
        <h2 id="result-heading" className="text-sm font-medium uppercase tracking-wide text-slate-600">
          Class Found
        </h2>
        <p className="mt-1 text-3xl font-bold text-brand">{range.className}</p>
        <p className="mt-2 text-sm text-slate-700">Your index number belongs to this class.</p>
      </div>

      <a
        href={range.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-md bg-brand px-4 py-3 text-center text-base font-semibold text-white hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        Join WhatsApp Group
      </a>

      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        Search Another Number
      </button>
    </section>
  );
}

import type { FormEvent } from "react";

interface SearchFormProps {
  value: string;
  error: string | null;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function SearchForm({ value, error, onChange, onSubmit }: SearchFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <p className="text-slate-600">Find your assigned class using your index number.</p>

      <div>
        <label htmlFor="index-number" className="mb-1 block text-sm font-medium text-slate-800">
          Index Number
        </label>
        <input
          id="index-number"
          name="index-number"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="e.g. 5260100000"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "index-error" : undefined}
          className={`w-full rounded-md border bg-white px-3 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1 ${
            error ? "border-red-600" : "border-slate-300"
          }`}
        />
        {error && (
          <p id="index-error" role="alert" className="mt-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
            {error}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-brand px-4 py-3 text-base font-semibold text-white hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        Find My Class
      </button>
    </form>
  );
}

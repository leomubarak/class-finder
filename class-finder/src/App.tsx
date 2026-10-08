import { useState } from "react";
import ClassResult from "./components/ClassResult";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import { findClass } from "./data/findClass.ts";
import type { FindClassResult } from "./data/findClass.ts";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<FindClassResult | null>(null);

  const handleSubmit = () => setResult(findClass(input));

  const handleReset = () => {
    setInput("");
    setResult(null);
  };

  const handleChange = (value: string) => {
    setInput(value);
    if (result?.status === "error") setResult(null);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-md flex-1 px-4 py-6">
        {result?.status === "found" ? (
          <ClassResult range={result.range} onReset={handleReset} />
        ) : (
          <SearchForm
            value={input}
            error={result?.status === "error" ? result.message : null}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
      </main>
      <footer className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        <p>Developed by Mohammed Ali</p>
        <p>Class Finder</p>
        <p>&copy; 2026</p>
      </footer>
    </div>
  );
}

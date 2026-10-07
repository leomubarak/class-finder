# Class Finder

Static React + TypeScript + Vite + Tailwind app. A student enters an index number and is shown their class and a WhatsApp group link. No backend, no database.

## Run
    npm install
    npm run dev       # development
    npm test          # logic tests (Node 22.6+)
    npm run build     # production build in dist/

## Update class allocations
Edit `src/data/classRanges.ts`. The ranges and links shipped there are SAMPLE DATA. Use `BigInt("...")` for every range value; start and end are inclusive.

## Logos
`src/assets/usted-logo.png` and `src/assets/infotess-logo.png` are used in `src/components/Header.tsx`.

import infotessLogo from "../assets/infotess-logo.png";
import ustedLogo from "../assets/usted-logo.png";

export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex w-full max-w-md flex-col items-center gap-4 px-4 py-5 text-center">
        <div className="flex w-full items-center justify-center gap-5">
          <img
            src={ustedLogo}
            alt="University of Skills Training and Entrepreneurial Development"
            className="h-10 w-auto max-w-[65%] object-contain sm:h-12"
          />
          <img
            src={infotessLogo}
            alt="INFOTESS - Information Technology Students' Society"
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-wide text-brand">
            INFOTESS CLASS FINDER
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Find your class using your index number
          </p>
        </div>
      </div>
    </header>
  );
}

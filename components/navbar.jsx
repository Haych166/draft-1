export function Navbar({ currentPage, onNavigate }) {
  const linkClass = (page) =>
    `px-3 py-1 rounded-full text-sm cursor-pointer ${
      currentPage === page
        ? "bg-green-500 text-black"
        : "text-gray-200 hover:bg-gray-800"
    }`;

  return (
    <header className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate("home")}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-sky-400 flex items-center justify-center text-xs font-bold text-slate-950">
            FC
          </div>
          <span className="font-semibold text-white text-sm sm:text-base">
            Fit Community
          </span>
        </div>

        <nav className="hidden sm:flex items-center gap-2 text-xs sm:text-sm">
          <button className={linkClass("home")} onClick={() => onNavigate("home")}>
            Home
          </button>
          <button
            className={linkClass("courses")}
            onClick={() => onNavigate("courses")}
          >
            Courses
          </button>
          <button
            className={linkClass("dashboard")}
            onClick={() => onNavigate("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={linkClass("pricing")}
            onClick={() => onNavigate("pricing")}
          >
            Pricing
          </button>
          <button className={linkClass("blog")} onClick={() => onNavigate("blog")}>
            Blog
          </button>
          <button
            className={linkClass("contact")}
            onClick={() => onNavigate("contact")}
          >
            Contact
          </button>
        </nav>

        <button
          className="sm:hidden text-xs px-3 py-1 rounded-full bg-green-500 text-black"
          onClick={() => onNavigate("pricing")}
        >
          Join Free
        </button>
      </div>
    </header>
  );
}

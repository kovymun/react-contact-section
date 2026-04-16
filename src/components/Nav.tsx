import { navLinks } from "../data/nav-links";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-bold text-blue-900 tracking-tight">
          Riverside Medical Centre
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-500 font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-amber-600 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
        <button className="bg-blue-900 text-white text-sm px-5 py-2 rounded-full font-semibold hover:bg-blue-800 hover:scale-95 transition-all duration-200">
          Book Now
        </button>
      </nav>
    </header>
  );
};

export default Nav;

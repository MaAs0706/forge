export default function Navbar({ onGetStarted }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0B0B0B]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold tracking-wider">
          FORGE
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-zinc-400">
          <a href="#features" className="hover:text-[#F5F5F5] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[#F5F5F5] transition-colors">How It Works</a>
          <a href="#about" className="hover:text-[#F5F5F5] transition-colors">About</a>
        </div>

        <button 
          onClick={(e) => onGetStarted(e)}
          className="rounded-lg bg-[#D97706] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#b46205]">
          Get Started
        </button>
      </div>
    </nav>
  );
}
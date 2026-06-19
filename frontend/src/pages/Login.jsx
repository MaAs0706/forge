import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Controls the clean fade/slide-up entry animation for the card
  const [revealCard, setRevealCard] = useState(false);

  useEffect(() => {
    // Delays the card appearance slightly so it resolves beautifully *after* the orange fills the screen
    const timer = setTimeout(() => {
      setRevealCard(true);
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, email });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#D97706] p-4 font-sans selection:bg-[#0B0B0B] selection:text-[#F5F5F5] overflow-hidden">
      
      {/* Central Login Card with smooth fade-in entry */}
      <div 
        className={`w-full max-w-md bg-[#0B0B0B] border border-[#232323] p-8 rounded-lg shadow-2xl z-10 transform transition-all duration-700 ease-out ${
          revealCard 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-6 scale-[0.98]"
        }`}
      >
        <div className="mb-8">
          <h2 className="text-[#F5F5F5] text-3xl font-bold tracking-tight mb-2">
            Welcome to FORGE
          </h2>
          <p className="text-[#A1A1AA] text-sm">
            Enter your credentials to access your workspace.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold tracking-wider text-[#A1A1AA] uppercase mb-2">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#111111] border border-[#232323] text-[#F5F5F5] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D97706] transition-colors"
              placeholder="name"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider text-[#A1A1AA] uppercase mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#111111] border border-[#232323] text-[#F5F5F5] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D97706] transition-colors"
              placeholder="name@university.edu"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-semibold tracking-wider text-[#A1A1AA] uppercase">
                Password
              </label>
              <a href="#" className="text-xs text-[#D97706] hover:underline">
                Forgot?
              </a>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#111111] border border-[#232323] text-[#F5F5F5] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D97706] transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-[#D97706] text-[#F5F5F5] py-3 rounded hover:bg-[#b46205] transition-colors text-sm font-semibold tracking-wide"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
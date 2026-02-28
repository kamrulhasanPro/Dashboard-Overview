import { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { MdOutlineTaskAlt } from "react-icons/md";
import { BsShieldCheck, BsBarChartLine, BsPeopleFill } from "react-icons/bs";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router";

const features = [
  { icon: <BsShieldCheck size={18} />, label: "Secure & private workspace" },
  { icon: <BsBarChartLine size={18} />, label: "Real-time analytics" },
  { icon: <BsPeopleFill size={18} />, label: "Team collaboration tools" },
];

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fillDemo = () => {
    setEmail("user1@example.com");
    setPassword("password123");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* ── Left Panel ── */}
      <div
        className="hidden lg:flex flex-col justify-between
                       p-12 relative overflow-hidden bg-base-100 border-r border-base-200"
        style={{}}
      >
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(26,122,74,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 right-10 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,179,110,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(26,122,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,122,74,0.06) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 bg-primary rounded-xl
                          flex items-center justify-center text-white"
          >
            <MdOutlineTaskAlt size={22} />
          </div>
          <span className="text-neutral text-xl font-bold">Donezo</span>
        </div>

        {/* hero text */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-neutral leading-tight">
            Organize work.
            <br />
            Ship faster.
          </h1>
          <p className="text-base-content/60 text-lg leading-relaxed">
            Your team's command center for tasks, projects and progress —
            beautifully unified.
          </p>

          {/* features */}
          <div className="space-y-3 pt-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 bg-primary/10 rounded-lg
                                flex items-center justify-center text-base-content/70"
                >
                  {f.icon}
                </div>
                <span className="text-base-content/30 text-sm">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* bottom quote */}
        <p className="text-white/40 text-sm">
          © 2026 Donezo. Built for productive teams.
        </p>
      </div>

      {/* ── Right Panel ── */}
      <div className="flex items-center justify-center p-8 bg-base-100">
        <div className="w-full max-w-md space-y-8">
          {/* mobile logo */}
          <div className="flex lg:hidden items-center gap-2">
            <div
              className="w-8 h-8 bg-primary rounded-lg
                            flex items-center justify-center text-white"
            >
              <MdOutlineTaskAlt size={18} />
            </div>
            <span className="text-lg font-bold">Donezo</span>
          </div>

          {/* heading */}
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">Welcome back 👋</h2>
            <p className="text-base-content/50 text-sm">
              Sign in to your workspace
            </p>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* email */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Email address</label>
              <label className="input input-bordered flex items-center gap-2 w-full outline-none rounded-full">
                <AiOutlineMail className="text-base-content/40" size={16} />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="grow"
                />
              </label>
            </div>

            {/* password */}
            <div className="space-y-1">
              <label className="text-sm font-medium ">Password</label>
              <label className="input input-bordered flex items-center gap-2 w-full outline-none rounded-full ">
                <AiOutlineLock className="text-base-content/40" size={16} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="grow"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-base-content/40 hover:text-base-content"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={16} />
                  ) : (
                    <AiOutlineEye size={16} />
                  )}
                </button>
              </label>
            </div>

            {/* error message */}
            {error && (
              <div className="alert alert-error py-2 text-sm">
                <span>{error}</span>
              </div>
            )}

            {/* submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full font-semibold text-white
                         bg-gradient-to-r from-[#1a7a4a] to-[#2db36e]
                         hover:from-[#155e3a] hover:to-[#259e5e]
                         active:scale-95 transition-all disabled:opacity-60 cursor-pointer"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                "Sign In →"
              )}
            </button>

            {/* demo credentials */}
            <button
              type="button"
              onClick={fillDemo}
              className="w-full py-3 rounded-full text-sm font-medium
                         border border-dashed border-primary/40
                         text-primary/70 hover:border-primary
                         hover:text-primary hover:bg-primary/5
                         transition-all cursor-pointer"
            >
              Use demo credentials
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

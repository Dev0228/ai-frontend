interface LoginProps {
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function Login({
  email,
  password,
  loading,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-black border-gray-700 border-2 w-full max-w-md rounded-lg p-6">
        <h2 className="text-gray-400 text-lg sm:text-xl font-normal mb-6">
          Welcome Back
        </h2>

        {error && (
          <div className="bg-red-900 border border-red-700 text-red-300 px-3 py-2 rounded text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-400 text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 rounded px-3 py-2"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-400 text-sm">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              className="w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 rounded px-3 py-2"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-black font-medium py-2 rounded text-xs sm:text-base transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

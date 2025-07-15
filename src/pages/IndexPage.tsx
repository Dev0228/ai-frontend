import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to AIDONIC
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Your comprehensive dashboard solution
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

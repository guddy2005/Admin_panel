import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-6">
      <div className="bg-white shadow-xl rounded-3xl px-10 py-12 max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Welcome to Admin Panel</h1>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Securely manage users, settings, and analytics. Login or create a new account to continue.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

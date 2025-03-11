import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion";
import AuthContext from "../context/AuthContext";
import Title from "../components/Title";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login(email, password);

    if (!response || response.status !== "success") {
      setStatus("Incorrect email or password. ❌");
      return;
    }

    setStatus("Login successful! ✅");

    setTimeout(() => {
      if (response.isAdmin) {
        navigate("/admin"); // Use navigate instead of window.location.href
      } else {
        navigate("/");
      }
    }, 1000); // Delay redirect to show success message
  };

  return (
    <section className="text-white min-h-screen flex bg-gray-500 flex-col justify-center items-center px-6 pt-[110px] md:pt-[100px] pb-[80px] md:pb-[100px]">
      <motion.h2
        className="text-5xl font-extrabold mb-14 text-center tracking-wider text-gray-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Title text1={"LOGIN"} text2={"NOW"} />
      </motion.h2>

      <motion.form
        onSubmit={handleLogin}
        className="bg-gradient-to-r from-gray-700 to-gray-800 p-8 rounded-2xl shadow-lg max-w-lg w-full mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
            <label className="block text-gray-300 mb-2 text-lg">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
            <label className="block text-gray-300 mb-2 text-lg">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>
        </div>

        <motion.button
          type="submit"
          className="w-full cursor-pointer mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-all p-3 rounded-lg text-white font-bold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>

        {status && (
          <p className={`mt-4 text-center ${status.includes("successful") ? "text-green-400" : "text-red-400"}`}>
            {status}
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default Login;

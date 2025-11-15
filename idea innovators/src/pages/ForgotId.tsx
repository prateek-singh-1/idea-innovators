import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import users from '../backend/users.json';
import quantumLogo from '../assets/quantum_logo.png';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const ForgotId = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { isDark } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const user = users.find((u) => u.name.toLowerCase() === name.trim().toLowerCase());

    if (user) {
      setMessage(`Your QID is: ${user.qid}`);
    } else {
      setError('No record found with the provided information.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-black flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`w-full max-w-md ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-8`}
      >
        <div className="text-center mb-8">
          <img src={quantumLogo} alt="Quantum University" className="h-16 w-auto mx-auto mb-4 object-contain" />
          <h1 className="text-pink-500 drop-shadow-[0_0_8px_#ff4d94] font-extrabold text-3xl mb-2">
            Forgot ID
          </h1>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Retrieve your QID</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
              placeholder="Enter your email"
            />
          </div>

          {message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded-lg text-sm font-semibold"
            >
              {message}
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center justify-center space-x-2"
          >
            <Search size={20} />
            <span>Find My ID</span>
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link to="/login" className="text-pink-500 hover:text-pink-400 font-semibold transition-colors">
            Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotId;

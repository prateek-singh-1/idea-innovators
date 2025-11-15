import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import users from '../backend/users.json';
import quantumLogo from '../assets/quantum_logo.png';
import { motion } from 'framer-motion';
import { UserPlus, RefreshCw } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState('');
  const [qid, setQid] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (captchaInput.toUpperCase() !== captcha) {
      setError('Captcha Incorrect');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const existingUser = users.find((u) => u.qid === qid.trim());
    if (existingUser) {
      setError('QID already registered');
      return;
    }

    setSuccess('Account created successfully! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
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
            CampusConnect
          </h1>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Create your account</p>
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
              QID
            </label>
            <input
              type="text"
              value={qid}
              onChange={(e) => setQid(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
              placeholder="Enter your QID"
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

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
              placeholder="Confirm your password"
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Captcha
            </label>
            <div className="flex items-center space-x-3 mb-2">
              <div className={`px-6 py-3 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-200'} font-bold text-2xl tracking-wider select-none`}>
                {captcha}
              </div>
              <button
                type="button"
                onClick={generateCaptcha}
                className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition-transform"
              >
                <RefreshCw size={20} />
              </button>
            </div>
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
              placeholder="Enter captcha"
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded-lg text-sm"
            >
              {success}
            </motion.div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center justify-center space-x-2"
          >
            <UserPlus size={20} />
            <span>Sign Up</span>
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Already have an account?{' '}
            <Link to="/login" className="text-pink-500 hover:text-pink-400 font-semibold transition-colors">
              Login
            </Link>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;

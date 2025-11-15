import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import users from '../backend/users.json';
import quantumLogo from '../assets/quantum_logo.png';
import { motion } from 'framer-motion';
import { LogIn, RefreshCw } from 'lucide-react';

const Login = () => {
  const [name, setName] = useState('');
  const [qid, setQid] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
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

    if (captchaInput.toUpperCase() !== captcha) {
      setError('Captcha Incorrect');
      return;
    }

    const user = users.find(
      (u) =>
        u.qid === qid.trim() &&
        u.name.toLowerCase() === name.trim().toLowerCase() &&
        u.password === password
    );

    if (user) {
      login({ name: user.name, qid: user.qid });
      navigate('/home');
    } else {
      setError('Invalid Credentials');
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
            CampusConnect
          </h1>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Login to your account</p>
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
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
              placeholder="Enter your password"
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

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center justify-center space-x-2"
          >
            <LogIn size={20} />
            <span>Login</span>
          </button>
        </form>

        <div className="mt-6 space-y-3 text-center text-sm">
          <div className="flex justify-between">
            <Link to="/forgot-password" className="text-pink-500 hover:text-pink-400 transition-colors">
              Forgot Password?
            </Link>
            <Link to="/forgot-id" className="text-pink-500 hover:text-pink-400 transition-colors">
              Forgot ID?
            </Link>
          </div>
          <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Don't have an account?{' '}
            <Link to="/signup" className="text-pink-500 hover:text-pink-400 font-semibold transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

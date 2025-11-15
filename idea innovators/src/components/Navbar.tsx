import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import quantumLogo from '../assets/quantum_logo.png';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setMobileMenuOpen(false);
  };

  const navLinks = isAuthenticated
    ? [
        { to: '/home', label: 'Home' },
        { to: '/notices', label: 'Notices' },
        { to: '/lost-found', label: 'Lost & Found' },
        { to: '/clubs-events', label: 'Clubs & Events' },
        { to: '/internships', label: 'Internships' },
        { to: '/complaints', label: 'Complaints' },
        { to: '/certifications', label: 'Certifications' },
        { to: '/about', label: 'About' },
      ]
    : [];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <img src={quantumLogo} alt="Quantum University" className="h-10 w-auto object-contain" />
            <Link to={isAuthenticated ? '/home' : '/login'} className="text-pink-500 drop-shadow-[0_0_8px_#ff4d94] font-extrabold text-xl sm:text-2xl">
              CampusConnect
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${isDark ? 'text-gray-300 hover:text-pink-500' : 'text-gray-700 hover:text-pink-600'} transition-colors font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:scale-110 transition-transform`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {isAuthenticated && (
              <>
                <button
                  onClick={handleLogout}
                  className="hidden lg:flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:scale-105 transition-transform shadow-lg"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`lg:hidden p-2 rounded-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </>
            )}
          </div>
        </div>

        {mobileMenuOpen && isAuthenticated && (
          <div className={`lg:hidden pb-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'} transition-colors font-medium`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

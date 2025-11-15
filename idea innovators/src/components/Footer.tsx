import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t py-6 mt-auto`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
          © 2025 Team Idea Innovators — Built with ❤️ for Hackathon.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

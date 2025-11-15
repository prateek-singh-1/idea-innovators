import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Send, Bell, Search, Users, Briefcase, FileText, Award, MessageSquare } from 'lucide-react';

const Home = () => {
  const { isDark } = useTheme();
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: 'Hi! I am CampusAI. How can I help you today?', isBot: true },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);

    setTimeout(() => {
      let botResponse = '';
      const lowerInput = userMessage.toLowerCase();

      if (lowerInput.includes('internship')) {
        botResponse = 'Here are some internship opportunities: AI/ML, Web Development, Data Science. Check out the Internships page for more!';
      } else if (lowerInput.includes('event')) {
        botResponse = 'Upcoming events: Tech Fest (Jan 20), Cultural Night (Jan 25), Hackathon (Feb 5). Visit Clubs & Events for details!';
      } else if (lowerInput.includes('lost')) {
        botResponse = 'Recent lost items: Blue Water Bottle, Calculator, Red Backpack. Check Lost & Found for more details!';
      } else if (lowerInput.includes('notice')) {
        botResponse = 'You can view all notices on the Notices page. Latest: Mid-term exam schedule released!';
      } else {
        botResponse = 'I can help you with internships, events, lost items, and notices. Just ask!';
      }

      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
    }, 500);

    setInput('');
  };

  const quickLinks = [
    { to: '/notices', icon: Bell, label: 'Notices', color: 'from-blue-500 to-cyan-600' },
    { to: '/lost-found', icon: Search, label: 'Lost & Found', color: 'from-green-500 to-emerald-600' },
    { to: '/clubs-events', icon: Users, label: 'Clubs & Events', color: 'from-purple-500 to-pink-600' },
    { to: '/internships', icon: Briefcase, label: 'Internships', color: 'from-orange-500 to-red-600' },
    { to: '/complaints', icon: MessageSquare, label: 'Complaints', color: 'from-red-500 to-rose-600' },
    { to: '/certifications', icon: Award, label: 'Certifications', color: 'from-yellow-500 to-amber-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-black pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-pink-500 drop-shadow-[0_0_8px_#ff4d94] font-extrabold text-4xl md:text-5xl mb-4">
            CampusConnect
          </h1>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-200'} text-xl`}>Your Campus, Connected.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-6`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
                <MessageSquare className="text-white" size={24} />
              </div>
              <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>CampusAI</h2>
            </div>

            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-4 h-80 overflow-y-auto mb-4 space-y-3`}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.isBot
                        ? isDark
                          ? 'bg-gray-700 text-white'
                          : 'bg-gray-200 text-gray-900'
                        : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className={`flex-1 px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition-transform"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-6`}
          >
            <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold mb-6`}>Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`p-6 rounded-xl bg-gradient-to-r ${link.color} text-white hover:scale-105 transition-transform shadow-lg flex flex-col items-center justify-center space-y-3 text-center`}
                >
                  <link.icon size={32} />
                  <span className="font-bold">{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-8`}
        >
          <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold mb-6`}>Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`p-4 rounded-lg ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all hover:scale-105 flex flex-col items-center space-y-2 text-center`}
              >
                <link.icon className={`${isDark ? 'text-pink-500' : 'text-pink-600'}`} size={28} />
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium`}>{link.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

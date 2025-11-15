import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Users, Mail, Send, Github, Linkedin } from 'lucide-react';

const About = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const teamMembers = [
    { name: 'Abhinav Parihar', role: 'Full Stack Developer', qid: '25030170' },
    { name: 'Aman Sharma', role: 'Frontend Developer', qid: '25030521' },
    { name: 'Prince Kumar', role: 'Backend Developer', qid: '25030313' },
    { name: 'Prateek Singh', role: 'UI/UX Designer', qid: '25030189' },
    { name: 'Md Kaif Rehman', role: 'Backend Developer', qid: '25030045' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-black pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Users className="text-pink-500" size={36} />
            <h1 className="text-pink-500 drop-shadow-[0_0_8px_#ff4d94] font-extrabold text-4xl">About CampusConnect</h1>
          </div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-200'} text-lg max-w-3xl mx-auto`}>
            A comprehensive platform designed to connect students, faculty, and administration for seamless campus communication and collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-8 mb-12`}
        >
          <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-3xl font-bold mb-6 text-center`}>Team Idea Innovators</h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-center mb-8`}>
            Hackathon Year: 2025
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl p-6 text-center hover:scale-105 transition-transform`}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <Users className="text-white" size={40} />
                </div>
                <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-1`}>{member.name}</h3>
                <p className={`${isDark ? 'text-pink-400' : 'text-pink-600'} text-sm mb-2`}>{member.role}</p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs`}>QID: {member.qid}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-8`}
          >
            <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold mb-6`}>Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500`}
                  placeholder="Your message..."
                />
              </div>

              {successMessage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded-lg text-sm"
                >
                  {successMessage}
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:scale-105 transition-transform shadow-lg flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-8`}
          >
            <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold mb-6`}>Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-1`}>Email</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                    team@campusconnect.edu
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-1`}>GitHub</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                    github.com/ideainnovators
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-1`}>LinkedIn</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                    linkedin.com/company/ideainnovators
                  </p>
                </div>
              </div>
            </div>

            <div className={`mt-8 p-6 rounded-lg ${isDark ? 'bg-pink-500/20' : 'bg-pink-100'} border ${isDark ? 'border-pink-500' : 'border-pink-300'}`}>
              <h3 className={`${isDark ? 'text-pink-400' : 'text-pink-700'} font-bold mb-2`}>About This Project</h3>
              <p className={`${isDark ? 'text-pink-300' : 'text-pink-600'} text-sm leading-relaxed`}>
                CampusConnect was built as part of Hackathon 2025 by Team Idea Innovators. Our mission is to create a unified platform that enhances campus life and fosters better communication among all stakeholders.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

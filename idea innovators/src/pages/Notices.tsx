import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Bell, Calendar } from 'lucide-react';

const Notices = () => {
  const { isDark } = useTheme();

  const notices = [
    {
      id: 1,
      title: 'Mid-Term Exam Schedule Released',
      date: '2025-01-15',
      content: 'The mid-term examination schedule for all programs has been released. Please check the academic portal for detailed timings and venues.',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Winter Break Holiday Notice',
      date: '2025-01-10',
      content: 'The university will remain closed from January 18-25 for winter break. Regular classes will resume on January 26.',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Library Hours Extended',
      date: '2025-01-08',
      content: 'Due to upcoming exams, the library will remain open until 11 PM on weekdays and 9 PM on weekends starting from January 12.',
      priority: 'low',
    },
    {
      id: 4,
      title: 'Guest Lecture on AI & Machine Learning',
      date: '2025-01-05',
      content: 'A special guest lecture by industry expert Dr. Rajesh Kumar on AI & Machine Learning will be conducted on January 20 at 3 PM in the auditorium.',
      priority: 'medium',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'from-red-500 to-orange-600';
      case 'medium':
        return 'from-yellow-500 to-amber-600';
      case 'low':
        return 'from-blue-500 to-cyan-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-black pt-20 pb-8 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Bell className="text-pink-500" size={36} />
            <h1 className="text-pink-500 drop-shadow-[0_0_8px_#ff4d94] font-extrabold text-4xl">Notices</h1>
          </div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-200'} text-lg`}>Stay updated with campus announcements</p>
        </motion.div>

        <div className="space-y-6">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform`}
            >
              <div className={`h-2 bg-gradient-to-r ${getPriorityColor(notice.priority)}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>{notice.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${notice.priority === 'high' ? 'bg-red-500/20 text-red-500' : notice.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-blue-500/20 text-blue-500'}`}>
                    {notice.priority}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`} size={16} />
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{notice.date}</span>
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{notice.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;

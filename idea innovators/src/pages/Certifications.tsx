import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Award, Clock, BookOpen } from 'lucide-react';

const Certifications = () => {
  const { isDark } = useTheme();

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      provider: 'Coursera',
      duration: '6 months',
      level: 'Intermediate',
      description: 'Master front-end and back-end development with React, Node.js, and databases.',
      topics: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      id: 2,
      title: 'Machine Learning Specialization',
      provider: 'Stanford Online',
      duration: '4 months',
      level: 'Advanced',
      description: 'Learn ML algorithms, neural networks, and deep learning from industry experts.',
      topics: ['Python', 'TensorFlow', 'Neural Networks', 'Deep Learning'],
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      provider: 'Amazon Web Services',
      duration: '3 months',
      level: 'Beginner',
      description: 'Get certified in AWS fundamentals and cloud computing essentials.',
      topics: ['AWS', 'Cloud Computing', 'EC2', 'S3'],
    },
    {
      id: 4,
      title: 'Data Science Professional',
      provider: 'IBM',
      duration: '5 months',
      level: 'Intermediate',
      description: 'Comprehensive data science training covering analytics, ML, and visualization.',
      topics: ['Python', 'Pandas', 'Machine Learning', 'Data Visualization'],
    },
    {
      id: 5,
      title: 'Cybersecurity Fundamentals',
      provider: 'Cisco',
      duration: '3 months',
      level: 'Beginner',
      description: 'Learn security principles, threat detection, and network protection.',
      topics: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Risk Management'],
    },
    {
      id: 6,
      title: 'Digital Marketing Professional',
      provider: 'Google',
      duration: '4 months',
      level: 'Intermediate',
      description: 'Master SEO, content marketing, social media, and analytics.',
      topics: ['SEO', 'Social Media', 'Google Analytics', 'Content Strategy'],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'from-green-500 to-emerald-600';
      case 'Intermediate':
        return 'from-yellow-500 to-amber-600';
      case 'Advanced':
        return 'from-red-500 to-orange-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-black pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Award className="text-pink-500" size={36} />
            <h1 className="text-pink-500 drop-shadow-[0_0_8px_#ff4d94] font-extrabold text-4xl">Certifications</h1>
          </div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-200'} text-lg`}>Recommended courses to boost your career</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer`}
            >
              <div className={`h-2 bg-gradient-to-r ${getLevelColor(course.level)}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-xl font-bold flex-1`}>{course.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ml-2 bg-gradient-to-r ${getLevelColor(course.level)} text-white`}>
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <BookOpen className={`${isDark ? 'text-pink-500' : 'text-pink-600'}`} size={18} />
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm font-semibold`}>{course.provider}</span>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <Clock className={`${isDark ? 'text-pink-500' : 'text-pink-600'}`} size={18} />
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{course.duration}</span>
                </div>

                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm mb-4 leading-relaxed`}>
                  {course.description}
                </p>

                <div className="mb-4">
                  <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} text-sm font-semibold mb-2`}>Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:scale-105 transition-transform">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-8 mt-12`}
        >
          <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold mb-4`}>Why Get Certified?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
              <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-2`}>Career Growth</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                Boost your resume and stand out to employers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-2`}>Skill Development</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                Learn industry-relevant skills from experts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-2`}>Flexible Learning</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                Study at your own pace, anytime, anywhere
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;

import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Sparkles } from 'lucide-react';

const Internships = () => {
  const { isDark } = useTheme();
  const [showRecommender, setShowRecommender] = useState(false);
  const [skills, setSkills] = useState('');
  const [year, setYear] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const internships = [
    {
      type: 'Internship',
      field: 'AI/ML',
      year: '3rd & 4th Year',
      criteria: 'Python, Machine Learning basics',
      role: 'ML Engineer Intern',
      stipend: '₹15,000 - ₹25,000/month',
      link: 'https://in.indeed.com/q-ai-ml-internship-jobs.html?vjk=349c1615f1be28db&advn=7326412386046683',
    },
    {
      type: 'Internship',
      field: 'Web Development',
      year: '2nd, 3rd & 4th Year',
      criteria: 'HTML, CSS, JavaScript, React',
      role: 'Full Stack Developer Intern',
      stipend: '₹12,000 - ₹20,000/month',
      link: 'https://in.indeed.com/q-web-development-internship-jobs.html?vjk=821a0e87c6e588f7',
    },
    {
      type: 'Internship',
      field: 'Data Science',
      year: '3rd & 4th Year',
      criteria: 'Python, SQL, Data Analysis',
      role: 'Data Analyst Intern',
      stipend: '₹18,000 - ₹30,000/month',
      link: 'https://in.indeed.com/q-data-science-internship-jobs.html?vjk=44b7b202a0d3398e',
    },
    {
      type: 'Internship',
      field: 'Cybersecurity',
      year: '3rd & 4th Year',
      criteria: 'Network Security, Ethical Hacking',
      role: 'Security Analyst Intern',
      stipend: '₹20,000 - ₹35,000/month',
      link: 'https://in.indeed.com/q-cyber-security-internship-jobs.html?vjk=75a4be32a5af7157',
    },
    {
      type: 'Internship',
      field: 'Cloud Computing',
      year: '3rd & 4th Year',
      criteria: 'AWS/Azure basics, Linux',
      role: 'Cloud Engineer Intern',
      stipend: '₹15,000 - ₹28,000/month',
      link: 'https://in.indeed.com/q-internship-cloud-computing-jobs.html',
    },
  ];

  const handleRecommend = (e: React.FormEvent) => {
    e.preventDefault();
    const lowerSkills = skills.toLowerCase();
    const recs: string[] = [];

    if (lowerSkills.includes('python') || lowerSkills.includes('machine learning') || lowerSkills.includes('ai')) {
      recs.push('AI/ML Internships');
    }
    if (lowerSkills.includes('react') || lowerSkills.includes('javascript') || lowerSkills.includes('web')) {
      recs.push('Web Development Internships');
    }
    if (lowerSkills.includes('data') || lowerSkills.includes('sql') || lowerSkills.includes('analysis')) {
      recs.push('Data Science Internships');
    }
    if (lowerSkills.includes('security') || lowerSkills.includes('network') || lowerSkills.includes('cyber')) {
      recs.push('Cybersecurity Internships');
    }
    if (lowerSkills.includes('cloud') || lowerSkills.includes('aws') || lowerSkills.includes('azure')) {
      recs.push('Cloud Computing Internships');
    }

    if (recs.length === 0) {
      recs.push('Web Development (Great for beginners!)', 'Data Science (High demand!)');
    }

    setRecommendations(recs);
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
            <Briefcase className="text-pink-500" size={36} />
            <h1 className="text-pink-500 drop-shadow-[0_0_8px_#ff4d94] font-extrabold text-4xl">Internships & Courses</h1>
          </div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-200'} text-lg mb-6`}>Explore opportunities and advance your career</p>
          <button
            onClick={() => setShowRecommender(!showRecommender)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:scale-105 transition-transform shadow-lg flex items-center space-x-2 mx-auto"
          >
            <Sparkles size={20} />
            <span>AI Internship Recommender</span>
          </button>
        </motion.div>

        {showRecommender && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-8 mb-12`}
          >
            <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold mb-6`}>Get Personalized Recommendations</h2>
            <form onSubmit={handleRecommend} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Skills
                </label>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="e.g., Python, React, Data Analysis"
                  required
                  className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Current Year
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500`}
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:scale-105 transition-transform"
              >
                Get Recommendations
              </button>
            </form>

            {recommendations.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 space-y-3"
              >
                <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-xl font-bold`}>Recommended for you:</h3>
                {recommendations.map((rec, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg ${isDark ? 'bg-green-500/20 border-green-500' : 'bg-green-100 border-green-300'} border`}
                  >
                    <p className={`${isDark ? 'text-green-400' : 'text-green-700'} font-semibold`}>{rec}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-6 hover:scale-105 transition-transform`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>{internship.field}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                  {internship.type}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Role: </span>
                  <span className={`${isDark ? 'text-gray-200' : 'text-gray-800'} font-semibold`}>{internship.role}</span>
                </div>
                <div>
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Year: </span>
                  <span className={`${isDark ? 'text-gray-200' : 'text-gray-800'} font-semibold`}>{internship.year}</span>
                </div>
                <div>
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Criteria: </span>
                  <span className={`${isDark ? 'text-gray-200' : 'text-gray-800'} font-semibold`}>{internship.criteria}</span>
                </div>
                <div>
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Stipend: </span>
                  <span className={`${isDark ? 'text-pink-400' : 'text-pink-600'} font-bold`}>{internship.stipend}</span>
                </div>
              </div>

              <a
                href={internship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:scale-105 transition-transform"
              >
                <span>View Opportunities</span>
                <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;

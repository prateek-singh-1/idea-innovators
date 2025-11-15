import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Brain } from 'lucide-react';

interface Complaint {
  id: number;
  name: string;
  qid: string;
  category: string;
  description: string;
  suggestions: string;
  date: string;
}

const Complaints = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    qid: '',
    category: '',
    description: '',
    suggestions: '',
  });
  const [predictedCategory, setPredictedCategory] = useState('');
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [successMessage, setSuccessMessage] = useState('');

  const classifyComplaint = (text: string) => {
    const lowerText = text.toLowerCase();

    if (
      lowerText.includes('washroom') ||
      lowerText.includes('leakage') ||
      lowerText.includes('fan') ||
      lowerText.includes('electricity') ||
      lowerText.includes('plumbing')
    ) {
      return 'Infrastructure';
    }

    if (
      lowerText.includes('exam') ||
      lowerText.includes('teacher') ||
      lowerText.includes('marks') ||
      lowerText.includes('syllabus') ||
      lowerText.includes('subject')
    ) {
      return 'Academic';
    }

    if (
      lowerText.includes('hostel') ||
      lowerText.includes('mess') ||
      lowerText.includes('room') ||
      lowerText.includes('warden')
    ) {
      return 'Hostel';
    }

    return 'Other';
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, description: value });

    if (value.trim()) {
      const predicted = classifyComplaint(value);
      setPredictedCategory(predicted);
    } else {
      setPredictedCategory('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newComplaint: Complaint = {
      id: complaints.length + 1,
      name: formData.name,
      qid: formData.qid,
      category: formData.category || predictedCategory,
      description: formData.description,
      suggestions: formData.suggestions,
      date: new Date().toISOString().split('T')[0],
    };

    setComplaints([newComplaint, ...complaints]);
    setSuccessMessage('Complaint submitted successfully!');
    setFormData({
      name: '',
      qid: '',
      category: '',
      description: '',
      suggestions: '',
    });
    setPredictedCategory('');

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
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
            <MessageSquare className="text-pink-500" size={36} />
            <h1 className="text-pink-500 drop-shadow-[0_0_8px_#ff4d94] font-extrabold text-4xl">Complaints</h1>
          </div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-200'} text-lg`}>Voice your concerns and help us improve</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-8 mb-12`}
        >
          <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold mb-6`}>Submit a Complaint</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
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
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  QID
                </label>
                <input
                  type="text"
                  value={formData.qid}
                  onChange={(e) => setFormData({ ...formData, qid: e.target.value })}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500`}
                  placeholder="Your QID"
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500`}
              >
                <option value="">Select Category</option>
                <option value="Academic">Academic</option>
                <option value="Hostel">Hostel</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Complaint Description
              </label>
              <textarea
                value={formData.description}
                onChange={handleDescriptionChange}
                required
                rows={4}
                className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500`}
                placeholder="Describe your complaint in detail..."
              />
            </div>

            {predictedCategory && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-4 rounded-lg ${isDark ? 'bg-blue-500/20 border-blue-500' : 'bg-blue-100 border-blue-300'} border flex items-center space-x-3`}
              >
                <Brain className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
                <div>
                  <p className={`${isDark ? 'text-blue-400' : 'text-blue-700'} font-semibold`}>
                    AI Predicted Category: {predictedCategory}
                  </p>
                  <p className={`${isDark ? 'text-blue-300' : 'text-blue-600'} text-sm`}>
                    Our AI suggests this category based on your description
                  </p>
                </div>
              </motion.div>
            )}

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Suggestions
              </label>
              <textarea
                value={formData.suggestions}
                onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
                required
                rows={3}
                className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-pink-500`}
                placeholder="Your suggestions for improvement..."
              />
            </div>

            {successMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded-lg"
              >
                {successMessage}
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Submit Complaint</span>
            </button>
          </form>
        </motion.div>

        {complaints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-8`}
          >
            <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold mb-6`}>Recent Complaints</h2>
            <div className="space-y-4">
              {complaints.slice(0, 3).map((complaint) => (
                <div
                  key={complaint.id}
                  className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold`}>{complaint.name}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                      {complaint.category}
                    </span>
                  </div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{complaint.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Complaints;

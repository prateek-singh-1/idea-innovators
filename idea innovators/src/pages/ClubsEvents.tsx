import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Shirt } from 'lucide-react';

const ClubsEvents = () => {
  const { isDark } = useTheme();

  const clubs = [
    { name: 'Tech Club', members: 150, focus: 'Technology & Innovation' },
    { name: 'Cultural Society', members: 200, focus: 'Arts & Culture' },
    { name: 'Sports Club', members: 180, focus: 'Sports & Fitness' },
    { name: 'Debate Society', members: 90, focus: 'Public Speaking' },
    { name: 'Music Club', members: 120, focus: 'Musical Arts' },
    { name: 'Photography Club', members: 100, focus: 'Visual Arts' },
  ];

  const events = [
    {
      id: 1,
      name: 'Tech Fest 2025',
      date: '2025-01-20',
      time: '10:00 AM',
      venue: 'Main Auditorium',
      description: 'Annual technology festival featuring hackathons, workshops, and tech talks.',
    },
    {
      id: 2,
      name: 'Cultural Night',
      date: '2025-01-25',
      time: '6:00 PM',
      venue: 'Open Air Theatre',
      description: 'Celebration of diverse cultures with performances, food, and exhibitions.',
    },
    {
      id: 3,
      name: 'Sports Meet',
      date: '2025-02-01',
      time: '8:00 AM',
      venue: 'Sports Complex',
      description: 'Inter-departmental sports competition across multiple categories.',
    },
    {
      id: 4,
      name: 'Hackathon 2025',
      date: '2025-02-05',
      time: '9:00 AM',
      venue: 'Computer Lab',
      description: '24-hour coding marathon with exciting prizes and mentorship.',
    },
  ];

  const merchandise = [
    { item: 'CampusConnect T-Shirt', sizes: 'S, M, L, XL', price: '₹499' },
    { item: 'CampusConnect Sweatshirt', sizes: 'S, M, L, XL', price: '₹999' },
    { item: 'Club T-Shirts', sizes: 'S, M, L, XL', price: '₹399' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-black pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Users className="text-pink-500" size={36} />
            <h1 className="text-pink-500 drop-shadow-[0_0_8px_#ff4d94] font-extrabold text-4xl">Clubs & Events</h1>
          </div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-200'} text-lg`}>Join clubs and participate in campus events</p>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className={`${isDark ? 'text-white' : 'text-gray-200'} text-3xl font-bold mb-6`}>Campus Clubs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-6 hover:scale-105 transition-transform`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
                      <Users className="text-white" size={24} />
                    </div>
                    <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-xl font-bold`}>{club.name}</h3>
                  </div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-3`}>{club.focus}</p>
                  <div className={`${isDark ? 'text-pink-500' : 'text-pink-600'} font-semibold`}>
                    {club.members} Members
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className={`${isDark ? 'text-white' : 'text-gray-200'} text-3xl font-bold mb-6`}>Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-6 hover:scale-[1.02] transition-transform`}
                >
                  <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold mb-4`}>{event.name}</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className={`${isDark ? 'text-pink-500' : 'text-pink-600'}`} size={20} />
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className={`${isDark ? 'text-pink-500' : 'text-pink-600'}`} size={20} />
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className={`${isDark ? 'text-pink-500' : 'text-pink-600'}`} size={20} />
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{event.venue}</span>
                    </div>
                  </div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className={`${isDark ? 'text-white' : 'text-gray-200'} text-3xl font-bold mb-6`}>Campus Merchandise</h2>
            <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl p-8`}>
              <div className="flex items-center space-x-3 mb-6">
                <Shirt className="text-pink-500" size={32} />
                <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>Available Items</h3>
              </div>
              <div className="space-y-4">
                {merchandise.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}
                  >
                    <div>
                      <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold text-lg`}>{item.item}</h4>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Sizes: {item.sizes}</p>
                    </div>
                    <div className={`${isDark ? 'text-pink-500' : 'text-pink-600'} font-bold text-xl mt-2 md:mt-0`}>
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
              <div className={`mt-6 p-4 rounded-lg ${isDark ? 'bg-pink-500/20' : 'bg-pink-100'} border ${isDark ? 'border-pink-500' : 'border-pink-300'}`}>
                <p className={`${isDark ? 'text-pink-400' : 'text-pink-700'} text-sm`}>
                  To order merchandise, visit the Student Union office or email merchandise@campusconnect.edu
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClubsEvents;

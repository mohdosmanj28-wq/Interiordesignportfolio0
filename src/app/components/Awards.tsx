import { motion } from 'motion/react';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const awards = [
  {
    icon: Trophy,
    title: 'Best Interior Design Firm 2024',
    organization: 'Hyderabad Design Awards',
    year: '2024',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Award,
    title: 'Excellence in Residential Design',
    organization: 'National Interior Design Association',
    year: '2023',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Medal,
    title: 'Innovation in Commercial Spaces',
    organization: 'Indian Design Council',
    year: '2023',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Star,
    title: 'Customer Choice Award',
    organization: 'Telangana Business Excellence',
    year: '2024',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Trophy,
    title: 'Best Luxury Interior Project',
    organization: 'Luxury Lifestyle Awards',
    year: '2022',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Award,
    title: 'Sustainable Design Recognition',
    organization: 'Green Building Council',
    year: '2023',
    gradient: 'from-teal-500 to-green-600',
  },
];

export function Awards() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafafa"/>
        </svg>
      </div>

      {/* Animated background decoration */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl">
                <Trophy size={48} className="text-white" />
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl mb-6">Awards & Recognition</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our dedication to excellence has been recognized by leading industry organizations
              and our valued clients.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                {/* Glass card */}
                <div className="relative h-full bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 group-hover:opacity-10`}
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 2, rotate: 90 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Year badge */}
                  <motion.div
                    className="absolute top-6 right-6"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                  >
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${award.gradient} text-white text-sm shadow-lg`}>
                      {award.year}
                    </div>
                  </motion.div>

                  {/* Icon with animation */}
                  <motion.div
                    className="mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.2 + index * 0.1,
                      type: 'spring'
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${award.gradient} shadow-xl`}>
                      <Icon className="text-white" size={40} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="text-xl mb-3 relative z-10 min-h-[3.5rem]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {award.title}
                  </motion.h3>
                  
                  <motion.p 
                    className={`text-transparent bg-gradient-to-r ${award.gradient} bg-clip-text relative z-10`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {award.organization}
                  </motion.p>

                  {/* Bottom accent */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${award.gradient} rounded-b-3xl`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Decorative sparkles */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${award.gradient} rounded-full`}
                        style={{
                          top: `${20 + i * 30}%`,
                          left: `${10 + i * 40}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

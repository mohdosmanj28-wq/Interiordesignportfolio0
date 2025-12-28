import { motion } from 'motion/react';

export function About() {
  const stats = [
    { number: '200+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
    { number: '150+', label: 'Happy Clients', color: 'from-purple-500 to-pink-500' },
    { number: '8+', label: 'Years Experience', color: 'from-orange-500 to-red-500' },
    { number: '25+', label: 'Awards Won', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" fill="#fafafa"/>
        </svg>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                About Us
              </motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-neutral-400 via-neutral-900 to-neutral-400 mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.h3 
                className="text-3xl mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Creating Beautiful Spaces Since 2015
              </motion.h3>
              
              {[
                'At SK Interior & Affairs, we believe that every space has a story to tell. Our passion lies in creating interiors that not only look stunning but also enhance the way you live and work.',
                'With over 8 years of experience in residential and commercial design, our team brings together creativity, functionality, and attention to detail to deliver spaces that exceed expectations.',
                'From concept to completion, we work closely with our clients to understand their vision and bring it to life with sophistication and style.',
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-neutral-600 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 * index,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  {/* Glass card with gradient border */}
                  <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Animated gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      initial={{ scale: 0, rotate: 45 }}
                      whileHover={{ scale: 1.5, rotate: 90 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <motion.div 
                      className={`text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.2 + index * 0.1,
                        type: 'spring'
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-neutral-600 text-sm relative z-10">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
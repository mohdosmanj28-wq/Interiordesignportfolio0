import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Hyderabad',
    text: 'SK Interior & Affairs transformed our home into a dream space! Their attention to detail and understanding of our needs was exceptional. The team is professional, creative, and delivers on time.',
    rating: 5,
    project: 'Residential Villa',
    avatar: 'PS',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Banjara Hills',
    text: 'Working with SK Interior was a wonderful experience. They brought our vision to life with their innovative designs and quality execution. Highly recommend them for any interior project!',
    rating: 5,
    project: 'Modern Apartment',
    avatar: 'RK',
  },
  {
    name: 'Anitha Reddy',
    location: 'Jubilee Hills',
    text: 'Absolutely thrilled with the outcome! The team understood our style perfectly and created a space that feels both luxurious and homely. Their professionalism and creativity are unmatched.',
    rating: 5,
    project: 'Luxury Penthouse',
    avatar: 'AR',
  },
  {
    name: 'Vikram Patel',
    location: 'Gachibowli',
    text: 'From concept to completion, SK Interior & Affairs exceeded our expectations. Their design solutions were both practical and beautiful. Our office space now reflects our brand perfectly!',
    rating: 5,
    project: 'Corporate Office',
    avatar: 'VP',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, rgba(0,0,0,0) 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">What Our Clients Say</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-neutral-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Hear from our satisfied clients about their experience working with us.
            </motion.p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Glass testimonial card */}
          <motion.div
            className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl min-h-[450px] md:min-h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-full">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) =>
                  activeIndex === index ? (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 100, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -100, scale: 0.9 }}
                      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                      className="flex flex-col items-center justify-center text-center h-full"
                    >
                      {/* Avatar with gradient */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className="mb-6"
                      >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-2xl shadow-xl">
                          {testimonial.avatar}
                        </div>
                      </motion.div>

                      {/* Stars with staggered animation */}
                      <motion.div 
                        className="flex gap-1 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                          >
                            <Star size={20} fill="currentColor" className="text-yellow-400" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Quote mark */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.2, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-8xl mb-4 text-white/20"
                      >
                        "
                      </motion.div>

                      {/* Testimonial text */}
                      <motion.p
                        className="text-lg md:text-xl mb-8 max-w-3xl leading-relaxed text-neutral-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {testimonial.text}
                      </motion.p>

                      {/* Client info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="text-xl mb-1">{testimonial.name}</div>
                        <div className="text-neutral-400">{testimonial.location}</div>
                        <motion.div 
                          className="text-sm text-cyan-400 mt-2 px-4 py-1 rounded-full bg-cyan-400/10 inline-block"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.7, type: 'spring' }}
                        >
                          {testimonial.project}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                    activeIndex === index ? 'bg-white' : 'bg-white/30'
                  }`}
                >
                  {activeIndex === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white"
                      layoutId="activeDot"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/30 blur-md"
                    initial={{ scale: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
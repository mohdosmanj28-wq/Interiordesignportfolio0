import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const designStyles = [
  {
    name: 'Minimalist',
    description: 'Clean lines, neutral colors, and functional spaces that embrace simplicity.',
    image: 'https://images.unsplash.com/photo-1609310638939-67860ab54244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NzM4NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-gray-400 to-gray-600',
  },
  {
    name: 'Scandinavian',
    description: 'Light, airy spaces with natural materials and cozy, functional design.',
    image: 'https://images.unsplash.com/photo-1724582586413-6b69e1c94a17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjY2MTU4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-blue-400 to-cyan-600',
  },
  {
    name: 'Industrial',
    description: 'Raw materials, exposed structures, and urban-inspired aesthetics.',
    image: 'https://images.unsplash.com/photo-1652716279221-439c33c3b835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbG9mdCUyMGRlc2lnbnxlbnwxfHx8fDE3NjY3Mzg2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-orange-400 to-red-600',
  },
  {
    name: 'Bohemian',
    description: 'Eclectic mix of colors, patterns, and textures for a free-spirited vibe.',
    image: 'https://images.unsplash.com/photo-1608755035200-14b0832dff20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hlbWlhbiUyMGludGVyaW9yJTIwc3R5bGV8ZW58MXx8fHwxNzY2NzM4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-purple-400 to-pink-600',
  },
];

export function DesignStyles() {
  return (
    <section id="design-styles" className="relative py-24 bg-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(120,119,198,0.1) 0%, rgba(0,0,0,0) 50%)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Design Styles We Offer</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-neutral-400 via-neutral-900 to-neutral-400 mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover the diverse range of design aesthetics we specialize in, each tailored to
              bring your unique vision to life.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designStyles.map((style, index) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="group"
            >
              {/* Glass card with gradient overlay */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t ${style.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                  />
                  
                  {/* Title overlay with glass effect */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <motion.div
                      className="backdrop-blur-md bg-white/20 p-6 border-t border-white/30"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <h3 className="text-2xl text-white drop-shadow-lg">{style.name}</h3>
                    </motion.div>
                  </div>
                </div>

                {/* Description with glass effect */}
                <motion.div 
                  className="p-6 backdrop-blur-sm bg-gradient-to-b from-white/80 to-white/60"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <p className="text-neutral-700 text-sm leading-relaxed">{style.description}</p>
                </motion.div>

                {/* Hover accent line */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${style.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
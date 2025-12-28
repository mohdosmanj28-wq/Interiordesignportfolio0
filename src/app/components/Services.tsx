import { motion } from 'motion/react';
import { Palette, Building2, Lightbulb, Headphones } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Residential Design',
    description:
      'Transform your home into a personalized sanctuary with our comprehensive residential design services.',
    features: ['Space Planning', 'Custom Furniture', 'Color Consultation', 'Lighting Design'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Building2,
    title: 'Commercial Design',
    description:
      'Create inspiring work environments that boost productivity and reflect your brand identity.',
    features: ['Office Design', 'Retail Spaces', 'Hospitality Design', 'Brand Integration'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Renovation & Remodeling',
    description:
      'Breathe new life into existing spaces with our expert renovation and remodeling solutions.',
    features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Full Home Makeover', 'Property Staging'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Headphones,
    title: 'Consultation Services',
    description:
      'Get expert advice and guidance for your interior design projects, big or small.',
    features: ['Design Consultation', 'Material Selection', 'Budget Planning', 'Project Management'],
    gradient: 'from-green-500 to-emerald-500',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      {/* Animated background decoration */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-neutral-100 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-neutral-100 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
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
            <h2 className="text-4xl md:text-5xl mb-6">Our Services</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-neutral-400 via-neutral-900 to-neutral-400 mx-auto mb-8"
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
              From concept to completion, we offer a full range of interior design services tailored to
              your unique needs and vision.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glass card with gradient */}
                <div className="relative h-full bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden">
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10`}
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 2, rotate: 90 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Icon with gradient and glass effect */}
                  <motion.div
                    className="relative mb-6"
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
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm shadow-lg`}>
                      <Icon className="text-white" size={32} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="text-xl mb-4 relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-neutral-600 mb-6 text-sm leading-relaxed relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Features list */}
                  <ul className="space-y-2 relative z-10">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="text-sm text-neutral-600 flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
                      >
                        <motion.span 
                          className={`text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text mt-1`}
                          whileHover={{ scale: 1.3 }}
                        >
                          •
                        </motion.span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover border effect */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

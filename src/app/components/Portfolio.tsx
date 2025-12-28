import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY2Njg3MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Contemporary Bedroom',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NjU5MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Elegant Kitchen',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1758565811145-619f5e20f196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwa2l0Y2hlbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjY3MzgwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: 'Luxury Dining Space',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1685644201646-9e836c398c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2NjY3MzYwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    title: 'Minimalist Bathroom',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1704428381342-ea9df943619e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmF0aHJvb218ZW58MXx8fHwxNzY2NjQ5NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    title: 'Home Office Design',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwaG9tZSUyMG9mZmljZXxlbnwxfHx8fDE3NjY3MzgwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 7,
    title: 'Modern Hallway',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1739172586862-80edb0432fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGhhbGx3YXl8ZW58MXx8fHwxNzY2NzM4NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 8,
    title: 'Luxury Hotel Lobby',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NjczODMyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 9,
    title: 'Elegant Living Space',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1707299231603-6c0a93e0f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjY3Mzg2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 10,
    title: 'Contemporary Workspace',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1703355685626-57abd3bfbd95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2NzI5MzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 11,
    title: 'Restaurant Interior',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1756397481872-ed981ef72a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2NjczODY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 12,
    title: 'Cozy Reading Nook',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1730832970158-152ffa2307e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwcmVhZGluZyUyMG5vb2t8ZW58MXx8fHwxNzY2NzM4NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 13,
    title: 'Modern Kitchen Island',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1642979427252-13d5fd18bb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaXNsYW5kfGVufDF8fHx8MTc2NjczODY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 14,
    title: 'Walk-in Closet',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1618236444721-4a8dba415c15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YWxrLWluJTIwY2xvc2V0fGVufDF8fHx8MTc2NjczODY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 15,
    title: 'Minimalist Design',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1609310638939-67860ab54244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NzM4NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial'>('All');

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const filters = ['All', 'Residential', 'Commercial'] as const;

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-neutral-50/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Our Portfolio</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-neutral-400 via-neutral-900 to-neutral-400 mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-neutral-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Explore our collection of beautifully designed spaces that showcase our commitment to
              excellence and innovation.
            </motion.p>

            {/* Filter buttons with glass effect */}
            <motion.div 
              className="flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {filters.map((filterOption, index) => (
                <motion.button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`relative px-8 py-3 rounded-full transition-all duration-300 overflow-hidden ${
                    filter === filterOption
                      ? 'text-white shadow-lg'
                      : 'bg-white/60 backdrop-blur-sm text-neutral-900 hover:bg-white border border-neutral-200'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {filter === filterOption && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">
                    {filterOption === 'All' ? 'All Projects' : filterOption}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Portfolio grid with animations */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                {/* Glass card container */}
                <div className="relative w-full h-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
                  <motion.div
                    className="w-full h-full overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient overlay with glass effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10 border-t border-white/20"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="text-xs uppercase tracking-wider text-neutral-200 mb-2"
                        initial={{ x: -20, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {project.category}
                      </motion.div>
                      <motion.h3 
                        className="text-xl text-white"
                        initial={{ x: -20, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                      >
                        {project.title}
                      </motion.h3>
                    </motion.div>
                  </motion.div>

                  {/* Hover border effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/0 rounded-2xl"
                    whileHover={{ borderColor: 'rgba(255,255,255,0.3)' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

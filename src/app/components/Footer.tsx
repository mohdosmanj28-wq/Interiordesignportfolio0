import { motion } from 'motion/react';
import { Facebook, Instagram, MessageCircle, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', gradient: 'from-blue-600 to-blue-400', href: '#' },
    { icon: Instagram, label: 'Instagram', gradient: 'from-pink-600 to-purple-400', href: 'https://instagram.com/othmanjamall' },
    { icon: MessageCircle, label: 'WhatsApp', gradient: 'from-green-600 to-green-400', href: 'https://wa.me/918374958880' },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-neutral-900 to-black text-white py-16 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl mb-4"
              whileHover={{ scale: 1.02 }}
            >
              SK Interior & Affairs
            </motion.h3>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Creating beautiful, functional spaces that inspire and delight. Your vision, our
              expertise.
            </p>

            {/* Social Links with Glass Effect */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="relative group"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 * index,
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glass background */}
                    <div className="relative p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                      {/* Gradient on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                      <Icon size={20} className="relative z-10" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-3 text-neutral-400">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="hover:text-white transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-neutral-400">
              {[
                'Road No. 12, Banjara Hills',
                'Hyderabad, Telangana 500034',
                'info@skinterior.com',
                '+91 83749 58880',
                'Mon - Fri: 9:00 AM - 6:00 PM',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider with gradient */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center text-neutral-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © {new Date().getFullYear()} SK Interior & Affairs. All rights reserved.
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-white/10 backdrop-blur-md text-white rounded-full shadow-2xl border border-white/20 z-50"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.1, 
          y: -5,
          backgroundColor: 'rgba(255,255,255,0.2)',
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowUp size={24} />
        </motion.div>
      </motion.button>
    </footer>
  );
}
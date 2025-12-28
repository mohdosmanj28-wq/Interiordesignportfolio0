import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: ['Road No. 12, Banjara Hills,', 'Hyderabad, Telangana 500034'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['info@skinterior.com'],
      link: 'mailto:info@skinterior.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['+91 83749 58880'],
      link: 'tel:+918374958880',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
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
            <h2 className="text-4xl md:text-5xl mb-6">Get in Touch</h2>
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
              Ready to transform your space? Contact us today to schedule a consultation and bring your
              vision to life.
            </motion.p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="group"
                >
                  {/* Glass card */}
                  <div className="relative bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden">
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10`}
                      initial={{ scale: 0, rotate: 45 }}
                      whileHover={{ scale: 2, rotate: 90 }}
                      transition={{ duration: 0.6 }}
                    />

                    <div className="relative flex items-start gap-4">
                      {/* Animated icon */}
                      <motion.div
                        className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon size={24} className="text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="mb-2">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-neutral-600 hover:text-neutral-900 transition-colors block"
                          >
                            {info.content.map((line, idx) => (
                              <div key={idx}>{line}</div>
                            ))}
                          </a>
                        ) : (
                          <div className="text-neutral-600">
                            {info.content.map((line, idx) => (
                              <div key={idx}>{line}</div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/50">
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Name', type: 'text', required: true },
                  { id: 'email', label: 'Email', type: 'email', required: true },
                  { id: 'phone', label: 'Phone', type: 'tel', required: false },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <label htmlFor={field.id} className="block mb-2 text-sm">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.id}
                      required={field.required}
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20 transition-all"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20 transition-all resize-none"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-4 rounded-xl hover:from-neutral-800 hover:to-neutral-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <span>Send Message</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send size={18} />
                  </motion.div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Google Maps with Glass Frame */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl mb-8 text-center">Visit Our Studio</h3>
          
          {/* Glass frame for map */}
          <motion.div
            className="relative p-2 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-[450px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.632900000001!2d78.44620000000001!3d17.42081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb972b7c6f0f27%3A0x0!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SK Interior & Affairs Location"
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
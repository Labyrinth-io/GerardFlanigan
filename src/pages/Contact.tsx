import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '0477 037 911',
      link: 'tel:0477037911',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@gerardflanigan.com.au',
      link: 'mailto:info@gerardflanigan.com.au',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bundaberg, QLD, Australia',
      link: null,
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon - Fri: 7am - 5pm',
      link: null,
    },
  ];

  return (
    <div>
      <section
        className="relative py-32 md:py-40"
        style={{ backgroundColor: '#221F20' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm uppercase tracking-[0.3em] block mb-4 pt-12"
              style={{ color: '#29ABE2' }}
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ color: '#FEFEFE' }}
            >
              Let's Discuss Your Project
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg"
              style={{ color: '#B8B8B8' }}
            >
              Ready to start your building journey? Contact us today for a
              free consultation and quote.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span
                className="text-sm uppercase tracking-[0.3em] block mb-4"
                style={{ color: '#0071BC' }}
              >
                Contact Information
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-6"
                style={{ color: '#221F20' }}
              >
                Get in Touch
              </h2>
              <div
                className="w-16 h-0.5 mb-8"
                style={{ backgroundColor: '#D4AF37' }}
              />
              <p
                className="mb-10 leading-relaxed"
                style={{ color: '#5A5A5A' }}
              >
                Whether you're planning a new build, renovation, or commercial
                development, we're here to help bring your vision to life.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #0071BC, #00A2E8)',
                      }}
                    >
                      <item.icon size={20} style={{ color: '#FEFEFE' }} />
                    </div>
                    <div>
                      <p
                        className="text-sm uppercase tracking-wider mb-1"
                        style={{ color: '#B8B8B8' }}
                      >
                        {item.title}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="font-semibold transition-colors duration-300"
                          style={{ color: '#221F20' }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className="font-semibold"
                          style={{ color: '#221F20' }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-12 p-6"
                style={{
                  backgroundColor: '#E8E1D9',
                  borderLeft: '4px solid #D4AF37',
                }}
              >
                <p
                  className="font-semibold mb-2"
                  style={{ color: '#221F20' }}
                >
                  Prefer to talk?
                </p>
                <p
                  className="text-sm mb-4"
                  style={{ color: '#5A5A5A' }}
                >
                  Call Gerard directly for an immediate response.
                </p>
                <a
                  href="tel:0477037911"
                  className="inline-flex items-center font-semibold transition-colors duration-300"
                  style={{ color: '#0071BC' }}
                >
                  <Phone size={18} className="mr-2" />
                  0477 037 911
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div
                className="p-8 md:p-12"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div
                      className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #0071BC, #00A2E8)',
                      }}
                    >
                      <CheckCircle2 size={40} style={{ color: '#FEFEFE' }} />
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: '#221F20' }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ color: '#5A5A5A' }}>
                      Thank you for your enquiry. Gerard will be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <span
                      className="text-sm uppercase tracking-[0.3em] block mb-4"
                      style={{ color: '#0071BC' }}
                    >
                      Request a Quote
                    </span>
                    <h3
                      className="text-2xl font-bold mb-8"
                      style={{ color: '#221F20' }}
                    >
                      Send Us a Message
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            className="block text-sm font-medium mb-2"
                            style={{ color: '#221F20' }}
                          >
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="h-12 rounded-none border-gray-300 focus:border-blue-500"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium mb-2"
                            style={{ color: '#221F20' }}
                          >
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="h-12 rounded-none border-gray-300 focus:border-blue-500"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            className="block text-sm font-medium mb-2"
                            style={{ color: '#221F20' }}
                          >
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="h-12 rounded-none border-gray-300 focus:border-blue-500"
                            placeholder="0400 000 000"
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium mb-2"
                            style={{ color: '#221F20' }}
                          >
                            Project Type
                          </label>
                          <Select
                            value={formData.projectType}
                            onValueChange={(value) => setFormData({...formData, projectType: value})}
                          >
                            <SelectTrigger className="h-12 rounded-none border-gray-300">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="commercial">Commercial</SelectItem>
                              <SelectItem value="premium-home">Premium Home</SelectItem>
                              <SelectItem value="duplex">Duplex</SelectItem>
                              <SelectItem value="renovation">Renovation</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium mb-2"
                          style={{ color: '#221F20' }}
                        >
                          Project Details *
                        </label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="min-h-[150px] rounded-none border-gray-300 focus:border-blue-500"
                          placeholder="Tell us about your project, budget, and timeline..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-14 rounded-none text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
                        style={{
                          backgroundColor: '#E67E22',
                          color: '#FEFEFE',
                        }}
                      >
                        <Send size={18} className="mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

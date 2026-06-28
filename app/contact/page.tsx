'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';


export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-brand-light pt-32">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contact us for a free estimate. Our team is ready to help with all your
              roofing needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                {/* Phone */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a
                      href="tel:+15195550123"
                      className="font-bold text-lg text-brand-secondary hover:text-brand-primary transition-colors"
                    >
                      (519) 555-0123
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a
                      href="mailto:info@alcanroofing.com"
                      className="font-bold text-lg text-brand-secondary hover:text-brand-primary transition-colors"
                    >
                      info@alcanroofing.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-bold text-lg text-brand-secondary">
                      123 Main Street<br />
                      Windsor, ON N8X 1Y1
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Clock className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">
                      Business Hours
                    </p>
                    <p className="text-sm text-gray-600">
                      Monday - Friday: 7:00 AM - 5:00 PM
                    </p>
                    <p className="text-sm text-gray-600">
                      Saturday: 8:00 AM - 2:00 PM
                    </p>
                    <p className="text-sm text-gray-600">
                      Sunday: Closed
                    </p>
                    <p className="text-xs text-brand-primary font-semibold mt-2">
                      Emergency Service: 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-lg font-bold mb-4">Service Areas</h3>
                <div className="space-y-2">
                  {[
                    'Windsor',
                    'LaSalle',
                    'Tecumseh',
                    'Amherstburg',
                    'Lakeshore',
                    'Essex',
                    'Kingsville',
                    'Leamington',
                    'Belle River',
                  ].map((area) => (
                    <p key={area} className="text-gray-600">
                      • {area}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll respond within 24 hours.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Windsor, serving all of Essex County
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.1484123456783!2d-83.03645!3d42.31492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b1c1c1c1c1c1d%3A0x1c1c1c1c1c1c1c1c!2sWindsor%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Why Choose AL-CAN Roofing?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's what makes us your best choice for roofing services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Free Estimates',
                description:
                  'No obligation quotes so you can make an informed decision.',
              },
              {
                title: '10-Year Warranty',
                description:
                  'All our work is backed by comprehensive warranty coverage.',
              },
              {
                title: 'Same-Day Response',
                description:
                  'We respond to emergency calls within hours, not days.',
              },
              {
                title: 'Licensed & Insured',
                description:
                  'Full WSIB coverage and liability insurance for your protection.',
              },
              {
                title: 'Certified Technicians',
                description:
                  'Expert team with CertainTeed and GAF certifications.',
              },
              {
                title: 'Transparent Pricing',
                description:
                  'No hidden fees. What you see is what you pay.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-brand-primary transition-all hover:shadow-lg"
              >
                <h3 className="font-bold text-lg mb-2 text-brand-secondary">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

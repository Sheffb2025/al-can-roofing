'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Target,
  Heart,
  Check,
  ArrowRight,
} from 'lucide-react';


export default function About() {
  const values = [
    {
      icon: <Target size={28} />,
      title: 'Quality First',
      description:
        'We never compromise on quality. Every project meets our highest standards.',
    },
    {
      icon: <Heart size={28} />,
      title: 'Customer Focus',
      description:
        'Your satisfaction is our success. We go above and beyond to exceed expectations.',
    },
    {
      icon: <Users size={28} />,
      title: 'Integrity',
      description:
        'Honest communication, transparent pricing, and reliable service—always.',
    },
    {
      icon: <Award size={28} />,
      title: 'Excellence',
      description:
        'Continuous improvement and expertise to deliver exceptional results.',
    },
  ];

  const certifications = [
    'Licensed Roofing Contractor',
    'WSIB Certified',
    'Full Liability Insurance',
    'CertainTeed Certified',
    'GAF Master Elite',
    'EPDM Certified',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-brand-light pt-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-red-100 text-brand-primary px-4 py-2 rounded-full mb-6">
                <Award size={18} />
                <span className="font-semibold">Industry Leaders</span>
              </div>

              <h1 className="mb-6">Your Trusted Roofing Partner</h1>

              <p className="text-xl text-gray-700 mb-6">
                AL-CAN Roofing has been serving Windsor and Essex County since 2010,
                delivering quality roofing solutions and exceptional customer service.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                With over 14 years of experience, our certified team has completed
                500+ successful projects, earning a reputation for excellence and
                reliability.
              </p>

              <Link href="/contact" className="btn-primary gap-2 text-lg">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-square rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-2xl"
            >
              <div className="text-center text-white">
                <Users size={80} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Expert Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Story</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p>
              AL-CAN Roofing was founded on a simple principle: provide honest, high-quality
              roofing services that homeowners and businesses can trust. What started as a
              small family operation has grown into one of Windsor and Essex County's most
              respected roofing contractors.
            </p>

            <p>
              Our journey began when we saw a need for trustworthy roofing contractors who
              put customers first. Over the years, we've built our reputation by:
            </p>

            <ul>
              <li>Using only premium quality materials</li>
              <li>Employing certified, experienced technicians</li>
              <li>Providing transparent pricing with no hidden fees</li>
              <li>Standing behind our work with comprehensive warranties</li>
              <li>Offering exceptional customer service</li>
              <li>Being active in our local community</li>
            </ul>

            <p>
              Today, we're proud to have completed over 500 roofing projects and earned
              the trust of thousands of satisfied customers throughout Windsor and Essex County.
              Our 4.9-star rating and numerous customer testimonials reflect our commitment
              to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These principles guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-brand-primary transition-all hover:shadow-lg"
              >
                <div className="text-brand-primary mb-4">{value.icon}</div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Certifications & Licenses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of professionalism and compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <Check className="text-green-600 flex-shrink-0" size={24} />
                <span className="font-semibold text-gray-900">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                title: 'Owner & Lead Roofer',
                bio: '14+ years of roofing experience and commitment to customer satisfaction',
              },
              {
                name: 'Mike Johnson',
                title: 'Senior Foreman',
                bio: 'Expert in all roofing systems with 12+ years in the industry',
              },
              {
                name: 'David Wilson',
                title: 'Roofing Specialist',
                bio: 'Certified in EPDM, TPO, and asphalt shingle installation',
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-brand-primary transition-all"
              >
                <div className="aspect-square bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                  <Users className="text-white" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-brand-primary font-semibold mb-3">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">
              Proudly serving Windsor and Essex County
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
              'Essex County',
            ].map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-brand-primary text-center"
              >
                <p className="font-semibold text-brand-secondary">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-primary to-red-700 text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-white">Ready to Work With Us?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate and experience the AL-CAN Roofing difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-brand-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+15195550123"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-brand-primary transition-colors text-lg"
              >
                Call (519) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';


const projects = [
  {
    title: 'Residential Roof Replacement - Asphalt Shingles',
    location: 'Windsor, ON',
    type: 'Full Replacement',
    before:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop',
    after:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=675&fit=crop',
  },
  {
    title: 'Commercial Flat Roof - TPO Installation',
    location: 'LaSalle, ON',
    type: 'Commercial Project',
    before:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=675&fit=crop',
    after:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=675&fit=crop',
  },
  {
    title: 'Storm Damage Repair - EPDM Flat Roof',
    location: 'Tecumseh, ON',
    type: 'Emergency Repair',
    before:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop',
    after:
      'https://images.unsplash.com/photo-1494203484961-20db1d2b8319?w=1200&h=675&fit=crop',
  },
  {
    title: 'Heritage Home Roof Restoration',
    location: 'Amherstburg, ON',
    type: 'Heritage Project',
    before:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=675&fit=crop',
    after:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=675&fit=crop',
  },
];

export default function Gallery() {
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
            <h1 className="mb-4">Project Gallery</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the quality of our work through before and after images of our recent
              roofing projects across Windsor and Essex County.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Project Info */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span>{project.location}</span>
                        <span className="inline-block px-3 py-1 bg-red-100 text-brand-primary rounded-full text-sm font-semibold">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Before/After Slider */}
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <BeforeAfterSlider
                    beforeImage={project.before}
                    afterImage={project.after}
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                </div>

                {/* Divider */}
                {i < projects.length - 1 && (
                  <div className="mt-12 border-t border-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">4.9★</div>
              <p className="text-gray-600">Customer Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">
              Real feedback from homeowners we've served
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah M.',
                location: 'Windsor',
                text: 'Excellent work! The team was professional, clean, and completed the job on time. Highly recommend AL-CAN Roofing.',
              },
              {
                name: 'John T.',
                location: 'LaSalle',
                text: 'Best roofing contractor I\'ve dealt with. Fair pricing, expert work, and amazing customer service.',
              },
              {
                name: 'Maria R.',
                location: 'Tecumseh',
                text: 'Had an emergency repair and they came out same day. Fixed the problem and prevented further damage. Very grateful!',
              },
              {
                name: 'David L.',
                location: 'Amherstburg',
                text: 'The team was thorough with the inspection and gave honest recommendations. Trust is important to me.',
              },
              {
                name: 'Emma K.',
                location: 'Lakeshore',
                text: 'From quote to completion, everything was smooth. They cleaned up after themselves too!',
              },
              {
                name: 'Robert P.',
                location: 'Essex',
                text: 'Professional installers, quality materials, great warranty. What more could you want?',
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-brand-secondary">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.location}, ON</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-brand-primary to-red-700 text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-white">Your Project Could Be Next</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              See how AL-CAN Roofing can transform your property. Schedule your free
              inspection today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Your Free Estimate
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

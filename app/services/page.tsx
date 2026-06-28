'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Hammer,
  Wrench,
  Layers,
  Wind,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import FAQAccordion from '@/components/FAQAccordion';


const detailedServices = [
  {
    id: 'roof-repairs',
    icon: <Wrench size={28} />,
    title: 'Roof Repairs',
    description: 'Fast and reliable roof repair services',
    fullDescription:
      'Whether you have a small leak or storm damage, our expert technicians can quickly diagnose and fix the problem. We use high-quality materials to ensure lasting repairs.',
    benefits: [
      'Same-day response available',
      'Warranty on all repairs',
      'Emergency service 24/7',
      'Free damage assessment',
    ],
  },
  {
    id: 'roof-replacement',
    icon: <Hammer size={28} />,
    title: 'Roof Replacement',
    description: 'Complete roof replacement services',
    fullDescription:
      'When your roof reaches the end of its life, we provide complete replacement services using premium materials and expert installation techniques.',
    benefits: [
      'Quality material selection',
      'Professional installation',
      '10-year warranty',
      'Financing options available',
    ],
  },
  {
    id: 'asphalt-shingles',
    icon: <Layers size={28} />,
    title: 'Asphalt Shingles',
    description: 'Durable and affordable shingle installation',
    fullDescription:
      'Asphalt shingles are the most popular roofing material. We offer a wide selection of colors and styles to match your home perfectly.',
    benefits: [
      'Wide color selection',
      'Excellent weather resistance',
      'Cost-effective solution',
      'Energy-efficient options',
    ],
  },
  {
    id: 'flat-roofing',
    icon: <Wind size={28} />,
    title: 'Flat Roofing',
    description: 'Specialized flat roof solutions',
    fullDescription:
      'We specialize in flat roofing systems including EPDM, TPO, and Modified Bitumen for residential and commercial properties.',
    benefits: [
      'Multiple material options',
      'Excellent waterproofing',
      'Easy maintenance',
      'Long-lasting durability',
    ],
  },
  {
    id: 'epdm-roofing',
    icon: <Zap size={28} />,
    title: 'EPDM Roofing',
    description: 'Durable rubber membrane roofing',
    fullDescription:
      'EPDM is a single-ply rubber membrane that provides excellent durability and weather resistance for flat roofs.',
    benefits: [
      'UV resistant',
      '20-30 year lifespan',
      'Excellent waterproofing',
      'Lower installation cost',
    ],
  },
  {
    id: 'tpo-roofing',
    icon: <Shield size={28} />,
    title: 'TPO Roofing',
    description: 'Energy-efficient thermoplastic membrane',
    fullDescription:
      'TPO is a single-ply synthetic polymer roofing membrane known for its durability and energy-efficiency.',
    benefits: [
      'Energy-efficient reflectivity',
      '15-20 year lifespan',
      'Chemical resistant',
      'Sustainable option',
    ],
  },
];

const faqItems = [
  {
    id: 'how-long-roof-last',
    question: 'How long does a typical roof last?',
    answer:
      'Most roofs last between 20-30 years depending on the material, climate, and maintenance. Asphalt shingles typically last 20-25 years, while metal roofs can last 40-50 years. We recommend inspections every few years to catch any issues early.',
  },
  {
    id: 'roof-repair-vs-replace',
    question: 'When should I repair vs. replace my roof?',
    answer:
      'If your roof is less than 10 years old and damage is minimal, repair is usually the better option. However, if your roof is 20+ years old, or if damage covers more than 30% of the surface, replacement is often more cost-effective.',
  },
  {
    id: 'emergency-services',
    question: 'Do you offer emergency roof repair services?',
    answer:
      'Yes! We provide 24/7 emergency roof repair services for storm damage, leaks, and other urgent issues. Call us immediately at (519) 555-0123 and we\'ll get a team to you as quickly as possible.',
  },
  {
    id: 'warranty-coverage',
    question: 'What warranty do you provide?',
    answer:
      'We provide a 10-year warranty on all roofing work, covering both materials and labor. This ensures your peace of mind and protects your investment in your home.',
  },
  {
    id: 'roof-inspection',
    question: 'How often should I have my roof inspected?',
    answer:
      'We recommend annual inspections, especially after severe weather. Regular inspections help identify small problems before they become expensive repairs.',
  },
  {
    id: 'financing-options',
    question: 'Do you offer financing options?',
    answer:
      'Yes, we work with several financing companies to make roof replacement and repair affordable. Ask us about flexible payment plans when you call for your free estimate.',
  },
];

export default function Services() {
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
            <h1 className="mb-4">Comprehensive Roofing Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to complete replacements, we offer complete roofing
              solutions using premium materials and expert craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((service, i) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {detailedServices.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-100 rounded-lg text-brand-primary">
                    {service.icon}
                  </div>
                  <h2 className="m-0">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  {service.fullDescription}
                </p>
                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle className="text-brand-primary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary gap-2">
                  Get Free Estimate
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                  <div className="text-center text-white">
                    {service.icon}
                    <p className="text-lg font-semibold mt-4">{service.title}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Before & After Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">See the Difference</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out our before and after photos to see the quality of our work
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop"
              afterImage="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=675&fit=crop"
              beforeLabel="Before Repair"
              afterLabel="After Repair"
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure quality workmanship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Free Inspection',
                description: 'We assess your roof and discuss all options',
              },
              {
                step: '2',
                title: 'Detailed Quote',
                description: 'Transparent pricing with no hidden fees',
              },
              {
                step: '3',
                title: 'Expert Installation',
                description: 'Professional team executes flawless work',
              },
              {
                step: '4',
                title: 'Quality Assurance',
                description: '10-year warranty on all materials & labor',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our roofing services
            </p>
          </motion.div>

          <FAQAccordion items={faqItems} />
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
            <h2 className="mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Schedule your free inspection today and discover why we're the trusted
              choice for roofing in Windsor & Essex County.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-brand-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Your Free Estimate Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

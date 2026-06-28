'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Users,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import AnimatedCounter from '@/components/AnimatedCounter';


const services = [
  {
    icon: <Shield size={28} />,
    title: 'Roof Repairs',
    description:
      'Quick and reliable repair services to extend your roof lifespan and prevent costly damage.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Roof Replacement',
    description:
      'Complete roof replacement with premium materials and expert installation for lasting protection.',
  },
  {
    icon: <Award size={28} />,
    title: 'Asphalt Shingles',
    description:
      'Durable and cost-effective asphalt shingle installation with superior weather resistance.',
  },
  {
    icon: <Users size={28} />,
    title: 'Flat Roofing',
    description:
      'Specialized flat roofing solutions including EPDM, TPO, and Modified Bitumen systems.',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Windsor, ON',
    rating: 5,
    text: "AL-CAN Roofing did an amazing job on our roof replacement. Professional, punctual, and fair pricing. Highly recommend!",
  },
  {
    name: 'John Thompson',
    location: 'LaSalle, ON',
    rating: 5,
    text: "After a storm damaged our roof, AL-CAN came out immediately. Fast response and excellent workmanship. Very satisfied.",
  },
  {
    name: 'Maria Rodriguez',
    location: 'Tecumseh, ON',
    rating: 5,
    text: "We got quotes from several contractors. AL-CAN offered the best value without compromising quality. Great communication throughout.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-brand-light -z-10" />

        <div className="section-container w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-red-100 text-brand-primary px-4 py-2 rounded-full mb-6">
                <CheckCircle size={18} />
                <span className="font-semibold">Trusted Since 2010</span>
              </div>

              <h1 className="mb-6">
                Premium Roofing Services for
                <span className="gradient-text"> Windsor & Essex County</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8">
                Expert roof repairs, replacements, and installations for residential
                and commercial properties. Over 500+ satisfied customers and counting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-primary gap-2 text-lg">
                  Get Free Estimate
                  <ArrowRight size={20} />
                </Link>
                <Link href="/about" className="btn-outline text-lg">
                  Learn More About Us
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-300">
                <div>
                  <div className="text-2xl font-bold text-brand-primary">500+</div>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-primary">4.9★</div>
                  <p className="text-sm text-gray-600">Customer Rating</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-primary">14+</div>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Right Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <Shield size={80} className="mx-auto mb-4" />
                  <p className="text-lg font-semibold">Professional Roofing Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                label: 'Licensed & Insured',
                description: 'Full coverage for your peace of mind',
              },
              {
                icon: Zap,
                label: 'Fast Service',
                description: 'Same-day response to emergency calls',
              },
              {
                icon: Shield,
                label: 'Quality Guaranteed',
                description: '10-year warranty on all work',
              },
              {
                icon: Users,
                label: 'Expert Team',
                description: 'Certified roofing professionals',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <Icon className="text-brand-primary" size={32} />
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{item.label}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive roofing solutions for every need, from emergency repairs
              to complete replacements using premium materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary gap-2 text-lg">
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-brand-secondary text-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter value={500} suffix="+" />
              <p className="text-gray-300 mt-2">Projects Completed</p>
            </div>
            <div className="text-center">
              <AnimatedCounter value={14} suffix=" Years" />
              <p className="text-gray-300 mt-2">Industry Experience</p>
            </div>
            <div className="text-center">
              <AnimatedCounter value={98} suffix="%" />
              <p className="text-gray-300 mt-2">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold">10yr</div>
              <p className="text-gray-300 mt-2">Warranty Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by hundreds of satisfied homeowners and businesses in Windsor
              and Essex County.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-brand-primary transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={20}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-brand-secondary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
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
            <h2 className="mb-4 text-white">Ready to Protect Your Home?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get a free estimate today and discover why hundreds of homeowners trust
              AL-CAN Roofing with their roofing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
                Schedule Free Inspection
              </button>
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

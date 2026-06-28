'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = '/contact',
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="service-card"
    >
      <div className="text-brand-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all"
      >
        Learn More
        <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}

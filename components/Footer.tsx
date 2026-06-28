'use client';

import Link from 'next/link';
import { Facebook, Phone, Mail, MapPin } from 'lucide-react';

const localAreas = [
  'Windsor',
  'LaSalle',
  'Tecumseh',
  'Amherstburg',
  'Lakeshore',
  'Essex',
  'Kingsville',
  'Leamington',
  'Belle River',
];

const services = [
  'Roof Repairs',
  'Roof Replacement',
  'Asphalt Shingles',
  'Flat Roofing',
  'EPDM Roofing',
  'TPO Roofing',
  'Modified Bitumen',
  'Commercial Roofing',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary text-white">
      {/* Main Footer Content */}
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AC</span>
              </div>
              <h3 className="text-xl font-bold">AL-CAN Roofing</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Premium roofing services for residential & commercial properties across Windsor & Essex County.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/alcanroofing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-primary">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-primary">Service Areas</h4>
            <ul className="space-y-2">
              {localAreas.map((area) => (
                <li key={area}>
                  <Link
                    href={`/contact?area=${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-primary">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:+15195550123"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>(519) 555-0123</span>
              </a>
              <a
                href="mailto:info@alcanroofing.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors break-all"
              >
                <Mail size={20} />
                <span>info@alcanroofing.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>123 Main Street<br />Windsor, ON N8X 1Y1</span>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Mon - Fri: 7:00 AM - 5:00 PM</li>
                <li>Sat: 8:00 AM - 2:00 PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              &copy; {currentYear} AL-CAN Roofing. All rights reserved. Serving Windsor & Essex County, Ontario.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

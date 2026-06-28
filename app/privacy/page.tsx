'use client';

import { motion } from 'framer-motion';


export default function Privacy() {
  return (
    <section className="section-padding bg-white pt-32">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <div>
              <h2>Introduction</h2>
              <p>
                AL-CAN Roofing ("we," "us," or "our") operates the alcanroofing.com website.
                This page informs you of our policies regarding the collection, use, and
                disclosure of personal data when you use our Service and the choices you
                have associated with that data.
              </p>
            </div>

            <div>
              <h2>Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to
                provide and improve our Service to you.
              </p>
              <h3>Types of Data Collected:</h3>
              <ul>
                <li>Personal Data: Name, email address, phone number, address</li>
                <li>Usage Data: Browser type, IP address, pages visited</li>
                <li>Cookies: Device information and tracking data</li>
              </ul>
            </div>

            <div>
              <h2>Use of Data</h2>
              <p>AL-CAN Roofing uses the collected data for various purposes:</p>
              <ul>
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>

            <div>
              <h2>Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method
                of transmission over the Internet or method of electronic storage is 100%
                secure. While we strive to use commercially acceptable means to protect
                your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                AL-CAN Roofing<br />
                Email: info@alcanroofing.com<br />
                Phone: (519) 555-0123
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

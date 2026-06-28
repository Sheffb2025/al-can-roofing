'use client';

import { motion } from 'framer-motion';


export default function Terms() {
  return (
    <section className="section-padding bg-white pt-32">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <div>
              <h2>Agreement to Terms</h2>
              <p>
                By accessing and using the AL-CAN Roofing website, you accept and agree
                to be bound by and comply with these terms and conditions.
              </p>
            </div>

            <div>
              <h2>Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials
                (information or software) on AL-CAN Roofing's website for personal,
                non-commercial transitory viewing only. This is the grant of a license,
                not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person or "mirror" the materials</li>
              </ul>
            </div>

            <div>
              <h2>Disclaimer</h2>
              <p>
                The materials on AL-CAN Roofing's website are provided on an 'as is' basis.
                AL-CAN Roofing makes no warranties, expressed or implied, and hereby
                disclaims and negates all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for a
                particular purpose, or non-infringement of intellectual property or other
                violation of rights.
              </p>
            </div>

            <div>
              <h2>Limitations</h2>
              <p>
                In no event shall AL-CAN Roofing or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data or
                profit, or due to business interruption) arising out of the use or
                inability to use the materials on AL-CAN Roofing's website, even if
                AL-CAN Roofing or an authorized representative has been notified orally
                or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2>Accuracy of Materials</h2>
              <p>
                The materials appearing on AL-CAN Roofing's website could include
                technical, typographical, or photographic errors. AL-CAN Roofing does
                not warrant that any of the materials on its website are accurate,
                complete, or current. AL-CAN Roofing may make changes to the materials
                contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2>Links</h2>
              <p>
                AL-CAN Roofing has not reviewed all of the sites linked to its website
                and is not responsible for the contents of any such linked site. The
                inclusion of any link does not imply endorsement by AL-CAN Roofing of
                the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2>Modifications</h2>
              <p>
                AL-CAN Roofing may revise these terms of service for its website at any
                time without notice. By using this website, you are agreeing to be bound
                by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2>Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance
                with the laws of Ontario, Canada, and you irrevocably submit to the
                exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
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

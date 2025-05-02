
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-warm-800">Terms of Service</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg mb-6">Last updated: May 2, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using The Trailblazer Network's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily access the materials on The Trailblazer Network's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on The Trailblazer Network's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by The Trailblazer Network at any time.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">3. Services</h2>
              <p>The Trailblazer Network provides consulting, product development, and market entry services for DTC brands. The specific terms and conditions for these services will be outlined in separate service agreements.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">4. Disclaimer</h2>
              <p>The materials on The Trailblazer Network's website are provided on an 'as is' basis. The Trailblazer Network makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              <p>Further, The Trailblazer Network does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">5. Limitations</h2>
              <p>In no event shall The Trailblazer Network or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Trailblazer Network's website, even if The Trailblazer Network or a The Trailblazer Network authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">6. Accuracy of Materials</h2>
              <p>The materials appearing on The Trailblazer Network's website could include technical, typographical, or photographic errors. The Trailblazer Network does not warrant that any of the materials on its website are accurate, complete, or current. The Trailblazer Network may make changes to the materials contained on its website at any time without notice.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">7. Links</h2>
              <p>The Trailblazer Network has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Trailblazer Network of the site. Use of any such linked website is at the user's own risk.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">8. Modifications</h2>
              <p>The Trailblazer Network may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">9. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the country in which The Trailblazer Network operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">10. Contact Information</h2>
              <p>For any questions about these Terms of Service, please contact us at:</p>
              <p className="mt-2 mb-6">
                The Trailblazer Network<br />
                Email: info@gotrailblazer.cc
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;

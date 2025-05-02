
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-warm-800">Privacy Policy</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg mb-6">Last updated: May 2, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">1. Introduction</h2>
              <p>At The Trailblazer Network ("TTN", "we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">2. Information We Collect</h2>
              <p>We may collect several types of information from and about users of our website, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Personal identifiers, such as name, email address, phone number, and company information.</li>
                <li>Information that you provide when filling out forms on our website, including when requesting services or subscribing to our newsletter.</li>
                <li>Records and copies of your correspondence if you contact us.</li>
                <li>Technical data, including IP address, browser type, operating system, and other technology on the devices you use to access our website.</li>
                <li>Usage data about your interaction with our website and services.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">3. How We Use Your Information</h2>
              <p>We use information that we collect about you or that you provide to us:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>To present our website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights.</li>
                <li>To improve our website and services.</li>
                <li>To send emails regarding our services, updates, or promotional materials.</li>
                <li>In any other way we may describe when you provide the information.</li>
                <li>For any other purpose with your consent.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">4. Disclosure of Your Information</h2>
              <p>We may disclose aggregated information about our users without restriction. We may disclose personal information:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business.</li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
                <li>To comply with any court order, law, or legal process.</li>
                <li>To enforce or apply our terms of use and other agreements.</li>
                <li>If we believe disclosure is necessary to protect the rights, property, or safety of TTN, our customers, or others.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">5. Data Security</h2>
              <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure, and we cannot guarantee the security of your personal information transmitted to our website.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">6. Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict use of your personal information. To exercise these rights, please contact us using the contact information provided below.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">7. Changes to Our Privacy Policy</h2>
              <p>We may update our privacy policy from time to time. If we make material changes, we will notify you by email or through a notice on our website.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">8. Contact Information</h2>
              <p>To ask questions or comment about this privacy policy and our privacy practices, please contact us at:</p>
              <p className="mt-2 mb-6">
                The Trailblazer Network<br />
                Email: privacy@ttn-global.com
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;

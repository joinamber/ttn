
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-warm-800">Cookie Policy</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg mb-6">Last updated: May 2, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">1. What Are Cookies</h2>
              <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the site or a third-party service to recognize you and make your next visit easier and more useful to you.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Cookies</h2>
              <p>The Trailblazer Network uses cookies for a variety of purposes, including to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Understand and save user preferences for future visits</li>
                <li>Compile aggregate data about site traffic and site interactions</li>
                <li>Enhance the user experience on our website</li>
                <li>Track website analytics and operations information</li>
                <li>Retarget advertising to users who have visited our website</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">3. Types of Cookies We Use</h2>
              <p><strong>Essential cookies:</strong> These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</p>
              <p><strong>Performance and analytics cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p>
              <p><strong>Functionality cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
              <p><strong>Targeting cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">4. Third-Party Cookies</h2>
              <p>In addition to our own cookies, we may also use various third-parties' cookies to report usage statistics of the website and to deliver advertisements on and through the website. These may include:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Google Analytics</li>
                <li>Google Ads</li>
                <li>Facebook Pixel</li>
                <li>LinkedIn Insight Tag</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">5. How to Control and Delete Cookies</h2>
              <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a>.</p>
              <p>To opt out of being tracked by Google Analytics across all websites, visit <a href="http://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://tools.google.com/dlpage/gaoptout</a>.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">6. Changes to Our Cookie Policy</h2>
              <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this Cookie Policy.</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">7. Contact Information</h2>
              <p>For any questions about this Cookie Policy, please contact us at:</p>
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

export default CookiePolicy;

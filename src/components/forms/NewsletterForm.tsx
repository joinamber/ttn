
import { useState } from 'react';

/**
 * Newsletter subscription form using FormSubmit service
 */
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      setError('Please enter a valid email address');
      return false;
    }
    setError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!email || !validateEmail(email)) {
      e.preventDefault();
      return;
    }
  };

  return (
    <form 
      action="https://formsubmit.co/info@gotrailblazer.cc" 
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2"
    >
      {/* FormSubmit configuration */}
      <input type="hidden" name="_subject" value="Newsletter Subscription - Trailblazer" />
      <input type="hidden" name="_next" value={window.location.href} />
      <input type="hidden" name="_autoresponse" value="Thank you for subscribing to The Trailblazer Network newsletter! We'll keep you updated with our latest insights on global market trends." />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      
      <div className="flex">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={handleEmailChange}
          className={`w-full bg-gray-800 rounded-l-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            error ? 'border border-red-500' : ''
          }`}
          required
          maxLength={254}
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Subscribe
        </button>
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </form>
  );
};

export default NewsletterForm;


import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqrzdde';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Newsletter subscription form using Formspree
 */
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<Status>('idle');

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
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) return;

    setStatus('submitting');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <p className="text-sm text-gray-300">
        Thanks for subscribing! Check your inbox for a confirmation.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input type="hidden" name="_subject" value="Newsletter Subscription - Trailblazer" />

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
          disabled={status === 'submitting'}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </form>
  );
};

export default NewsletterForm;

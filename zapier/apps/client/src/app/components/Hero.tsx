// components/HeroSection.js
import { useState } from 'react';

export default function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    // Here you would typically call an API to handle signup
  };

  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Automate Your Work with ZapFlow
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Connect your favorite apps and automate workflows in minutes. No coding required.
          </p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-grow px-4 py-3 rounded text-gray-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded hover:bg-yellow-400"
              >
                Sign up free
              </button>
            </form>
            <p className="text-sm mt-3 opacity-80">
              Free 14-day trial · No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
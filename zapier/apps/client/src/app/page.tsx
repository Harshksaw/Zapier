"use client";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-300">
      <Head>
        <title>ZapFlow | Automate Your Workflow</title>
        <meta
          name="description"
          content="Connect your apps and automate workflows with ZapFlow"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-gray-950 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-500">ZapFlow</div>
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link
                href="#product"
                className="text-gray-400 hover:text-blue-500"
              >
                Product
              </Link>
              <Link
                href="#pricing"
                className="text-gray-400 hover:text-blue-500"
              >
                Pricing
              </Link>
              <Link
                href="#solutions"
                className="text-gray-400 hover:text-purple-500"
              >
                Solutions
              </Link>
              <Link
                href="#resources"
                className="text-gray-400 hover:text-purple-500"
              >
                Resources
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-400 hover:text-purple-500">
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-blue-700 text-gray-200 px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign up free
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-950 to-purple-950 text-gray-200 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Automate Your Work with ZapFlow
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Connect your favorite apps and automate workflows in minutes. No
                coding required.
              </p>
              <div className="max-w-md mx-auto">
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="flex-grow px-4 py-3 rounded bg-gray-800 text-gray-200 border border-gray-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="bg-teal-700 text-gray-200 font-semibold px-6 py-3 rounded hover:bg-teal-600">
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

        {/* Trusted By Section */}
        <section className="py-12 bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-gray-500 text-lg mb-8">
              TRUSTED BY 5M+ USERS AT COMPANIES OF ALL SIZES
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
              {[
                "Adobe",
                "Spotify",
                "Amazon",
                "Netflix",
                "Salesforce",
                "Microsoft",
              ].map((company) => (
                <div
                  key={company}
                  className="text-gray-400 font-semibold text-xl"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="product" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
                How ZapFlow Works
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Automate your work in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "1. Connect your apps",
                  description:
                    "ZapFlow connects with 5,000+ apps, so you can automate your work across platforms.",
                  icon: "🔌",
                },
                {
                  title: "2. Design a workflow",
                  description:
                    "Set up automated workflows that pass information between your apps with just a few clicks.",
                  icon: "🔄",
                },
                {
                  title: "3. Let ZapFlow do the work",
                  description:
                    "Your workflow runs automatically, so you can focus on what matters most.",
                  icon: "✨",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg border border-gray-700 shadow-md bg-gray-800"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to automate your work efficiently
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
              {[
                {
                  title: "5,000+ app integrations",
                  description:
                    "Connect with all the tools you already use and love.",
                },
                {
                  title: "No-code builder",
                  description:
                    "Create complex workflows without writing a single line of code.",
                },
                {
                  title: "Custom logic",
                  description:
                    "Add filters and conditional logic to create sophisticated workflows.",
                },
                {
                  title: "Templates library",
                  description:
                    "Start quickly with pre-built workflow templates for common use cases.",
                },
                {
                  title: "Error handling",
                  description:
                    "Get notifications when something goes wrong in your workflows.",
                },
                {
                  title: "Detailed analytics",
                  description:
                    "Track the performance of your workflows with comprehensive analytics.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2 text-gray-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-400">
                Join thousands of satisfied customers who transformed their
                workflow
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote:
                    "ZapFlow has saved our marketing team 15+ hours every week by automating our lead nurturing process.",
                  name: "Sarah Johnson",
                  title: "Marketing Director at TechCorp",
                },
                {
                  quote:
                    "The ability to connect our CRM with our support desk has streamlined our customer service operations dramatically.",
                  name: "Michael Chen",
                  title: "Customer Support Manager",
                },
                {
                  quote:
                    "As a solopreneur, ZapFlow helps me manage tasks that would otherwise require hiring additional staff.",
                  name: "Alex Rodriguez",
                  title: "Founder, DigitalNomad",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-700 shadow-md bg-gray-800"
                >
                  <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-200">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-400">
                Plans that scale with your automation needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Free",
                  price: "$0",
                  period: "forever",
                  description:
                    "For individuals just getting started with automation",
                  features: [
                    "5 active workflows",
                    "100 tasks per month",
                    "Standard integrations",
                    "24-hour support response time",
                  ],
                },
                {
                  name: "Professional",
                  price: "$29",
                  period: "per month",
                  description:
                    "For growing teams that need more power and flexibility",
                  features: [
                    "Unlimited workflows",
                    "2,000 tasks per month",
                    "Premium integrations",
                    "Advanced logic",
                    "4-hour support response time",
                  ],
                  highlighted: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description:
                    "For organizations with advanced automation needs",
                  features: [
                    "Unlimited workflows",
                    "Unlimited tasks",
                    "All integrations",
                    "Team collaboration",
                    "Advanced security",
                    "Dedicated support",
                  ],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border ${plan.highlighted ? "border-blue-700 shadow-md bg-gray-800" : "border-gray-700 bg-gray-800"}`}
                >
                  <h3 className="text-2xl font-bold mb-2 text-gray-200">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-200">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <svg
                          className="h-5 w-5 text-green-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 px-4 rounded font-semibold ${plan.highlighted ? "bg-gradient-to-r from-blue-700 to-purple-700 text-gray-200 hover:from-blue-600 hover:to-purple-600" : "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
                  >
                    {plan.name === "Enterprise"
                      ? "Contact Sales"
                      : "Start Free Trial"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to automate your workflow?
              </h2>
              <p className="text-xl mb-8">
                Join thousands of teams saving time with ZapFlow
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="bg-gray-800 text-blue-400 font-semibold px-6 py-3 rounded hover:bg-gray-700"
                >
                  Start your free trial
                </Link>
                <Link
                  href="/demo"
                  className="border border-gray-400 text-gray-200 font-semibold px-6 py-3 rounded hover:bg-gray-800 hover:bg-opacity-50"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-gray-200 mb-4">
                ZapFlow
              </div>
              <p className="mb-4">
                Connect your apps and automate workflows in minutes.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "Facebook", "Instagram"].map(
                  (social) => (
                    <a key={social} href="#" className="hover:text-blue-400">
                      {social}
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                {[
                  "Features",
                  "Integrations",
                  "Pricing",
                  "Enterprise",
                  "Security",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                {[
                  "Blog",
                  "Help Center",
                  "Community",
                  "Webinars",
                  "Partners",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {["About Us", "Careers", "Contact", "Press", "Legal"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-blue-400">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 ZapFlow. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

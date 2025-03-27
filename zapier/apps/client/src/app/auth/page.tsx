"use client";
// pages/auth.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    company: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Additional validation for signup
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = "Name is required";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // This is where you would make your API call to authenticate
      // For demonstration, we'll simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate successful login/signup
      console.log("Form submitted:", formData);

      // Redirect to dashboard on success
      router.push("/dashboard");
    } catch (error) {
      console.error("Authentication error:", error);
      setErrors({
        form: "Authentication failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    // Reset errors when switching modes
    setErrors({});
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-300">
      <Head>
        <title>{isLogin ? "Login" : "Sign Up"} | ZapFlow</title>
        <meta
          name="description"
          content={`${isLogin ? "Login to" : "Sign up for"} ZapFlow and automate your workflows`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-gray-950 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-500">ZapFlow</div>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-gray-400 hover:text-blue-500">
              Home
            </Link>
            <Link href="#pricing" className="text-gray-400 hover:text-blue-500">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-12 bg-gray-950">
        <div className="w-full max-w-md">
          <div className="bg-gray-900 rounded-lg shadow-xl border border-gray-800 overflow-hidden">
            {/* Auth Header */}
            <div className="flex bg-gray-800">
              <button
                className={`flex-1 py-4 font-medium text-center transition-colors ${
                  isLogin
                    ? "bg-blue-700 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`flex-1 py-4 font-medium text-center transition-colors ${
                  !isLogin
                    ? "bg-blue-700 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>

            {/* Auth Form */}
            <div className="p-6 sm:p-8">
              <h1 className="text-2xl font-bold text-center mb-6 text-gray-200">
                {isLogin ? "Welcome back" : "Create your account"}
              </h1>

              {errors.form && (
                <div className="mb-6 p-3 bg-red-900/30 border border-red-800 rounded text-red-400">
                  {errors.form}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {!isLogin && (
                  <>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1 text-gray-300"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-1 text-gray-300"
                      >
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-1 text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>

                {!isLogin && (
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium mb-1 text-gray-300"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-600 focus:ring-blue-600"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-2 block text-sm text-gray-400"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-blue-500 hover:text-blue-400"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded font-medium bg-gradient-to-r from-blue-700 to-purple-700 text-white hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-colors disabled:opacity-70"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {isLogin ? "Logging in..." : "Creating account..."}
                    </span>
                  ) : (
                    <>{isLogin ? "Log in" : "Create account"}</>
                  )}
                </button>

                {!isLogin && (
                  <p className="text-sm text-center text-gray-400 mt-4">
                    By signing up, you agree to our{" "}
                    <a href="#" className="text-blue-500 hover:text-blue-400">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-500 hover:text-blue-400">
                      Privacy Policy
                    </a>
                    .
                  </p>
                )}
              </form>

              {/* Social Auth Options */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-900 text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="py-2 px-4 border border-gray-700 rounded flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="py-2 px-4 border border-gray-700 rounded flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22,12c0-5.523-4.477-10-10-10S2,6.477,2,12c0,4.991,3.657,9.128,8.438,9.878V14.89h-2.54V12h2.54V9.797c0-2.506,1.492-3.89,3.777-3.89c1.094,0,2.238,0.195,2.238,0.195v2.46h-1.26c-1.243,0-1.63,0.771-1.63,1.562V12h2.773l-0.443,2.89h-2.33v6.988C18.343,21.128,22,16.991,22,12z" />
                    </svg>
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={toggleAuthMode}
              className="font-medium text-blue-500 hover:text-blue-400"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-6 border-t border-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-lg font-bold text-gray-200">ZapFlow</div>
              <p className="text-sm">© 2025 ZapFlow. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-blue-400">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-blue-400">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

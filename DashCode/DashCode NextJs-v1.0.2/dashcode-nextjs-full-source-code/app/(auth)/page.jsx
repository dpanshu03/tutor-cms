"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLogin } from "@/components/partials/auth/store"; // Update this path to match your store location

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle login logic here
    console.log('Login submitted:', formData);
    
    // Simulate authentication (replace with your actual auth logic)
    // For now, we'll assume login is successful
    const isLoginSuccessful = true; // Replace with actual authentication check
    
    if (isLoginSuccessful) {
      // Dispatch the login action to update Redux state
      dispatch(handleLogin(true));
      
      // Redirect to analytics after successful login
      router.push('/attendance');
    } else {
      // Handle login failure
      console.error('Login failed');
      // You might want to show an error message here
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Logo in top left */}
        <div className="absolute top-8 left-8 z-10">
          <Link href="/">
            <div className="flex items-center space-x-3">
              {/* BorderPlus Logo */}
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-300 to-cyan-400 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 relative">
                  {/* Simple sun/star icon to represent the BorderPlus logo */}
                  <div className="absolute inset-0 bg-white rounded-full"></div>
                  <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-white transform -translate-x-1/2 -translate-y-1"></div>
                  <div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-white transform -translate-x-1/2 translate-y-1"></div>
                  <div className="absolute left-0 top-1/2 w-2 h-0.5 bg-white transform -translate-y-1/2 -translate-x-1"></div>
                  <div className="absolute right-0 top-1/2 w-2 h-0.5 bg-white transform -translate-y-1/2 translate-x-1"></div>
                  <div className="absolute top-1 left-1 w-1 h-0.5 bg-white transform rotate-45"></div>
                  <div className="absolute top-1 right-1 w-1 h-0.5 bg-white transform -rotate-45"></div>
                  <div className="absolute bottom-1 left-1 w-1 h-0.5 bg-white transform -rotate-45"></div>
                  <div className="absolute bottom-1 right-1 w-1 h-0.5 bg-white transform rotate-45"></div>
                </div>
              </div>
              <span className="text-2xl font-bold text-slate-800">BorderPlus</span>
            </div>
          </Link>
        </div>

        {/* Main Content */}
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            {/* Login Form Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Sign In</h2>
                <p className="text-slate-600">Welcome back to BorderPlus</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
                  style={{ backgroundColor: '#121640' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0f1235'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#121640'}
                >
                  Sign In
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="text-sm text-slate-500">
                © 2024 BorderPlus. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .focus\\:ring-cyan-300:focus {
          --tw-ring-color: #80D9F9;
        }
        input:focus {
          border-color: #80D9F9;
          box-shadow: 0 0 0 3px rgba(128, 217, 249, 0.1);
        }
        button:focus {
          box-shadow: 0 0 0 3px rgba(128, 217, 249, 0.3);
        }
      `}</style>
    </>
  );
};

export default Login;
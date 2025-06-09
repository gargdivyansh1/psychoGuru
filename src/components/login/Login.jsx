import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';


function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loginError, setLoginError] = useState('');

    const validateField = (name, value) => {
        if (!value.trim()) return 'This field is required';
        if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        if (name === 'password' && value.length < 8) return 'Password must be at least 8 characters';
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
        }
        if (loginError) setLoginError('');
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            newErrors[key] = validateField(key, formData[key]);
        });

        setErrors(newErrors);
        if (Object.values(newErrors).some((error) => error)) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            if (formData.password !== 'psychoguru123') {
                setLoginError('Invalid email or password');
            } else {
                alert('Login successful! Redirecting...');
            }
        }, 1500);
    };

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black flex items-center justify-center p-4 text-white">

                <motion.div
                    className="w-full max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-violet-800 via-fuchsia-700 to-violet-900 p-6 text-center rounded-t-2xl">
                            <h1 className="text-3xl font-extrabold text-white">Welcome Back</h1>
                            <p className="text-purple-200 mt-1 text-sm">Sign in to your PsychoGuru account</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            {/* Error Alert */}
                            {loginError && (
                                <div className="bg-red-950 border border-red-800 text-red-300 px-4 py-3 rounded-md flex items-start gap-2">
                                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <span>{loginError}</span>
                                </div>
                            )}

                            {/* Email Field */}
                            <div className="space-y-1">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center gap-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        className={`w-full bg-neutral-800 text-white placeholder-gray-500 pl-10 pr-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${errors.email ? 'border-red-600 focus:ring-red-500' : 'border-neutral-700 focus:ring-violet-600'
                                            }`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-400 text-sm flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="space-y-1">
                                <label htmlFor="password" className="text-sm font-medium text-gray-300 flex items-center gap-1">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="••••••••"
                                        autoComplete="current-password"
                                        className={`w-full bg-neutral-800 text-white placeholder-gray-500 pl-10 pr-10 py-3 rounded-md border focus:outline-none focus:ring-2 ${errors.password ? 'border-red-600 focus:ring-red-500' : 'border-neutral-700 focus:ring-violet-600'
                                            }`}
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-violet-400"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-400 text-sm flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Remember & Forgot */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 text-sm text-gray-400">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-violet-600 bg-neutral-800 border-gray-600 rounded"
                                    />
                                    Remember me
                                </label>
                                <Link to="/forgot-password" className="text-sm text-violet-400 hover:underline">
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full mt-6 transition font-semibold px-6 py-3 rounded-md flex items-center justify-center gap-2 ${isSubmitting
                                    ? 'bg-violet-800/60 cursor-not-allowed'
                                    : 'bg-violet-600 hover:bg-violet-700'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                        </svg>
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </form>

                        {/* Footer */}
                        <div className="px-6 pb-6 text-center">
                            <p className="text-sm text-gray-500">
                                Don’t have an account?{' '}
                                <Link to="/register" className="text-violet-400 hover:text-violet-300 font-medium">
                                    Create one
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Demo Note */}
                    <p className="mt-6 text-center text-sm text-gray-500">Demo: Any email, password is "psychoguru123"</p>
                </motion.div>
            </div>
        </div>


    );
}

export default Login;

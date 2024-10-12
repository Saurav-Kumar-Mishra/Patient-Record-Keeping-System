import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Logging in with', { email, password })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6  rounded-md shadow-md">
                <div className="text-center flex justify-center ">
                    {/* Logo Placeholder */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-lock-keyhole"
                    >
                        <circle cx="12" cy="16" r="1" />
                        <rect x="3" y="10" width="18" height="12" rx="2" />
                        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                    </svg>
                </div>
                <h2 className="text-2xl text-center font-semibold text-black">
                    Sign in to your account
                </h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-black"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                                placeholder="Enter your email "
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-black"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 top-2 right-1 flex items-center bg-white  h-8 w-fit  "
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-eye-off"
                                        >
                                            <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                                            <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                                            <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                                            <path d="m2 2 20 20" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-eye"
                                        >
                                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-black"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="/forgot-password"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Sign in
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <span className="text-sm text-gray-500">
                        Or continue with
                    </span>
                    <div className="mt-3 flex justify-center space-x-4">
                        <button className="w-full py-2 px-4 font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200  border-zinc-950">
                            Google
                        </button>
                        <button className="w-full py-2 px-4 font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 border-zinc-950">
                            Microsoft
                        </button>
                    </div>
                </div>

                <p className="mt-6 text-sm text-center text-gray-500">
                    Not a member?{' '}
                    <Link
                        to="/register"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Register now
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage

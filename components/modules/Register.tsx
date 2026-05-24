'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface LoginProps {
    onSuccess?: () => void;
}

const Register = ({ onSuccess }: LoginProps) => {
    const router = useRouter();
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const titleForm = isLoginMode ? 'ورود' : 'ثبت‌نام';
    const descriptionForm = isLoginMode
        ? 'به صفحه ورود نواندیش خوش‌ برگشتید'
        : 'به صفحه ثبت‌نام نواندیش خوش‌آمدید';
    const btnTitleForm = isLoginMode ? 'ورود' : 'ثبت‌نام';
    const showConfirmInput = !isLoginMode;
    const showSignupLink = isLoginMode;
    const showLoginLink = !isLoginMode;

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isLoginMode && password !== confirmPassword) {
            alert('رمز عبور با تکرار آن مطابقت ندارد');
            return;
        }

        // TODO: اتصال به استور احراز هویت
        // const userStore = useUserStore();
        // userStore.login(username, password);

        router.push('/');
        onSuccess?.();
    };

    const switchToSignup = () => {
        setIsLoginMode(false);
    };

    const switchToLogin = () => {
        setIsLoginMode(true);
    };

    return (
        <div className="text-center">
            <div className="w-full h-auto flex flex-col items-center my-2">
                <Image
                    src="/logo.avif"
                    width={75}
                    height={75}
                    alt="Logo"
                    priority
                    className="rounded-full"
                />
                <div className="flex flex-col gap-2 mb-4">
                    <span className="text-teal-600 text-4xl font-lalezar dark:text-teal-400">
                        {titleForm}
                    </span>
                    <p className="text-gray-500 text-lg dark:text-gray-300">
                        {descriptionForm}
                    </p>
                </div>
            </div>

            <form className="flex flex-col items-center mx-auto gap-6 w-fit" onSubmit={handleSubmit}>
                <input
                    className="w-96 px-2 py-2 bg-gray-50 rounded-xl border border-gray-300 dark:bg-gray-700 placeholder:text-sm dark:placeholder:text-gray-400 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="text"
                    placeholder="نام کاربری را وارد کنید"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className="w-96 px-2 py-2 bg-gray-50 rounded-xl border border-gray-300 dark:bg-gray-700 placeholder:text-sm dark:placeholder:text-gray-400 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="password"
                    placeholder="رمز عبور را وارد کنید"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {showConfirmInput && (
                    <input
                        className="w-96 px-2 py-2 bg-gray-50 rounded-xl border border-gray-300 dark:bg-gray-700 placeholder:text-sm dark:placeholder:text-gray-400 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        type="password"
                        placeholder="رمز عبور را دوباره وارد کنید"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                )}
                <button
                    className="bg-teal-500 text-white text-xl w-full rounded-xl py-3 cursor-pointer hover:bg-teal-600 duration-200 font-medium"
                    type="submit"
                >
                    {btnTitleForm}
                </button>
            </form>

            <div className="mt-4">
                {showSignupLink && (
                    <span
                        className="mt-4 text-sm text-gray-800 hover:text-sky-600 duration-200 cursor-pointer dark:text-white inline-block"
                        onClick={switchToSignup}
                    >
                        حساب کاربری ندارید؟ ثبت‌نام
                    </span>
                )}
                {showLoginLink && (
                    <span
                        className="mt-4 text-sm text-gray-800 hover:text-sky-600 duration-200 cursor-pointer dark:text-white inline-block"
                        onClick={switchToLogin}
                    >
                        حساب کاربری دارید؟ ورود
                    </span>
                )}
            </div>
        </div>
    );
};

export default Register;
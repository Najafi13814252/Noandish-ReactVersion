'use client';

import { useForm } from 'react-hook-form';
import { SignupFormValues } from '@/types/auth';
import { Icon } from '@iconify/react';
import unviewIcon from '@iconify-icons/solar/eye-closed-outline'
import viewIcon from '@iconify-icons/solar/eye-outline'
import { useState } from 'react';

type Props = {
    onSubmit: (data: SignupFormValues) => void;
    loading: boolean;
};

export default function SignupForm({ onSubmit, loading }: Props) {
    const { register, handleSubmit, formState: { errors }, } = useForm<SignupFormValues>();

    const [passType, setPassType] = useState<'password' | 'text'>('password')

    const handlePassType = () => {
        if (passType === 'password') {
            setPassType('text')
        } else {
            setPassType('password')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center mx-auto gap-6">

            <div className='flex gap-2 items-center'>
                {/* نام */}
                <div className='register-forms_style'>
                    <input
                        placeholder="نام"
                        className={`register-form ${errors.firstname ? 'register-form_error' : 'register-form_true'}`}
                        {...register('firstname', {
                            required: 'نام را وارد کنید',
                            minLength: {
                                value: 4,
                                message: 'نام حداقل باید شامل 4 حرف باشد'
                            },
                            maxLength: {
                                value: 30,
                                message: 'نام حداکثر باید شامل 30 حرف باشد'
                            },
                        })} />

                    {errors.firstname && (
                        <p className="text-red-500 text-sm">{errors.firstname?.message}</p>
                    )}
                </div>


                {/* نام خانوادگی */}
                <div className='register-forms_style'>
                    <input
                        placeholder="نام‌خانوادگی"
                        className={`register-form ${errors.lastname ? 'register-form_error' : 'register-form_true'}`}
                        {...register('lastname', {
                            required: 'نام‌خانوادگی را وارد کنید',
                            minLength: {
                                value: 4,
                                message: 'نام‌خانوادگی حداقل باید شامل 4 حرف باشد'
                            },
                            maxLength: {
                                value: 30,
                                message: 'نام‌خانوادگی حداکثر باید شامل 30 حرف باشد'
                            },
                        })} />

                    {errors.lastname && (
                        <p className="text-red-500 text-sm">{errors.lastname?.message}</p>
                    )}
                </div>
            </div>


            {/* ایمیل */}
            <div className='register-forms_style'>
                <input
                    placeholder="ایمیل"
                    className={`register-form ${errors.email ? 'register-form_error' : 'register-form_true'}`}
                    {...register('email', {
                        required: 'ایمیل را وارد کنید',
                        minLength: {
                            value: 4,
                            message: 'ایمیل حداقل باید شامل 4 حرف باشد'
                        },
                        maxLength: {
                            value: 30,
                            message: 'ایمیل حداکثر باید شامل 30 حرف باشد'
                        },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'ایمیل معتبر نیست'
                        }
                    })} />

                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email?.message}</p>
                )}
            </div>


            {/* نام کاربری */}
            <div className='register-forms_style'>
                <input
                    placeholder="نام‌کاربری"
                    className={`register-form ${errors.username ? 'register-form_error' : 'register-form_true'}`}
                    {...register('username', {
                        required: 'نام‌کاربری را وارد کنید',
                        minLength: {
                            value: 4,
                            message: 'نام‌کاربری حداقل باید شامل 4 حرف باشد'
                        },
                        maxLength: {
                            value: 30,
                            message: 'نام‌کاربری حداکثر باید شامل 30 حرف باشد'
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9_\-@$]{4,30}$/,
                            message: 'نام کاربری باید شامل حروف، اعداد و کاراکترهای -، _، @، $ باشد'
                        }
                    })} />

                {errors.username && (
                    <p className="text-red-500 text-sm">{errors.username?.message}</p>
                )}
            </div>


            {/* رمز عبور */}
            <div className='register-forms_style'>
                <div className={`register-form flex items-center justify-between ${errors.password ? 'register-form_error' : 'register-form_true'}`}>
                    <input
                        className='outline-none'
                        type={passType}
                        placeholder="رمز عبور"
                        {...register('password', {
                            required: 'رمز عبور را وارد کنید',
                            minLength: {
                                value: 8,
                                message: 'رمز عبور یا ایمیل حداقل باید شامل 4 حرف باشد'
                            },
                            maxLength: {
                                value: 30,
                                message: 'رمز عبور یا ایمیل حداکثر باید شامل 30 حرف باشد'
                            },
                            pattern: /^(?=.*[A-Za-z])(?=.*\d)/
                        })}
                    />

                    <Icon icon={passType === 'password' ? viewIcon : unviewIcon} className='text-gray-500 text-xl cursor-pointer' onClick={handlePassType} />
                </div>

                {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password?.message}</p>
                )}
            </div>

            <button className="button-register_form" type="submit">
                {loading ? <Icon icon="svg-spinners:gooey-balls-1" className='mx-auto text-3xl' /> : 'ثبت‌نام'}
            </button>
        </form>
    );
}
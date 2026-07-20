'use client';

import { Controller, useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';
import unviewIcon from '@iconify-icons/solar/eye-closed-outline'
import viewIcon from '@iconify-icons/solar/eye-outline'
import { useState, useTransition } from 'react';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/schemas/auth';
import { useRouter } from 'next/navigation';
import { signupAction } from '@/actions/auth-action';
import toast from 'react-hot-toast';

export default function SignupForm({ onSuccess }: { onSuccess?: () => void }) {
    const [passType, setPassType] = useState<'password' | 'text'>('password')

    const [isPending, startTransition] = useTransition()

    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: ""
        }
    })

    const onSubmit = (data: z.infer<typeof signupSchema>) => {
        startTransition(async () => {
            try {
                const result = await signupAction(data)
                if (!result?.success) {
                    toast.error(result?.message || '', {
                        style: {
                            fontSize: '0.84rem',
                            border: 'solid 1px red',
                            background: 'oklch(97.1% 0.013 17.38)',
                            color: 'red',
                        }
                    })
                } else {
                    toast.success("ثبت‌نام با موفقیت انجام شد")
                    onSuccess?.()
                    router.push("/")
                }
            } catch {
                toast.error("ثبت‌نام ناموفق بود")
            }
        })
    }

    const handlePassType = () => {
        if (passType === 'password') {
            setPassType('text')
        } else {
            setPassType('password')
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center mx-auto gap-6">

            <div className='flex gap-2 items-center'>
                {/* نام */}
                <Controller name='firstname' control={form.control} render={({ field, fieldState }) => (
                    <div className='register-forms_style'>
                        <input
                            className={`register-form ${fieldState.invalid ? 'register-form_error' : 'register-form_true'}`}
                            aria-invalid={fieldState.invalid}
                            {...field}
                            type="text"
                            placeholder="نام"
                        />
                        {fieldState.invalid && (
                            <p className='text-red-500 text-sm'>{fieldState.error?.message}</p>
                        )}
                    </div>
                )}>
                </Controller>

                {/* نام خانوادگی */}
                <Controller name='lastname' control={form.control} render={({ field, fieldState }) => (
                    <div className='register-forms_style'>
                        <input
                            className={`register-form ${fieldState.invalid ? 'register-form_error' : 'register-form_true'}`}
                            aria-invalid={fieldState.invalid}
                            {...field}
                            type="text"
                            placeholder="نام‌خانوادگی"
                        />
                        {fieldState.invalid && (
                            <p className='text-red-500 text-sm'>{fieldState.error?.message}</p>
                        )}
                    </div>
                )}>
                </Controller>
            </div>


            {/* ایمیل */}
            <Controller name='email' control={form.control} render={({ field, fieldState }) => (
                <div className='register-forms_style'>
                    <input
                        className={`register-form ${fieldState.invalid ? 'register-form_error' : 'register-form_true'}`}
                        aria-invalid={fieldState.invalid}
                        {...field}
                        type="text"
                        placeholder="ایمیل"
                    />
                    {fieldState.invalid && (
                        <p className='text-red-500 text-sm'>{fieldState.error?.message}</p>
                    )}
                </div>
            )}>
            </Controller>


            {/* نام کاربری */}
            <Controller name='username' control={form.control} render={({ field, fieldState }) => (
                <div className='register-forms_style'>
                    <input
                        className={`register-form ${fieldState.invalid ? 'register-form_error' : 'register-form_true'}`}
                        aria-invalid={fieldState.invalid}
                        {...field}
                        type="text"
                        placeholder="نام‌کاربری"
                    />
                    {fieldState.invalid && (
                        <p className='text-red-500 text-sm'>{fieldState.error?.message}</p>
                    )}
                </div>
            )}>
            </Controller>


            {/* رمز عبور */}
            <Controller name='password' control={form.control} render={({ field, fieldState }) => (
                <div className='register-forms_style'>
                    <div className={`register-form flex items-center justify-between ${fieldState.invalid ? 'register-form_error' : 'register-form_true'}`}>
                        <input
                            className="outline-none"
                            aria-invalid={fieldState.invalid}
                            {...field}
                            type={passType}
                            placeholder="رمز عبور را وارد کنید"
                        />

                        <Icon icon={passType === 'password' ? viewIcon : unviewIcon} className='text-gray-500 text-xl cursor-pointer' onClick={handlePassType} />
                    </div>
                    {fieldState.invalid && (
                        <p className='text-red-500 text-sm'>{fieldState.error?.message}</p>
                    )}
                </div>
            )}>
            </Controller>

            <button className="button-register_form" type="submit">
                {isPending ? <Icon icon="svg-spinners:gooey-balls-1" className='mx-auto text-3xl' /> : 'ثبت‌نام'}
            </button>
        </form>
    );
}
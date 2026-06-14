'use client';

import { useForm } from 'react-hook-form';
import { SignupFormValues } from '@/types/auth';
import { Icon } from '@iconify/react';

type Props = {
    onSubmit: (data: SignupFormValues) => void;
    loading: boolean;
};

export default function SignupForm({ onSubmit, loading }: Props) {
    const { register, handleSubmit } = useForm<SignupFormValues>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center mx-auto gap-6">

            <input {...register('firstname')} placeholder="نام" className="register-form" />
            <input {...register('lastname')} placeholder="نام خانوادگی" className="register-form" />
            <input {...register('email')} placeholder="ایمیل" className="register-form" />
            <input {...register('username')} placeholder="نام کاربری" className="register-form" />
            <input type="password" {...register('password')} placeholder="رمز" className="register-form" />

            <button className="btn-primary" type="submit">
                {loading ? <Icon icon="svg-spinners:gooey-balls-1"/> : 'ثبت‌نام'}
            </button>
        </form>
    );
}
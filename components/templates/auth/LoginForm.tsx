'use client';

import { useForm } from 'react-hook-form';
import { LoginFormValues } from '@/types/auth';
import { Icon } from '@iconify/react';


type Props = {
  onSubmit: (data: LoginFormValues) => void;
  loading: boolean;
};

export default function LoginForm({ onSubmit, loading }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center mx-auto gap-6">

      <input
        className="register-form"
        placeholder="نام کاربری یا ایمیل"
        {...register('identifier', { required: true })}
      />

      {errors.identifier && (
        <p className="text-red-500 text-sm">این فیلد الزامی است</p>
      )}

      <input
        type="password"
        className="register-form"
        placeholder="رمز عبور"
        {...register('password', { required: true })}
      />

      <button className="bg-teal-500 text-white text-xl w-full rounded-xl py-3 hover:bg-teal-600 duration-200" type="submit">
        {loading ? <Icon icon="svg-spinners:gooey-balls-1"/> : 'ورود'}
      </button>
    </form>
  );
}
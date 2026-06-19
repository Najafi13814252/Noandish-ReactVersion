'use client';

import { useForm } from 'react-hook-form';
import { LoginFormValues } from '@/types/auth';
import { Icon } from '@iconify/react';
import unviewIcon from '@iconify-icons/solar/eye-closed-outline'
import viewIcon from '@iconify-icons/solar/eye-outline'
import { useState } from 'react';


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

      {/* نام کاربری یا ایمیل */}
      <div className='register-forms_style'>
        <input
          className={`register-form ${errors.identifier ? 'register-form_error' : 'register-form_true'}`}
          placeholder="نام کاربری یا ایمیل"
          {...register('identifier', {
            required: 'نام‌کاربری یا ایمیل را وارد کنید',
            minLength: {
              value: 4,
              message: 'نام‌کاربری یا ایمیل حداقل باید شامل 4 حرف باشد'
            },
            maxLength: {
              value: 30,
              message: 'نام‌کاربری یا ایمیل حداکثر باید شامل 30 حرف باشد'
            },
            validate: (value) => {
              const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

              if (isEmail) {
                return true;
              }

              const isUsername = /^[a-zA-Z0-9_\-@$]{4,30}$/.test(value);

              return (
                isUsername ||
                "نام‌کاربری یا ایمیل اشتباه است"
              );
            },

          })}
        />

        {errors.identifier && (
          <p className="text-red-500 text-sm">{errors.identifier?.message}</p>
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

          <Icon icon={passType === 'password' ? unviewIcon : viewIcon} className='text-gray-500 text-xl cursor-pointer' onClick={handlePassType} />
        </div>

        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        )}
      </div>

      <button className="button-register_form" type="submit">
        {loading ? <Icon icon="svg-spinners:gooey-balls-1" className='mx-auto text-3xl' /> : 'ورود'}
      </button>
    </form>
  );
}
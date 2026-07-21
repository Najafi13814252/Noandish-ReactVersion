'use client';

import { Controller, useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';
import unviewIcon from '@iconify-icons/solar/eye-closed-outline'
import viewIcon from '@iconify-icons/solar/eye-outline'
import { useContext, useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas/auth';
import { loginAction } from '@/actions/auth-action';
import z from 'zod';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/contexts/Auth';

export default function LoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isPending, startTransition] = useTransition()
  const [passType, setPassType] = useState<'password' | 'text'>('password')

  const router = useRouter()
  const {refetchUser} = useContext(AuthContext)

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: ""
    }
  })

  const handlePassType = () => {
    if (passType === 'password') {
      setPassType('text')
    } else {
      setPassType('password')
    }
  }

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      try {
        await loginAction(data)
        toast.success("ورود با موفقیت انجام شد")
        onSuccess?.()
        await refetchUser()
        router.push("/")
      } catch {
        toast.error("مشخصات کاربری(ایمیل یا نام‌کاربری) یا رمز عبور صحیح نمی‌باشد")
      }
    })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center mx-auto gap-6 bggre">

      {/* نام کاربری یا ایمیل */}
      <Controller name='identifier' control={form.control} render={({ field, fieldState }) => (
        <div className='register-forms_style'>
          <input
            className={`register-form ${fieldState.invalid ? 'register-form_error' : 'register-form_true'}`}
            aria-invalid={fieldState.invalid}
            {...field}
            type="text"
            placeholder="نام کاربری یا ایمیل"
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
        {isPending ? <Icon icon="svg-spinners:gooey-balls-1" className='mx-auto text-3xl' /> : 'ورود'}
      </button>
    </form >
  );
}
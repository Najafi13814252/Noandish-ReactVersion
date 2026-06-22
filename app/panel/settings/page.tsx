'use client'

import { Icon } from '@iconify/react'
import editIcon from '@iconify-icons/solar/document-add-line-duotone'
import { apiFetch } from '@/services/api'
import { useEffect, useState } from 'react'
import { UserType } from '@/types/user'

function ProfileSettings() {
    const [user, setUser] = useState<UserType>({} as UserType)

    useEffect(() => {
        const handleUser = async () => {
            const user = await apiFetch('/user')
            setUser(user)
        }
        handleUser()
    }, [])

    return (
        <div className='flex flex-col gap-20'>
            <div>
                <h2 className="text-xl dark:text-white mb-6">اطلاعات کاربری</h2>

                <form action="#" className='flex flex-col gap-12'>
                    <div className='grid grid-cols-3 gap-6'>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="email" className='text-sm pr-1 text-gray-700'>ایمیل</label>
                            <div className='register-form register-form_true flex items-center justify-between'>
                                <input type="text" id='email' value={user?.email || ''} />

                                <Icon icon={editIcon} className='text-xl text-gray-600' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="pass" className='text-sm pr-1 text-gray-700'>رمز عبور</label>
                            <div className='register-form register-form_true flex items-center justify-between'>
                                <input type="text" id='pass' />

                                <Icon icon={editIcon} className='text-xl text-gray-600'/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <h2 className="text-xl dark:text-white mb-6">اطلاعات پروفایل</h2>

                <form action="#" className='flex flex-col gap-12'>
                    <div className='grid grid-cols-3 gap-6'>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="fname" className='text-sm pr-1 text-gray-700'>نام</label>
                            <input type="text" id='fname' className='register-form register-form_true' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="lname" className='text-sm pr-1 text-gray-700'>نام‌خانوادگی</label>
                            <input type="text" id='lname' className='register-form register-form_true' />
                        </div>
                    </div>
                    <button className='bg-main-100 text-white font-medium w-fit px-8 py-2 rounded-lg cursor-pointer'>ذخیره اطلاعات</button>
                </form>
            </div>
        </div>
    )
}

export default ProfileSettings

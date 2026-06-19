import React from 'react'

function ProfileSettings() {
    return (
        <div className='flex flex-col gap-20'>
            <div>
                <h2 className="text-xl dark:text-white mb-6">اطلاعات کاربری</h2>

                <form action="#" className='flex flex-col gap-12'>
                    <div className='grid grid-cols-3 gap-6'>
                        <div>
                            <label htmlFor="fname">نام</label>
                            <input type="text" id='fname' className='register-form register-form_true' />
                        </div>
                        <div>
                            <label htmlFor="fname">نام</label>
                            <input type="text" id='fname' className='register-form register-form_true' />
                        </div>
                        <div>
                            <label htmlFor="fname">نام</label>
                            <input type="text" id='fname' className='register-form register-form_true' />
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <h2 className="text-xl dark:text-white mb-6">اطلاعات پروفایل</h2>

                <form action="#" className='flex flex-col gap-12'>
                    <div className='grid grid-cols-3 gap-6'>
                        <div>
                            <label htmlFor="fname">نام</label>
                            <input type="text" id='fname' className='register-form register-form_true' />
                        </div>
                        <div>
                            <label htmlFor="fname">نام</label>
                            <input type="text" id='fname' className='register-form register-form_true' />
                        </div>
                    </div>
                    <button className='bg-main-100 text-white font-medium w-fit px-8 py-2 rounded-lg cursor-pointer'>ذخیره اطلاعات</button>
                </form>
            </div>
        </div>
    )
}

export default ProfileSettings

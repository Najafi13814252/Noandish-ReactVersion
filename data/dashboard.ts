import { IconifyIcon } from "@iconify/react"
import bookIcon from '@iconify-icons/solar/book-2-line-duotone'
import saveIcon from '@iconify-icons/solar/bookmark-line-duotone'
// import dialogIcon from '@iconify-icons/solar/dialog-line-duotone'
import walletIcon from '@iconify-icons/solar/wallet-money-line-duotone'
import userIcon from '@iconify-icons/solar/user-circle-line-duotone'
import logoutIcon from '@iconify-icons/solar/logout-line-duotone'

type PanelMenuType = {
    id: number
    title: string
    icon: IconifyIcon
    route: string
}

const panel:PanelMenuType[] = [
    { id: 1, title: 'دوره‌های من', icon: bookIcon, route: '/panel/my-courses' },
    { id: 2, title: 'علاقه‌مندی‌ها', icon: saveIcon, route: '/panel/favorites' },
    // { id: 3, title: 'سوال‌های من', icon: dialogIcon, route: '/' },
    { id: 4, title: 'لیست تراکنش‌ها', icon: walletIcon, route: '/panel/transactions' },
    { id: 5, title: 'تنظیمات پروفایل', icon: userIcon, route: '/' }
]

export default panel
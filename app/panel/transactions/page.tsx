import { Icon } from "@iconify/react"
import okStatusIcon from '@iconify-icons/solar/bill-check-outline'
import failStatusIcon from '@iconify-icons/solar/bill-cross-outline'

type Transaction = {
    id: number
    title: string
    date: string
    amount: number
    transitionNumber: string
    status: boolean
}

const transactions: Transaction[] = [
    { id: 1, title: 'مدیریت حرفه‌ای', date: '2025-03-18', amount: 1659000, transitionNumber: '11858', status: true },
    { id: 2, title: 'توسعه فردی', date: '2024-08-29', amount: 2300000, transitionNumber: '92303', status: false },
    { id: 3, title: 'هنر مذاکره', date: '2024-03-10', amount: 1266000, transitionNumber: '50069', status: true }
]

function Transactions() {
    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-2xl dark:text-white">گزارش تراکنش‌ها</h2>

            <div className="overflow-x-auto w-full">
                <table className="min-w-[700px] w-full text-center rounded-md">
                    <thead className="text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
                        <tr>
                            <td className="px-6 py-3 text-right">#</td>
                            <td className="px-6 py-3">عنوان دوره</td>
                            <td className="px-6 py-3">تاریخ تراکنش</td>
                            <td className="px-6 py-3">مبلغ تراکنش (تومان)</td>
                            <td className="px-6 py-3">شماره تراکنش</td>
                            <td className="px-6 py-3">وضعیت</td>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={transaction.id} className="bg-white border-b border-b-gray-200 dark:bg-darkMode dark:text-white dark:border-b-gray-800">
                                <td className="px-2 py-3">
                                    <p className="bg-gray-200 px-2 py-1 rounded-md flex items-center w-10 justify-center dark:bg-gray-800">{index + 1}</p>
                                </td>
                                <td className="px-6 py-3">{transaction.title}</td>
                                <td className="px-6 py-3">{transaction.date}</td>
                                <td className="px-6 py-3">{transaction.amount.toLocaleString('fa-ir')}</td>
                                <td className="px-6 py-3">{transaction.transitionNumber}</td>
                                <td className="px-6 py-3">
                                    {transaction.status ? (
                                        <div className="flex items-center gap-1 py-1 justify-center bg-green-100 text-green-500 rounded-md dark:bg-green-500/10" >
                                            <Icon className="text-xl" icon={okStatusIcon} />
                                            <span>موفق</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1 py-1 justify-center bg-red-100 text-red-500 rounded-md dark:bg-red-500/10" >
                                            <Icon className="text-lg" icon={failStatusIcon} />
                                            <span>ناموفق</span>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Transactions

'use client'

import {ITEMS_PER_PAGE, MOCK_DATA, MOCK_THEMES, MockData} from "@/constants/mock";
import {useRouter} from "next/navigation";
import {getTableRequsets, getTotalPages, getValidRequests} from "@/lib/helpers";
import {Pagination} from "@/app/requests/(components)/Pagination/Pagination";

interface RequestsTableProps {
    data: MockData[];
    currentPage: number;
}

export const RequestsTable = ({
    currentPage,
    data,
}: RequestsTableProps) => {

    const username = localStorage.getItem('username')
    const validRequests = getValidRequests(MOCK_DATA, username)
    const iterateRequests = getTableRequsets(validRequests, currentPage);
    const totalPages = getTotalPages(validRequests.length, ITEMS_PER_PAGE)
    const router = useRouter();

    return (
        <>
        <table className="bg-white w-full">
            <thead>
            <tr className="border-b-4 md:border-blue-600">
                {MOCK_THEMES.slice(0, 6).map((theme) => (
                    <th key={theme} scope="col" className="hidden md:table-cell text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        {theme}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {iterateRequests.map((data) => {
                let awaits = data.awaits;
                return (
                <tr key={data.id} className=" block md:table-row border-b border-gray-200 cursor-pointer [&:nth-child(even)]:bg-blue-300 md:[&:nth-child(even)]:bg-white"  onClick={() => {
                    router.push('/requests/' + data.id)
                }}>
                    {Object.values(data).slice(0, 6).map((value, index) => {
                        if (awaits) {
                            if (index == 0) {
                                return (
                                    <td key={index} className="block md:table-cell text-right md:text-left text-xs text-gray-900 font-light px-6 py-4 after:content-exclamation after:ml-2">
                                        {value}
                                    </td>
                                )
                            }

                        }
                        if (typeof value === 'boolean') {
                            return (
                                <td key={index} className="block md:table-cell text-right md:text-left text-xs text-gray-900 font-light px-6 py-4 ">
                                    {value ? 'Да' : 'Нет'}
                                </td>
                            )
                        }
                        return (
                        <td key={index} className="block md:table-cell text-right md:text-left text-xs text-gray-900 font-light px-6 py-4 ">
                            {value}
                        </td>
                    )})}
                </tr>
            )})}
            </tbody>
        </table>

            <Pagination totalPages={totalPages} />
        </>
    )
}
import {RequestsTable} from "@/app/requests/(components)/RequestsTable/RequestsTable";
import {MOCK_DATA} from "@/constants/mock";

export default function Requests({
    searchParams
}: {
    searchParams: { page?: string };
}) {

    const currentPage = Number(searchParams.page) || 1;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <RequestsTable data={MOCK_DATA} currentPage={currentPage}/>
        </main>
    );
}
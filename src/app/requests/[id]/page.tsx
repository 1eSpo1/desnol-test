import {RequestCard} from "@/app/requests/[id]/(components)/RequestCard/RequestCard";
import {MOCK_DATA, MockData} from "@/constants/mock";


export default function Page({params}: {params: {id: number}}) {

    const request = MOCK_DATA.find((data) => data.id == params.id) as MockData;
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <RequestCard request={request}/>
        </main>
    );
}
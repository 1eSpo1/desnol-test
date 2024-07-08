'use client'
import {MockData} from "@/constants/mock";
import {useState} from "react";


interface RequestCardProps {
    request: MockData;
}

export const RequestCard = ({request}: RequestCardProps) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="flex flex-col items-start justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Обращение № {request.id} от {request.creation_date}</h3>
            <span className="mb-2 tracking-tight text-gray-900 ">Тема: {request.theme}</span>
            <span className="mb-2 tracking-tight text-gray-900 ">Описание: {request.description}</span>
            <span className="mb-2 tracking-tight text-gray-900 ">Дедоайн: {request.deadline_date}</span>
            <span className="mb-2 tracking-tight text-gray-900 ">Состояние: {request.state}</span>
            <span className="mb-2 tracking-tight text-gray-900 ">Решение: {request.solution}</span>
            {expanded &&
                <>
                    <span className="mb-2 tracking-tight text-gray-900 ">Услуга: {request.service}</span>
                    <span className="mb-2 tracking-tight text-gray-900 ">Состав услуги: {request.serviceComposition}</span>
                </>
            }
            <button onClick={() => setExpanded(!expanded)} className="text-blue-500 mt-2">{expanded ? 'Свернуть' : 'Развернуть'}</button>
        </div>
    )
}
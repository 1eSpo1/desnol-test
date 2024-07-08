'use client'
import {useRouter} from "next/navigation";
import {useState} from "react";
import {validateForm} from "@/lib/helpers";

export const LoginForm = () => {

    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleUsernameChange = (event: any) => {
        setUsernameValue(event.target.value);
    };
    const handlePasswordChange = (event: any) => {
        setPasswordValue(event.target.value);
    }
    const router = useRouter()
    const handleLogin = (event: any) => {
        event.preventDefault()
        localStorage.setItem('username', usernameValue)
        if (validateForm(usernameValue, passwordValue))
        router.push('/requests')
    }
    return (
        <div className="z-10 flex-col w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <span className='text-3xl mb-10'>Вход в сервис</span>
            <form className="flex flex-col w-2/3 gap-5">
                <input type="text" onChange={handleUsernameChange} name="username" placeholder='Логин' className="py-2 px-4 rounded-xl outline-none"/>
                <div className="flex justify-between items-center bg-white rounded-xl px-4 focus::border-blue-500">
                    <input id="password" type={showPassword ? 'text' : 'password'} onChange={handlePasswordChange} name="password" placeholder='Пароль' className="w-full py-2 rounded-xl outline-none"/>
                    <div onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ?  'Скрыть' : 'Показать'}
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-mono">Запомнить меня</label>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={handleLogin}>Войти</button>
            </form>
        </div>
    )
}
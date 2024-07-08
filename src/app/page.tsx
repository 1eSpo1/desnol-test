import {LoginForm} from "@/app/(components)/LoginForm/LoginForm";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LoginForm />
        <a className="flex -space-x-px cursor-pointer text-blue-400">
            Забыли пароль?
        </a>
    </main>
  );
}

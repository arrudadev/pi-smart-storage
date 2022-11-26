import { ChangeEvent, useState } from 'react';

import { useRouter } from 'next/router';

export const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fakeLoginEmail = 'admin@gmail.com';
  const fakeLoginPassword = '12345678';

  function handleFakeLogin() {
    if (email === fakeLoginEmail && password === fakeLoginPassword) {
      router.push('/admin/dashboard');
    } else {
      alert('Login inválido');
    }
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
      <div className="rounded-t mb-0 px-6 py-6">
        <div className="text-center mb-3">
          <h6 className="text-blueGray-500 text-sm font-bold">Login</h6>
        </div>

        <hr className="mt-6 border-b-1 border-blueGray-300" />
      </div>

      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Email"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Senha"
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
          </div>

          <div className="text-center mt-6">
            <button
              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="button"
              onClick={handleFakeLogin}
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

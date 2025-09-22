"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <section className="bg-gray-50">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-8 lg:py-0">
        <a
          href="#"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-700"
        >
          <img
            className="mr-2 h-10 w-10"
            src="/img/logo.png"
            alt="Flowbite logo"
          />
          에코나라
        </a>

        <div className="w-full max-w-md rounded-lg  bg-white shadow">
          <div className="space-y-6 p-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-xl">
              플랫폼에 관리자로 로그인하기
            </h1>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  이메일 <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  required
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  비밀번호 <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  required
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>
              <button
                onClick={() => router.push("/dashboard")}
                type="submit"
                className="w-full rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

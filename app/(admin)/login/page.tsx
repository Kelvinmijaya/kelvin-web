import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Metadata} from 'next'

import LoginForm from './components/loginForm'

export const metadata: Metadata = {
  title: 'Signin | Kelvinmijaya Dashboard',
  description: 'This is Signin page for Kelvinmijaya Dashboard',
}

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="lg:w-1/3 sm:w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In
              </h2>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

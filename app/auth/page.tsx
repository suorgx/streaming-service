'use client';

import {useState} from "react";
import Image from 'next/image';
import Input from "@/components/input";

export default function Auth() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.png")] bg-cover bg-bottom'>
      <div className='h-full w-full bg-black bg-opacity-50'>
        <nav className='px-12 py-5'>
          <Image
            className='h-auto w-auto'
            src='/images/logo.png'
            width={185}
            height={50}
            alt='logo'
          />
        </nav>
        <div className='flex justify-center h-3/4'>
          <div className='bg-black bg-opacity-70 md:p-16 sm:p-8 p-4 lg:w-2/5 md:w-3/5 sm:w-4/5 w-full rounded-md self-center'>
            <h2 className='text-3xl text-white mb-8 font-medium'>
              Sign in
            </h2>
            <div className='flex flex-col gap-4'>
              <Input
                value={name}
                id='login'
                label='Username'
                onChange={(e: any) => setName(e.target.value)}
                type='text'
              />
              <Input
                value={email}
                id='email'
                label='Email'
                onChange={(e: any) => setEmail(e.target.value)}
                type='email'
              />
              <Input
                value={password}
                id='password'
                label='Password'
                onChange={(e: any) => setPassword(e.target.value)}
                type='password'
              />
              <button className='bg-red-500 mt-4 w-full rounded-md py-3 text-white hover:bg-red-600 transition'>
                Login
              </button>
              <div className='text-neutral-500 mt-6'>
                Don‘t have an account?
                <span className='text-white ml-1 hover:underline cursor-pointer'>Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

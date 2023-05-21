import axios from 'axios'
import React, { useState } from 'react'
import { signIn } from "next-auth/react"
import Image from 'next/image'
import Input from '@/components/Input'

export default function Auth() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [variant, setVariant] = useState<'login' | 'register'>('login')

  const toggleVariant = () => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    )
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (variant === 'login') {
        await signIn('credentials', {
          email,
          password,
          redirect: false,
          callbackUrl: '/'
        })
      } else {
        await axios.post('/api/register', { email, name, password })
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='relative h-full w-full bg-cover bg-left' style={{ backgroundImage: `url(/images/hero.png)`}}>
      <div className='h-full w-full bg-black bg-opacity-50'>
        <nav className='sm:px-8 sm:py-5 lg:px-12 p-4'>
          <Image
            src='/images/logo.png'
            width={185}
            height={50}
            alt='logo'
          />
        </nav>
        <div className='flex justify-center'>
          <form onSubmit={onSubmit} className='mt-20 bg-black bg-opacity-70 md:p-16 sm:p-8 p-4 lg:w-2/5 md:w-3/5 sm:w-4/5 w-full rounded-md self-center'>
            <h2 className='text-3xl text-white mb-8 font-medium'>
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === 'register' && (
                <Input
                  id='name'
                  value={name}
                  label='Username'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  type='text'
                />
              )}
              <Input
                id='email'
                value={email}
                label='Email'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                type='email'
              />
              <Input
                id='password'
                value={password}
                label='Password'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                type='password'
              />
              <button type='submit' className='bg-red-500 mt-4 w-full rounded-md py-3 text-white hover:bg-red-600 transition'>
                {variant === 'login' ? 'Login' : 'Sign Up'}
              </button>
              <div className="text-neutral-500 mt-6">
                {variant === 'login' ? "Don't have an account?" : 'Already have an account?'}
                <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                  {variant === 'login' ? 'Create an account' : 'Login'}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

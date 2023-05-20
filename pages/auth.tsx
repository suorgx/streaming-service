import {useCallback, useState} from 'react'
import axios from 'axios'
import Image from 'next/image'
import Input from '@/components/Input'

export default function Auth() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      })
    } catch (error) {
      console.log(error)
    }
  }, [email, name, password])

  return (
    <div className='relative h-full w-full sm:bg-[url("/images/hero.png")] bg-black bg-cover bg-left overflow-hidden'>
      <div className='h-full w-full bg-black bg-opacity-50'>
        <nav className='sm:px-8 sm:py-5 lg:px-12 p-4'>
          <Image
            className='h-auto w-auto'
            src='/images/logo.png'
            width={185}
            height={50}
            alt='logo'
          />
        </nav>
        <div className='flex justify-center'>
          <div className='mt-20 bg-black bg-opacity-70 md:p-16 sm:p-8 p-4 lg:w-2/5 md:w-3/5 sm:w-4/5 w-full rounded-md self-center'>
            <h2 className='text-3xl text-white mb-8 font-medium'>
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === 'register' && (
                <Input
                  value={name}
                  id='login'
                  label='Username'
                  onChange={(e: any) => setName(e.target.value)}
                  type='text'
                />
              )}
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
              <button onClick={register} className='bg-red-500 mt-4 w-full rounded-md py-3 text-white hover:bg-red-600 transition'>
                {variant === 'login' ? 'Login' : 'Sign Up'}
              </button>
              <div className='text-neutral-500 mt-6'>
                {variant === 'login' ? 'Don‘t have an account?' : 'Already have an account?'}
                <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                  {variant === 'login' ? 'Create an account' : 'Login'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

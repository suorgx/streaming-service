import Image from 'next/image';
import Input from "@/components/input";

export default function Auth() {

  return (
    <div className={'relative h-full w-full bg-[url("/images/hero.png")] bg-cover bg-bottom'}>
      <div className={'h-full w-full bg-black bg-opacity-50'}>
        <nav className={'px-12 py-5'}>
          <Image
            src="/images/logo.png"
            width={185}
            height={50}
            alt={'logo'}
          />
        </nav>
        <div className={'flex justify-center'}>
          <div className={'bg-black bg-opacity-70 p-16 mt-2 lg:w-2/5 md:w-4/5 rounded-md w-full self-center'}>
            <h2 className={'text-3xl text-white mb-8 font-medium'}>
              Sign in
            </h2>
            <div className={'flex flex-col gap-4'}>
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

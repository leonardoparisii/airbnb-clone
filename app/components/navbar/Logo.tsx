'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import LogoLg from '@/public/images/Logo.png'
import LogoSm from '@/public/images/Logo-2.svg'

const Logo = () => {
    const router = useRouter();

  return (
    <>
      <Image
          onClick={() => router.push('/')}
          alt="Logo"
          className="hidden logo-bp:block cursor-pointer"
          width={100}
          height={100} 
          src={LogoLg}
      />
      <Image
          onClick={() => router.push('/')}
          alt="Logo"
          className="logo-bp:hidden block cursor-pointer"
          width={30}
          height={32} 
          src={LogoSm} 
      />
    </>
    )
}

export default Logo
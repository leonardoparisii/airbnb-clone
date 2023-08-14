'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { useCallback, useState } from 'react'
import MenuItem from './MenuItem'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import { signOut } from "next-auth/react";
import { SafeUser } from '@/app/types'
import useRentModal from '@/app/hooks/useRentModal'

interface UserMenuProps {
  currentUser?: SafeUser | null
}
const UserMenu = ({ currentUser }: UserMenuProps) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [])

  const onRent = useCallback(() => {
    if (!currentUser){
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal])
  return (
    <div className='relative'>
        <div className='flex fex-row items-center gap-3'>
            <div
              onClick={onRent}
              className="hidden md:block text-[15px] font-bold rounded-full p-[5px] pl-[12px] hoer:bg-neutral-100 transition cursor-pointer"
            >
              Rent with Airbnb
            </div>
            <div
              onClick={toggleOpen}
              className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <AiOutlineMenu/>
              <div className='hidden md:block'>
                <Avatar src={currentUser?.image}/>
              </div>
            </div>
        </div>

        {isOpen && (
          <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-[56px] text-sm cursor-pointer'>
                  {currentUser ? (
                    <>
                      <MenuItem 
                        onClick={() => {}}
                        label='My trips'
                      />
                      <MenuItem
                        onClick={() => {}}
                        label='My favorites'
                      />
                      <MenuItem
                        onClick={() => {}}
                        label='My reservations'
                      />
                      <MenuItem
                        onClick={() => {}}
                        label='My properties'
                      />
                      <MenuItem
                        onClick={rentModal.onOpen}
                        label='Rent with Airbnb'
                      />
                      <hr />
                      <MenuItem
                        onClick={() => signOut()}
                        label='Logout'
                      />
                    </>
                  ) : (
                    <>
                      <MenuItem 
                        onClick={registerModal.onOpen}
                        label='Sign up'
                      />
                      <MenuItem
                        onClick={loginModal.onOpen}
                        label='Login'
                      />
                    </>
                  )}
          </div>
        )}
    </div>
  )
}

export default UserMenu
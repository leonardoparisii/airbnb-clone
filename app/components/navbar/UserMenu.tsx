'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { useCallback, useState } from 'react'
import MenuItem from './MenuItem'
import useRegisterModal from '@/app/hooks/useRegisterModal'

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [])
  return (
    <div className='relative'>
        <div className='flex fex-row items-center gap-3'>
            <div
              onClick={() => {}}
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
                <Avatar />
              </div>
            </div>
        </div>

        {isOpen && (
          <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
              <div className='flex flex-col cursor-pointer'>
                  <>
                  <MenuItem 
                    onClick={() => {}}
                    label='Sign up'
                  />
                  <MenuItem
                    onClick={registerModal.onOpen}
                    label='Log in'
                  />
                  </>
              </div>
          </div>
        )}
    </div>
  )
}

export default UserMenu
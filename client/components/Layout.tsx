import { useState } from 'react'
import ButtonClick from './ButtonClick'
import Icon from './Icon'
import { Modal, ModalFooter, ModalHeader, ModalMain } from './Modal'
import TextField from './TextField'

type MainLayoutProps = {
  children: React.ReactNode
  style?: string
}
export default function Layout({ children, style }: MainLayoutProps) {
  const [loginModal, setLoginModal] = useState(false)
  const [signUpModal, setSignUpModal] = useState(false)
  return (
    <div className='min-h-screen'>
      <div className='fixed top-0 left-0 right-0 h-12 bg-gray-800 border-b border-gray-600'>
        <div className='flex h-full items-center justify-between px-6'>
          <div>Magic Book Store</div>
          <div className='flex gap-6'>
            <div className='flex gap-1'>
              <Icon icon='ShoppingCartIcon' style=''></Icon>
              {`(${0})`}
            </div>
            <button
              className=' hover:underline'
              onClick={() => {
                setSignUpModal(true)
              }}
            >
              Sign Upxxx
            </button>
            <button
              className=' hover:underline'
              onClick={() => {
                setLoginModal(true)
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className='pt-12 h-screen bg-black object-center'>{children}</div>
      <Modal open={loginModal} setOpen={setLoginModal}>
        <ModalHeader setOpen={setLoginModal}>Login</ModalHeader>
        <ModalMain>
          <div className='grid gap-6 pt-6 px-10 pb-6'>
            <TextField label='Username'></TextField>
            <TextField label='Password'></TextField>
          </div>
        </ModalMain>
        <ModalFooter>
          <ButtonClick style='w-full'>Login</ButtonClick>
        </ModalFooter>
      </Modal>
      <Modal open={signUpModal} setOpen={setSignUpModal}>
        <ModalHeader setOpen={setSignUpModal}>Sign Up</ModalHeader>
        <ModalMain>
          <div className='grid gap-6 pt-6 px-10 pb-6'>
            <TextField label='Username'></TextField>
            <TextField label='Password'></TextField>
            <TextField label='Email'></TextField>
          </div>
        </ModalMain>
        <ModalFooter>
          <ButtonClick style='w-full'>Sign Up</ButtonClick>
        </ModalFooter>
      </Modal>
    </div>
  )
}

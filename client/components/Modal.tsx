import Icon from './Icon'

interface ModalProps {
  children?: React.ReactNode
  open?: boolean
  setOpen?: (value: boolean) => void
}

const ModalHeader: React.FC<ModalProps> = ({ children, setOpen }) => {
  return (
    <div className='flex items-start justify-between p-2'>
      <div>{children}</div>
      <div
        className='cursor-pointer'
        onClick={() => (setOpen ? setOpen(false) : null)}
      >
        <Icon icon='XMarkIcon' style='stroke-slate-300'></Icon>
      </div>
    </div>
  )
}
const ModalMain: React.FC<ModalProps> = ({ children }) => {
  return <div className='relative p-2 flex-auto text-base'>{children}</div>
}
const ModalFooter: React.FC<ModalProps> = ({ children }) => {
  return <div className='flex items-center  p-2 '>{children}</div>
}

const Modal: React.FC<ModalProps> = ({ open, setOpen, children }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget && setOpen) {
      setOpen(false)
    }
  }

  return (
    <div>
      {open ? (
        <>
          <div
            className='justify-center items-center flex overflow-x-hidden
            overflow-y-auto fixed inset-0 z-50 
             bg-black/60'
            onClick={handleClick}
          >
            <div className='relative min-w-[300px] max-w-[500px] my-6 mx-auto '>
              <div className='border border-primary rounded-lg shadow-primary/50 shadow-lg relative flex flex-col w-full outline-none focus:outline-none divide-y divide-primary/50'>
                {children}
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </div>
  )
}

export { Modal, ModalHeader, ModalMain, ModalFooter }

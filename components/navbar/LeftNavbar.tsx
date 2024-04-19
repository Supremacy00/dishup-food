import React from 'react'
import { LeftNavProps } from '@/@types'

const LeftNavbar: React.FC<LeftNavProps>  = ({isOpen, setIsOpen}) => {
  return (
    <article
      className={`${
        isOpen ? "visible" : "invisible"
      } mx-auto w-full fixed right-0 left-0 top-0 bottom-0 inset-0 bg-black bg-opacity-50 flex justify-center z-40 font-poppins text-primary-text`}
    >
      <nav
        className={`${
          isOpen
            ? "transform -translate-x-0"
            : "transform -translate-x-full"
        } fixed top-0 left-0 h-[100dvh] max-w-[350px] bg-white font-poppins text-primary-text z-50 overflow-y-hidden transition-all duration-700 ease-in-out`}
      >hellodddddd</nav>
      </article>
  )
}

export default LeftNavbar
import React from 'react'

function Modal({children, openModal, setOpenModal}) {
  return (
    <div id='wrapper' onClick={(e) => e.target.id == "wrapper" ? setOpenModal(false) : ""}  className={`duration-300 fixed top-0 bottom-0 left-0 right-0 backdrop-blur flex items-center justify-center ${openModal ? "scale-1" : "scale-0"}`}>
        <div className=' w-full px-6 max-w-[400px]'>
            {children}
        </div>
    </div>
  )
}

export default Modal

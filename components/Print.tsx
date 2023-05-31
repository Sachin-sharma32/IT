import React from 'react'

const Print = () => {
  return (
    <button
    className="cursor-none print:hidden  bg-gray-500 text-white px-4 py-1 rounded-lg border-2 border-gray-500 hover:bg-white hover:text-black transition-all duration-300 absolute top-[45vh] right-4"
    onClick={() => {
      window.print();
    }}
  >
    PRINT
  </button>
  )
}

export default Print
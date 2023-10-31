import React from 'react'

const Header = ({toDelete, handleDelete}) => {
  return (
    <div className="w-full h-full flex border-b-4 p-4 justify-between ">
        
        {
          toDelete > 0 ? 
          <div className="flex">
            <input type="checkbox" className="accent-yellow-200" checked/>
            <p className="mx-4 text-black font-bold">{toDelete} Items Selected</p>
          </div>: 
          <h1 className=" font-bold text-black"> Gallery </h1>
        }

        {
          toDelete > 0 && <button className="text-red-600 font bold "
          onClick={handleDelete}
          > Delete Selected </button>
        }
      </div>
  )
}

export default Header
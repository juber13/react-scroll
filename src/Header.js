import React from 'react'

const Header = () => {
    return (
        <div className='flex w-full justify-between p-3'>
            <div className="left">GeekImages</div>
            <div className="search-bar">
                <input type="text" placeholder='Search...'  className='border p-2 focus:outline-none'/>
                <button className='p-2 border border-red-200'>Search</button>
            </div>
        </div>
    )
}

export default Header
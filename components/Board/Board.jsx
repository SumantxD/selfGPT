import React, { useState } from 'react'
import { MoreHorizontal } from 'react-feather'
import Card from '../Card/Card'
import Editable from '../Editable/Editable'
import Dropdown from '../Dropdown/Dropdown'

const Board = () => {

    const [showDropdown, setShowDropdown] = useState(false)


  return (
    <>
        <div className=' min-w-[290px] flex flex-col gap-[20px] bg-red-100 max-h-full h-full'>
            {/* board_top */}
            <div className=' flex'>
                {/* board_top_title */}
                <p className=' flex-1 flex align-middle'>
                    To Do{' '}<span className=' text-slate-700'>2</span> 
                </p>

                {/* div_top_more */}
                <div className='relative text-black' onClick={()=>setShowDropdown(true)}>
                    <MoreHorizontal/>
                    {
                        showDropdown && 
                    
                        <Dropdown
                            // onClose = {()=>setShowDropdown(false)}
                        >
                            {/* board_dropdown */}
                            <div>
                                <p>Delete Board</p>
                            </div>
                        </Dropdown>
                    }
                </div>

            </div>
            {/* board_cards */}
            <div className=' bg-[#f8f8f8] flex flex-col gap-[10px] p-[10px] border-b-[10px] overflow-y-auto h-full flex-1 scrollbar'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Editable
                    text = "Add Card"
                    placeholder = "Enter Card Title"
                />
            </div>
        </div>
    </>
  )
}
  
export default Board
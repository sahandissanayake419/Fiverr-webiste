import React from 'react'

const Card = ({image,title,text,onClick}) => {
    return (

      <div 
      className="w-[372px] h-[372px] p-6 bg-gray-50 rounded-[26px] shadow border-2 border-neutral-300 flex-col justify-end items-start gap-3 inline-flex" 
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
      >
        <img src="" alt="" />
        <div className="flex flex-col justify-start items-start gap-2">
        <h2 className="text-black text-[32px] font-medium mb-[4px]">{title}</h2>
        <p className="mt-2">{text}</p>
        </div>

      </div>
    )
  }

export default Card
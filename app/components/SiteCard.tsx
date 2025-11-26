"use client"
import React from 'react'
interface SiteCardProps {
    id:string|number;
    name?:string;
    location?:string;
    status?:string;
    onClick?: ()=>void;
    isAddCard?:boolean;

}

const SiteCard:React.FC<SiteCardProps>=({
    id,
    name,
    location,
    status,
    onClick,
    isAddCard=false
})=>{
    if(isAddCard){
        return(
             <div
        className="p-6 bg-green-100 border border-green-600 rounded-xl shadow cursor-pointer flex items-center justify-center text-green-700 font-semibold text-xl"
        onClick={onClick}
      >
        + Add New Site
      </div>
        )
}

return(
    <div className="p-6 bg-white border border-gray-300 rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer">
      <h3 className="text-xl font-bold mb-2">Name:{name}</h3>
      <p className="text-gray-600 mb-1">Location: {location}</p>
      <p className="text-gray-600">Status: {status}</p>
    </div>
)
}


export default SiteCard;
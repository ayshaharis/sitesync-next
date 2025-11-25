import SiteCard from "./SiteCard";
import React from 'react'
interface sites{
    id:string|number;
    name?:string;
    location?:string;
    status?:string;
}
interface SiteGridProps{
    sites:sites[];
    onAddNewSite:()=>void;

}
const SiteGrid:React.FC<SiteGridProps>=({sites,onAddNewSite})=>{


    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">

           <SiteCard id="add" name="Add New Site" onClick={onAddNewSite} isAddCard={true}/>
        {(sites||[]).map((site,key)=>(
            <SiteCard
            key={site.id}
            id={site.id}
            name={site.name}
            location={site.location}
            status={site.status}
            isAddCard={false}/>
        ))}

        </div>
     
    )
}
    export default SiteGrid
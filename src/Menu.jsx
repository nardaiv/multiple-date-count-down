import React from "react";

export default function Menu(props){
   //styling the selected and unselected menus
   const selectedMenu = `text-white bg-mainblue font-bold  rounded-lg w-6/12 text-center text-[24px] ` 
   const unSelectedMenu = `text-faintblack rounded-lg w-6/12 text-center text-[24px] ` 

    return (
       <div className="w-100  bg-grey rounded-lg w-12/12 border-2 border-darkgrey flex flex-row p-3 justify-between">
        
        <div className={selectedMenu} onClick={()=>props.changeSelected('SNBP')}>SNBP</div>

        <div className={unSelectedMenu} onClick={()=>props.changeSelected('SNBT')}>SNBT</div>

       </div> 
    )
}
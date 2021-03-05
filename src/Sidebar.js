import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import SidebarOption from './SidebarOption'
function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
               <div className="sidebar__info">
                <h2>Nader Elhaj</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Nader Elhaj
                </h3>
               </div>
               <CreateIcon />
           </div> 
           <SidebarOption Icon ={InsertCommentIcon} title ="Threads" />
           <SidebarOption  title ="Youtube" />
        </div>
    )
}

export default Sidebar

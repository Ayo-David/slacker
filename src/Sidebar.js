import { Apps, BookmarkBorder, Create, Drafts, ExpandLess, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';


const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>SchoolShell</h2>
                    <h3>
                        <FiberManualRecord />
                        Ayo David
                    </h3>
                </div>
                <Create />
            </div>
            <SidebarOption Icon={InsertComment} title="Home" />
            <SidebarOption Icon={Inbox} title="Home" />
            <SidebarOption Icon={Drafts} title="Home" />
            <SidebarOption Icon={BookmarkBorder} title="Home" />
            <SidebarOption Icon={PeopleAlt} title="Home" />
            <SidebarOption Icon={Apps} title="Home" />
            <SidebarOption Icon={FileCopy} title="Home" />
            <SidebarOption Icon={ExpandLess} title="Youtube" />
        </div>
    );
}

export default Sidebar;

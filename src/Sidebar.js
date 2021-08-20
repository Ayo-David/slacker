import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import db from './firebase';
import './Sidebar.css';
import SidebarOption from './SidebarOption';


const Sidebar = (props) => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {

        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
            })))
        ))
    }, []);

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
            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={Drafts} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
            <SidebarOption Icon={PeopleAlt} title="People & user groups" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File Browser" />
            <hr />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channelless" />
            <hr />
            <SidebarOption Icon={Add} title="Add Channel" addChannelOption={true} />
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}

        </div>
    );
}

export default Sidebar;

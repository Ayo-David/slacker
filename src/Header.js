import { Avatar } from '@material-ui/core';
import { AccessTime, HelpOutline, Search } from '@material-ui/icons';
import React from 'react';
import './Header.css';
import { useDataLayer } from './StateProvider';

const Header = (props) => {
    const [{ user }] = useDataLayer();
    // const user = {
    //     displayName: "AyoDavid",
    //     photoURL: "https://"
    // }
    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTime />

            </div>
            <div className="header__search">
                <Search />
                <input placeholder="Search here" />
            </div>
            <div className="header__right">
                <HelpOutline />


            </div>
            
        </div>
    );
}

export default Header;

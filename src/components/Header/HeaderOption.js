import { Avatar } from '@material-ui/core';
import React from 'react';
import "./HeaderOption.css"


export default function HeaderOption({ avatar, Icon, title, onClick }) {


    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar className="headerOption__icon"> ⬇
                </Avatar>
            )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/userSlice";
import './Sidebar.css'

export default function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    ) 

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C5616AQGpDv5aibcW1w/profile-displaybackgroundimage-shrink_350_1400/0/1552852295802?e=1616025600&v=beta&t=N5r1gZG89SHBYq__9Zcsnk1qVQuyE11Em-ahSpWz78o" alt="background" />
                <Avatar src={user.photoUrl} className="sidebar__avatar"> 
                {user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                <p>Who viewed your profile</p>
                <p className="sidebar__statNumber">126</p>
                </div>
                <div className="sidebar__stat">
                <p>Views of your post</p>
                <p className="sidebar__statNumber">67</p>
                </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('programming')}
                {recentItem('jobs')}
                {recentItem('fintech')}
                {recentItem('spaceX')}
                {recentItem('MongoDB')}
                <h4>Followed Hastags</h4>
                {recentItem('nodejs')}
                {recentItem('reactjs')}
                {recentItem('developer')}
                {recentItem('business')}
                {recentItem('tech')}
            </div>
        </div>
    )
}
